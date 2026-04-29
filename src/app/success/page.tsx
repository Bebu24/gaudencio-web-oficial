import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center px-6 py-20">
      
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 md:p-14 text-center border border-gray-100">
        
        {/* Icono de Checkmark (Verde para dar tranquilidad inmediata) */}
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 shadow-sm border border-green-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F3A5F] mb-4 tracking-tight">
          ¡Compra exitosa!
        </h1>
        
        {/* Mensaje de instrucciones */}
        <p className="text-[#4F6572] text-lg leading-relaxed mb-10">
          Muchas gracias por tu confianza. Hemos procesado tu pago correctamente. En unos minutos <strong>recibirás un correo electrónico</strong> con los detalles de tu pedido y las instrucciones para acceder a tu contenido.
        </p>

        {/* Botón para volver */}
        <Link
          href="/"
          className="inline-block w-full px-8 py-4 rounded-full bg-[#E85D2A] text-white font-bold hover:bg-[#C94F24] transition-colors shadow-md text-lg"
        >
          Volver al inicio
        </Link>
        
      </div>

    </div>
  );
}