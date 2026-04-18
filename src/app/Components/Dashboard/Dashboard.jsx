"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppInstallContext } from "@/app/Context/AppInstallContext";
import DesktopDashboardTable from "./DesktopDashboardTable";
import MobileDashboardCards from "./MobileDashboardCards";

const Dashboard = () => {
    const { installedApps } = useContext(AppInstallContext);
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const loadApps = async () => {
            const response = await fetch("/data.json");
            const result = await response.json();
            setApps(result);
        };

        loadApps();
    }, []);

    const stats = useMemo(() => {
        const totalInstalled = installedApps.length;
        const totalStorage = installedApps.reduce((sum, app) => sum + Number(app.size || 0), 0);
        const averageRating = totalInstalled
            ? (
                installedApps.reduce((sum, app) => sum + Number(app.ratingAvg || 0), 0) / totalInstalled
            ).toFixed(1)
            : "0.0";

        return [
            { label: "Installed Apps", value: totalInstalled },
            { label: "Used Storage", value: `${totalStorage} MB` },
            { label: "Average Rating", value: averageRating },
        ];
    }, [installedApps]);

    const recommendedApps = useMemo(() => {
        const installedIds = new Set(installedApps.map((app) => app.id));
        return apps.filter((app) => !installedIds.has(app.id)).slice(0, 4);
    }, [apps, installedApps]);

    return (
        <section className="min-h-screen bg-[#f6f8fb] py-8 md:py-12">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="rounded-2xl bg-linear-to-r from-[#0B2945] to-[#16456d] px-5 py-8 text-white md:px-8">
                    <p className="text-sm text-[#9fc7e9]">Control Center</p>
                    <h1 className="mt-2 text-2xl font-extrabold md:text-4xl">Your App Dashboard</h1>
                    <p className="mt-2 max-w-2xl text-sm text-[#d3e7fa] md:text-base">
                        Track installed applications, review key metrics, and discover what to install next.
                    </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {stats.map((item) => (
                        <article key={item.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                            <p className="text-sm text-gray-500">{item.label}</p>
                            <p className="mt-1 text-2xl font-bold text-[#0B2945]">{item.value}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-8">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#0B2945] md:text-2xl">Installed Applications</h2>
                        <Link
                            href="/Installation"
                            className="rounded-md bg-[#14c886] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0fb175] md:text-sm"
                        >
                            Manage Apps
                        </Link>
                    </div>

                    {installedApps.length ? (
                        <>
                            <MobileDashboardCards installedApps={installedApps} />
                            <DesktopDashboardTable installedApps={installedApps} />
                        </>
                    ) : (
                        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
                            <h3 className="text-lg font-semibold text-[#0B2945]">No apps installed yet</h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Install apps first to see your dashboard insights.
                            </p>
                            <Link
                                href="/Apps"
                                className="mt-4 inline-block rounded-md bg-[#0B2945] px-4 py-2 text-sm font-semibold text-white"
                            >
                                Browse Apps
                            </Link>
                        </div>
                    )}
                </div>

                {recommendedApps.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-xl font-bold text-[#0B2945] md:text-2xl">Recommended For You</h2>
                        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                            {recommendedApps.map((app) => (
                                <Link
                                    key={app.id}
                                    href={`/Apps/${app.id}`}
                                    className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-transform hover:-translate-y-1"
                                >
                                    <p className="truncate text-sm font-semibold text-[#0B2945]">{app.title}</p>
                                    <p className="mt-1 text-xs text-gray-500">{app.companyName}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Dashboard;
