import React from 'react';
import AppInstallProvider from '@/app/Context/AppInstallContext';

const Providers = ({ children }) => {
    return (
        <AppInstallProvider>
            {children}
        </AppInstallProvider>
    );
};

export default Providers;