import { useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

const products = [
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
        "productId": 2,
        "productSlug": "ao-blazer-oversize-minimalist",
        "productName": "Áo Blazer Oversize Minimalist",
        "imageUrl": "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqyepcqy8dl089.webp",
        "affiliateLink": "https://shopee.vn/-trc-T%E1%BA%BFt-%C3%81o-kho%C3%A1c-blazer-x%C3%A1m-d%C3%A1ng-oversize-cao-c%E1%BA%A5p-phong-c%C3%A1ch-H%C3%A0n-Qu%E1%BB%91c-Chaiko-Studio-i.21714915.24152807734",
        "platform": "Shopee",
        "categoryName": "fashion",
        "review": "Form đứng, vải không nhăn. Một item must-have trong tủ đồ nếu bạn thích phong cách thanh lịch.",
        "productLabel": ""
    },
    {
        "productId": 3,
        "productSlug": "nen-thom-go-thong-sandalwood",
        "productName": "Nến thơm gỗ thông Sandalwood",
        "imageUrl": "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m7gq9538ke6w66.webp",
        "affiliateLink": "https://vt.tiktok.com/example3",
        "platform": "Tiktok",
        "categoryName": "lifestyle",
        "review": "Mùi gỗ trầm ấm, cực kỳ thư giãn cho những buổi tối đọc sách một mình.",
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
        "productId": 5,
        "productSlug": "tui-kep-nach-da-mem-pu",
        "productName": "Túi xách kẹp nách da mềm Minimal",
        "imageUrl": "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop",
        "affiliateLink": "https://vt.tiktok.com/example5",
        "platform": "Tiktok",
        "categoryName": "fashion",
        "review": "Dáng túi baguette basic, da mềm không gãy form. Phối với blazer hay váy lụa hai dây đều cực kỳ có gu.",
        "productLabel": ""
    },
    {
        "productId": 6,
        "productSlug": "loa-bluetooth-marshall-emberton",
        "productName": "Loa Bluetooth Marshall Emberton II",
        "imageUrl": "https://images.unsplash.com/photo-1581976488188-727746aea4a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9hJTIwYmx1ZXRvb3RofGVufDB8fDB8fHww",
        "affiliateLink": "https://s.lazada.vn/example6",
        "platform": "Lazada",
        "categoryName": "lifestyle",
        "review": "Chất âm thiên bass ấm áp. Thiết kế retro, đặt ở góc phòng làm đồ decor cực kỳ sang.",
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
        "productId": 8,
        "productSlug": "vay-lua-hai-day-co-do",
        "productName": "Váy lụa hai dây cổ đổ (Silk Slip Dress)",
        "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
        "affiliateLink": "https://vt.tiktok.com/example8",
        "platform": "Tiktok",
        "categoryName": "fashion",
        "review": "Chất lụa ngọc trai bóng mờ sang trọng, thiết kế ôm nhẹ vòng eo tôn dáng tuyệt đối. Mặc đi tiệc hay đi biển đều hợp.",
        "productLabel": ""
    },
    {
        "productId": 9,
        "productSlug": "coc-su-uong-cafe-matte",
        "productName": "Cốc sứ nhám phong cách Bắc Âu",
        "imageUrl": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop",
        "affiliateLink": "https://shopee.vn/example9",
        "platform": "Shopee",
        "categoryName": "lifestyle",
        "review": "Men sứ nhám cầm rất êm tay. Uống cafe buổi sáng bằng chiếc cốc này thấy góc làm việc chill hơn hẳn.",
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

const platforms = [
    { id: 'shopee', name: 'Shopee' },
    { id: 'tiktok', name: 'Tiktok' },
    { id: 'lazada', name: 'Lazada' }
]


// --- ANIMATION VARIANTS ---
const gridVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const blockReveal = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const textFadeUp = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Products = () => {

    const newPlatforms = [{ id: 'all', name: 'Tất cả' }, ...platforms]

    const initialPlaceholder = { id: 'placeholder', name: 'Nền tảng' };

    const [platSelected, setplatSelected] = useState(initialPlaceholder)

    return (
        <section className="mb-20">
            <motion.div
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05 }}
            >
                <motion.div variants={textFadeUp} className="flex items-center gap-2 my-6">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <h2 className="text-xl font-bold tracking-tight">Recommendations</h2>

                    <div className="flex gap-2 sm:ml-auto w-full sm:w-auto overflow-x-auto hide-scrollbar ">
                        <div className="relative shrink-0 min-w-50">
                            <Listbox value={platSelected} onChange={setplatSelected}>

                                <ListboxButton className="group appearance-none text-left pl-4 pr-10 py-2 bg-transparent border border-outline/30 rounded-full text-sm font-medium text-on-surface outline-none transition-all cursor-pointer w-full hover:bg-surface-variant/50 block data-[open]:border-primary data-[open]:ring-1 data-[open]:ring-primary data-[open]:ring-inset">
                                    <span className="block truncate">{platSelected.name}</span>
                                    <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none transition-transform duration-300 group-data-[open]:rotate-180" />

                                </ListboxButton>

                                <ListboxOptions
                                    anchor="bottom"
                                    transition
                                    className="w-[var(--button-width)] z-50 mt-1 rounded-2xl border border-outline/30 bg-surface p-1 shadow-lg outline-none transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                                >
                                    {newPlatforms.map(plat => (
                                        <ListboxOption
                                            key={plat.id}
                                            value={plat}
                                            className="cursor-pointer select-none rounded-xl px-4 py-2 text-sm text-on-surface transition-colors data-[focus]:bg-surface-variant/50"
                                        >
                                            <span className="block truncate">{plat.name}</span>
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </Listbox>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {products.map((p) => (
                        <motion.div key={`product-${p.productId || p.productSlug}`} variants={blockReveal} className="h-full flex flex-col [&>div]:flex-grow">
                            <ProductCard p={p} />
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={textFadeUp} className="mt-12 flex justify-center">
                    <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-on-primary shadow-sm hover:shadow-primary/30 transition-all cursor-pointer">
                        Load More Recommendations
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Products;
