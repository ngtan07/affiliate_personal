import { motion } from "framer-motion";

const LoadMoreButton = ({ createFadeIn }) => {
    return (
        <motion.div variants={createFadeIn('right', 20, 0.8)} className="mt-12 flex justify-center">
            <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-on-primary shadow-sm hover:shadow-primary/30 transition-all cursor-pointer">
                Xem nữa, xem nữaaa
            </button>
        </motion.div>
    )
}

export default LoadMoreButton
