import { useState, useEffect, useRef } from 'react';

export const useHorizontalScroll = (dependencies = []) => {
    const containerRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
        }
    };

    const scroll = (direction, scrollAmount = 600) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        checkScroll();
        const timeout = setTimeout(checkScroll, 100);

        window.addEventListener('resize', checkScroll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', checkScroll);
        };

    }, dependencies);

    return { containerRef, canScrollLeft, canScrollRight, scroll, checkScroll };
};