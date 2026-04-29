import Link from "next/link";

export default function AvisoDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] py-24">
      <div className="max-w-4xl mx-auto px-6 text-[#1F3A5F]">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Aviso de Privacidad
        </h1>
        <div className="w-16 h-[4px] bg-[#E85D2A] mt-4 mb-10 rounded-full"></div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-[#4F6572] leading-relaxed">
          <p>
            En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante "La Ley"), <strong>Gaudencio Rodríguez Juárez</strong>, con domicilio en México, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
          </p>

          <h2 className="text-xl font-bold text-[#1F3A5F] mt-8">1. Fines de la información</h2>
          <p>
            Su información personal será utilizada para las siguientes finalidades: proveer los servicios y productos que ha solicitado (libros, cursos, talleres y contrataciones); notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos; comunicarle sobre cambios en los mismos; elaborar estudios y programas que son necesarios para determinar hábitos de consumo; y en general, para dar cumplimiento a las obligaciones que hemos contraído con usted.
          </p>

          <h2 className="text-xl font-bold text-[#1F3A5F] mt-8">2. Datos recabados</h2>
          <p>
            Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales: Nombre completo, Teléfono, Correo electrónico, y en caso de compras, los datos necesarios para envío. <strong>Nota importante:</strong> Los datos de sus tarjetas de crédito o débito son procesados directamente por plataformas seguras (Stripe o PayPal) y no son almacenados en nuestros servidores.
          </p>

          <h2 className="text-xl font-bold text-[#1F3A5F] mt-8">3. Derechos ARCO</h2>
          <p>
            Usted tiene derecho de acceder, rectificar y cancelar sus datos personales, así como de oponerse al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado, a través de los procedimientos que hemos implementado. Para ello, puede ponerse en contacto a través del formulario de la sección de <Link href="/contrataciones" className="text-[#E85D2A] hover:underline">Contrataciones</Link>.
          </p>

          <h2 className="text-xl font-bold text-[#1F3A5F] mt-8">4. Modificaciones al aviso</h2>
          <p>
            Cualquier modificación a este aviso de privacidad podrá consultarla en esta misma página web. Última actualización: {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </main>
  );
}