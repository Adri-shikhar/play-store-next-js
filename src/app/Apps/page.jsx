
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Apps = async () => {

    const api = 'http://localhost:3000/data.json';
    const data = await fetch(api).then(res => res.json());
    console.log(data);

    return (
        <div className="min-h-screen bg-[#f6f6f6] px-4 py-12 md:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0f2f4f]">
                        Our All Applications
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-[#6b7280]">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                <div className="mt-14 flex items-end justify-between">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f2f4f]">
                        ({data.length}) Apps Found
                    </h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.map((app) => (
                        <Link href={`/Apps/${app.id}`} key={app.id}>
                            <div className="rounded-lg border border-[#e6e6e6] bg-white p-3 shadow-sm">
                                <div className="h-48 rounded bg-[#d9d9d9] overflow-hidden">
                                    <Image
                                        src={app.image}
                                        alt={app.title}
                                        width={400}
                                        height={240}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <h3 className="mt-3 text-[18px] font-semibold text-[#132a42] truncate">
                                    {app.title}
                                </h3>

                                <div className="mt-3 flex items-center justify-between">
                                    <span className="inline-flex items-center gap-1 rounded bg-[#e7fff1] px-3 py-1 text-[14px] text-[#00b65b]">
                                        <span>↓</span>
                                        <span>{app.downloads}</span>
                                    </span>

                                    <span className="inline-flex items-center gap-1 rounded bg-[#fff3e8] px-3 py-1 text-[14px] text-[#ff9c2f]">
                                        <span>★</span>
                                        <span>{app.ratingAvg}</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Apps;