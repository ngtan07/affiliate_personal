import { useCardActions } from '../../hooks/useCardActions'
import { useNavigate } from 'react-router-dom';

const TemplateCard = ({ template }) => {
    const { handleCopy, handleShare, isCopied } = useCardActions(template, true);
    const navigate = useNavigate()


    return (
        <div
            onClick={() => navigate(`/template/${template?.templateSlug}`)}
            className="group relative overflow-hidden rounded-[1.5rem] bg-white border border-outline-variant shadow-sm flex flex-col cursor-pointer hover:border-primary transition-colors h-full w-full"
        >
            {/* Image Section */}
            <div className="h-44 relative overflow-hidden bg-surface-container shrink-0">
                <img
                    src={template.thumbnailUrl}
                    alt={template.templateName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Format Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest shadow-md border border-outline-variant/30 text-on-surface">
                    {template.format}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 md:p-5 flex flex-col flex-grow">
                {/* Title and Accent */}
                <div className="mb-3 relative">
                    <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-primary/50 rounded-full"></div>

                    <div className="pl-3 md:pl-4">
                        <h3 className="text-[1.1rem] font-medium tracking-tight leading-snug text-on-surface line-clamp-2">
                            {template.templateName}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="text-xs text-on-surface-variant italic mb-4 line-clamp-2">
                    {template.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[1.1rem] font-bold text-primary">
                        {template.price.toLocaleString('vi-VN')}đ
                    </span>
                    {template.originalPrice && template.originalPrice > template.price && (
                        <span className="text-[10px] text-outline line-through">
                            {template.originalPrice.toLocaleString('vi-VN')}đ
                        </span>
                    )}
                </div>

                {/* Tags - Single Line with fade out */}
                <div className="flex flex-nowrap items-center gap-1.5 mb-5 overflow-hidden w-full relative">
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface-container-high to-transparent z-10 pointer-events-none"></div>
                    {template.tags.map((tag, index) => (
                        <span key={index} className="whitespace-nowrap shrink-0 text-[10px] bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full font-medium border border-outline/5">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Action Footer */}
                <div className="mt-auto border-t border-outline/10 pt-4 flex items-center justify-between gap-3">
                    <button className="flex-1 bg-primary/10 text-primary border border-primary/10 py-2 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-1 group-hover:shadow-sm">
                        <span className="text-xs">Xem chi tiết</span>
                        <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>

                    <div className="flex items-center justify-end gap-1.5 shrink-0">
                        <button
                            onClick={handleShare}
                            title="Chia sẻ"
                            className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-surface-container backdrop-blur-sm text-primary flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[18px] md:text-[15px]">share</span>
                        </button>

                        <button
                            onClick={handleCopy}
                            title="Sao chép link"
                            className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-surface-container backdrop-blur-sm text-primary flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[18px] md:text-[15px]">{isCopied ? 'check' : 'content_copy'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateCard