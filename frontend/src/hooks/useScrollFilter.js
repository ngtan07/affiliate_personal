import { useEffect, useRef, useState } from 'react'

export const useScrollFilter = (offset = 800) => {
    const filterRef = useRef(null);
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!filterRef.current) return;
            const rect = filterRef.current.getBoundingClientRect();
            // Hiện nút khi component đã cuộn lên trên viewport (+ offset px)
            setShowScrollBtn(rect.top < -offset);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset]);

    const scrollToFilter = () => {
        if (filterRef.current) {
            const yOffset = -70;
            const elementY = filterRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementY + yOffset, behavior: 'smooth' });
        }
    };
    return { filterRef, scrollToFilter, showScrollBtn }
}
