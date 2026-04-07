export const PLATFORM = {
    SHOPEE: 'SHOPEE',
    TIKTOK: 'TIKTOK',
    LAZADA: 'LAZADA',
};

export const PLATFORM_UI_CONFIG = {
    [PLATFORM.SHOPEE]: {
        id: PLATFORM.SHOPEE,
        name: "Shopee",
        textColor: "#EE4D2D",
    },
    [PLATFORM.TIKTOK]: {
        id: PLATFORM.TIKTOK,
        name: "TikTok",
        textColor: "#111111",
    },
    [PLATFORM.LAZADA]: {
        id: PLATFORM.LAZADA,
        name: "Lazada",
        textColor: "#F60F91",
    },
};

export const PLATFORM_FILTER_OPTIONS = Object.values(PLATFORM_UI_CONFIG);