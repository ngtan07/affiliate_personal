import { useState } from 'react'
import ProductCard from "../../common/ProductCard";
import { motion } from "framer-motion";
import { createGridVariants, createBlockReveal, createFadeIn } from '../../../utils/animations';
import { PLATFORM_FILTER_OPTIONS } from '../../../config/constants'
import FilterSection from "./FilterSection";
import SelectFilter from '../../common/SelectFilter';
import LoadMoreButton from '../../common/LoadMoreButton';
import { useScrollFilter } from '../../../hooks/useScrollFilter'
import ScrollButton from '../../common/ScrollButton';


const Products = ({ products }) => {

    const newPlatforms = [{ id: 'all', name: 'Tất cả', textColor: '#727975' }, ...PLATFORM_FILTER_OPTIONS]

    const initialPlaceholder = { id: 'placeholder', name: 'Nền tảng' };

    const [platSelected, setPlatSelected] = useState(initialPlaceholder)

    const { filterRef, scrollToFilter, showScrollBtn } = useScrollFilter()

    return (
        <>
            <section
                ref={filterRef}
                className="mb-8">
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
                        <SelectFilter
                            itemSelected={platSelected}
                            setItemSelected={setPlatSelected}
                            items={newPlatforms} />
                    </div>

                    <div className=" gap-3 md:gap-6 grid lg:grid-cols-3 items-stretch">
                        {products.map((p) => (
                            <motion.div key={`product-${p.productId || p.productSlug}`} variants={createBlockReveal()} className="h-full flex flex-col [&>div]:flex-grow">
                                <ProductCard p={p} />
                            </motion.div>
                        ))}
                    </div>

                    <LoadMoreButton createFadeIn={createFadeIn} />
                </motion.div>
            </section>

            <ScrollButton
                showScrollBtn={showScrollBtn}
                scrollToFilter={scrollToFilter} />
        </>

    )
}

export default Products;
