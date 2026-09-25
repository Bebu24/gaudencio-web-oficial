import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contenido" };

export default function ContenidoPage() {
  // Aquí guardamos los datos reales de los videos de Gaudencio
  const videos = [
    {
      id: 1,
      title: "Cero golpes | Autoritarismo | Derechos infantiles | Gaudi Rodríguez | Conexión | EP16",
      date: "19/02/26",
      url: "https://www.youtube.com/watch?v=J6cuKFHUyjw"
    },
    {
      id: 2,
      title: "CÓMO ROMPER LA CADENA DE VIOLENCIA: Guía para una paternidad sin violencia",
      date: "08/01/26",
      url: "https://www.youtube.com/watch?v=2GXuGHOvv2A"
    },
    {
      id: 3,
      title: "Verdades que nadie te dice sobre la adopción | Gaudencio Rodríguez | Maternandeando | Ep37",
      date: "26/11/25",
      url: "https://www.youtube.com/watch?v=VcGu_drtqlw"
    },
    {
      id: 4,
      title: "Verdades incómodas de la adopción | Gaudencio Rodríguez | Maternandeando | Ep.20",
      date: "02/07/25",
      url: "https://www.youtube.com/watch?v=ie2_1V1uXJQ"
    }
  ];

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

      {/* Lista de contenido usando tu diseño original */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="space-y-6">
          
          {/* Usamos map() para generar las tarjetas automáticamente */}
          {videos.map((video) => (
            <div key={video.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-[#1F3A5F]">
                Video — {video.title}
              </h3>

              <p className="text-[#4F6572] mt-2">
                Publicado el: {video.date}
              </p>

              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#E85D2A] font-semibold hover:text-[#C94F24] hover:underline transition"
              >
                Ver video →
              </a>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}