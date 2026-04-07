import { useState } from 'react'
import { useHorizontalScroll } from '../../../hooks/useHorizontalScroll'

const categories = [
    { categoryId: 'beauty', categoryName: 'Beauty & Skincare' },
    { categoryId: 'fashion', categoryName: 'Fashion' },
    { categoryId: 'lifestyle', categoryName: 'Lifestyle' },
]

const FilterSection = () => {

    const newCategories = [{ categoryId: 'all', categoryName: 'Tất cả' }, ...categories]
    const [catSelected, setCatSelected] = useState("all")
    const { containerRef, canScrollLeft, canScrollRight, scroll, checkScroll } = useHorizontalScroll([newCategories.length]);
    return (
        <div className="relative flex items-center w-full group overflow-hidden mb-2">
            {/* Left Gradient / Button */}
            <div className={`hidden md:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/70 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
            <button
                onClick={() => scroll('left')}
                className={`hidden md:flex absolute left-2 z-20 w-8 h-8 items-center justify-center cursor-pointer bg-surface-container/30 backdrop-blur-md rounded-full shadow-sm border border-outline-variant/30 text-on-surface hover:bg-surface-variant/80 transition-all duration-300 ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
            >
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>

            <div
                ref={containerRef}
                onScroll={checkScroll}
                className="flex items-center gap-2 overflow-x-auto hide-scrollbar py-1 w-full scroll-smooth px-4 md:px-2"
            >
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

            {/* Right Gradient / Button */}
            <div className={`hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background/70 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />
            <button
                onClick={() => scroll('right')}
                className={`hidden md:flex absolute right-2 z-20 w-8 h-8 items-center justify-center cursor-pointer bg-surface-container/30 backdrop-blur-md rounded-full shadow-sm border border-outline-variant/30 text-on-surface hover:bg-surface-variant/80 transition-all duration-300 ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
            >
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
        </div>
    )
}

export default FilterSection
