import { useEffect, useRef, useState } from 'react'
import ProductCard from "../../common/ProductCard";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { createGridVariants, createBlockReveal, createFadeIn } from '../../../utils/animations';
import { PLATFORM_FILTER_OPTIONS } from '../../../config/constants'
import FilterSection from "./FilterSection";


const Products = ({ products }) => {

    const newPlatforms = [{ id: 'all', name: 'Tất cả', textColor: '#727975' }, ...PLATFORM_FILTER_OPTIONS]

    const initialPlaceholder = { id: 'placeholder', name: 'Nền tảng' };

    const [platSelected, setPlatSelected] = useState(initialPlaceholder)

    const filterRef = useRef(null);
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    const [isTop, setIsTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 3000) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToFilter = () => {
        if (filterRef.current) {
            const yOffset = -70;
            const elementY = filterRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementY + yOffset, behavior: 'smooth' });
        }
    };

    return (
        <>
            <section
                ref={filterRef}
                className="mb-20">
                <motion.div
                    variants={createGridVariants(0.15)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.05 }}
                >
                    <motion.div variants={createFadeIn('right', 20, 0.8)} className="flex items-center gap-2 my-6">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                        <h2 className="text-xl font-bold tracking-tight">Recommendations</h2>
                    </motion.div>
                    <FilterSection />

                    <div className="flex w-full justify-end mb-3">
                        <div className="relative shrink-0 min-w-28">
                            <Listbox value={platSelected} onChange={setPlatSelected}>

                                <ListboxButton className="group appearance-none text-left pl-3 pr-9 py-1.5 bg-transparent border border-outline/30 rounded-full text-sm font-medium text-on-surface outline-none transition-all cursor-pointer w-full hover:bg-surface-variant/50 block data-[open]:border-primary data-[open]:ring-1 data-[open]:ring-primary data-[open]:ring-inset">
                                    <span className="block truncate">{platSelected.name}</span>
                                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none transition-transform duration-300 group-data-[open]:rotate-180" />
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

                    <div className=" gap-3 md:gap-6 grid lg:grid-cols-3 items-stretch">
                        {products.map((p) => (
                            <motion.div key={`product-${p.productId || p.productSlug}`} variants={createBlockReveal()} className="h-full flex flex-col [&>div]:flex-grow">
                                <ProductCard p={p} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={createFadeIn('right', 20, 0.8)} className="mt-12 flex justify-center">
                        <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-on-primary shadow-sm hover:shadow-primary/30 transition-all cursor-pointer">
                            Load More Recommendations
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {showScrollBtn && (
                <button
                    onClick={scrollToFilter}
                    className="fixed bottom-8 right-8 z-50 bg-surface-container-high text-primary hover:bg-primary hover:text-white border border-outline-variant rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all cursor-pointer"
                >
                    <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
                </button>
            )}
        </>

    )
}

export default Products;
