import { useCardActions } from "../../../hooks/useCardActions";
import { PLATFORM_UI_CONFIG } from '../../../config/constants';

const RightTopPinnedCard = ({ product2 }) => {
    const config = PLATFORM_UI_CONFIG[product2.platform.toUpperCase()] || { id: product2.platform.toLowerCase(), name: product2.platform, textColor: '#727975' };
    const { handleCardClick, handleCopy, handleShare, isCopied } = useCardActions(product2);

    return (
        <div
            onClick={handleCardClick}
            className="md:col-span-2 group relative overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant shadow-sm flex cursor-pointer hover:border-primary transition-colors"
        >
            <div className="w-1/3 relative overflow-hidden shrink-0">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product2?.imageUrl}
                    alt={product2?.productSlug}
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
                                        borderColor: config.textColor,
                                        color: config.textColor,
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    {config.name}
                                </span>
                                <span className="text-[10px] text-outline hidden sm:inline-block">•</span>
                                <span className="text-[8px] md:text-[9px] font-semibold tracking-[0.2em] text-primary uppercase hidden sm:inline-block">
                                    {product2?.productLabel ? product2.productLabel : ''}
                                </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-medium tracking-tight leading-snug text-on-surface line-clamp-2">
                                {product2?.productName}
                            </h3>
                        </div>
                    </div>

                    <p className="text-xs text-on-surface-variant italic line-clamp-2">"{product2?.review}"</p>
                </div>

                {/* Footer card */}
                <div className="mt-3 flex items-center justify-between gap-3 pt-3 border-t border-outline/10">
                    <div>
                        <span className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-[0.2em]">
                            {product2?.categoryName || 'Sản phẩm'}
                        </span>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                        <button
                            onClick={handleShare}
                            title="Chia sẻ"
                            className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer flex-shrink-0"
                        >
                            <span className="material-symbols-outlined text-[18px] md:text-[17px]">share</span>
                        </button>

                        <button
                            onClick={handleCopy}
                            title="Sao chép link"
                            className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer flex-shrink-0"
                        >
                            <span className="material-symbols-outlined text-[18px] md:text-[17px]">{isCopied ? 'check' : 'content_copy'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightTopPinnedCard;
