import React from 'react';
import { Package, Shield, Sprout, Tractor, ThumbsUp, Headset, CheckCircle2, BadgeCheck } from 'lucide-react';

const About = () => {
    const products = [
        { icon: <Package size={32} />, title: "Phân bón", desc: "Đa dạng các loại phân bón vô cơ, hữu cơ chất lượng cao." },
        { icon: <Shield size={32} />, title: "Thuốc BVTV", desc: "Các loại thuốc trừ sâu, bệnh, cỏ dại an toàn và hiệu quả." },
        { icon: <Sprout size={32} />, title: "Hạt giống", desc: "Cung cấp hạt giống lúa, hoa màu đạt tiêu chuẩn nảy mầm cao." },
        { icon: <Tractor size={32} />, title: "Vật tư nông nghiệp", desc: "Dụng cụ, màng phủ, lưới lan và các vật tư cần thiết khác." },
    ];

    const commitments = [
        { icon: <BadgeCheck className="text-primary mt-1" size={24} />, text: "100% Hàng chính hãng, nguồn gốc rõ ràng" },
        { icon: <ThumbsUp className="text-primary mt-1" size={24} />, text: "Giá cả hợp lý, bình ổn và cạnh tranh" },
        { icon: <Headset className="text-primary mt-1" size={24} />, text: "Hỗ trợ tư vấn kỹ thuật miễn phí cho bà con" },
        { icon: <CheckCircle2 className="text-primary mt-1" size={24} />, text: "Đồng hành cùng bà con trong suốt quá trình canh tác" },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Intro */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
                    <div className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src="/images/store.png"
                            alt="Cửa hàng Đại Lý Vật Tư Nông Nghiệp 1993"
                            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
                            <div className="bg-primary hover:bg-primary-dark transition-colors inline-block px-4 py-2 rounded-lg text-white font-bold mb-2">
                                Từ năm 1993
                            </div>
                            <h3 className="text-white text-xl font-medium">Hơn 30 năm tận tâm phục vụ Nông Nghiệp Việt</h3>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Về Đại Lý <span className="text-primary">1993</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Trải qua quá trình hình thành và phát triển lâu năm, <strong className="text-gray-900">Đại Lý Vật Tư Nông Nghiệp 1993</strong> tự hào là đối tác tin cậy vững chắc của hàng nghìn bà con nông dân trong khu vực.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Thấu hiểu những khó khăn vất vả của nghề nông, chúng tôi luôn trăn trở để mang đến những sản phẩm nông nghiệp tốt nhất, góp phần cho những vụ mùa bội thu, mang lại giá trị kinh tế cao cho nhà nông.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {commitments.map((item, index) => (
                                <div key={index} className="flex gap-3 items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 transition-colors">
                                    {item.icon}
                                    <p className="text-gray-700 font-medium">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sản Phẩm Kinh Doanh</h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Đại Lý 1993 cung cấp đa dạng và đầy đủ các danh mục sản phẩm phục vụ cho mọi nhu cầu sản xuất nông nghiệp.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white border text-center p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-gray-100"
                        >
                            <div className="w-20 h-20 mx-auto bg-green-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                                {product.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{product.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
