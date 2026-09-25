"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1F3A5F]/95 backdrop-blur-md z-40 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo / Nombre */}
        <Link
          href="/"
          className="font-extrabold tracking-wide text-lg text-[#F9F6F1] hover:text-white transition-colors"
        >
          Gaudencio Rodríguez J.
        </Link>

        {/* --- MENÚ ESCRITORIO --- */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/sobre-mi" className="relative group py-1">
            <span className="text-[#F9F6F1] text-sm md:text-base font-semibold tracking-wider transition-colors group-hover:text-white">
              Un poco sobre mí
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#E85D2A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          </Link>
          
          <Link href="/libros" className="relative group py-1">
            <span className="text-[#F9F6F1] text-sm md:text-base font-semibold tracking-wider transition-colors group-hover:text-white">
              Libros
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#E85D2A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          </Link>

          <Link href="/contenido" className="relative group py-1">
            <span className="text-[#F9F6F1] text-sm md:text-base font-semibold tracking-wider transition-colors group-hover:text-white">
              Contenido
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#E85D2A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          </Link>

          <Link href="/para-leer" className="relative group py-1">
            <span className="text-[#F9F6F1] text-sm md:text-base font-semibold tracking-wider transition-colors group-hover:text-white">
              Para leer
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#E85D2A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          </Link>

          <Link href="/contrataciones" className="relative group py-1">
            <span className="text-[#F9F6F1] text-sm md:text-base font-semibold tracking-wider transition-colors group-hover:text-white">
              Contrataciones
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#E85D2A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          </Link>
        </div>

        {/* --- BOTÓN MENÚ MÓVIL --- */}
        <button
          type="button"
          className="md:hidden text-[#F9F6F1] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D2A] rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 transition-transform duration-300 rotate-90">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
      <div
        id="menu-movil"
        className={`md:hidden bg-[#1F3A5F] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] border-t border-white/10 shadow-xl" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-5">
          <Link href="/sobre-mi" onClick={closeMenu} className="text-[#F9F6F1] font-semibold hover:text-[#E85D2A] transition-colors duration-200">
            Un poco sobre mí
          </Link>
          <Link href="/libros" onClick={closeMenu} className="text-[#F9F6F1] font-semibold hover:text-[#E85D2A] transition-colors duration-200">
            Libros
          </Link>
          <Link href="/contenido" onClick={closeMenu} className="text-[#F9F6F1] font-semibold hover:text-[#E85D2A] transition-colors duration-200">
            Contenido
          </Link>
          <Link href="/para-leer" onClick={closeMenu} className="text-[#F9F6F1] font-semibold hover:text-[#E85D2A] transition-colors duration-200">
            Para leer
          </Link>
          <Link href="/contrataciones" onClick={closeMenu} className="text-[#F9F6F1] font-semibold hover:text-[#E85D2A] transition-colors duration-200">
            Contrataciones
          </Link>
        </div>
      </div>
    </nav>
  );
}