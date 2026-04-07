import { Link } from "react-router-dom";
import UserLayout from "../../components/layout/UserLayout";
import SuggestItem from "../../components/common/SuggestItem";
import TemplateCard from "../../components/common/TemplateCard";
import TemplateDetailCard from "../../components/domain/TemplateDetail/TemplateDetailCard";
import { motion } from "framer-motion";
import { createGridVariants, createFadeIn } from '../../utils/animations';



const mockTemplates = [
    {
        templateId: "TPL_FINANCE_02",
        templateSlug: "minimalist-personal-finance-and-budgeting",
        templateName: "Minimalist Personal Finance & Budgeting",
        price: 89000,
        originalPrice: 150000,
        upgradePrice: null,
        thumbnailUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Quản lý thu chi không còn là nỗi ám ảnh. Dễ dùng, trực quan và hoàn toàn tự động.",
        longDescription: "Chia tay cảnh cuối tháng không biết tiền đi về đâu. Bảng tính này áp dụng quy tắc quản lý tài chính 50/30/20 cực kỳ nổi tiếng. Bạn chỉ cần nhập số tiền tiêu mỗi ngày vào một cột duy nhất, hệ thống sẽ tự động vẽ biểu đồ và cảnh báo nếu bạn đang chi tiêu quá tay cho việc shopping.",
        format: "Google Sheets",
        version: "v3.1",
        features: [
            "Dashboard tổng quan tài chính tự động update realtime",
            "Tự động phân bổ thu nhập theo tỷ lệ 50/30/20",
            "Theo dõi khoản nợ và mục tiêu tiết kiệm",
            "Công thức được khóa bảo vệ, không lo xóa nhầm"
        ],
        useCases: [
            "Dân văn phòng, sinh viên muốn quản lý chi tiêu",
            "Người chuẩn bị lập quỹ dự phòng khẩn cấp",
            "Người mù công nghệ, không rành hàm Excel"
        ],
        whatsNew: [
            "Thêm tính năng quy đổi ngoại tệ (USD/VND)",
            "Tối ưu hóa giao diện xem trên điện thoại"
        ],
        deliveryIncludes: [
            "1 Link Make a Copy Google Sheets",
            "1 Ebook ngắn về tư duy quản lý dòng tiền",
            "Update miễn phí trọn đời"
        ],
        tags: ["Finance", "Budget", "Google Sheets"]
    },
    {
        templateId: "TPL_STUDY_03",
        templateSlug: "university-4-0-study-and-gpa-tracker",
        templateName: "University 4.0 Study & GPA Tracker",
        price: 59000,
        originalPrice: 59000,
        upgradePrice: null,
        thumbnailUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Vũ khí bí mật cho chuỗi ngày chạy deadline nhẹ tựa lông hồng và tối ưu điểm số.",
        longDescription: "Đại học sẽ nhàn hơn rất nhiều nếu bạn biết cách hệ thống hóa kiến thức. Template Notion này tích hợp phương pháp Spaced Repetition (Lặp lại ngắt quãng) và Pomodoro giúp bạn học ít nhưng nhớ lâu. Đặc biệt có sẵn bộ công cụ tự động tính điểm GPA mục tiêu.",
        format: "Notion",
        version: "v1.0",
        features: [
            "Lịch học (Timetable) đồng bộ với Deadline bài tập",
            "Hệ thống flashcard ôn thi tích hợp",
            "Máy tính mô phỏng điểm GPA/CPA",
            "Kho lưu trữ tài liệu môn học theo từng kỳ"
        ],
        useCases: [
            "Sinh viên đại học/cao đẳng",
            "Học sinh cấp 3 chuẩn bị ôn thi THPT Quốc Gia",
            "Người đang học thêm ngoại ngữ (IELTS, JLPT)"
        ],
        whatsNew: [
            "Bản phát hành đầu tiên"
        ],
        deliveryIncludes: [
            "1 Link duplicate Notion bản quyền",
            "Template mẫu cách take note hiệu quả"
        ],
        tags: ["Study", "Notion", "GPA", "Sinh viên"]
    },
    {
        templateId: "TPL_CONTENT_04",
        templateSlug: "aesthetic-content-creator-planner",
        templateName: "Aesthetic Content Creator Planner",
        price: 129000,
        originalPrice: 200000,
        upgradePrice: null,
        thumbnailUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542435503-956c22f228b4?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Quản lý kịch bản, lịch đăng bài và theo dõi KPI cho đa nền tảng (TikTok, IG, YouTube).",
        longDescription: "Công cụ không thể thiếu cho các KOC/KOL tương lai. Không còn cảnh ghi chú kịch bản rải rác mỗi nơi một ít. Với Content Planner, bạn quản lý toàn bộ vòng đời của một video: từ lúc nảy ra ý tưởng (Brainstorming), viết kịch bản, quay dựng, cho đến theo dõi lượt view và tiền hoa hồng Affiliate.",
        format: "Notion",
        version: "v2.5",
        features: [
            "Bảng Kanban theo dõi trạng thái Video (Idea -> Shooting -> Editing -> Posted)",
            "Kho lưu trữ âm thanh trending và hashtag",
            "Bảng theo dõi doanh thu Affiliate/Booking",
            "CRM quản lý liên hệ với các nhãn hàng"
        ],
        useCases: [
            "TikToker, YouTuber, Instagram Influencer",
            "Freelancer làm Social Media Management",
            "Người làm Affiliate Marketing"
        ],
        whatsNew: [
            "Tích hợp bảng tính thuế thu nhập tự động",
            "Thêm template mẫu kịch bản chốt sale 30 giây"
        ],
        deliveryIncludes: [
            "1 Link duplicate Notion bản quyền",
            "List 50 hook (câu mở đầu) thu hút người xem"
        ],
        tags: ["Content", "Creator", "Notion", "KOC"]
    },
    {
        templateId: "TPL_MEAL_05",
        templateSlug: "smart-meal-planner-and-grocery-tracker",
        templateName: "Smart Meal Planner & Grocery Tracker",
        price: 69000,
        originalPrice: 120000,
        upgradePrice: null,
        thumbnailUrl: "https://images.unsplash.com/photo-1498837167332-2d103fa72bb0?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1498837167332-2d103fa72bb0?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Lên thực đơn cả tuần trong 5 phút và tự động sinh danh sách đi siêu thị.",
        longDescription: "Giải quyết triệt để câu hỏi 'Hôm nay ăn gì?'. Hệ thống chứa sẵn một kho dữ liệu các món ăn phổ biến. Bạn chỉ việc chọn món cho các ngày trong tuần, Excel sẽ tự động nhặt các nguyên liệu cần thiết và tạo ra một danh sách checklist để bạn mang đi siêu thị quét mã.",
        format: "Google Sheets",
        version: "v1.2",
        features: [
            "Tự động xuất danh sách đi siêu thị (Grocery List)",
            "Theo dõi hạn sử dụng thực phẩm trong tủ lạnh",
            "Bảng tính Calo tự động cho từng bữa ăn",
            "In ấn dễ dàng vừa khổ giấy A4"
        ],
        useCases: [
            "Người sống tự lập, dân văn phòng đem cơm đi làm",
            "Mẹ bỉm sữa muốn lên thực đơn đa dạng cho gia đình",
            "Người đang theo chế độ ăn kiêng nghiêm ngặt"
        ],
        whatsNew: [
            "Sửa lỗi in ấn bị tràn viền trang",
            "Thêm danh mục Đồ chay"
        ],
        deliveryIncludes: [
            "1 Link Make a Copy Google Sheets",
            "Video hướng dẫn thêm món ăn mới vào kho dữ liệu"
        ],
        tags: ["Meal Plan", "Google Sheets", "Lifestyle"]
    },
    {
        templateId: "TPL_TRAVEL_06",
        templateSlug: "ultimate-travel-itinerary-planner",
        templateName: "Ultimate Travel Itinerary Planner",
        price: 39000,
        originalPrice: 39000,
        upgradePrice: null,
        thumbnailUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Thiết kế chuyến đi trong mơ hoàn hảo đến từng phút, không lo phát sinh chi phí.",
        longDescription: "Đi du lịch là để thư giãn, đừng để việc quên book vé hay vượt ngân sách làm hỏng chuyến đi. Bản kế hoạch này giúp bạn và hội bạn thân chia sẻ lịch trình realtime, lưu trữ toàn bộ mã vé máy bay/khách sạn, và có chức năng 'Campuchia' chia tiền cực kỳ công bằng.",
        format: "Google Sheets",
        version: "v1.0",
        features: [
            "Lịch trình chi tiết từng giờ (Time-blocking)",
            "Quản lý File & Document (Vé máy bay, Visa, Booking)",
            "Chức năng tự động chia tiền quỹ chung cho nhóm",
            "Packing List: Checklist đồ cần mang không sợ quên"
        ],
        useCases: [
            "Người làm trưởng nhóm tổ chức chuyến đi",
            "Du lịch tự túc (Backpacker) trong và ngoài nước",
            "Quản lý chuyến đi công tác (Business Trip)"
        ],
        whatsNew: [
            "Bản phát hành đầu tiên"
        ],
        deliveryIncludes: [
            "1 Link Make a Copy Google Sheets",
            "File Check-list kiểm tra an toàn nhà cửa trước khi đi"
        ],
        tags: ["Travel", "Planner", "Google Sheets", "Lifestyle"]
    }
];

const TemplateDetail = () => {
    const message = <>Xem thêm nhiều đồ xinh iu nữa 👉
        <span className="inline-grid text-center">
            <Link
                to='/'
                className="col-start-1 row-start-1 underline decoration-primary decoration-1 underline-offset-4 hover:font-bold transition-all"
            >
                ở đây
            </Link>

            <span className="col-start-1 row-start-1 font-bold invisible pointer-events-none">
                ở đây
            </span>
        </span>
        {' '}nè</>
    return (
        <UserLayout message={message}>
            <motion.div
                variants={createGridVariants(0.15)}
                initial="hidden"
                animate="show"
            >
                <motion.h1 variants={createFadeIn('right', 20, 1)} className="text-4xl font-serif italic font-light tracking-normal drop-shadow-sm inline-block text-primary mb-8">Alice de N.</motion.h1>

                <TemplateDetailCard />



                <motion.div
                    variants={createFadeIn('up', 20, 0.8)}
                    className="flex flex-wrap items-center justify-center gap-4 mb-10"
                >
                    <Link to="/"
                        className="flex items-center justify-center px-6 py-3 gap-2 bg-white w-55 md:w-65 border border-outline-variant hover:border-primary text-primary font-semibold rounded-full transition-all active:scale-95 hover:-translate-y-1">
                        <span className="material-symbols-outlined text-[20px] transition-transform">home</span>
                        Về trang chủ
                    </Link>
                    <Link to="/templates"
                        className="flex items-center justify-center px-6 py-3 gap-2 bg-primary font-bold md:w-65 border border-outline-variant hover:bg-primary/90 text-white rounded-full transition-all active:scale-95 hover:-translate-y-1">
                        <span className="material-symbols-outlined text-[20px] transition-transform">auto_awesome</span>
                        Khám phá Templates
                    </Link>
                </motion.div>

                <SuggestItem
                    items={mockTemplates}
                    renderItem={(t) => <TemplateCard key={t.templateId} template={t} />}
                />


            </motion.div>

        </UserLayout>


    );
};

export default TemplateDetail;
