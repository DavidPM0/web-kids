// src/components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      {/*  TODO: Manteniendo por mientras Top Bar Amarilla */}
      {/* <div className="bg-[#F8BD36] text-[#1C3658] text-sm px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Instagram">
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="h-5 w-5"
            />
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

        
        <div className="text-center flex-1">
          <span className="font-medium">
            FREE DELIVERIES WORLDWIDE! FOR MORE INFO CLICK HERE
          </span>
        </div>

        
        <div className="w-24" />
      </div> */}

      {/* Main Navigation - Estilo Expedia */}
      <nav className="bg-[#FBF2E0] px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo a la izquierda */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-cortado.png"
              alt="BashWish"
              className="h-16 w-auto"
            />
          </Link>

          {/* Navegación principal a la derecha */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/venues"
              className="text-[#1C3658] font-semibold hover:text-[#F8BD36] transition-colors px-4 py-2 rounded-lg hover:bg-[#F8BD36]/10"
            >
              Venues
            </Link>

            <Link
              href="/book-venue"
              className="text-[#1C3658] font-semibold hover:text-[#F8BD36] transition-colors px-4 py-2 rounded-lg hover:bg-[#F8BD36]/10"
            >
              Book Venue
            </Link>

            <Link
              href="/party-genie"
              className="text-[#1C3658] font-semibold hover:text-[#F8BD36] transition-colors px-4 py-2 rounded-lg hover:bg-[#F8BD36]/10"
            >
              Party Genie
            </Link>

            <Link
              href="/login"
              className="text-[#1C3658] font-semibold hover:text-[#F8BD36] transition-colors px-4 py-2 rounded-lg hover:bg-[#F8BD36]/10"
            >
              Sign in
            </Link>

            {/* Botón List your property al estilo Expedia */}
            <Link
              href="/list-property"
              className="bg-[#F8BD36] text-[#1C3658] font-semibold px-4 py-2 rounded-lg border border-[#000000] shadow-[2px_2px_0_#000000] hover:bg-[#f7a600] transition-colors"
            >
              List your venue
            </Link>
          </div>

          {/* Menú móvil - placeholder */}
          <div className="md:hidden">
            <button className="text-[#1C3658] font-semibold">☰</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
