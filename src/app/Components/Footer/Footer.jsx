import React from 'react';
import logo from '@/app/assets/images/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
          <footer className="w-full bg-[#071A2A] text-white">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Image src={logo} alt="HERO.IO" className="w-6 h-6" />
                        <span className="font-semibold">HERO.IO</span>
                    </div>

                    <div className="text-sm text-gray-300">
                        Copyright © 2025 - All right reserved
                    </div>

                    <div className="text-right">
                        <div className="text-sm text-gray-300 mb-2">Social Links</div>
                        <div className="flex items-center gap-2">
                            <a href="#" aria-label="Twitter" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.17 0-.34-.01-.51A7.72 7.72 0 0023 3z" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4V8h4v2a4 4 0 014-2zM2 9h4v11H2z" /></svg>
                            </a>
                            <a href="#" aria-label="Facebook" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor"><path d="M22 12a10 10 0 10-11.66 9.87v-6.99H8.5v-2.88h1.84V9.5c0-1.8 1.07-2.8 2.7-2.8.78 0 1.6.14 1.6.14v1.76h-.9c-.9 0-1.18.56-1.18 1.13v1.36h2l-.32 2.88h-1.68v6.99A10 10 0 0022 12z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;