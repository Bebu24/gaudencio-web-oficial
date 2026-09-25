"use client";

import { useEffect, useState } from "react";
import { books, Book } from "@/app/data/libros";
import BookCard from "@/components/BookCard";
import Toast from "@/components/Toast";

// --- Compra temporal por correo (mientras no hay pagos en línea) ---

function mensajeDeCompra(book: Book) {
  return {
    asunto: `Quiero comprar el libro "${book.title}"`,
    cuerpo: `Hola, me interesa comprar el libro "${book.title}".`,
  };
}

// Abre la ventana de redacción de Gmail con destinatario, asunto y mensaje ya escritos
function gmailUrl(book: Book) {
  const { asunto, cuerpo } = mensajeDeCompra(book);
  return (
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(book.email)}` +
    `&su=${encodeURIComponent(asunto)}` +
    `&body=${encodeURIComponent(cuerpo)}`
  );
}

// Abre la app de correo predeterminada del dispositivo (en Android suele ser Gmail)
function mailtoUrl(book: Book) {
  const { asunto, cuerpo } = mensajeDeCompra(book);
  return `mailto:${book.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}

export default function LibrosPage() {
  const [buyItem, setBuyItem] = useState<Book | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    if (!buyItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBuyItem(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [buyItem]);

  // Ocultar el aviso automáticamente
  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(t);
  }, [showToast]);

  const copiarCorreo = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);
    } catch {
      // Si el navegador no permite copiar, el correo sigue visible y seleccionable
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-6 py-24 text-[#1F3A5F]">

        {/* Hero */}
        <section className="max-w-3xl mb-16 mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Libros para acompañar la crianza
          </h1>
          {/* Línea decorativa */}
          <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full mx-auto md:mx-0"></div>
          <p className="text-lg md:text-xl text-[#4F6572] leading-relaxed">
            Explora nuestra colección diseñada para una crianza respetuosa.
          </p>
        </section>

        {/* Libros */}
        <section className="flex flex-wrap justify-center gap-10 mb-24 max-w-6xl mx-auto">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full w-full max-w-[380px] hover:shadow-md transition-shadow"
            >
              <BookCard book={book} onBuy={setBuyItem} />
            </div>
          ))}
        </section>
      </div>

      {/* Modal de compra por correo */}
      {buyItem && (
        <div
          className="fixed inset-0 bg-[#1F3A5F]/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setBuyItem(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-compra"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
          >
            <h3 id="titulo-compra" className="text-2xl font-extrabold text-[#1F3A5F]">
              Comprar libro
            </h3>

            <p className="mt-6 text-[#4F6572]">Libro seleccionado:</p>
            <h4 className="mt-1 font-bold text-lg text-[#1F3A5F]">{buyItem.title}</h4>

            <p className="mt-2 text-2xl font-extrabold text-[#E85D2A]">
              ${buyItem.price.toFixed(2)} MXN
            </p>

            <p className="mt-6 text-[#4F6572]">La compra se hace por correo electrónico. Escribe a:</p>
            <p className="mt-1 mb-8 font-bold text-[#1F3A5F] break-all select-all">{buyItem.email}</p>

            <div className="space-y-4">
              <a
                href={gmailUrl(buyItem)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-full bg-[#1F3A5F] text-white font-bold hover:bg-[#152842] transition shadow-md flex justify-center items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85D2A]"
              >
                Abrir Gmail
              </a>

              <a
                href={mailtoUrl(buyItem)}
                className="w-full px-6 py-3 rounded-full border-2 border-[#1F3A5F] text-[#1F3A5F] font-bold hover:bg-[#1F3A5F]/5 transition flex justify-center items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85D2A]"
              >
                Usar otra app de correo
              </a>

              <button
                type="button"
                onClick={() => copiarCorreo(buyItem.email)}
                className="w-full px-6 py-2 text-sm font-semibold text-[#E85D2A] hover:text-[#C94F24] hover:underline transition"
              >
                Copiar correo
              </button>

              <button
                type="button"
                onClick={() => setBuyItem(null)}
                className="w-full px-6 py-3 rounded-full border border-gray-300 text-[#4F6572] font-semibold hover:bg-gray-50 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <Toast
        isVisible={showToast}
        message="Correo copiado"
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
