"use client";

import { useState } from "react";

const FORM_VACIO = {
  nombre: "",
  email: "",
  organizacion: "",
  fechaEvento: "",
  tipoActividad: "",
  modalidad: "",
  ciudad: "",
  numeroParticipantes: "",
  mensaje: "",
  sitio: "", // Campo trampa anti-bots (oculto para las personas)
};

type Estado = { tipo: "enviando" | "ok" | "error"; texto: string } | null;

const inputClass =
  "w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E85D2A]/30 focus:border-[#E85D2A] transition bg-[#F8F9FA]";
const labelClass = "block text-sm font-bold text-[#1F3A5F] uppercase tracking-wide";

export default function ContratacionesPage() {
  const [form, setForm] = useState(FORM_VACIO);
  const [estado, setEstado] = useState<Estado>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setEstado({ tipo: "enviando", texto: "Enviando solicitud..." });

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setEstado({ tipo: "ok", texto: "Solicitud enviada correctamente. Nos pondremos en contacto pronto." });
        setForm(FORM_VACIO);
      } else {
        setEstado({ tipo: "error", texto: data.error || "Ocurrió un error al enviar. Por favor, intenta de nuevo." });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setEstado({ tipo: "error", texto: "Error de conexión. Revisa tu internet." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-10 text-[#1F3A5F] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contrataciones</h1>
        <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full mx-auto md:mx-0"></div>
        <p className="text-lg md:text-xl text-[#4F6572] leading-relaxed">
          ¿Deseas llevar mis conferencias o talleres a tu escuela, institución u organización? Llena el siguiente formulario para que diseñemos un espacio a tu medida.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className={labelClass}>
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input id="nombre" type="text" autoComplete="name" maxLength={120} value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-red-500">*</span>
              </label>
              <input id="email" type="email" autoComplete="email" maxLength={254} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="organizacion" className={labelClass}>
                Organización / Institución
              </label>
              <input id="organizacion" type="text" autoComplete="organization" maxLength={160} value={form.organizacion} onChange={(e) => setForm({ ...form, organizacion: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label htmlFor="fechaEvento" className={labelClass}>
                Fecha preferida
              </label>
              <input id="fechaEvento" type="date" value={form.fechaEvento} onChange={(e) => setForm({ ...form, fechaEvento: e.target.value })} className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
            <div>
              <label htmlFor="tipoActividad" className={labelClass}>
                Tipo de actividad <span className="text-red-500">*</span>
              </label>
              <select id="tipoActividad" value={form.tipoActividad} onChange={(e) => setForm({ ...form, tipoActividad: e.target.value })} required className={inputClass}>
                <option value="" disabled>Selecciona una opción</option>
                <option value="Conferencia">Conferencia</option>
                <option value="Taller">Taller</option>
              </select>
            </div>
            <div>
              <label htmlFor="modalidad" className={labelClass}>
                Modalidad <span className="text-red-500">*</span>
              </label>
              <select id="modalidad" value={form.modalidad} onChange={(e) => setForm({ ...form, modalidad: e.target.value })} required className={inputClass}>
                <option value="" disabled>Selecciona una opción</option>
                <option value="Presencial">Presencial</option>
                <option value="En línea">En línea</option>
              </select>
            </div>

            {form.modalidad === "Presencial" && (
              <div className="md:col-span-1">
                <label htmlFor="ciudad" className={labelClass}>
                  Ciudad <span className="text-red-500">*</span>
                </label>
                <input id="ciudad" type="text" maxLength={120} value={form.ciudad} onChange={(e) => setForm({ ...form, ciudad: e.target.value })} required className={inputClass} />
              </div>
            )}

            <div className={form.modalidad === "Presencial" ? "md:col-span-1" : "md:col-span-2"}>
              <label htmlFor="numeroParticipantes" className={labelClass}>
                Número de participantes <span className="text-red-500">*</span>
              </label>
              <input id="numeroParticipantes" type="text" placeholder="Ej. 50, 100+" maxLength={40} value={form.numeroParticipantes} onChange={(e) => setForm({ ...form, numeroParticipantes: e.target.value })} required className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className={labelClass}>
              Mensaje extra
            </label>
            <textarea id="mensaje" rows={4} maxLength={3000} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className={`${inputClass} resize-none`} />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100">
            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#E85D2A] text-white font-bold hover:bg-[#C94F24] transition shadow-md disabled:opacity-70 flex items-center justify-center">
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </button>
            {estado && (
              <span role="status" className={`text-sm font-bold ${estado.tipo === "error" ? "text-red-500" : "text-[#1F3A5F]"}`}>
                {estado.texto}
              </span>
            )}
          </div>
          {/* Campo trampa: invisible para personas; si un bot lo llena, el servidor descarta el envío */}
          <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
            <label htmlFor="sitio">No llenar este campo</label>
            <input
              id="sitio"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.sitio}
              onChange={(e) => setForm({ ...form, sitio: e.target.value })}
            />
          </div>
        </form>
      </section>
    </div>
  );
}
