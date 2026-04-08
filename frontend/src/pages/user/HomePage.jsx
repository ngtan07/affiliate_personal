import Instruction from '../../components/domain/HomePage/Instruction'
import SearchSection from '../../components/common/SearchSection'
import PinnedProduct from '../../components/domain/HomePage/PinnedProduct'
import Products from '../../components/domain/HomePage/Products'
import UserLayout from '../../components/layout/UserLayout'
import Templates from '../../components/domain/HomePage/Templates'



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
        "categoryName": "Fashion",
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
        "categoryName": "Lifestyle",
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
        "categoryName": "Fashion",
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
        "categoryName": "Lifestyle",
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
        "categoryName": "Fashion",
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
        "categoryName": "Lifestyle",
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

const HomePage = () => {

    const hasProducts = products.length > 0;

    const message = hasProducts ? (
        <>
            Cảm ơn bạn đã lướt đến tận đây! 💓 <br className="sm:hidden" />
            Chờ mình cập nhật thêm nhiều sản phẩm xịn xò nhé! ✨
        </>
    ) : (
        <>Chờ mình cập nhật thêm nhiều sản phẩm xịn xò nhé! ✨</>
    );



    return (
        <UserLayout message={message}>

            <Instruction />
            <PinnedProduct />

            <div className="flex w-full justify-end mb-3">
                <SearchSection />
            </div>

            <Templates />

            <Products products={products} />

        </UserLayout>
    )
}

export default HomePage
