import { useCardActions } from "../../../hooks/useCardActions";

const RightBottomPinnedCard = ({ product3, colorPlatform }) => {
    const platformObj = colorPlatform?.find(p => p.id === product3?.platform?.toLowerCase());
    const { handleCardClick, handleCopy, handleShare, isCopied } = useCardActions(product3);

    console.log(product3)

    return (
        <div
            onClick={handleCardClick}
            className="md:col-span-2 group relative overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant shadow-sm flex cursor-pointer hover:border-primary transition-colors"
        >
            <div className="w-1/3 relative overflow-hidden shrink-0">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product3?.imageUrl}
                    alt={product3?.productSlug}
                />
            </div>

            <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <div className="mb-3 relative">
                        <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-primary/50 rounded-full"></div>

                        <div className="pl-3 md:pl-4">
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                <span
                                    className="text-[8px] md:text-[9px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-widest border"
                                    style={{
                                        borderColor: platformObj ? platformObj.textColor : '#ccc',
                                        color: platformObj ? platformObj.textColor : '#666',
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    {platformObj ? platformObj.name : product3?.platform}
                                </span>
                                <span className="text-[10px] text-outline hidden sm:inline-block">•</span>
                                <span className="text-[8px] md:text-[9px] font-semibold tracking-[0.2em] text-primary uppercase hidden sm:inline-block">
                                    {product3?.productLabel ? product3.productLabel : ''}
                                </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-medium tracking-tight leading-snug text-on-surface line-clamp-2">
                                {product3?.productName}
                            </h3>
                        </div>
                    </div>

                    <p className="text-xs text-on-surface-variant italic line-clamp-2">"{product3?.review}"</p>
                </div>

                {/* Footer card */}
                <div className="mt-3 flex items-center justify-between gap-3 pt-3 border-t border-outline/10">
                    <div>
                        <span className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-[0.2em]">
                            {product3?.categoryName || 'Sản phẩm'}
                        </span>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                        <button
                            onClick={handleShare}
                            title="Chia sẻ"
                            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md"
                        >
                            <span className="material-symbols-outlined text-[15px] md:text-[17px]">share</span>
                        </button>

                        <button
                            onClick={handleCopy}
                            title="Sao chép link"
                            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md"
                        >
                            <span className="material-symbols-outlined text-[15px] md:text-[17px]">{isCopied ? 'check' : 'content_copy'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBottomPinnedCard;
