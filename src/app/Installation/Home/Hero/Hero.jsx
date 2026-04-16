import React from 'react'
import heroImg from '../../../assets/images/hero.png'


const Hero = () => {
    return (
        <section className="bg-gray-50 pb-0">
            <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-14 text-center">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-slate-800">We Build</h2>
                <h1 className="mt-2 text-2xl md:text-4xl lg:text-6xl font-extrabold">
                    <span className="text-purple-600">Productive</span>
                    <span className="ml-2 md:ml-3 text-slate-800">Apps</span>
                </h1>

                <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                <div className="mt-4 md:mt-6 flex justify-center gap-2 md:gap-4 flex-wrap">
                    <button className="inline-flex items-center gap-2 bg-white border rounded-md px-3 md:px-4 py-1.5 md:py-2 shadow-sm text-xs md:text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.9 2.6L20.5 11.4 3.9 20.2 3.9 2.6z" fill="#3BCC5B" />
                        </svg>
                        <span className="text-sm font-medium">Google Play</span>
                    </button>
                    <button className="inline-flex items-center gap-2 bg-white border rounded-md px-3 md:px-4 py-1.5 md:py-2 shadow-sm text-xs md:text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="20" height="20" rx="4" fill="#E6F0FF" />
                            <path d="M9 7c.6-1 1.9-2 3.5-1.8 1.2.1 2.3 1 2.7 2.1.4 1.1.1 2.2-.7 3.1-.6.7-1.7 1.7-3.2 1.6-1.1-.1-2.1-.6-2.7-1.3-.8-1-1-2.7-.1-3.7.5-.6 1.1-.9 1.5-.9.3 0 .7.1 1.1.2.3.1.6.2.9.2.1 0 .2-.1.2-.2.1-.2 0-.5-.1-.7C11.6 7.6 10.3 7.1 9 7z" fill="#1E3A8A" />
                        </svg>
                        <span className="font-medium">App Store</span>
                    </button>
                </div>

                <div className="mt-8 md:mt-12 relative flex justify-center">
                    <img src={heroImg} alt="App preview" className="mx-auto block w-64 sm:w-72 md:w-96 lg:w-136" />


                </div>
            </div>
        </section>
    )
}

export default Hero