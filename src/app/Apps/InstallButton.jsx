"use client"
import { useState, useContext } from "react";
import { AppInstallContext } from "../Context/AppInstallContext";

export default function InstallButton({ app }) {
    const [isInstalling, setIsInstalling] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);
    const { installedApps, setInstalledApps } = useContext(AppInstallContext);

    const handleInstall = async () => {
        setIsInstalling(true);
        try {
            // Simulate install delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsInstalled(true);
            setInstalledApps([...installedApps, app]);
            console.log("Install successful!");

            setIsInstalling(false);
        } catch (error) {
            console.error("Install failed:", error);
            setIsInstalling(false);
        }
    };
    console.log("Installed Apps:", installedApps);

    return (
        <button
            onClick={handleInstall}
            disabled={isInstalling || isInstalled}
            className={`mt-3 md:mt-4 ${isInstalling
                ? 'bg-gray-400 cursor-not-allowed'
                : isInstalled
                    ? 'bg-green-500 cursor-default'
                    : 'bg-[#14c886] hover:bg-[#0fb175]'
                } text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 md:py-2.5 rounded flex items-center gap-2 w-full md:w-auto justify-center md:justify-start transition-all`}
        >
            {isInstalled ? (
                <>
                    <span className="text-base md:text-lg">✓</span>
                    <span className="hidden sm:inline">Installed</span>
                </>
            ) : isInstalling ? (
                <>
                    <div className="animate-spin">
                        <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    </div>
                    <span className="text-xs md:text-sm">Installing...</span>
                </>
            ) : (
                <span>Install Now ({app.size} MB)</span>
            )}
        </button>
    );
}
