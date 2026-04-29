import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F3A5F] text-[#F9F6F1]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Contenido superior */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

          {/* Enlaces */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-semibold tracking-wider text-white">Soluciones</h3>
              <ul className="mt-4 space-y-3 text-[#F9F6F1]/70">
                <li><Link href="/sobre-mi" className="hover:text-[#E85D2A] transition-colors">Acompañamiento</Link></li>
                <li><Link href="/cursos" className="hover:text-[#E85D2A] transition-colors">Cursos</Link></li>
                <li><Link href="/cursos" className="hover:text-[#E85D2A] transition-colors">Talleres</Link></li>
                <li><Link href="/libros" className="hover:text-[#E85D2A] transition-colors">Libros</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wider text-white">Contenido</h3>
              <ul className="mt-4 space-y-3 text-[#F9F6F1]/70">
                <li><Link href="/contenido" className="hover:text-[#E85D2A] transition-colors">Artículos</Link></li>
                <li><Link href="/contenido" className="hover:text-[#E85D2A] transition-colors">Reflexiones</Link></li>
                <li><Link href="/contenido" className="hover:text-[#E85D2A] transition-colors">Recursos</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wider text-white">Sobre mí</h3>
              <ul className="mt-4 space-y-3 text-[#F9F6F1]/70">
                <li><Link href="/sobre-mi" className="hover:text-[#E85D2A] transition-colors">Trayectoria</Link></li>
                <li><Link href="/sobre-mi" className="hover:text-[#E85D2A] transition-colors">Enfoque</Link></li>
                <li><Link href="/contrataciones" className="hover:text-[#E85D2A] transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wider text-white">Legal</h3>
              <ul className="mt-4 space-y-3 text-[#F9F6F1]/70">
                <li><Link href="#" className="hover:text-[#E85D2A] transition-colors">Aviso de privacidad</Link></li>
                <li><Link href="#" className="hover:text-[#E85D2A] transition-colors">Términos y condiciones</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold tracking-wider text-white">
              Suscríbete al boletín
            </h3>
            <p className="mt-4 text-sm text-[#F9F6F1]/70 leading-relaxed">
              Lecturas, ideas y recursos compartidos con calma y cercanía. Prometo no enviar spam.
            </p>

            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                className="w-full rounded-md bg-[#152842] border border-[#152842] px-4 py-2.5 text-sm text-[#F9F6F1] placeholder-[#F9F6F1]/40 focus:outline-none focus:border-[#E85D2A] focus:ring-1 focus:ring-[#E85D2A] transition-all"
              />
              <button
                type="submit"
                className="rounded-md bg-[#E85D2A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#C94F24] transition-colors shadow-md whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Línea inferior (Copyright y Redes) */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-[#F9F6F1]/60">
            © 2026 Gaudencio Rodríguez Juárez. Todos los derechos reservados.
          </p>

          <div className="flex gap-5 text-[#F9F6F1]/60">
            <a href="#" aria-label="Facebook" className="hover:text-[#E85D2A] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#E85D2A] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#E85D2A] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path fillRule="evenodd" d="M21.582 6.447c-.23-.872-.924-1.564-1.796-1.793C18.2 4.25 12 4.25 12 4.25s-6.2 0-7.786.404c-.872.229-1.566.921-1.796 1.793C2 8.04 2 12 2 12s0 3.96.418 5.553c.23.872.924 1.564 1.796 1.793C5.8 19.75 12 19.75 12 19.75s6.2 0 7.786-.404c.872-.229 1.566-.921 1.796-1.793C22 15.96 22 12 22 12s0-3.96-.418-5.553zM9.912 15.02V8.98L15.22 12l-5.308 3.02z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-[#E85D2A] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}