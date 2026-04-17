"use client";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { AppInstallContext } from "@/app/Context/AppInstallContext";




const Installation = () => {
    const { installedApps: contextInstalledApps } = useContext(AppInstallContext);
    const [installedApps, setInstalledApps] = useState([]);
    const [uninstallingId, setUninstallingId] = useState(null);

    useEffect(() => {
        setInstalledApps(contextInstalledApps);
    }, [contextInstalledApps]);

    const handleUninstall = (appId, appTitle) => {
        setUninstallingId(appId);
        setTimeout(() => {
            setInstalledApps(installedApps.filter(app => app.id !== appId));
            setUninstallingId(null);
        }, 1000);
    };

    return (
        <section className="bg-white">
            <div className="bg-[#f5f5f5] py-6 md:py-8 mb-6 md:mb-8 text-center">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0B2945] mb-1 md:mb-2">Your Installed Apps</h1>
                <p className="text-gray-500 text-xs md:text-sm lg:text-base">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 pb-8 md:pb-12">
                <div className="mb-4 md:mb-6">
                    <p className="font-semibold text-gray-700 text-sm md:text-base">{installedApps.length} Apps Found</p>
                </div>

                {installedApps.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No apps installed yet.</p>
                    </div>
                ) : (
                    <div className="space-y-2 md:space-y-3">
                        {installedApps.map((app) => (
                            <div key={app.id} className="bg-white p-3 md:p-4 rounded border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 md:gap-4 flex-1">
                                    <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-100 rounded overflow-hidden shrink-0">
                                        <Image src={app.image} alt={app.title} width={64} height={64} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xs md:text-sm lg:text-base font-semibold text-[#0B2945]">{app.title}</h3>
                                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1 md:mt-2 text-[10px] md:text-xs lg:text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <FiDownload className="text-[#10b981]" />
                                                <span>{app.downloads}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaStar className="text-[#f59e0b]" />
                                                <span>{app.ratingAvg}</span>
                                            </div>
                                            <span>{app.size} MB</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleUninstall(app.id, app.title)}
                                    disabled={uninstallingId === app.id}
                                    className={`${uninstallingId === app.id
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-red-600 hover:bg-red-700'
                                        } text-white font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded text-xs md:text-sm shrink-0 flex items-center gap-1 md:gap-2 justify-center md:justify-start`}
                                >
                                    {uninstallingId === app.id ? (
                                        <>
                                            <div className="animate-spin">
                                                <div className="h-3 w-3 md:h-4 md:w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                            </div>
                                            <span className="text-xs md:text-sm">Uninstalling...</span>
                                        </>
                                    ) : (
                                        <span className="text-xs md:text-sm">Uninstall</span>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Installation;