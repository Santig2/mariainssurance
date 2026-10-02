import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#121F40] text-white pt-16 pb-12 border-t border-[#C9A84C]/30 relative overflow-hidden">
      
      {/* Decorative top gold gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1B2D5B] via-[#C9A84C] to-[#1B2D5B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                María Arias
              </span>
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#C9A84C] font-semibold">
                Licensed Insurance Agent
              </span>
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              "Protección para hoy. Planificación para mañana." Asesoría profesional, 
              humana y en español para familias hispanas, trabajadores independientes y recién llegados a EE.UU.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C9A84C] hover:text-[#1B2D5B] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <span className="text-xs text-white/60">@mariaarias.seguros</span>
            </div>
          </div>

          {/* Soluciones Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C9A84C] uppercase tracking-wider">
              Soluciones
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li><a href="#servicios" className="hover:text-white transition-colors">Seguros de Salud (ACA / Obamacare)</a></li>
              <li><a href="#planes-privados" className="hover:text-white transition-colors">Planes Médicos Privados</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Dental, Visión y Audición</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Protección Financiera e Ingresos</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Seguro de Vida (National Life Group)</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Asistencia Funeraria (Assure For Life)</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Anualidades & Retiro</a></li>
            </ul>
          </div>

          {/* Licencias & Territorio Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C9A84C] uppercase tracking-wider">
              Licencias Activas
            </h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Agente licenciada legalmente autorizada para operar y suscribir pólizas en:
            </p>
            <ul className="space-y-1.5 text-xs text-white/90 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                Florida (FL)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                North Carolina (NC)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                South Carolina (SC)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                Texas (TX)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                New Jersey (NJ)
              </li>
            </ul>
          </div>

          {/* Contacto Directo Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C9A84C] uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-white/70 font-light">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <a href="tel:+13050000000" className="hover:text-white font-medium">
                  (305) 555-0192
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <a href="mailto:maria@mariaariasinsurance.com" className="hover:text-white">
                  maria@mariaariasinsurance.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span>Miami, Florida, EE.UU.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Disclaimer Notice */}
        <div className="pt-8 text-[11px] text-white/50 space-y-3 leading-relaxed">
          <p>
            <strong>Aviso de Divulgación Legal y Regulatoria:</strong> María Rosario Arias Gómez es una agente de seguros licenciada independiente. 
            No estamos afiliados ni respaldados directamente por el gobierno federal de los EE.UU. ni por el programa federal HealthCare.gov. 
            La disponibilidad de planes y la elegibilidad para subsidios tributarios gubernamentales dependen de los ingresos declarados, 
            el tamaño del grupo familiar, el estado y el condado de residencia. La cotización y asesoría no representan un compromiso de compra.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-white/40">
            <div>
              © {new Date().getFullYear()} María Arias Insurance. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Política de Privacidad</a>
              <span>·</span>
              <a href="#" className="hover:text-white">Términos de Servicio</a>
              <span>·</span>
              <a href="#" className="hover:text-white">Descargo de Responsabilidad</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
