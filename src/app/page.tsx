import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* 1. HERO SECTION (Imagen a la izquierda) */}
      <section className="bg-[#F8F9FA] relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Imagen lateral */}
          <div className="flex-1 w-full relative order-1 md:order-1">
            <div className="absolute inset-0 bg-[#E85D2A]/10 rounded-3xl transform -translate-x-4 translate-y-4 md:-translate-x-6 md:translate-y-6 -z-10"></div>
            
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white">
              <Image
                src="/images/portada-gaudencio.jpg"
                alt="Gaudencio Rodríguez"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Texto principal */}
          <div className="flex-1 flex flex-col justify-center items-start text-[#1F3A5F] order-2 md:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2">
              Parentalidad, ternura y buenos tratos
            </h1>
            
            <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-[#4F6572] leading-relaxed mb-10 max-w-lg">
              Coadyuvamos en el cuidado y buen trato de los niños y adolescentes
              para su pleno desarrollo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/cursos"
                className="px-8 py-3.5 rounded-full bg-[#E85D2A] text-white font-bold text-center shadow-lg shadow-[#E85D2A]/20 hover:bg-[#C94F24] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Ver cursos
              </Link>
              <Link
                href="/libros"
                className="px-8 py-3.5 rounded-full border-2 border-[#E85D2A] text-[#E85D2A] font-bold text-center hover:bg-[#E85D2A]/10 transition-colors duration-200"
              >
                Ver libros
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ÁREAS DE ESPECIALIDAD */}
      <section className="bg-white py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3A5F]">Áreas de especialidad</h2>
            <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Tarjeta 1 */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="w-14 h-14 bg-[#1F3A5F]/10 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0 text-[#E85D2A]">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">Ternura y Buen Trato</h3>
              <p className="text-[#4F6572] leading-relaxed">
                Herramientas para fortalecer los vínculos afectivos y crear entornos seguros donde la infancia pueda prosperar libre de violencia.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="w-14 h-14 bg-[#1F3A5F]/10 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0 text-[#E85D2A]">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">Crianza Respetuosa</h3>
              <p className="text-[#4F6572] leading-relaxed">
                Acompañamiento a madres, padres y cuidadores para educar desde la empatía, comprendiendo las necesidades reales del desarrollo infantil.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow text-center md:text-left">
              <div className="w-14 h-14 bg-[#1F3A5F]/10 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0 text-[#E85D2A]">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">Disciplina Positiva</h3>
              <p className="text-[#4F6572] leading-relaxed">
                Estrategias prácticas para poner límites sanos y firmes, sin recurrir a los gritos, los castigos físicos o la culpa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN SOBRE GAUDENCIO (MÁS BAJITA Y COMPACTA) */}
      <section className="bg-[#1F3A5F] py-16 md:py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Gaudencio Rodríguez Juárez</h2>
            <div className="w-16 h-[4px] bg-[#E85D2A] mt-3 mb-6 mx-auto md:mx-0 rounded-full"></div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Con más de 30 años promoviendo el buen trato a la infancia, Gaudencio es psicólogo clínico, maestro en Psicoterapia Analítica Grupal y consultor para <strong className="text-white">UNICEF</strong>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Autor de libros referentes en crianza y prevención del maltrato, dedica su vida a asesorar instituciones, capacitar docentes y guiar a familias hacia una educación libre de violencia.
            </p>
            
            <Link
              href="/sobre-mi"
              className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-[#1F3A5F] transition-colors duration-200"
            >
              Conocer más de su trayectoria
            </Link>
          </div>

          <div className="w-full md:w-4/12">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/datos-curriculares-2.jpg"
                alt="Gaudencio Rodríguez"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. TESTIMONIOS */}
      <section className="bg-[#F8F9FA] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3A5F]">Lo que dicen las familias</h2>
            <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative">
              <span className="text-6xl text-[#E85D2A]/20 absolute top-6 left-6 font-serif">"</span>
              <p className="text-[#4F6572] text-lg leading-relaxed italic relative z-10 pt-4">
                Leer &quot;Cero Golpes&quot; cambió por completo la dinámica en mi casa. Entendí que la disciplina no tiene que estar ligada al miedo. Las herramientas de Gaudencio son un respiro para los padres que queremos hacerlo diferente.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F3A5F]/10 rounded-full flex items-center justify-center text-[#1F3A5F] font-bold">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-[#1F3A5F]">María Fernanda L.</h4>
                  <p className="text-sm text-[#E85D2A]">Lectora y mamá de dos</p>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative">
              <span className="text-6xl text-[#E85D2A]/20 absolute top-6 left-6 font-serif">"</span>
              <p className="text-[#4F6572] text-lg leading-relaxed italic relative z-10 pt-4">
                El taller de crianza superó mis expectativas. Gaudencio tiene una forma de explicar los conceptos científicos con tanta empatía que no te sientes juzgado, sino acompañado en el proceso de educar con ternura.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F3A5F]/10 rounded-full flex items-center justify-center text-[#1F3A5F] font-bold">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-[#1F3A5F]">Roberto C.</h4>
                  <p className="text-sm text-[#E85D2A]">Alumno del curso online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}