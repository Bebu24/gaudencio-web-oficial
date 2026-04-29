"use client";

import { useState } from "react";

export default function ContratacionesPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    organizacion: "",
    fechaEvento: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Enviando solicitud...");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Solicitud enviada con éxito. Nos pondremos en contacto pronto.");
        setForm({
          nombre: "",
          email: "",
          organizacion: "",
          fechaEvento: "",
          mensaje: "",
        });
      } else {
        setStatus("Ocurrió un error al enviar. Por favor, intenta de nuevo.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error de conexión. Revisa tu internet.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-[#1F3A5F]">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Contrataciones
        </h1>

        {/* Línea decorativa */}
        <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full"></div>

        <p className="text-[#4F6572] text-lg md:text-xl leading-relaxed max-w-2xl">
          Si deseas contratar una conferencia, taller o participación en tu 
          evento, completa el siguiente formulario y nos pondremos en contacto contigo.
        </p>
      </section>

      {/* Formulario */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6"
        >
          
          {/* Fila 1: Nombre y Email en dos columnas en Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] mb-2">
                Nombre completo <span className="text-[#E85D2A]">*</span>
              </label>
              <input
                value={form.nombre}
                onChange={(e) =>
                  setForm({ ...form, nombre: e.target.value })
                }
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA] disabled:opacity-60"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] mb-2">
                Email <span className="text-[#E85D2A]">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA] disabled:opacity-60"
              />
            </div>
          </div>

          {/* Fila 2: Organización y Fecha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Organización */}
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] mb-2">
                Organización
              </label>
              <input
                value={form.organizacion}
                onChange={(e) =>
                  setForm({ ...form, organizacion: e.target.value })
                }
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA] disabled:opacity-60"
              />
            </div>

            {/* Fecha */}
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] mb-2">
                Fecha preferida
              </label>
              <input
                type="date"
                value={form.fechaEvento}
                onChange={(e) =>
                  setForm({ ...form, fechaEvento: e.target.value })
                }
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA] disabled:opacity-60 text-[#4F6572]"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-bold text-[#1F3A5F] mb-2">
              Mensaje
            </label>
            <textarea
              rows={5}
              value={form.mensaje}
              onChange={(e) =>
                setForm({ ...form, mensaje: e.target.value })
              }
              disabled={isSubmitting}
              placeholder="Cuéntanos un poco sobre el evento, el público y el tema que te interesa..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA] resize-none disabled:opacity-60"
            />
          </div>

          {/* Botón y estado */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-100 mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 rounded-full bg-[#E85D2A] text-white font-bold hover:bg-[#C94F24] transition shadow-md w-full sm:w-auto disabled:opacity-70 flex justify-center items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </>
              ) : (
                "Enviar solicitud"
              )}
            </button>

            {/* Mensaje de estado (Éxito o Error) */}
            {status && (
              <div className={`px-4 py-2 rounded-lg text-sm font-semibold flex-1 text-center sm:text-right ${
                status.includes('Error') || status.includes('error') 
                  ? 'text-red-600 bg-red-50' 
                  : status.includes('éxito')
                    ? 'text-green-700 bg-green-50'
                    : 'text-[#4F6572] bg-gray-50'
              }`}>
                {status}
              </div>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}