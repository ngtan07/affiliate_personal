import { useState } from 'react';
import { useCardActions } from '../../../hooks/useCardActions';
import CheckoutModal from './CheckoutModal';

const TemplateInformation = ({ template }) => {

    const { handleCopy, handleShare, isCopied } = useCardActions(template, true);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    return (
        <>
            {/* Title */}
            <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-on-surface leading-tight">
                    {template.templateName}
                </h1>
            </div>

            {/* Pricing */}
            <div className="mb-4 flex items-baseline gap-4">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                    {template.price ? `${template.price.toLocaleString('vi-VN')} VND` : 'Miễn phí'}
                </span>
                {template.originalPrice && template.originalPrice > template.price && (
                    <span className="text-lg md:text-xl text-outline line-through">
                        {template.originalPrice.toLocaleString('vi-VN')} VND
                    </span>
                )}
            </div>

            {template.description && (
                <p className="text-on-surface-variant text-base leading-relaxed mb-7  italic">
                    {template.description}
                </p>
            )}

            {template?.useCases && template?.useCases.length > 0 && (
                <div className="mb-8" data-purpose="value-props">
                    <div className="flex items-center mb-5">
                        <div
                            className="relative inline-flex items-center pl-3 pr-7 py-1.5 bg-primary text-white text-[11px] font-bold uppercase tracking-widest shadow-sm"
                            style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%)' }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest mr-2 shadow-inner"></span>
                            Template này dành cho
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-outline-variant to-transparent ml-1"></div>
                    </div>

                    <div className="space-y-3">
                        {template?.useCases?.map((uc, index) => (
                            <div
                                key={index}
                                className="flex items-start"
                            >
                                <span className="material-symbols-outlined w-5 h-5 mr-3 mt-0.5 text-primary flex items-center justify-center text-[14px] shrink-0">
                                    person_check
                                </span>
                                <span className="text-on-surface-variant leading-relaxed">
                                    {uc}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            )
            }

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mb-4">
                <button onClick={() => setIsCheckoutOpen(true)}
                    className="flex-1 bg-primary text-white font-bold py-3.5 px-6 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 uppercase text-sm tracking-wide shadow-md cursor-pointer h-[52px]">
                    <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                    Mua ngay
                </button>

                <button
                    onClick={handleShare}
                    title="Chia sẻ"
                    className="w-[52px] h-[52px] rounded-xl bg-surface-container-high text-primary flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer shrink-0 shadow-sm"
                >
                    <span className="material-symbols-outlined text-[20px]">share</span>
                </button>

                <button
                    onClick={handleCopy}
                    title="Sao chép link"
                    className="w-[52px] h-[52px] rounded-xl bg-surface-container-high text-primary flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer shrink-0 shadow-sm"
                >
                    <span className="material-symbols-outlined text-[20px]">{isCopied ? 'check' : 'content_copy'}</span>
                </button>
            </div>

            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                template={template}
            />
        </>
    )
}

export default TemplateInformation
