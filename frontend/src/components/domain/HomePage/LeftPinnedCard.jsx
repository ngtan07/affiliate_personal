import { useCardActions } from "../../../hooks/useCardActions";




const LeftPinnedCard = ({ product1, colorPlatform }) => {
    const platformObj = colorPlatform?.find(p => p.id === product1?.platform?.toLowerCase());

    const { handleCardClick, handleCopy, handleShare, isCopied } = useCardActions(product1);

    return (
        <div
            onClick={handleCardClick}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant shadow-sm flex flex-col cursor-pointer hover:border-primary transition-colors"
        >
            <div className="h-64 relative overflow-hidden shrink-0">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product1?.imageUrl}
                    alt={product1?.productSlug}
                />
            </div>

            <div className="p-5 flex-grow flex flex-col">
                <div className="mb-4 relative">

                    <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-primary/50 rounded-full"></div>

                    <div className="pl-4">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span
                                className="text-[9px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-widest border"
                                style={{
                                    borderColor: platformObj ? platformObj.textColor : '#ccc',
                                    color: platformObj ? platformObj.textColor : '#666',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                {platformObj ? platformObj.name : product1?.platform}
                            </span>
                            <span className="text-[10px] text-outline">•</span>
                            <span className="text-[9px] font-semibold tracking-[0.2em] text-primary uppercase">
                                {product1?.productLabel ? product1.productLabel : ''}
                            </span>
                        </div>

                        <h3 className="text-xl md:text-[1.35rem] font-medium tracking-tight leading-snug text-on-surface line-clamp-2">
                            {product1?.productName}
                        </h3>
                    </div>
                </div>

                <p className="text-sm text-on-surface-variant italic mb-3 line-clamp-2">{`"${product1?.review}"`}</p>


                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-outline/10">

                    <div>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">
                            {product1?.categoryName}
                        </span>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                        <button
                            onClick={handleShare}
                            title="Chia sẻ"
                            className="w-9 h-9 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md"
                        >
                            <span className="material-symbols-outlined text-[17px]">share</span>
                        </button>

                        <button
                            onClick={handleCopy}
                            title="Sao chép link"
                            className="w-9 h-9 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md"
                        >
                            <span className="material-symbols-outlined text-[17px]">{isCopied ? 'check' : 'content_copy'}</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftPinnedCard
