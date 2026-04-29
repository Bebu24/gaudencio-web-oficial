// app/contenido/page.tsx

export default function ContenidoPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-14 text-[#1F3A5F]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contenido
        </h1>

        {/* Línea decorativa con el color de acento */}
        <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full"></div>

        <p className="text-lg md:text-xl text-[#4F6572] max-w-2xl leading-relaxed">
          Reflexiones, conferencias y material audiovisual para profundizar 
          en temas psicológicos y humanos.
        </p>
      </section>

      {/* Lista de contenido */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="space-y-6">

          {/* Item */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-[#1F3A5F]">
              Podcast — Episodio 12
            </h3>

            <p className="text-[#4F6572] mt-2">
              Conversación sobre desarrollo emocional y vínculos humanos.
            </p>

            <a
              href="#"
              className="inline-block mt-4 text-[#E85D2A] font-semibold hover:text-[#C94F24] hover:underline transition"
            >
              Escuchar →
            </a>
          </div>

          {/* Item */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-[#1F3A5F]">
              Video — Conferencia en Z
            </h3>

            <p className="text-[#4F6572] mt-2">
              Presentación sobre psicología contemporánea y educación emocional.
            </p>

            <a
              href="#"
              className="inline-block mt-4 text-[#E85D2A] font-semibold hover:text-[#C94F24] hover:underline transition"
            >
              Ver conferencia →
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}