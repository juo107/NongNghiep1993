import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Trang chủ', href: '#home' },
        { name: 'Giới thiệu', href: '#about' },
        { name: 'Chi nhánh', href: '#branches' },
        { name: 'Liên hệ', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-4 md:py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-7xl">
                <a href="#home" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-lg text-white group-hover:bg-primary-dark transition-colors">
                        <Leaf size={24} />
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-gray-800">
                        Nông Nghiệp <span className="text-primary">1993</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-medium text-gray-600 hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 border-t border-gray-100' : 'max-h-0'
                    }`}
            >
                <ul className="flex flex-col px-4 py-2">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="block py-3 text-gray-700 hover:text-primary font-medium border-b border-gray-50 last:border-none"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
