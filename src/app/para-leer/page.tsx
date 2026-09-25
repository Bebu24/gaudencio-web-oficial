import type { Metadata } from "next";
// src/app/para-leer/page.tsx
import { articles } from "@/app/data/paraleer";

export const metadata: Metadata = { title: "Para leer" };

export default function ArticulosPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24 text-[#1F3A5F]">
        
        {/* Encabezado */}
        <section className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Para leer con calma
          </h1>
          <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-[#4F6572] leading-relaxed">
            Artículos escritos para acompañar a madres, padres y cuidadores
            interesados en comprender el desarrollo infantil desde una mirada
            respetuosa y fundamentada.
          </p>
        </section>

        {/* Grid de artículos (Tu diseño dinámico) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((a) => (
            <article
              key={a.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2 text-[#1F3A5F]">
                  {a.title}
                </h2>
                <time className="text-sm font-semibold text-[#E85D2A] uppercase tracking-wider">
                  {a.date}
                </time>

                <p className="mt-4 text-[#4F6572] leading-relaxed">
                  {a.excerpt}
                </p>
              </div>

              <div className="mt-8">
                {/* Aquí cambiamos <Link> por <a> para abrir la pestaña externa */}
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-[#E85D2A] hover:text-[#C94F24] hover:underline transition-colors"
                >
                  Leer artículo
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Bloque editorial final */}
        <section className="mt-24 max-w-4xl border-t border-gray-200 pt-10">
          <p className="text-[#4F6572] text-lg leading-relaxed italic">
            &quot;Estos textos forman parte de un trabajo continuo de divulgación
            psicológica, orientado a promover el buen trato, la reflexión y el
            acompañamiento consciente en la crianza.&quot;
          </p>
        </section>
      </div>
    </div>
  );
}