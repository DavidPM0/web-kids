// src/components/Header.tsx
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      {/* Top Bar */}
      <div className="bg-[#F8BD36] text-[#1C3658] text-sm px-40 py-4 flex items-center justify-between">
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" className="h-5 w-5" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src="/icons/youtube.svg" alt="YouTube" className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="/icons/twitter.svg" alt="Twitter" className="h-5 w-5" />
          </a>
        </div>

        {/* Centered Message */}
        <div className="text-center flex-1">
          <span className="font-medium">FREE DELIVERIES WORLDWIDE! FOR MORE INFO CLICK HERE</span>
        </div>

        {/* Spacer to balance layout */}
        <div className="w-24" />
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#FBF2E0] border-t border-b border-black">
        <div className="grid grid-cols-5 text-center">
          <Link
            href="/"
            className="py-4 border-r border-l border-black hover:bg-[#F8BD36] font-semibold flex items-center justify-center"
          >
            HOME
          </Link>

          <Link
            href="/venues"
            className="py-4 border-r border-black hover:bg-[#F8BD36] font-semibold flex items-center justify-center"
          >
            VENUES
          </Link>

          {/* Center Logo */}
          <div className="border-r border-black flex flex-col items-center justify-center">
            <img src="/logo.png" alt="BashWish" className="h-24 w-auto" />
          </div>

          <Link
            href="/book-venue"
            className="py-4 border-r border-black hover:bg-[#F8BD36] font-semibold flex items-center justify-center"
          >
            BOOK VENUE
          </Link>

          <Link
            href="/party-genie"
            className="py-4 border-r border-black hover:bg-[#F8BD36] font-semibold flex items-center justify-center"
          >
            PARTY GENIE
          </Link>
        </div>
      </nav>
    </header>
  );
}
