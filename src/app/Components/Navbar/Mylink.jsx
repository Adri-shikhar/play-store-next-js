'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Mylink = ({ href, label, className = '' }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`
                px-1 py-1 rounded-lg text-base font-medium transition-all duration-300
                ${isActive
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }
                ${className}
            `}
        >
            {label}
        </Link>
    );
};
export default Mylink;