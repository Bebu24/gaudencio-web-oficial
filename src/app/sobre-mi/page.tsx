import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Sobre mí" };

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-6 py-24 text-[#1F3A5F]">
        
        {/* Encabezado */}
        <section className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Gaudencio Rodríguez Juárez
          </h1>
          <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl font-bold text-[#4F6572]">
            Esposo y papá.
          </p>
        </section>

        {/* Bloque principal */}
        <section className="grid md:grid-cols-12 gap-10 items-start mb-20 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="md:col-span-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <Image
                src="/images/datos-curriculares.jpg"
                alt="Gaudencio Rodríguez"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-5 text-base md:text-lg text-[#4F6572] leading-relaxed">
            <p>
              Licenciado en Psicología Clínica, Maestro en Psicoterapia Analítica Grupal y diplomado en diversos temas, tales como, derechos humanos, parentalidad, apego, mentalización, psicotraumatología. Entrenamiento en Círculo de Seguridad Parental y Disciplina Positiva.
            </p>
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E85D2A] block"></span>
              Conferencista, docente y tallerista internacional.
            </p>
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E85D2A] block"></span>
              Consultor para <strong className="text-[#1F3A5F]">UNICEF</strong> en temas de crianza positiva y buen trato.
            </p>
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E85D2A] block"></span>
              <span>Autor de los libros <strong className="text-[#1F3A5F]">Cero golpes. 100 ideas para la erradicación del maltrato infantil</strong> y <strong className="text-[#1F3A5F]">Verdades de la adopción</strong>.</span>
            </p>
          </div>
        </section>

        {/* Bloque de Actualidad y Credibilidad */}
        <section className="bg-white rounded-3xl p-8 md:p-10 mb-10 shadow-sm border-l-4 border-l-[#1F3A5F] border border-y-gray-100 border-r-gray-100 relative">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#E85D2A]">
            30 años promoviendo el buen trato a la infancia
          </h2>
          <p className="text-[#4F6572] text-base md:text-lg leading-relaxed">
            Actualmente ejerzo la psicoterapia; asesoro y capacito a instituciones que apoyan niñas, niños, adolescentes y a sus familias en situación de vulnerabilidad; y co-coordino el Diplomado On Line: Acompañamiento Sensible para el Sano Desarrollo Adolescente.
          </p>
        </section>

        {/* Bloque Mi enfoque - NOTA: El 'scroll-mt-32' arregla el problema del ancla cubierta */}
        <section id="enfoque" className="bg-white rounded-3xl p-8 md:p-10 mb-16 shadow-sm border-l-4 border-l-[#E85D2A] border border-y-gray-100 border-r-gray-100 scroll-mt-32">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#1F3A5F]">
            Mi enfoque
          </h2>
          <p className="text-[#4F6572] text-base md:text-lg leading-relaxed italic">
            &quot;Trabajo desde un enfoque basado en evidencia científica, de derechos humanos, de buenos tratos y de desarrollo humano integral. El llamado es a nunca pegar (no importa la edad de la niña, niño o adolescente), de ninguna manera (ni física, ni psicológica, ni sexual, etcétera), bajo ninguna circunstancia (no importa su comportamiento), en ningún entorno (familiar, escolar, comunitario, etcétera).&quot;
          </p>
        </section>

        {/* Botones de navegación */}
        <section className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
          <Link href="/libros" className="px-8 py-3 rounded-full bg-[#E85D2A] text-white font-bold text-center hover:bg-[#C94F24] transition shadow-md sm:w-auto">
            Libros
          </Link>
        </section>

      </div>
    </div>
  );
}