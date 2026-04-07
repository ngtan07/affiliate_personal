import React from 'react'
import { useParams } from 'react-router-dom'
import { useCardActions } from "../../../hooks/useCardActions";
import { PLATFORM_UI_CONFIG } from '../../../config/constants';

const product = {
    "productId": 1,
    "productSlug": "son-romand-glasting-water-tint",
    "productName": "Son Romand Glasting Water Tint",
    "imageUrl": "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mlwyt6x7ruv494@resize_w900_nl.webp",
    "affiliateLink": "https://shopee.vn/Son-Tint-B%C3%B3ng-Si%C3%AAu-L%C3%AC-C%C4%83ng-M%E1%BB%8Dng-M%C3%B4i-Romand-Glasting-Water-Tint-%C4%90a-D%E1%BA%A1ng-M%C3%A0u-S%E1%BA%AFc-i.227341977.42609412940?extraParams=%7B%22display_model_id%22%3A290787649185%2C%22model_selection_logic%22%3A3%7D&rModelId=290787649185&sp_atk=d4e8b5e3-751c-4e3e-8640-da8e6eafdff7&vItemId=43571401666&vModelId=261746763408&vShopId=1506174776&xptdk=d4e8b5e3-751c-4e3e-8640-da8e6eafdff7",
    "platform": "Shopee",
    "categoryName": "Beauty & Skincare",
    "review": "Màu 04 siêu tôn da, đánh lên môi căng mọng như ngậm nước, cực hợp cho vibe Clean Girl.",
    "productLabel": "must-have"
}

const ProductDetailCard = () => {
    const { productSlug } = useParams()
    const { handleCopy, handleShare, isCopied } = useCardActions(product);

    const config = PLATFORM_UI_CONFIG[product.platform.toUpperCase()] || { name: product.platform, textColor: '#727975' };

    return (
        <section className="mb-10">
            <div className="bg-surface-container-high rounded-lg overflow-hidden shadow-sm border border-outline-variant flex flex-col lg:flex-row gap-0 lg:h-[480px] max-w-5xl mx-auto group relative ">

                {/* Product Visuals */}
                <div className="lg:w-1/2 relative h-[400px] lg:h-full shrink-0 overflow-hidden">
                    <img
                        alt={product?.productName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={product?.imageUrl}
                    />
                </div>

                {/* Product Details */}
                <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
                    <div>
                        <div className="mb-6 relative">
                            {/* Vertical Accent Line */}
                            <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-primary/50 rounded-full"></div>

                            <div className="pl-5">
                                <div className="flex items-center gap-2 mb-2.5">
                                    <span
                                        className="text-[10px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-widest border"
                                        style={{
                                            borderColor: config.textColor,
                                            color: config.textColor,
                                            backgroundColor: 'transparent'
                                        }}
                                    >
                                        {config.name}
                                    </span>
                                    <span className="text-[10px] text-outline">•</span>
                                    <span className="text-[9px] font-semibold tracking-[0.2em] text-primary uppercase">
                                        {product?.productLabel ? product.productLabel : ''}
                                    </span>
                                </div>

                                <h2 className="text-2xl lg:text-3xl font-medium tracking-tight leading-snug text-on-surface mb-2">
                                    {product.productName}
                                </h2>
                            </div>
                        </div>

                        {/* Review Block */}
                        <p className="text-base md:text-lg text-on-surface-variant italic mb-6 leading-relaxed">
                            "{product.review}"
                        </p>

                        {/* Main Call to Action */}
                        <div className="mb-6">
                            <a
                                href={product.affiliateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full sm:w-auto px-8 py-3 bg-primary text-on-primary rounded-full font-bold items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-md"
                            >
                                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                                Chốt đơn
                            </a>
                        </div>
                    </div>

                    {/* Bottom Info & Actions Bar (Matches LeftPinnedCard) */}
                    <div className="mt-auto flex items-center justify-between gap-3 pt-6 border-t border-outline/10">
                        <div>
                            <span className="text-[12px] text-primary font-bold uppercase tracking-[0.2em]">
                                {product?.categoryName}
                            </span>
                        </div>

                        <div className="flex items-center justify-end gap-2">
                            <button
                                onClick={handleShare}
                                title="Chia sẻ"
                                className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-[18px]">share</span>
                            </button>

                            <button
                                onClick={handleCopy}
                                title="Sao chép link"
                                className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm text-primary flex items-center justify-center border border-primary/10 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-[18px]">{isCopied ? 'check' : 'content_copy'}</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductDetailCard
