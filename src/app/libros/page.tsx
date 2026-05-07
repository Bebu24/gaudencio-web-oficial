"use client";

import { useState } from "react";
import { books, Book } from "@/app/data/libros";
import BookCard from "@/components/BookCard";
import Toast from "@/components/Toast";
import { PaypalButton } from "@/components/PayPalButton"; 

export default function LibrosPage() {
  const [buyItem, setBuyItem] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleBuy = (item: Book) => {
    setBuyItem(item);
  };

  const confirmBuy = async () => {
    if (!buyItem) return;
    
    setLoading(true); 
    try {
      // Calculamos la URL absoluta de la imagen basándonos en el origen actual
      // (Stripe requiere URLs absolutas como https://tusitio.com/images/libro.jpg)
      const imageUrl = `${window.location.origin}${buyItem.image}`;

      const response = await fetch("/api/solicitud", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: buyItem.id,
          title: buyItem.title,
          price: buyItem.price,
          tipo: "libro",
          image: imageUrl, 
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en el servidor (${response.status})`);
      }

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      if (data.url) {
        window.location.href = data.url; 
      } else {
        throw new Error("No se recibió la URL de pago de Stripe.");
      }

    } catch (error) {
      const err = error as Error;
      console.error("Error detallado:", err);
      setToastMessage(err.message || "Error al procesar la compra.");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
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

        {/* Sección de Libros corregida para centrado total */}
<section className="flex flex-wrap justify-center gap-10 mb-24 max-w-6xl mx-auto">
  {books.map((book) => (
    <div 
      key={book.id} 
      className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full w-full max-w-[380px] hover:shadow-md transition-shadow"
    >
      <BookCard book={book} onBuy={handleBuy} />
    </div>
  ))}
</section>
      </div>

      {/* Modal de compra estandarizado */}
      {buyItem && (
        <div className="fixed inset-0 bg-[#1F3A5F]/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            
            <h3 className="text-2xl font-extrabold text-[#1F3A5F]">
              Confirmar compra
            </h3>
            
            <p className="mt-6 text-[#4F6572]">Libro seleccionado:</p>
            <h4 className="mt-1 font-bold text-lg text-[#1F3A5F]">{buyItem.title}</h4>
            
            <p className="mt-2 text-2xl font-extrabold text-[#E85D2A] mb-8">
              ${buyItem.price.toFixed(2)} MXN
            </p>

            <div className="space-y-4">
              {/* Botón de Stripe */}
              <button
                onClick={confirmBuy}
                disabled={loading}
                className="w-full px-6 py-3 rounded-full bg-[#1F3A5F] text-white font-bold hover:bg-[#152842] transition shadow-md disabled:opacity-70 flex justify-center items-center"
              >
                {loading ? "Procesando..." : "💳 Pagar con Tarjeta"}
              </button>

              {/* Botón de PayPal */}
              {!loading && (
                <>
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-semibold">o paga seguro con</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>
                  
                  <div className="w-full relative z-0">
                    <PaypalButton amount={buyItem.price} libroId={buyItem.id} />
                  </div>
                </>
              )}

              {/* Botón Cancelar */}
              <button
                onClick={() => setBuyItem(null)}
                disabled={loading}
                className="w-full mt-4 px-6 py-3 rounded-full border border-gray-300 text-[#4F6572] font-semibold hover:bg-gray-50 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <Toast 
        isVisible={showToast} 
        message={toastMessage} 
        onClose={() => setShowToast(false)} 
      />
    </main>
  );
}