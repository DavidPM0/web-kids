"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PartyGenieChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se implementará la funcionalidad del backend más adelante
    console.log("Mensaje enviado:", message);
    // Por ahora solo limpiamos el campo
    setMessage("");
  };

  return (
    <>
      {/* Botón flotante del genio */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 bg-[#F8BD36] hover:bg-[#f7a600] rounded-full p-2 border-2 border-[#000000] shadow-[4px_4px_0_#000000] transition-all duration-300 hover:scale-110 hover:cursor-pointer ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        aria-label="Abrir Party Genie"
      >
        <div className="relative w-16 h-16">
          <Image
            src="/party-genie.png"
            alt="Party Genie"
            width={64}
            height={64}
            className="object-contain"
          />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#1C3658] rounded-full animate-ping" />
        </div>
      </button>

      {/* Ventana de chat */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="bg-[#FBF2E0] border-2 border-[#000000] shadow-[6px_6px_0_#000000] rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#F8BD36] p-4 flex items-center justify-between border-b-2 border-[#000000]">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1 border-2 border-[#1C3658]">
                <Image
                  src="/party-genie.png"
                  alt="Party Genie"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#1C3658] text-lg">
                  Party Genie
                </h3>
                <p className="text-xs text-[#1C3658]">Your magical assistant</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-[#1C3658] hover:text-[#0E2A47] transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 bg-[#FBF2E0]">
            <div className="bg-white border-2 border-[#1C3658] rounded-lg p-4 mb-4 shadow-[2px_2px_0_#1C3658]">
              <div className="flex gap-3 mb-3">
                <div className="bg-[#F8BD36] rounded-full p-1 border border-[#1C3658] h-fit">
                  <Image
                    src="/party-genie.png"
                    alt="Party Genie"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#1C3658] text-sm leading-relaxed">
                    You have awakened the genie. Now, detail your heart&apos;s
                    desire: What is this perfect party you wish for? Speak, and
                    I shall reveal the path to make it reality! ✨
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your perfect party here..."
                  className="w-full px-3 py-3 border-2 border-[#1C3658] rounded-lg text-[#1C3658] placeholder:text-[#1C3658]/50 focus:outline-none focus:ring-2 focus:ring-[#F8BD36] focus:border-[#F8BD36] resize-none bg-white"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#1C3658] hover:bg-[#0E2A47] text-[#FBF2E0] font-semibold py-3 rounded-lg border-2 border-[#000000] shadow-[3px_3px_0_#000000] transition-all hover:shadow-[2px_2px_0_#000000] hover:translate-x-[1px] hover:translate-y-[1px] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-[#1C3658] px-4 py-2 border-t-2 border-[#000000]">
            <p className="text-xs text-[#FBF2E0] text-center">
              Feature in development 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
