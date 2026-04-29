export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] py-24">
      <div className="max-w-4xl mx-auto px-6 text-[#1F3A5F]">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Términos y Condiciones
        </h1>
        <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-10 rounded-full"></div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-[#4F6572] leading-relaxed">
          <p>
            El acceso y uso de este sitio web, así como la compra de productos (libros) y servicios (cursos, talleres) de <strong>Gaudencio Rodríguez Juárez</strong>, están sujetos a los siguientes términos y condiciones.
          </p>

          <h2 className="text-xl font-bold text-[#1F3A5F] mt-8">1. Propiedad Intelectual</h2>
          <p>
            Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes, audios y videos, es propiedad exclusiva de Gaudencio Rodríguez Juárez y está protegido por las leyes de propiedad intelectual. Queda estrictamente prohibida su reproducción o distribución sin autorización previa.
          </p>

          <h2 className="text-xl font-bold text-[#1F3A5F] mt-8">2. Compras y Pagos</h2>
          <p>
            Los precios de nuestros productos y servicios están expresados en Pesos Mexicanos (MXN) e incluyen impuestos, a menos que se indique lo contrario. Nos reservamos el derecho de modificar los precios en cualquier momento. Los pagos se procesan a través de plataformas seguras de terceros (Stripe o PayPal).
          </p>

          <h2 className="text-xl font-bold text-[#1F3A5F] mt-8">3. Políticas de Devolución</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Productos Digitales y Cursos:</strong> Debido a la naturaleza de los productos digitales y el acceso inmediato a la información, no se ofrecen reembolsos una vez realizada la compra.</li>
            <li><strong>Libros Físicos:</strong> Se aceptarán devoluciones únicamente en caso de defectos de impresión o daños durante el envío, debiendo ser reportados en un plazo no mayor a 7 días hábiles tras su recepción.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#1F3A5F] mt-8">4. Disponibilidad del Servicio</h2>
          <p>
            Nos esforzamos por asegurar que el acceso a los cursos en línea sea ininterrumpido. Sin embargo, no nos hacemos responsables por caídas temporales del sistema debido a mantenimiento técnico o problemas ajenos a nuestro control (como fallas del proveedor de hosting).
          </p>
        </div>
      </div>
    </main>
  );
}