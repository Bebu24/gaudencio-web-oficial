import Image from "next/image";
import Link from "next/link";

export default function SobreMiPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-6 py-24 text-[#1F3A5F]">
        
        {/* Encabezado */}
        <section className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Gaudencio Rodríguez Juárez
          </h1>
          
          {/* Línea decorativa */}
          <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full"></div>
          
          <p className="text-xl md:text-2xl font-bold text-[#4F6572]">
            Esposo y papá.
          </p>
        </section>

        {/* Bloque principal - Ultra compacto */}
        <section className="grid md:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Contenedor de la foto - Aún más pequeño (3 columnas) */}
          <div className="md:col-span-3">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/datos-curriculares.jpg"
                alt="Gaudencio Rodríguez"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Texto de Trayectoria - Más ancho (9 columnas) y con menos interlineado */}
          <div className="md:col-span-9 space-y-3 text-base md:text-lg text-[#4F6572] leading-snug">
            <p>
              Licenciado en Psicología Clínica, Maestro en Psicoterapia Analítica Grupal y diplomado en diversos temas, tales como, derechos humanos, parentalidad, apego, mentalización, psicotraumatología. Entrenamiento en Círculo de Seguridad Parental y Disciplina Positiva.
            </p>

            <p>
              Conferencista, docente y tallerista internacional.
            </p>

            <p>
              Consultor para <strong className="text-[#1F3A5F]">UNICEF</strong> en temas de crianza positiva y buen trato.
            </p>

            <p>
              Autor de los libros <strong className="text-[#1F3A5F]">Cero golpes. 100 Ideas para la erradicación del maltrato infantil</strong>, y <strong className="text-[#1F3A5F]">Verdades de la adopción</strong>.
            </p>
          </div>
        </section>

        {/* Bloque de Actualidad y Credibilidad */}
        <section className="bg-white rounded-2xl p-8 mb-16 shadow-sm border border-gray-100">
          <p className="text-xl md:text-2xl font-extrabold mb-4 text-[#E85D2A]">
            30 años promoviendo el buen trato a la infancia.
          </p>
          <p className="text-[#4F6572] text-base md:text-lg leading-relaxed">
            Actualmente ejerce la psicoterapia; asesora a instituciones que apoyan niñas, niños, adolescentes y sus familias en situación de vulnerabilidad; es miembro del Sistema de Protección Integral de Niñas, Niños y Adolescentes de León, Guanajuato; y es co-coordinador del Diplomado On Line: Acompañamiento Sensible para el Sano Desarrollo Adolescente.
          </p>
        </section>

        {/* Botones de navegación */}
        <section className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row gap-4 w-full">
          <Link
            href="/cursos"
            className="px-8 py-3 rounded-full bg-[#E85D2A] text-white font-bold text-center hover:bg-[#C94F24] transition shadow-md sm:w-auto"
          >
            Cursos y talleres
          </Link>
          <Link
            href="/libros"
            className="px-8 py-3 rounded-full border-2 border-[#E85D2A] text-[#E85D2A] font-bold text-center hover:bg-[#E85D2A]/10 transition sm:w-auto"
          >
            Libros
          </Link>
        </section>

      </div>
    </main>
  );
}