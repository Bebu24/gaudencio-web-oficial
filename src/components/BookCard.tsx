import Image from "next/image";
import { Book } from "@/app/data/libros";

interface BookCardProps {
  book: Book;
  onBuy: (book: Book) => void;
}

export default function BookCard({ book, onBuy }: BookCardProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Contenedor de la Portada con efecto de elevación */}
      <div className="relative w-full aspect-[2/3] mb-8 flex justify-center items-center bg-[#F8F9FA] rounded-xl overflow-hidden p-6 group">
        <div className="relative w-full h-full shadow-[10px_10px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105 rounded-r-md rounded-l-sm">
          {/* Un pequeño borde a la izquierda para simular el lomo del libro */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/10 z-10 rounded-l-sm"></div>
          <Image
            src={book.image}
            alt={`Portada del libro ${book.title}`}
            fill
            className="object-cover rounded-r-md rounded-l-sm"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Contenido (Título, Descripción, Precio) */}
      <div className="flex flex-col flex-grow text-center md:text-left">
        <h3 className="text-2xl font-extrabold text-[#1F3A5F] mb-3 leading-tight">
          {book.title}
        </h3>
        
        <p className="text-[#4F6572] flex-grow mb-6 leading-relaxed">
          {book.description}
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-100">
          <span className="text-3xl font-extrabold text-[#E85D2A]">
            ${book.price.toFixed(2)} <span className="text-sm text-gray-400 font-medium tracking-normal">MXN</span>
          </span>
          
          <button
            onClick={() => onBuy(book)}
            className="w-full lg:w-auto px-8 py-3 rounded-full bg-[#1F3A5F] text-white font-bold hover:bg-[#E85D2A] transition-colors duration-300 shadow-md"
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
}