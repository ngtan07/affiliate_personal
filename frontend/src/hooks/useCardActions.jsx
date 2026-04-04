import { useState } from 'react';

export const useCardActions = (product) => {
    const [isCopied, setIsCopied] = useState(false);

    // 1. Mở link Affiliate
    const handleCardClick = () => {
        if (product?.affiliateLink) {
            window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
        }
    };

    // 2. Copy Link kèm hiệu ứng State
    const handleCopy = (e) => {
        e.stopPropagation();
        if (product?.affiliateLink) {
            navigator.clipboard.writeText(product.affiliateLink);
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    };

    // 3. Native Share
    const handleShare = async (e) => {
        e.stopPropagation();
        if (navigator.share && product) {
            try {
                await navigator.share({
                    title: product.nameProduct,
                    text: product.review || `Xem ngay ${product.nameProduct} trên ${product.platform}`,
                    url: product.affiliateLink,
                });
            } catch (error) {
                console.log('Share bị hủy hoặc có lỗi');
            }
        } else {
            handleCopy(e);
        }
    };

    return { handleCardClick, handleCopy, handleShare, isCopied };
};