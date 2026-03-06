import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-1">
                        <a href="#home" className="flex items-center gap-2 inline-block mb-6 group">
                            <div className="bg-primary p-2 rounded-lg text-white">
                                <Leaf size={24} />
                            </div>
                            <span className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                Nông Nghiệp <span className="text-primary">1993</span>
                            </span>
                        </a>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Đại lý chuyên cung cấp các loại phân bón, thuốc bảo vệ thực vật, hạt giống và thiết bị nông nghiệp uy tín, chất lượng phục vụ bà con.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">LIÊN KẾT NHANH</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-primary hover:translate-x-1 inline-block transition-all">Trang chủ</a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-primary hover:translate-x-1 inline-block transition-all">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="#branches" className="text-gray-400 hover:text-primary hover:translate-x-1 inline-block transition-all">Chi nhánh</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-primary hover:translate-x-1 inline-block transition-all">Liên hệ</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">THÔNG TIN ĐẠI LÝ</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-400">
                                <span className="font-semibold text-gray-300 min-w-16">Hotline:</span>
                                <span className="text-white text-xl font-bold text-primary">0977 666 657</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <span className="font-semibold text-gray-300 min-w-16">Zalo:</span> 0977 666 657
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <span className="font-semibold text-gray-300 min-w-16">Địa chỉ:</span> Phú Riềng, Huyện Phú Riềng, Bình Phước
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="border-t border-gray-800 py-6 text-center">
                <p className="text-sm text-gray-500 font-medium">
                    &copy; {new Date().getFullYear()} Đại Lý Vật Tư Nông Nghiệp 1993. Tất cả quyền được bảo lưu.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
