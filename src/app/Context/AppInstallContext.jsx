"use client";

import { createContext } from "react";

import { useState } from "react";

export const AppInstallContext = createContext();


const AppInstallProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState([]);

    const value = {
        installedApps,
        setInstalledApps,
    };

    return (
        <AppInstallContext.Provider value={value}>
            {children}
        </AppInstallContext.Provider>
    );
};

export default AppInstallProvider;