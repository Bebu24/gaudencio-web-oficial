import Link from "next/link";
import { articles } from "@/app/data/paraleer";

export default function ArticulosPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20 text-[#1F3A5F]">
        {/* Encabezado */}
        <section className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Para leer con calma
          </h1>
          <p className="text-lg text-[#4F6572]">
            Artículos escritos para acompañar a madres, padres y cuidadores
            interesados en comprender el desarrollo infantil desde una mirada
            respetuosa y fundamentada.
          </p>
        </section>

        {/* Grid de artículos */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((a) => (
            <article
              key={a.id}
              className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {a.title}
                </h2>
                <time className="text-sm text-[#6B7280]">
                  {a.date}
                </time>

                <p className="mt-4 text-[#4F6572] leading-relaxed">
                  {a.excerpt}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href={`/articulos/${a.id}`}
                  className="inline-flex items-center gap-2 font-semibold text-[#E85D2A] hover:underline"
                >
                  Leer artículo
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Bloque editorial final */}
        <section className="mt-24 max-w-4xl">
          <p className="text-[#4F6572] text-lg leading-relaxed">
            Estos textos forman parte de un trabajo continuo de divulgación
            psicológica, orientado a promover el buen trato, la reflexión y el
            acompañamiento consciente en la crianza.
          </p>
        </section>
      </div>
    </main>
  );
}


