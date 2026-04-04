import { useEffect, useState, useRef } from 'react'

const categories = [
    { categoryId: 'beauty', categoryName: 'Beauty & Skincare' },
    { categoryId: 'fashion', categoryName: 'Fashion' },
    { categoryId: 'lifestyle', categoryName: 'Lifestyle' }
]

const SearchSection = () => {

    const newCategories = [{ categoryId: 'all', categoryName: 'Tất cả' }, ...categories]
    const [catSelected, setCatSelected] = useState("all")

    const [isVisible, setIsVisible] = useState(true)
    const [isSticky, setIsSticky] = useState(false)
    const searchRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. Kiểm tra xem thanh Search đã chạm nóc chưa (isSticky)
            if (searchRef.current) {
                // Lấy khoảng cách từ đỉnh thanh Search lên đỉnh màn hình
                // Nếu = 0 (hoặc xấp xỉ 0 do sai số của trình duyệt), nghĩa là nó đang dính chặt ở top
                const topPosition = searchRef.current.getBoundingClientRect().top;

                // Nếu đang dính chặt ở trên cùng
                if (topPosition <= 0) {
                    setIsSticky(true);
                }
                // Nếu khoảng cách lớn hơn 0 (tức là ta đã cuộn ngược lên qua vị trí gốc của nó)
                else {
                    setIsSticky(false);
                    // Ép nó hiện ra ngay lập tức, không được phép ẩn khi đang nằm lưng chừng trang
                    setIsVisible(true);
                }
            }

            // 2. CHỈ KHI NÀO đã dính chặt (isSticky) thì mới tính đến chuyện Hiện/Ẩn
            if (isSticky) {
                if (currentScrollY > lastScrollY && currentScrollY > 150) {
                    setIsVisible(false); // Cuộn xuống -> Ẩn
                } else if (currentScrollY < lastScrollY) {
                    setIsVisible(true);  // Cuộn lên -> Hiện
                }
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isSticky]);

    return (
        <div
            id="search-section"
            ref={searchRef}
            className={`sticky top-[0px] z-40 bg-background/90 backdrop-blur-md pt-4 md:pt-6 pb-2 space-y-4 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="relative max-w-2xl mx-auto">
                <input
                    className="w-full pl-12 pr-4 py-3 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline outline-none"
                    placeholder="Search products..."
                    type="text"
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar py-1 w-full">
                {newCategories.map((cat) => {
                    const isChecked = catSelected === cat.categoryId;

                    return (
                        <button
                            key={cat.categoryId}
                            onClick={() => setCatSelected(cat.categoryId)}
                            className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors shadow-sm outline-none block ${isChecked
                                ? 'bg-primary text-on-primary'
                                : 'bg-surface-container text-on-surface-variant hover:bg-surface-variant'
                                }`}
                        >
                            {cat.categoryName}
                        </button>
                    )
                })}
            </div>
        </div >
    )
}

export default SearchSection
