"use client";

import { useState } from "react";
import { courses } from "@/app/data/cursos";
import CourseCard, { Course } from "@/components/CourseCard";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CursosPage() {
  const [buy, setBuy] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleBuy(c: Course) {
    setBuy(c);
  }

  async function payWithStripe() {
    if (!buy) return;
    setIsLoading(true);

    try {
      const res = await fetch("/api/solicitud", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: buy.id,
          title: buy.title,
          price: buy.price,
          tipo: "curso",
        }),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url; 
      } else {
        alert("Ocurrió un error al generar el enlace de Stripe. Intenta de nuevo.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error al procesar pago:", error);
      alert("Error de conexión. Revisa tu internet.");
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-14 text-[#1F3A5F]">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Cursos y Talleres
        </h1>
        <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full"></div>
        <p className="text-[#4F6572] max-w-2xl text-lg md:text-xl leading-relaxed">
          Formación especializada con enfoque humano y profesional.</p>
          <p className="text-[#4F6572] max-w-2xl text-lg md:text-xl leading-relaxed">
          Accede a contenido profundo, claro y aplicable.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} onBuy={handleBuy} />
          ))}
        </div>
      </section>

      {/* Modal de Pago */}
      {buy && (
        <div className="fixed inset-0 bg-[#1F3A5F]/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-100 max-h-[90vh] overflow-y-auto">
            
            <h3 className="text-2xl font-extrabold text-[#1F3A5F]">
              Confirmar inscripción
            </h3>

            <p className="mt-6 text-[#4F6572]">
              Curso seleccionado:
            </p>
            <p className="mt-1 font-bold text-lg text-[#1F3A5F]">
              {buy.title}
            </p>
            <p className="mt-2 text-2xl font-extrabold text-[#E85D2A] mb-8">
              ${buy.price.toFixed(2)} MXN
            </p>

            <div className="space-y-4">
              
              <button
                onClick={payWithStripe}
                disabled={isLoading}
                className="w-full px-6 py-3 rounded-full bg-[#1F3A5F] text-white font-bold hover:bg-[#152842] transition shadow-md disabled:opacity-70 flex justify-center items-center"
              >
                {isLoading ? "Procesando..." : "💳 Pagar con Tarjeta"}
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">o paga seguro con</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <div className="w-full relative z-0">
                <PayPalScriptProvider options={{ clientId: "test", currency: "MXN" }}>
                  <PayPalButtons 
                    style={{ layout: "vertical", shape: "pill", color: "gold" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                          {
                            description: buy.title,
                            amount: {
                              currency_code: "MXN",
                              value: buy.price.toString(),
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={async (data, actions) => {
                      if (actions.order) {
                        const details = await actions.order.capture();
                        // CORRECCIÓN: Usamos la variable para evitar el error de Vercel
                        console.log("Pago completado por:", details.payer?.name?.given_name);
                        window.location.href = "/success";
                      }
                    }}
                  />
                </PayPalScriptProvider>
              </div>

              <button
                onClick={() => setBuy(null)}
                disabled={isLoading}
                className="w-full mt-4 px-6 py-3 rounded-full border border-gray-300 text-[#4F6572] font-semibold hover:bg-gray-50 transition"
              >
                Cancelar
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}