'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Mylink = ({ href, label, className = '' }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <>
        </>
    )
};
export default Mylink;