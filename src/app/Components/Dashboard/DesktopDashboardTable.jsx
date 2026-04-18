import Image from "next/image";

const DesktopDashboardTable = ({ installedApps }) => {
    return (
        <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:block">
            <table className="w-full">
                <thead className="bg-[#f7f9fc] text-left text-sm text-[#0B2945]">
                    <tr>
                        <th className="px-5 py-4 font-semibold">Application</th>
                        <th className="px-5 py-4 font-semibold">Developer</th>
                        <th className="px-5 py-4 font-semibold">Storage</th>
                        <th className="px-5 py-4 font-semibold">Rating</th>
                        <th className="px-5 py-4 font-semibold">Downloads</th>
                    </tr>
                </thead>

                <tbody>
                    {installedApps.map((app) => (
                        <tr key={app.id} className="border-t border-gray-100 text-sm text-gray-700">
                            <td className="px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                                        <Image
                                            src={app.image}
                                            alt={app.title}
                                            width={48}
                                            height={48}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <p className="font-semibold text-[#0B2945]">{app.title}</p>
                                </div>
                            </td>
                            <td className="px-5 py-4">{app.companyName}</td>
                            <td className="px-5 py-4">{app.size} MB</td>
                            <td className="px-5 py-4">{app.ratingAvg}</td>
                            <td className="px-5 py-4">{app.downloads}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DesktopDashboardTable;
