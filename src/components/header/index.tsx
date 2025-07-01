import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gray-800 border-b border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-blue-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 3h18v18H3V3z" strokeLinejoin="round" />
            <path d="M8 8h8v8H8V8z" strokeLinejoin="round" />
          </svg>
          <span className="text-lg font-semibold text-blue-200">VitrineX</span>
        </Link>
        <nav className="flex space-x-6">
          <Link href="/" className="text-white hover:text-blue-200 transition">
            Início
          </Link>
          <Link
            href="/ofertas"
            className="text-white hover:text-blue-200 transition"
          >
            Ofertas
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
