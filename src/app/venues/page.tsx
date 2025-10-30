"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function VenuesPage() {
  const venues = [
    { id: 1, date: "15 AUG", img: "/venue1.jpg" },
    { id: 2, date: "11 SEP", img: "/venue2.jpg" },
    { id: 3, date: "11 SEP", img: "/venue1.jpg" },
    { id: 4, date: "11 SEP", img: "/venue2.jpg" },
    { id: 5, date: "11 SEP", img: "/venue1.jpg" },
  ];

  const categories = [
    "New Arrivals",
    "Boys Upto 3 Years",
    "Girls Upto 3 Years",
    "Accessories",
    "Soft Toys",
    "Baby Beeding",
    "Safety Equipments",
  ];

  return (
    <div className="min-h-screen text-[#1C3658]">
      {/* Encabezado superior */}
      <section className="bg-[#1C3658] py-28 text-center relative overflow-hidden">
        <div className="absolute bg-[url('/bnr-izquierdo.png')] bg-no-repeat bg-contain z-0 top-0 left-0 w-150 h-100" />
        <div className="absolute top-4 left-80 w-24 h-24 bg-[url('/bee-izquierda.png')] bg-no-repeat bg-contain z-1" />
        <div className="absolute top-32 left-40 w-40 h-40 bg-[url('/bnr-no.png')] bg-no-repeat bg-contain z-1" />
        <div className="relative z-10">
          <h1 className="text-[#FBF2E0] text-4xl font-bold">Venues</h1>
          <p className="text-[#FBF2E0] mt-2 text-lg">Home &gt; Venues</p>
        </div>
        <div className="absolute top-4 right-80 w-24 h-24 bg-[url('/bee-derecha.png')] bg-no-repeat bg-contain z-1" />
        <div className="absolute top-32 right-40 w-40 h-40 bg-[url('/bnr-na.png')] bg-no-repeat bg-contain z-1" />
        <div className="absolute bg-[url('/bnr-derecha.png')] bg-no-repeat bg-contain z-0 top-0 right-0 w-150 h-100" />
      </section>

      {/* Contenido principal */}
      <div className="py-44 flex flex-col md:flex-row gap-10 px-40">
        {/* Sidebar izquierda */}
        <aside className="bg-[#F8BD36] p-6 w-full md:w-1/3 lg:w-1/3 border border-[#000000] shadow-[3px_3px_0_#000000] self-start">
          {/* Mapa encima de los filtros */}
          <div className="relative h-[250px] mb-6 grayscale">
            <iframe
              src="https://www.google.com/maps?q=New+York&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-none rounded-lg"
            ></iframe>
          </div>

          <ul className="space-y-4">
            {categories.map((cat, i) => (
              <li
                key={i}
                className={`${
                  i === 0
                    ? "bg-[#0E2A47] text-white font-semibold rounded-full px-5 py-3 text-center"
                    : "text-[#0E2A47] font-semibold hover:text-[#1C3E6E] cursor-pointer"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Lista de venues */}
        <section className="flex-1 space-y-10">
          {venues.map((v) => (
            <div
              key={v.id}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-transparent"
            >
              <div className="relative">
                <Image
                  src={v.img}
                  alt="Venue"
                  width={300}
                  height={200}
                  className="rounded-2xl object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#0E2A47] text-white text-sm px-3 py-1 rounded-lg font-semibold">
                  {v.date}
                </span>
              </div>

              <div className="flex-1">
                <h2 className="text-3xl">Altitude Trampoline Park – Katy</h2>
                <ul className="text-base">
                  <li>Theme Tags: Trampoline, Active, Indoor</li>
                  <li>Theme Tags: Trampoline, Active, Indoor</li>
                </ul>
                <p className="text-lg">
                  Perfect for young adventurers, Altitude Trampoline Park – Katy
                  brings trampoline, active, indoor experiences to families in
                  Katy.
                </p>

                {/* Contenedor para los botones */}
                <div className="flex gap-4 pt-4">
                  <Button variant="golden" size="golden">
                    <Link href="/venues/aaa-shdsahda">View Profile</Link>
                  </Button>
                  <Button variant="golden" size="golden" asChild>
                    <Link
                      href="https://www.youtube.com/watch?v=vHTITVXyNSE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check availability/Book
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Paginación */}
          <div className="flex justify-center space-x-2 pt-8">
            <button className="bg-[#0E2A47] text-white px-3 py-1 rounded-full">
              1
            </button>
            <button className="bg-white text-[#0E2A47] px-3 py-1 rounded-full">
              2
            </button>
            <button className="bg-white text-[#0E2A47] px-3 py-1 rounded-full">
              3
            </button>
            <button className="bg-white text-[#0E2A47] px-3 py-1 rounded-full">
              &rarr;
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
