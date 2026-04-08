
const ScrollButton = ({ showScrollBtn, scrollToFilter }) => {
    return (
        <>
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

export default ScrollButton
