import FeatureAndNew from './FeatureAndNew';
import InfoBottom from './InfoBottom';
import TemplateGallery from './TemplateGallery';
import TemplateInformation from './TemplateInformation';
import { motion } from "framer-motion";
import { createGridVariants, createFadeIn } from '../../../utils/animations';


const template = {
    templateId: "TPL_HABIT_01",
    templateSlug: "that-girl-daily-habit-tracker-&-journal",
    templateName: "'That Girl' Daily Habit Tracker & Journal",
    price: 49000,
    originalPrice: 99000,
    upgradePrice: null,
    thumbnailUrl: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop",
    gallery: [
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Xây dựng lối sống kỷ luật, yêu bản thân với hệ thống theo dõi thói quen tối giản, không áp lực.",
    longDescription: "Bạn muốn bắt đầu hành trình 'Glow up' nhưng lại nhanh chán và hay bỏ cuộc giữa chừng? Hệ thống Tracker này được thiết kế dựa trên tâm lý học hành vi, giúp bạn ghi nhận từng chiến thắng nhỏ nhất mỗi ngày. Giao diện màu hồng be dịu mắt sẽ là nơi chữa lành tâm hồn bạn sau một ngày dài.",
    format: "Notion",
    version: "v2.0",
    features: [
        "Tick box theo dõi thói quen tự động reset mỗi ngày",
        "Nhật ký biết ơn (Gratitude Journal) tích hợp sẵn template",
        "Bảng Vision Board để dán ảnh tạo động lực",
        "Giao diện Aesthetic, cực kỳ hợp cho vibe Clean Girl"
    ],
    useCases: [
        "Người muốn xây dựng lối sống khoa học, dậy sớm",
        "Người hay quên uống nước, skincare",
        "Cần một nơi riêng tư để viết nhật ký số"
    ],
    whatsNew: [
        "Nâng cấp hệ thống tự động lưu trữ nhật ký theo tháng",
        "Bổ sung mục Skincare Routine Tracker"
    ],
    deliveryIncludes: [
        "1 Link duplicate Notion bản quyền",
        "1 Video hướng dẫn setup Notion cho người mới",
        "Hỗ trợ kỹ thuật qua Email"
    ],
    tags: ["Habit Tracker", "Notion", "Clean Girl", "Journal"]

}

const TemplateDetailCard = () => {


    return (
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10"
            variants={createGridVariants(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
        >
            <section data-purpose="product-showcase" className="contents lg:flex lg:flex-col lg:col-span-7 lg:gap-8">
                <motion.div className="order-1 lg:order-none" variants={createFadeIn('up', 30, 0.8)}>
                    <TemplateGallery images={template.gallery} />
                </motion.div>

                {/* Feature List */}
                <motion.div className="order-3 lg:order-none" variants={createFadeIn('up', 30, 0.8)}>
                    <FeatureAndNew template={template} />
                </motion.div>
            </section>

            <section data-purpose="product-info-column" className="contents lg:flex lg:flex-col lg:col-span-5 lg:gap-8">
                <motion.div className="order-2 lg:order-none" variants={createFadeIn('up', 30, 0.8)}>
                    <TemplateInformation template={template} />
                </motion.div>

                <motion.div className="order-4 lg:order-none" variants={createFadeIn('up', 30, 0.8)}>
                    <InfoBottom template={template} />
                </motion.div>
            </section>

        </motion.div>

    );
};

export default TemplateDetailCard;
