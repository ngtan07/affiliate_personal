
import { Link } from 'react-router-dom';
import UserLayout from '../../components/layout/UserLayout';
import ProductDetailCard from '../../components/domain/ProductDetail/ProductDetailCard';
import ProductCard from '../../components/common/ProductCard';
import { motion } from "framer-motion";
import { createGridVariants, createFadeIn } from '../../utils/animations';
import SuggestItem from '../../components/common/SuggestItem';

const productsCategory = [
    {
        "productId": 1,
        "productSlug": "son-romand-glasting-water-tint",
        "productName": "Son Romand Glasting Water Tint",
        "imageUrl": "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mlwyt6x7ruv494@resize_w900_nl.webp",
        "affiliateLink": "https://shopee.vn/Son-Tint-B%C3%B3ng-Si%C3%AAu-L%C3%AC-C%C4%83ng-M%E1%BB%8Dng-M%C3%B4i-Romand-Glasting-Water-Tint-%C4%90a-D%E1%BA%A1ng-M%C3%A0u-S%E1%BA%AFc-i.227341977.42609412940",
        "platform": "Shopee",
        "categoryName": "Beauty & Skincare",
        "review": "Màu 04 siêu tôn da, đánh lên môi căng mọng như ngậm nước, cực hợp cho vibe Clean Girl.",
        "productLabel": ""
    },
    {
        "productId": 4,
        "productSlug": "phan-nuoc-clio-kill-cover",
        "productName": "Phấn nước Clio Kill Cover Mesh Glow",
        "imageUrl": "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop",
        "affiliateLink": "https://shopee.vn/example4",
        "platform": "Shopee",
        "categoryName": "Beauty & Skincare",
        "review": "Lớp nền mỏng nhẹ, độ che phủ tốt nhưng vẫn giữ được độ glowy tự nhiên cho da. Packaging màu hồng pastel siêu xinh.",
        "productLabel": ""
    },
    {
        "productId": 7,
        "productSlug": "bang-mat-romand-better-than-palette",
        "productName": "Bảng mắt Romand Better Than Palette",
        "imageUrl": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
        "affiliateLink": "https://shopee.vn/example7",
        "platform": "Shopee",
        "categoryName": "Beauty & Skincare",
        "review": "Tone nâu trà sữa siêu dễ dùng cho newbie. Hạt phấn mịn, ô nhũ bắt sáng cực tốt cho những buổi tiệc tối.",
        "productLabel": ""
    },
    {
        "productId": 10,
        "productSlug": "nuoc-hoa-maison-margiela-lazy-sunday",
        "productName": "Nước hoa Maison Margiela Lazy Sunday",
        "imageUrl": "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
        "affiliateLink": "https://s.lazada.vn/example10",
        "platform": "Lazada",
        "categoryName": "Beauty & Skincare",
        "review": "Mùi hương của sự lười biếng một buổi sáng Chủ nhật, có cảm giác cuộn tròn trong chiếc chăn bông trắng muốt vừa mới giặt.",
        "productLabel": ""
    }
];


const ProductDetail = () => {

    const message = <>Xem thêm nhiều đồ xinh iu nữa 👉
        <span className="inline-grid text-center">
            <Link
                to='/'
                className="col-start-1 row-start-1 underline decoration-primary decoration-1 underline-offset-4 hover:font-bold transition-all"
            >
                ở đây
            </Link>

            <span className="col-start-1 row-start-1 font-bold invisible pointer-events-none">
                ở đây
            </span>
        </span>
        {' '}nè</>

    return (
        <UserLayout message={message}>
            <motion.div
                variants={createGridVariants(0.15)}
                initial="hidden"
                animate="show"
            >
                <motion.h1 variants={createFadeIn('right', 20, 1)} className="text-4xl font-serif italic font-light tracking-normal drop-shadow-sm inline-block text-primary mb-8">Alice de N.</motion.h1>

                <motion.div variants={createFadeIn('up', 30, 1)}>
                    <ProductDetailCard />
                </motion.div>

                <motion.div variants={createFadeIn('up', 20, 0.8)}>
                    <Link to="/"
                        className="flex text-center items-center justify-center px-3 md:px-6 py-3 mb-10 gap-2 w-88 md:w-96 mx-auto bg-white border border-outline-variant hover:border-primary text-primary font-semibold rounded-full transition-all active:scale-95" href="/">
                        <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">auto_awesome</span>
                        Khám phá thêm góc nhỏ của Alice
                    </Link>
                </motion.div>

                <SuggestItem
                    items={productsCategory}
                    renderItem={(p) => <ProductCard key={p.productId} p={p} />}
                />
            </motion.div>
        </UserLayout>

    );
};

export default ProductDetail;