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
      {/* CORRECCIÓN: Cambiamos 'w-full' por una altura fija 'h-64 sm:h-72'.
        Esto evita que el libro se haga gigante y empuje el botón fuera de la pantalla.
      */}
      <div className="relative w-full h-64 sm:h-72 mb-6 flex justify-center items-center bg-[#F8F9FA] rounded-xl p-4 group">
        
        {/* Aquí es donde mantenemos la proporción 2/3 exacta del libro */}
        <div className="relative h-full aspect-[2/3] shadow-[10px_10px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105 rounded-r-md rounded-l-sm">
          
          {/* Lomo del libro con degradado sutil para mayor realismo */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent z-10 rounded-l-sm"></div>
          
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
        <h3 className="text-xl md:text-2xl font-extrabold text-[#1F3A5F] mb-3 leading-tight">
          {book.title}
        </h3>
        
        <p className="text-[#4F6572] text-sm md:text-base flex-grow mb-6 leading-relaxed">
          {book.description}
        </p>
        
        {/* Botón de compra y precio */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-100">
          <span className="text-2xl md:text-3xl font-extrabold text-[#E85D2A]">
            ${book.price.toFixed(2)} <span className="text-xs md:text-sm text-gray-400 font-medium tracking-normal">MXN</span>
          </span>
          
          <button
            onClick={() => onBuy(book)}
            className="w-full lg:w-auto px-6 md:px-8 py-3 rounded-full bg-[#1F3A5F] text-white font-bold hover:bg-[#E85D2A] transition-colors duration-300 shadow-md whitespace-nowrap"
          >
            Comprar ahora
          </button>
        </div>
      </div>
      
    </div>
  );
}