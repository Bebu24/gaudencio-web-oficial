"use client";

import { useState } from "react";

export default function ContratacionesPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    organizacion: "",
    fechaEvento: "",
    tipoActividad: "",
    modalidad: "",
    ciudad: "",
    numeroParticipantes: "",
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
        setStatus("Solicitud enviada correctamente.");
        setForm({ nombre: "", email: "", organizacion: "", fechaEvento: "", tipoActividad: "", modalidad: "", ciudad: "", numeroParticipantes: "", mensaje: "" });
      } else {
        setStatus("Ocurrió un error al enviar. Por favor, intenta de nuevo.");
      }
    } catch (err) {
      setStatus("Error de conexión. Revisa tu internet.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-10 text-[#1F3A5F] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contrataciones</h1>
        <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full mx-auto md:mx-0"></div>
        <p className="text-lg md:text-xl text-[#4F6572] leading-relaxed">
          ¿Deseas llevar mis conferencias, cursos o talleres a tu escuela, institución u organización? Llena el siguiente formulario para que diseñemos un espacio a tu medida.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide">
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input type="text" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA]" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide">
                Organización / Institución
              </label>
              <input type="text" value={form.organizacion} onChange={(e) => setForm({ ...form, organizacion: e.target.value })} className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA]" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide">
                Fecha preferida
              </label>
              <input type="date" value={form.fechaEvento} onChange={(e) => setForm({ ...form, fechaEvento: e.target.value })} className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide">
                Tipo de actividad <span className="text-red-500">*</span>
              </label>
              <select value={form.tipoActividad} onChange={(e) => setForm({ ...form, tipoActividad: e.target.value })} required className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA]">
                <option value="" disabled>Selecciona una opción</option>
                <option value="Conferencia">Conferencia</option>
                <option value="Taller">Taller</option>
                <option value="Curso">Curso</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide">
                Modalidad <span className="text-red-500">*</span>
              </label>
              <select value={form.modalidad} onChange={(e) => setForm({ ...form, modalidad: e.target.value })} required className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA]">
                <option value="" disabled>Selecciona una opción</option>
                <option value="Presencial">Presencial</option>
                <option value="En línea">En línea</option>
              </select>
            </div>
            
            {/* Si es presencial, el campo de ciudad ocupará su propia caja en el grid */}
            {form.modalidad === "Presencial" && (
              <div className="md:col-span-1">
                <label className="block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide">
                  Ciudad <span className="text-red-500">*</span>
                </label>
                <input type="text" value={form.ciudad} onChange={(e) => setForm({ ...form, ciudad: e.target.value })} required className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA]" />
              </div>
            )}

            <div className={form.modalidad === "Presencial" ? "md:col-span-1" : "md:col-span-2"}>
              <label className="block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide">
                Número de participantes <span className="text-red-500">*</span>
              </label>
              <input type="text" placeholder="Ej. 50, 100+" value={form.numeroParticipantes} onChange={(e) => setForm({ ...form, numeroParticipantes: e.target.value })} required className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide">
              Mensaje extra
            </label>
            <textarea rows={4} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA] resize-none" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100">
            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#E85D2A] text-white font-bold hover:bg-[#C94F24] transition shadow-md disabled:opacity-70 flex items-center justify-center">
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </button>
            {status && (
              <span className={`text-sm font-bold ${status.includes("Error") || status.includes("error") ? "text-red-500" : "text-[#1F3A5F]"}`}>
                {status}
              </span>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}