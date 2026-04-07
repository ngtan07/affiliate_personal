const TENSION_EASE = [0.16, 1, 0.3, 1];

/**
 * @param {number} stagger
 */

// các thẻ lần lượt hiện
export const createGridVariants = (stagger = 0.2) => ({
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren: 0.1 }
    }
});

/**
 * @param {number} yOffset 
 * @param {number} duration 
 */

// trượt từ từ lên và scale to ra (img)
export const createBlockReveal = (yOffset = 50, duration = 0.8) => ({
    hidden: { opacity: 0, y: yOffset, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: duration, ease: TENSION_EASE }
    }
});

/**
 * @param {string} direction 
 * @param {number} distance 
 * @param {number} duration 
 */

// trượt nhẹ nhàng rõ dần lên
export const createFadeIn = (direction = 'up', distance = 20, duration = 0.8) => {
    const dirVariants = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance }
    };

    return {
        hidden: { opacity: 0, ...dirVariants[direction] },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: duration, ease: TENSION_EASE }
        }
    };
};