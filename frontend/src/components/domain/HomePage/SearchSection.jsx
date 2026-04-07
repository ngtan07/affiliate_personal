import { useEffect, useState, useRef } from 'react'

const SearchSection = () => {



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
            className={`sticky top-0 z-50 w-full bg-background py-3 px-4  transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0 ' : '-translate-y-full'} ${isSticky ? 'border-b border-outline/10' : ''}`}
        >
            <div className="relative max-w-2xl mx-auto w-full">
                <input
                    className="w-full pl-12 pr-4 py-3 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline outline-none"
                    placeholder="Search products..."
                    type="text"
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            </div>


        </div >

    )
}

export default SearchSection
