import { motion } from 'framer-motion';
import LeftPinnedCard from './LeftPinnedCard'
import RightTopPinnedCard from './RightTopPinnedCard'
import RightBottomPinnedCard from './RightBottomPinnedCard'
import { createGridVariants, createBlockReveal, createFadeIn } from '../../../utils/animations';


const productPinned = [
    {
        "productId": 1,
        "productSlug": "son-romand-glasting-water-tint",
        "productName": "Son Romand Glasting Water Tint",
        "imageUrl": "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mlwyt6x7ruv494@resize_w900_nl.webp",
        "affiliateLink": "https://shopee.vn/Son-Tint-B%C3%B3ng-Si%C3%AAu-L%C3%AC-C%C4%83ng-M%E1%BB%8Dng-M%C3%B4i-Romand-Glasting-Water-Tint-%C4%90a-D%E1%BA%A1ng-M%C3%A0u-S%E1%BA%AFc-i.227341977.42609412940?extraParams=%7B%22display_model_id%22%3A290787649185%2C%22model_selection_logic%22%3A3%7D&rModelId=290787649185&sp_atk=d4e8b5e3-751c-4e3e-8640-da8e6eafdff7&vItemId=43571401666&vModelId=261746763408&vShopId=1506174776&xptdk=d4e8b5e3-751c-4e3e-8640-da8e6eafdff7",
        "platform": "Shopee",
        "categoryName": "Beauty & Skincare",
        "review": "Màu 04 siêu tôn da, đánh lên môi căng mọng như ngậm nước, cực hợp cho vibe Clean Girl.",
        "productLabel": "must-have"
    },
    {
        "productId": 2,
        "productSlug": "ao-blazer-oversize-minimalist",
        "productName": "Áo Blazer Oversize Minimalist",
        "imageUrl": "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqyepcqy8dl089.webp",
        "affiliateLink": "https://shopee.vn/-trc-T%E1%BA%BFt-%C3%81o-kho%C3%A1c-blazer-x%C3%A1m-d%C3%A1ng-oversize-cao-c%E1%BA%A5p-phong-c%C3%A1ch-H%C3%A0n-Qu%E1%BB%91c-Chaiko-Studio-i.21714915.24152807734?extraParams=%7B%22display_model_id%22%3A253092449020%2C%22model_selection_logic%22%3A3%7D&sp_atk=f5cbdc2e-18dc-4f8e-a7b9-eb247aa39378&xptdk=f5cbdc2e-18dc-4f8e-a7b9-eb247aa39378",
        "platform": "Shopee",
        "categoryName": "fashion",
        "review": "Form đứng, vải không nhăn. Một item must-have trong tủ đồ nếu bạn thích phong cách thanh lịch.",
        "productLabel": "trending"
    },
    {
        "productId": 3,
        "productSlug": "nen-thom-go-thong-sandalwood",
        "productName": "Nến thơm gỗ thông Sandalwood",
        "imageUrl": "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m7gq9538ke6w66.webp",
        "affiliateLink": "https://shopee.vn/N%E1%BA%BFn-Th%C6%A1m-Th%C3%B4ng-%C4%90i%E1%BB%87p-%E1%BA%A8n-Theo-Y%C3%AAu-C%E1%BA%A7u-Set-Qu%C3%A0-T%E1%BA%B7ng-N%E1%BA%BFn-Th%C6%A1m-T%E1%BA%B7ng-Ng%C6%B0%E1%BB%9Di-Y%C3%AAu-B%E1%BA%A1n-B%C3%A8-%C4%90%E1%BB%93ng-nghi%E1%BB%87p-i.1296990307.26759091804?extraParams=%7B%22display_model_id%22%3A188747728683%2C%22model_selection_logic%22%3A3%7D&sp_atk=c41a07de-bd13-422e-bb5a-939aada3aeb0&xptdk=c41a07de-bd13-422e-bb5a-939aada3aeb0",
        "platform": "Tiktok",
        "categoryName": "lifestyle",
        "review": "Mùi gỗ trầm ấm, cực kỳ thư giãn cho những buổi tối đọc sách một mình.",
        "productLabel": "holy grail"
    }
]


const PinnedProduct = () => {
    return (
        <section id="pinned-section" className="mt-16 mb-12">
            <motion.div
                variants={createGridVariants()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="w-full"
            >
                <motion.div
                    variants={createFadeIn('right', 20, 0.8)}
                    className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>push_pin</span>
                    <h2 className="text-xl font-bold tracking-tight">Pinned by Alice</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">

                    {/* Large Pinned Card */}
                    <motion.div
                        variants={createBlockReveal(50, 0.8)}
                        className="md:col-span-2 md:row-span-2 h-full flex flex-col [&>div]:flex-grow">
                        <LeftPinnedCard
                            product1={productPinned[0]}
                        />
                    </motion.div>

                    {/* Small Pinned Card 1 */}
                    <motion.div
                        variants={createBlockReveal(50, 0.8)}
                        className="md:col-span-2 h-full flex flex-col [&>div]:flex-grow">
                        <RightTopPinnedCard
                            product2={productPinned[1]}
                        />
                    </motion.div>

                    {/* Small Pinned Card 2 */}
                    <motion.div
                        variants={createBlockReveal(50, 0.8)}
                        className="md:col-span-2 h-full flex flex-col [&>div]:flex-grow">
                        <RightBottomPinnedCard
                            product3={productPinned[2]}
                        />
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}

export default PinnedProduct
