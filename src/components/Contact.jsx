import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Liên Hệ Với Chúng Tôi</h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Để được tư vấn sản phẩm, kỹ thuật canh tác hoặc đặt hàng, bà con hãy liên hệ qua thông tin hoặc điền form bên dưới nhé.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Thông Tin Liên Hệ</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-lg mb-1">Địa chỉ</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Phú Riềng, Huyện Phú Riềng, Bình Phước
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-lg mb-1">Điện thoại</h4>
                                        <a href="tel:0977666657" className="text-gray-600 hover:text-primary transition-colors text-lg font-medium">0977 666 657</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-lg mb-1">Zalo</h4>
                                        <a href="https://zalo.me/0977666657" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium">0977 666 657 (Đại Lý 1993)</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps mock */}
                        <div className="h-[300px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.126442658145!2d106.68536645390623!3d10.78970425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cb52b1156d%3A0x6bbaeee0401bdaff!2zQ2h0ZyBYw6Ju!5e0!3m2!1svi!2s!4v1703672589255!5m2!1svi!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                                className="absolute inset-0 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Gửi Tin Nhắn Mua Hàng</h3>
                        <p className="text-gray-500 mb-8">Chúng tôi sẽ gọi lại ngay khi nhận được thông tin.</p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Nhập họ tên của bạn..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                                    Số điện thoại
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Nhập số điện thoại..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                                    Nội dung cần tư vấn
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Bạn cần hỏi về sản phẩm hay kỹ thuật gì?..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-primary/30 flex justify-center items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <Send size={20} />
                                Gửi Thông Tin
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
