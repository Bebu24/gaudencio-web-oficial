import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#F8F9FA] relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <div className="flex-1 w-full relative order-1 md:order-2">
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

          <div className="flex-1 flex flex-col justify-center items-start text-[#1F3A5F] order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2">
              Parentalidad, ternura y buenos tratos
            </h1>
            <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-[#4F6572] leading-relaxed mb-10 max-w-lg">
              Coadyuvamos en el cuidado y buen trato hacia las niñas, niños y adolescentes para su pleno desarrollo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/cursos" className="px-8 py-3.5 rounded-full bg-[#E85D2A] text-white font-bold text-center shadow-lg shadow-[#E85D2A]/20 hover:bg-[#C94F24] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                Ver cursos
              </Link>
              <Link href="/libros" className="px-8 py-3.5 rounded-full border-2 border-[#E85D2A] text-[#E85D2A] font-bold text-center hover:bg-[#E85D2A]/10 transition-colors duration-200">
                Ver libros
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ÁREAS DE ESPECIALIDAD (Diseño cuadrado con icono arriba) */}
<section className="bg-white py-20 md:py-28 border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3A5F]">Áreas de especialidad</h2>
      <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Tarjeta 1: Crianza */}
      <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow text-center flex flex-col items-center">
        <div className="bg-white p-4 rounded-xl shadow-sm text-[#E85D2A] mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">Crianza positiva y buenos tratos</h3>
        <p className="text-[#4F6572] leading-relaxed text-sm">
          Acompañamiento a madres, padres y personas cuidadoras para educar desde la ternura, el respeto y la conexión.
        </p>
      </div>

      {/* Tarjeta 2: Infancias */}
      <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow text-center flex flex-col items-center">
        <div className="bg-white p-4 rounded-xl shadow-sm text-[#E85D2A] mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">Infancias y adolescencias</h3>
        <p className="text-[#4F6572] leading-relaxed text-sm">
          Herramientas para el conocimiento de las necesidades de desarrollo de las niñas, niños y adolescentes.
        </p>
      </div>

      {/* Tarjeta 3: Adopción */}
      <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow text-center flex flex-col items-center">
        <div className="bg-white p-4 rounded-xl shadow-sm text-[#E85D2A] mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">Adopción</h3>
        <p className="text-[#4F6572] leading-relaxed text-sm">
          Información, capacitación, psicoeducación y psicoterapia para las personas involucradas en la adopción.
        </p>
      </div>

      {/* Tarjeta 4: Cuidados */}
      <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow text-center flex flex-col items-center">
        <div className="bg-white p-4 rounded-xl shadow-sm text-[#E85D2A] mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">Cuidados alternativos</h3>
        <p className="text-[#4F6572] leading-relaxed text-sm">
          Acciones para el fortalecimiento de las instituciones encargadas del cuidado residencial, acogimiento familiar y con familia extensa.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* 3. SECCIÓN SOBRE GAUDENCIO */}
      {/* ... (Esta sección y los Testimonios permanecen igual) ... */}
      <section className="bg-[#1F3A5F] py-16 md:py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Gaudencio Rodríguez Juárez</h2>
            <div className="w-16 h-[4px] bg-[#E85D2A] mt-3 mb-6 mx-auto md:mx-0 rounded-full"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Con más de 30 años promoviendo el buen trato hacia las niñas, niños y adolescentes, Gaudencio es psicólogo clínico, maestro en Psicoterapia Analítica Grupal y consultor para <strong className="text-white">UNICEF</strong>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Autor de libros referentes en crianza y prevención del maltrato, dedica su vida a asesorar instituciones, capacitar docentes y guiar a familias hacia una educación libre de violencia.
            </p>
            <Link href="/sobre-mi" className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-[#1F3A5F] transition-colors duration-200">
              Conocer más de su trayectoria
            </Link>
          </div>
          <div className="w-full md:w-4/12">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/datos-curriculares.jpg" alt="Gaudencio Rodríguez" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FA] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3A5F]">Lo que dicen las familias</h2>
            <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative">
              <span className="text-6xl text-[#E85D2A]/20 absolute top-6 left-6 font-serif">&quot;</span>
              <p className="text-[#4F6572] text-lg leading-relaxed italic relative z-10 pt-4">
                Leer &quot;Cero Golpes&quot; cambió por completo la dinámica en mi casa. Entendí que la disciplina no tiene que estar ligada al miedo. Las herramientas de Gaudencio son un respiro para los padres que queremos hacerlo diferente.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F3A5F]/10 rounded-full flex items-center justify-center text-[#1F3A5F] font-bold">M</div>
                <div>
                  <h4 className="font-bold text-[#1F3A5F]">María Fernanda L.</h4>
                  <p className="text-sm text-[#E85D2A]">Lectora y mamá de dos</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative">
              <span className="text-6xl text-[#E85D2A]/20 absolute top-6 left-6 font-serif">&quot;</span>
              <p className="text-[#4F6572] text-lg leading-relaxed italic relative z-10 pt-4">
                El taller de crianza superó mis expectativas. Gaudencio tiene una forma de explicar los conceptos científicos con tanta empatía que no te sientes juzgado, sino acompañado en el proceso de educar con ternura.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F3A5F]/10 rounded-full flex items-center justify-center text-[#1F3A5F] font-bold">R</div>
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