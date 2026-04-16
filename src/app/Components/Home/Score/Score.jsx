import React from 'react'

const stats = [
    { label: 'Total Downloads', value: '29.6M', note: '21% More Than Last Month' },
    { label: 'Total Reviews', value: '906K', note: '46% More Than Last Month' },
    { label: 'Active Apps', value: '132+', note: '31 More Will Launch' }
]

const Score = () => {
    return (
        <section className="bg-linear-to-r from-purple-600 to-purple-400 text-white py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-center text-lg md:text-2xl lg:text-3xl font-extrabold">Trusted By Millions, Built For You</h2>

                <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <div className="text-xs md:text-sm tracking-wider opacity-90">{s.label}</div>
                            <div className="mt-2 md:mt-3 text-2xl md:text-4xl lg:text-5xl font-extrabold">{s.value}</div>
                            <div className="mt-1 md:mt-2 text-xs opacity-80">{s.note}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Score