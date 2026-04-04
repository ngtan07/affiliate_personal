import React from 'react';
import { useCardActions } from "../../../hooks/useCardActions";

const colorPlatform = [
    { id: "shopee", name: "Shopee", textColor: "#EE4D2D" },
    { id: "tiktok", name: "TikTok", textColor: "#111111" },
    { id: "lazada", name: "Lazada", textColor: "#F60F91" },
];

const ProductCard = ({ p }) => {
    const { handleCardClick, handleCopy, handleShare, isCopied } = useCardActions(p);
    const platformObj = colorPlatform.find(plat => plat.id === p?.platform?.toLowerCase());

    return (
        <div
            onClick={handleCardClick}
            className="group relative overflow-hidden rounded-[1.5rem] bg-surface-container-high border border-outline-variant shadow-sm flex flex-col cursor-pointer hover:border-primary transition-colors h-full"
        >
            <div className="h-56 relative overflow-hidden bg-surface-container shrink-0">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={p.imageUrl}
                    alt={p.productName}
                />

                <div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest shadow-md border"
                    style={{
                        color: platformObj ? platformObj.textColor : '#3f3f46',
                        borderColor: platformObj ? `${platformObj.textColor}40` : '#e4e4e7'
                    }}
                >
                    {platformObj ? platformObj.name : p.platform}
                </div>
            </div>

            <div className="p-4 md:p-5 flex flex-col flex-grow">
                <div className="mb-3 relative">
                    <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-primary/50 rounded-full"></div>

                    <div className="pl-3 md:pl-4">
                        {p.productLabel && (
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[9px] font-semibold tracking-[0.2em] text-primary uppercase">
                                    {p.productLabel}
                                </span>
                            </div>
                        )}

                        <h3 className="text-[1.1rem] md:text-lg font-medium tracking-tight leading-snug text-on-surface line-clamp-2">
                            {p.productName}
                        </h3>
                    </div>
                </div>

                <p className="text-xs text-on-surface-variant italic mb-4 line-clamp-2">"{p.review}"</p>

                {/* Card Footer */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-outline/10">
                    <div>
                        <span className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-[0.2em]">
                            {p.categoryName || 'Sản phẩm'}
                        </span>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                        <button
                            onClick={handleShare}
                            title="Chia sẻ"
                            className="w-8 h-8 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-sm"
                        >
                            <span className="material-symbols-outlined text-[15px]">share</span>
                        </button>

                        <button
                            onClick={handleCopy}
                            title="Sao chép link"
                            className="w-8 h-8 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-sm"
                        >
                            <span className="material-symbols-outlined text-[15px]">{isCopied ? 'check' : 'content_copy'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
