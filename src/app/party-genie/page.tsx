import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PartyGenie() {
  return (
    <section className="min-h-screen text-[#1C3658]">
      {/* Header con fondo azul y estrellas */}
      <section className="bg-[#1C3658] py-28 text-center relative overflow-hidden">
        <div className="absolute bg-[url('/bnr-izquierdo.png')] bg-no-repeat bg-contain z-0 top-0 left-0 w-150 h-100" />
        <div className="absolute top-4 left-80 w-24 h-24 bg-[url('/bee-izquierda.png')] bg-no-repeat bg-contain z-1" />
        <div className="absolute top-32 left-40 w-40 h-40 bg-[url('/bnr-no.png')] bg-no-repeat bg-contain z-1" />
        <div className="relative z-10">
          <h1 className="text-[#FBF2E0] text-4xl font-bold">Party Genie</h1>
          <p className="text-[#FBF2E0] mt-2 text-lg">Home &gt; Party Genie</p>
        </div>
        <div className="absolute top-4 right-80 w-24 h-24 bg-[url('/bee-derecha.png')] bg-no-repeat bg-contain z-1" />
        <div className="absolute top-32 right-40 w-40 h-40 bg-[url('/bnr-na.png')] bg-no-repeat bg-contain z-1" />
        <div className="absolute bg-[url('/bnr-derecha.png')] bg-no-repeat bg-contain z-0 top-0 right-0 w-150 h-100" />
      </section>

      {/* Sección principal */}
      <section className="py-44 px-40 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen del genio */}
          <div className="flex justify-center">
            <img
              src="/party-genie.png" // Cambia al path real de tu imagen
              alt="Party Genie"
              className=""
            />
          </div>

          {/* Formulario */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Let the Party Genie Plan It:
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              There Are Many Variations Of Passages Of Lorem Ipsum Available,
              But The Majority Have Suffered Alteration In Some Form. By
              Injected Humour, Or Randomised Words Which Don’t Look Even
              Slightly Believable. If You Are Going To Use A Passage Of Lorem
              Ipsum, You Need To Be Sure There Isn’t Anything Embarrassing
              Hidden In The Middle Of Text.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              />
              <textarea
                placeholder="Additional Message"
                rows={4}
                className="w-full px-3 py-2 border border-[#1C3658] text-[#1C3658] focus:outline-none focus:ring-2 focus:ring-[#1C3658]"
              ></textarea>

              <div>
                <Button variant="golden" size="golden" type="submit">
                  EXPLORE MORE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
