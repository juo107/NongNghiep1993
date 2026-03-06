import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';

const Branches = () => {
    const branches = [
        {
            id: 1,
            name: "Chi nhánh Phú Riềng (Trụ sở)",
            address: "Phú Riềng, Bình Phước",
            phone: "0901 234 567",
            mapLink: "https://share.google/WbHNEve42qx40bt5K",
        },
        {
            id: 2,
            name: "Chi nhánh Long Tân",
            address: "Long Tân, Phú Riềng, Bình Phước",
            phone: "0902 345 678",
            mapLink: "https://share.google/osHQ0s6FhGBk5RzF2",
        },
        {
            id: 3,
            name: "Chi nhánh Long Bình",
            address: "Long Bình, Phú Riềng, Bình Phước",
            phone: "0903 456 789",
            mapLink: "https://share.google/hMA8Mnc9XLJM9JV5b",
        },
        {
            id: 4,
            name: "Chi nhánh Long Hưng",
            address: "Long Hưng, Phú Riềng, Bình Phước",
            phone: "0904 567 890",
            mapLink: "https://share.google/eARy4osL6ul1olzoj",
        },
    ];

    return (
        <section id="branches" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Địa Chỉ Chi Nhánh</h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Hệ thống đại lý vật tư nông nghiệp 1993 luôn sẵn sàng phục vụ bà con nông dân.
                    </p>
                </div>

                {/* Branches Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {branches.map((branch) => (
                        <div
                            key={branch.id}
                            className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-green-50 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{branch.name}</h3>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="flex items-start gap-3 text-gray-600">
                                    <MapPin size={18} className="mt-1 shrink-0 text-gray-400" />
                                    <span className="leading-relaxed">{branch.address}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Phone size={18} className="shrink-0 text-gray-400" />
                                    <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="font-medium hover:text-primary transition-colors">{branch.phone}</a>
                                </div>
                            </div>

                            <a
                                href={branch.mapLink}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full inline-flex justify-center items-center gap-2 bg-gray-50 hover:bg-primary text-gray-700 hover:text-white px-6 py-3.5 rounded-xl font-semibold transition-colors mt-auto border border-gray-100 hover:border-primary"
                            >
                                <Navigation size={18} />
                                Xem bản đồ
                            </a>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default Branches;
