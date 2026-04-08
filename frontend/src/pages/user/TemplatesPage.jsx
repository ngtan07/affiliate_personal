import { useState } from 'react';
import { motion } from 'framer-motion';
import TemplateCard from '../../components/common/TemplateCard';
import UserLayout from '../../components/layout/UserLayout';
import SearchSection from '../../components/common/SearchSection';
import SelectFilter from '../../components/common/SelectFilter';
import LoadMoreButton from '../../components/common/LoadMoreButton';
import { createGridVariants, createBlockReveal, createFadeIn } from '../../utils/animations';
import { useScrollFilter } from '../../hooks/useScrollFilter';
import ScrollButton from '../../components/common/ScrollButton';

const mockTemplates = [
    {
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
    },
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
    },
    {
        templateId: "TPL_TRAVEL_07",
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
    },
    {
        templateId: "TPL_TRAVEL_08",
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
    },
    {
        templateId: "TPL_TRAVEL_09",
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
    },
    {
        templateId: "TPL_TRAVEL_10",
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
    },
    {
        templateId: "TPL_TRAVEL_11",
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
    },
];
const MOCK_FORMATS = [
    {
        formatId: 2,
        formatName: "Notion",
        formatSlug: "notion"
    },
    {
        formatId: 3,
        formatName: "Google Sheets",
        formatSlug: "google-sheets"
    },
    {
        formatId: 4,
        formatName: "Figma",
        formatSlug: "figma"
    },
    {
        formatId: 5,
        formatName: "Canva",
        formatSlug: "canva"
    }
];

const MOCK_TAGS = [
    {
        tagId: 1,
        tagName: "Học tập",
        tagSlug: "hoc-tap"
    },
    {
        tagId: 2,
        tagName: "Tài chính",
        tagSlug: "tai-chinh"
    },
    {
        tagId: 3,
        tagName: "Thói quen",
        tagSlug: "thoi-quen"
    },
    {
        tagId: 4,
        tagName: "Công việc",
        tagSlug: "cong-viec"
    },
    {
        tagId: 5,
        tagName: "Aesthetic",
        tagSlug: "aesthetic"
    },
    {
        tagId: 6,
        tagName: "Sức khỏe",
        tagSlug: "suc-khoe"
    },
    {
        tagId: 7,
        tagName: "Content Creator",
        tagSlug: "content-creator"
    },
];

const TemplatesPage = () => {
    const [search, setSearch] = useState('');

    const newFormat = [{ formatId: 1, formatName: "Tất cả", formatSlug: "all" }, ...MOCK_FORMATS]
    const initialPlaceholder = { formatId: 'placeholder', formatName: 'Định dạng' };
    const [selectedFormat, setSelectedFormat] = useState(initialPlaceholder);

    const [selectedTag, setSelectedTag] = useState([]);
    const { filterRef, scrollToFilter, showScrollBtn } = useScrollFilter(500)


    return (
        <UserLayout>
            <motion.div
                variants={createGridVariants(0.12)}
                initial="hidden"
                animate="show"
            >
                {/* Breadcrumb */}
                <motion.nav
                    variants={createFadeIn('right', 16, 0.6)}
                    className="flex items-center gap-2 text-sm text-on-surface-variant mb-6 font-medium"
                >
                    <a href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">home</span>
                        Trang chủ
                    </a>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-primary">Alice's Template</span>
                </motion.nav>

                {/* Header */}
                <motion.div
                    ref={filterRef}
                    variants={createFadeIn('up', 24, 0.7)}
                    className="mb-8"
                >
                    <h1 className="font-serif italic font-light text-4xl text-primary drop-shadow-sm mb-2">Alice de N.</h1>
                    <p className="text-on-surface-variant text-sm">
                        Tuyển tập những hệ thống quản lý tối giản, mang đậm phong cách Aesthetic.
                    </p>
                </motion.div>

                {/* Search */}
                <motion.div variants={createFadeIn('up', 16, 0.65)}>
                    <SearchSection />
                </motion.div>

                {/* Tag Pills — multi-select, animate as one block */}
                <motion.div
                    variants={createFadeIn('up', 14, 0.6)}
                    className="flex items-center gap-2 flex-wrap mt-3 mb-6"
                >
                    {MOCK_TAGS.map(tag => (
                        <button
                            key={tag.tagId}
                            onClick={() => setSelectedTag(prev =>
                                prev.some(t => t.tagId === tag.tagId)
                                    ? prev.filter(t => t.tagId !== tag.tagId)
                                    : [...prev, tag]
                            )}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${selectedTag.some(t => t.tagId === tag.tagId)
                                ? 'bg-primary text-white border-primary shadow-sm shadow-primary/20'
                                : 'bg-white text-on-surface-variant border-outline-variant/50 hover:border-primary hover:text-primary'
                                }`}
                        >
                            #{tag.tagName}
                        </button>
                    ))}
                    {selectedTag.length > 0 && (
                        <button
                            onClick={() => setSelectedTag([])}
                            className="px-3 py-1.5 rounded-full text-xs font-medium text-outline hover:text-error border border-outline-variant/30 hover:border-error/30 transition-all"
                        >
                            Xoá ({selectedTag.length})
                        </button>
                    )}
                </motion.div>

                {/* Format + Count */}
                <motion.div
                    variants={createFadeIn('up', 12, 0.6)}
                    className="flex items-center justify-between mb-5"
                >
                    <p className="text-xs text-on-surface-variant font-medium">
                        {mockTemplates.length} template được tìm thấy
                    </p>
                    <SelectFilter
                        itemSelected={selectedFormat}
                        setItemSelected={setSelectedFormat}
                        items={newFormat}
                        minW='min-w-38'
                    />
                </motion.div>

                {/* Grid */}
                {mockTemplates.length > 0 ? (
                    <>
                        <motion.div
                            variants={createGridVariants(0.08)}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
                        >
                            {mockTemplates.map(template => (
                                <motion.div key={template.templateId} variants={createBlockReveal()} className="h-full flex flex-col [&>div]:flex-grow">
                                    <TemplateCard template={template} />
                                </motion.div>
                            ))}
                        </motion.div>
                        <LoadMoreButton createFadeIn={createFadeIn} />
                        <ScrollButton
                            showScrollBtn={showScrollBtn}
                            scrollToFilter={scrollToFilter} />
                    </>
                ) : (
                    <div className="text-center py-20 flex flex-col items-center gap-4">
                        <span className="material-symbols-outlined text-6xl text-outline-variant">search_off</span>
                        <div>
                            <h3 className="text-lg font-bold text-on-surface mb-1">Không tìm thấy Template</h3>
                            <p className="text-sm text-on-surface-variant">Alice chưa có mẫu nào phù hợp với bộ lọc này. Thử điều chỉnh bộ lọc nhé!</p>
                        </div>
                        <button
                            onClick={() => { setSearch(''); setSelectedFormat(MOCK_FORMATS[0]); setSelectedTag([]); }}
                            className="mt-2 px-5 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm hover:bg-primary hover:text-white transition-all"
                        >
                            Xoá bộ lọc
                        </button>
                    </div>
                )}
            </motion.div>
        </UserLayout>
    );
};

export default TemplatesPage;
