import Image from "next/image";

const MobileDashboardCards = ({ installedApps }) => {
    return (
        <div className="space-y-3 md:hidden">
            {installedApps.map((app) => (
                <article key={app.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={app.image}
                                alt={app.title}
                                width={56}
                                height={56}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-[#0B2945]">{app.title}</h3>
                            <p className="text-xs text-gray-500">{app.companyName}</p>
                        </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-gray-600">
                        <div className="rounded bg-[#f7f9fc] p-2">
                            <p className="text-[11px] text-gray-500">Size</p>
                            <p className="font-semibold text-[#0B2945]">{app.size} MB</p>
                        </div>
                        <div className="rounded bg-[#f7f9fc] p-2">
                            <p className="text-[11px] text-gray-500">Rating</p>
                            <p className="font-semibold text-[#0B2945]">{app.ratingAvg}</p>
                        </div>
                        <div className="rounded bg-[#f7f9fc] p-2">
                            <p className="text-[11px] text-gray-500">Downloads</p>
                            <p className="font-semibold text-[#0B2945]">{app.downloads}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default MobileDashboardCards;
