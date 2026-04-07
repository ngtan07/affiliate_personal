import { useState } from 'react';

export const useCardActions = (item, isTemplate = false) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCardClick = () => {
        if (item?.affiliateLink) {
            window.open(item.affiliateLink, '_blank', 'noopener,noreferrer');
        }
    };

    const getInternalUrl = () => {
        if (!item) return '';

        const routePrefix = isTemplate ? 'template' : 'product';
        const slug = item[`${routePrefix}Slug`] || item[`${routePrefix}Id`];;

        return `${window.location.origin}/${routePrefix}/${slug}`;
    };

    const itemName = item?.templateName || item?.productName || 'Product';
    const itemDesc = item?.review || item?.description || `Description`;

    const handleCopy = (e) => {
        e.stopPropagation();
        const internalUrl = getInternalUrl();

        if (internalUrl) {
            navigator.clipboard.writeText(internalUrl);
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    };

    const handleShare = async (e) => {
        e.stopPropagation();
        const internalUrl = getInternalUrl();

        if (navigator.share && item) {
            try {
                await navigator.share({
                    title: itemName,
                    text: itemDesc,
                    url: internalUrl,
                });
            } catch (error) {
                console.log('Error share');
            }
        } else {
            handleCopy(e);
        }
    };

    return { handleCardClick, handleCopy, handleShare, isCopied };
};