'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                    <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                            <svg
                                className="w-8 h-8 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="mb-2 text-4xl font-extrabold text-blue-600">
                        404
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Page Not Found
                    </h1>

                    <p className="text-gray-600 mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    <div className="space-y-3">
                        <p className="text-sm text-gray-500 mb-6">
                            Here are some helpful links instead:
                        </p>

                        <Link
                            href="/"
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors text-center"
                        >
                            Go to Home
                        </Link>

                        <Link
                            href="/Apps"
                            className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition-colors text-center"
                        >
                            Browse Apps
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-2 px-4 rounded transition-colors"
                        >
                            Go Back
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-8">
                        If you think this is an error, please contact support.
                    </p>
                </div>
            </div>
        </div>
    );
}
