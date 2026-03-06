import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 bg-gray-50 flex items-center min-h-[90vh]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content - Left Side */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark font-medium text-sm mb-6 animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Kinh nghiệm hơn 30 năm đồng hành cùng nhà nông
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                            Hệ thống Vật Tư <br className="hidden md:block" />
                            <span className="text-primary relative inline-block mt-2">
                                Nông Nghiệp 1993
                                <svg className="absolute -bottom-2 md:-bottom-3 inset-x-0 w-full text-green-300/50" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9C68 2.5 248.5 -3.5 315 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
                            Chuyên cung cấp phân bón, thuốc bảo vệ thực vật, hạt giống và vật tư nông nghiệp chính hãng, uy tín. Giải pháp tối ưu cho mùa màng bội thu của bà con nông dân.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href="#contact"
                                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
                            >
                                Liên hệ ngay
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href="#about"
                                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-3.5 rounded-full font-semibold transition-all hover:border-gray-300"
                            >
                                Xem thông tin
                            </a>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm font-medium text-gray-600">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <span>Hàng chính hãng 100%</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4"></path><path d="M12 16V8"></path></svg>
                                </div>
                                <span>Giá cả cạnh tranh</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Box - Right Side */}
                    <div className="w-full lg:w-1/2 relative z-10 mt-10 lg:mt-0">
                        {/* Decorative background shape */}
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-105 z-0"></div>
                        <div className="absolute inset-0 bg-green-200/50 rounded-3xl transform -rotate-2 scale-105 z-0"></div>

                        {/* Image Container */}
                        <div className="relative bg-white rounded-3xl p-2 shadow-2xl z-10 overflow-hidden group">
                            <img
                                src="/images/image.png"
                                alt="Cửa hàng Đại Lý Vật Tư Nông Nghiệp 1993"
                                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Badge overlay */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4">
                                <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                </div>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg">Hỗ Trợ Mùa Vụ</p>
                                    <p className="text-gray-500 text-sm">Tư vấn kỹ thuật A-Z</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
