import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F3A5F] text-[#F9F6F1]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-semibold tracking-wider text-white">Servicios</h3>
              <ul className="mt-4 space-y-3 text-[#F9F6F1]/70">
                <li><Link href="/contrataciones" className="hover:text-[#E85D2A] transition-colors">Conferencias</Link></li>
                <li><Link href="/cursos" className="hover:text-[#E85D2A] transition-colors">Cursos</Link></li>
                <li><Link href="/cursos" className="hover:text-[#E85D2A] transition-colors">Talleres</Link></li>
                <li><Link href="/libros" className="hover:text-[#E85D2A] transition-colors">Libros</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider text-white">Contenido</h3>
              <ul className="mt-4 space-y-3 text-[#F9F6F1]/70">
                <li><Link href="/para-leer" className="hover:text-[#E85D2A] transition-colors">Artículos</Link></li>
                <li><Link href="/contenido" className="hover:text-[#E85D2A] transition-colors">Entrevistas</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider text-white">Sobre mí</h3>
              <ul className="mt-4 space-y-3 text-[#F9F6F1]/70">
                <li><Link href="/sobre-mi" className="hover:text-[#E85D2A] transition-colors">Trayectoria</Link></li>
                <li><Link href="/sobre-mi#enfoque" className="hover:text-[#E85D2A] transition-colors">Enfoque</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider text-white">Legal</h3>
              <ul className="mt-4 space-y-3 text-[#F9F6F1]/70">
                <li><Link href="/aviso-de-privacidad" className="hover:text-[#E85D2A] transition-colors">Aviso de privacidad</Link></li>
                <li><Link href="/terminos-y-condiciones" className="hover:text-[#E85D2A] transition-colors">Términos y condiciones</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold tracking-wider text-white">Contrataciones</h3>
            <div className="mt-6">
              <Link href="/contrataciones" className="inline-block rounded-md bg-[#E85D2A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#C94F24] transition-colors shadow-md">
                Solicitar información
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-[#F9F6F1]/60">© 2026 Gaudencio Rodríguez Juárez. Todos los derechos reservados.</p>
          <div className="flex gap-5 text-[#F9F6F1]/60">
            {/* Facebook Real */}
            <a href="https://www.facebook.com/GaudencioRJ/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#E85D2A] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            {/* Instagram Real */}
            <a href="https://www.instagram.com/gaudencio_rodriguez_juarez/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E85D2A] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            {/* Correo Electrónico (Enrutamiento Seguro) */}
            <Link href="/contrataciones" aria-label="Ir al formulario de contacto" className="hover:text-[#E85D2A] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}