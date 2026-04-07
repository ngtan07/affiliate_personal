import { motion } from "framer-motion";
import { createBlockReveal, createFadeIn } from '../../utils/animations';
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { Link } from "react-router-dom";

const SuggestItem = ({ items, renderItem }) => {

    const { containerRef, canScrollLeft, canScrollRight, scroll, checkScroll } = useHorizontalScroll([items.length]);
    if (!items || items.length === 0) return null;

    return (
        <>

            <section>
                <motion.div variants={createFadeIn('up', 20, 0.8)} className="flex items-center gap-4 mb-8">
                    <h2 className="text-xl font-bold tracking-tight text-primary">Có thể bạn cũng thích</h2>
                    <div className="h-px flex-1 bg-outline-variant"></div>
                </motion.div>

                <div className="relative w-full flex items-center">
                    {/* Left Gradient / Button */}
                    <div className={`hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
                    <button
                        onClick={() => scroll('left')}
                        className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center cursor-pointer bg-surface-container-high/80 backdrop-blur-md rounded-full shadow-md border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-all duration-300 ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
                    >
                        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                    </button>

                    <div
                        ref={containerRef}
                        onScroll={checkScroll}
                        className="flex items-stretch gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-6 pt-2 px-1 scroll-smooth w-full"
                    >
                        {items?.map(i => (
                            <motion.div key={i.productId || i.templateId} variants={createBlockReveal()} className="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-auto">
                                {renderItem(i)}
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Gradient / Button */}
                    <div className={`hidden md:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />
                    <button
                        onClick={() => scroll('right')}
                        className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center cursor-pointer bg-surface-container-high/80 backdrop-blur-md rounded-full shadow-md border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-all duration-300 ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
                    >
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                </div>
            </section>
        </>


    )
}

export default SuggestItem
