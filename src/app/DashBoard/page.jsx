"use client";
import { useContext } from "react";
import { AppInstallContext } from "../Context/AppInstallContext";

const DashBoard = () => {
    const { installedApps } = useContext(AppInstallContext);
    console.log("Installed Apps in Dashboard:", installedApps);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">Dashboard Page</h1>
        </div>
    );
};

export default DashBoard;