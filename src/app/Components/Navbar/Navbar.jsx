import React from 'react';
import Image from 'next/image';
import logo from '@/app/assets/images/logo.png';
import githubIcon from '@/app/assets/github.svg';
import Mylink from './Mylink';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/Apps', label: 'Apps' },
    { href: '/Installation', label: 'Installation' },
    { href: '/DashBoard', label: 'Dashboard' }
];


const Navbar = () => {
    return (
        <nav className="w-full bg-white border-b border-gray-200 relative z-40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center h-16 justify-between">
                    <div className="flex items-center gap-3">
                        <Image src={logo} alt="Hero logo" className="w-8 h-8" />
                        <span className="text-purple-600 font-bold tracking-wide">HERO.IO</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex space-x-8">
                            {navLinks.map(link => (
                                <Mylink key={link.href} href={link.href} label={link.label} />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Contribute Button */}
                    <div className="hidden md:block ml-auto">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-full flex items-center gap-2">
                            <Image src={githubIcon} alt="Contribute" className="w-4 h-4" />
                            <span className="text-sm">Contribute</span>
                        </button>
                    </div>


                </div>
            </div>
        </nav>
    );
};


export default Navbar;