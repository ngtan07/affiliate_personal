
import { motion } from 'framer-motion';
import { createGridVariants, createBlockReveal, createFadeIn } from '../../../utils/animations';

const TikTokIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
);

const Instruction = () => {
    return (
        <section className="w-full flex justify-center mb-6 overflow-hidden">
            <motion.div
                variants={createGridVariants(0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="w-full max-w-7xl relative mx-auto grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] xl:grid-cols-[2fr_450px] gap-4 md:gap-6 items-stretch"
            >
                <motion.div variants={createBlockReveal(60, 1.2)} className="flex flex-col justify-end bg-surface-container-high rounded-[2.5rem] p-8 md:p-14 lg:p-16 relative overflow-hidden group min-h-[400px] md:min-h-[500px] lg:min-h-[500px]">
                    <div className="absolute inset-0 w-full h-full z-0">
                        <img
                            src="/editorial_bg.png"
                            alt="Silk Texture"
                            className="w-full h-full object-cover transform scale-100 transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-surface-container-high/90 to-surface-container-high/40 mix-blend-normal"></div>
                    </div>

                    <div className="relative z-10 w-full">
                        <motion.div variants={createFadeIn('up', 20, 1)} className="inline-flex items-center gap-4 mb-6 md:mb-10">
                            <span className="h-[1px] w-8 md:w-16 bg-zinc-800"></span>
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-zinc-800">
                                Curated Aesthetic
                            </span>
                        </motion.div>

                        <motion.h1 variants={createFadeIn('up', 20, 1)} className="text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] text-zinc-900 mb-6 md:mb-10">
                            <span className="font-serif font-light tracking-normal">Alice</span> <br />
                            <span className="font-serif italic font-light tracking-normal drop-shadow-sm pb-2 inline-block">de N.</span>
                        </motion.h1>

                        <motion.p variants={createFadeIn('up', 20, 1)} className="max-w-md text-zinc-600 text-base md:text-lg leading-relaxed italic font-light">
                            "Góc nhỏ của những điều xinh đẹp." ✨
                        </motion.p>
                    </div>
                </motion.div>

                <div className="flex flex-col gap-4 md:gap-6">
                    <motion.div variants={createBlockReveal(60, 1.2)} className="flex-1 rounded-[2.5rem] overflow-hidden relative group min-h-90 md:min-h-[400px] bg-rose-50 border border-zinc-100">
                        <img
                            src="/editorial_detail.png"
                            alt="Beauty Macro Detail"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-[1.5s]"></div>

                        <div className="absolute top-6 left-8 md:top-8 md:left-10 text-zinc-900/40 font-serif italic text-3xl font-light">
                            01.
                        </div>
                    </motion.div>

                    <motion.div variants={createBlockReveal(60, 1.2)} className="h-[150px] md:h-[220px] rounded-[2.5rem] flex flex-row justify-evenly items-center text-center px-4 relative">

                        <div className="flex flex-col items-center gap-2 md:gap-3 group">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 group-hover:text-zinc-600 transition-colors duration-300">
                                Follow me
                            </p>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-zinc-800 group-hover:text-rose-500 transition-colors duration-300 transform group-hover:-translate-y-1">
                                <TikTokIcon className="w-8 h-8 md:w-9 md:h-9" />
                            </a>
                        </div>

                        <div className="w-[1px] h-12 bg-zinc-300/50"></div>

                        <div
                            onClick={() => document.getElementById('pinned-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex flex-col items-center gap-2 md:gap-3 group cursor-pointer"
                        >
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 group-hover:text-zinc-600 transition-colors duration-300">
                                Khám phá
                            </span>
                            <div className="text-zinc-800 group-hover:text-rose-500 transition-colors duration-300 transform group-hover:translate-y-1">
                                <svg className="w-8 h-8 md:w-9 md:h-9 animate-bounce mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </div>

                    </motion.div>

                </div>

            </motion.div>
        </section>
    );
};

export default Instruction;
