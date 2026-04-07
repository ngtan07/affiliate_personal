import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { Image } from 'antd';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const customStyles = `
  .swiper-slide-thumb-active img {
    border-color: var(--color-primary, #5D7B6F) !important;
    opacity: 1 !important;
  }
  
  /* Mũi tên dạng nút tròn xoe nền mờ */
  .swiper-button-next, .swiper-button-prev {
    width: 35px !important;
    height: 35px !important;
    background-color: rgba(255, 255, 255, 0.8) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-radius: 50% !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
    color: #1a1c19 !important;
    border: 1px solid rgba(114, 121, 117, 0.3) !important;
    transition: all 0.3s ease !important;
    margin-top: -20px !important;
    opacity: 1 !important;
  }

  .swiper-navigation-icon{
  width: 15px !important;
  height: 15px !important;
  }
  .swiper-button-next:hover, .swiper-button-prev:hover {
    background-color: #dfe4df !important;
  }
  .swiper-button-next:active, .swiper-button-prev:active {
    transform: scale(0.95) !important;
  }
  .swiper-button-next::after, .swiper-button-prev::after {
    font-size: 1.1rem !important; 
    font-weight: 600 !important;
  }

  .swiper-button-next {
    right: 12px !important;
  }
  .swiper-button-prev {
    left: 12px !important;
  }

  /* Ẩn hoàn toàn nút khi trượt đến tận cùng hoặc về đầu */
  .swiper-button-disabled {
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }

  /* Ẩn nút mũi tên trên điện thoại (màn hình < 768px) vì người dùng vuốt trên màn hình cảm ứng */
  @media (max-width: 767px) {
    .swiper-button-next, .swiper-button-prev {
      display: none !important;
    }
  }
`;

const TemplateGallery = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [previewVisible, setPreviewVisible] = useState(false);
    const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

    if (!images || images.length === 0) return null;

    return (
        <>
            <style>{customStyles}</style>

            <div className="flex flex-col gap-4 w-full mb-10">
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-sm"
                >
                    {images.map((imgUrl, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative group cursor-zoom-in"
                            onClick={() => {
                                setCurrentPreviewIndex(index);
                                setPreviewVisible(true);
                            }}
                        >
                            <img
                                src={imgUrl}
                                className="w-full h-auto object-contain max-h-[500px] mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
                                alt={`Preview ${index}`}
                            />
                            {/* Kính lúp gợi ý */}
                            <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* --- SLIDER ẢNH NHỎ (DÙNG SWIPER) --- */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={12}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    breakpoints={{ 640: { slidesPerView: 5 } }}
                    className="w-full thumbs-slider"
                >
                    {images.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={imgUrl}
                                className="w-full h-15 md:h-17 object-cover rounded-md border-2 border-transparent opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300"
                                alt={`Thumbnail ${index}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                    preview={{
                        open: previewVisible,
                        onOpenChange: (vis) => setPreviewVisible(vis),
                        current: currentPreviewIndex,
                        onChange: (current) => setCurrentPreviewIndex(current),
                    }}
                >
                    {images.map((imgUrl, index) => (
                        <Image key={index} src={imgUrl} />
                    ))}
                </Image.PreviewGroup>
            </div>
        </>
    );
};

export default TemplateGallery;