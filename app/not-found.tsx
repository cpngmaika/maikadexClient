import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
            {/* 404 Text Background */}
            <h1 className="text-[150px] font-black leading-none text-[#18C3C3]/10 md:text-[200px]">
                404
            </h1>
            
            {/* Content */}
            <div className="relative z-10 -mt-16 mb-8 md:-mt-24">
                <h2 className="text-3xl font-bold text-[#2D314E] md:text-4xl">
                    Không tìm thấy trang
                </h2>
                <p className="mx-auto mt-4 max-w-md text-gray-500">
                    Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không thể truy cập được.
                </p>
            </div>

            {/* Action */}
            <Link 
                href="/"
                className="rounded-full bg-[#18C3C3] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#15A8A8] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#18C3C3] focus:ring-opacity-50"
            >
                Về trang chủ
            </Link>
        </div>
    );
}
