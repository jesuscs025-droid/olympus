import { Link } from "@tanstack/react-router";
import { Phone, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import logoAsset from "@/assets/olympus-logo.jpg.asset.json";
import { calUrl, CAL_LINK } from "@/lib/cal";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center sm:grid-cols-3 sm:text-left">
        <div>
          <img
            src={logoAsset.url}
            alt="Barbería Olympus"
            width={72}
            height={72}
            loading="lazy"
            className="mx-auto w-16 opacity-80 sm:mx-0"
          />
          <p className="mt-4 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Armilla · Granada
          </p>
        </div>
        <nav className="text-sm text-muted-foreground">
          <p className="eyebrow">Navegación</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" hash="servicios" className="hover:text-primary">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/" hash="reseñas" className="hover:text-primary">
                Reseñas
              </Link>
            </li>
            <li>
              <Link to="/" hash="horario" className="hover:text-primary">
                Horario
              </Link>
            </li>
            <li>
              <Link to="/" hash="visitanos" className="hover:text-primary">
                Visítanos
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="text-sm text-muted-foreground">
          <p className="eyebrow">Legal</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/privacidad" className="hover:text-primary">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-primary">
                Política de cookies
              </Link>
            </li>
            <li>
              <a href="tel:+34611869405" className="hover:text-primary">
                611 869 405
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground/70">
        © {new Date().getFullYear()} Barbería Olympus · Todos los derechos reservados
      </p>
    </footer>
  );
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Migas de pan" className="text-xs tracking-widest uppercase">
      <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
        <li>
          <Link to="/" className="transition-colors hover:text-primary">
            Inicio
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3 w-3" />
        </li>
        <li aria-current="page" className="text-primary">
          {current}
        </li>
      </ol>
    </nav>
  );
}

export function PageLayout({
  title,
  intro,
  breadcrumb,
  children,
}: {
  title: string;
  intro?: string;
  breadcrumb: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Barbería Olympus"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-sm tracking-[0.3em] text-primary">OLYMPUS</span>
          </Link>
          <a
            href={calUrl(CAL_LINK)}
            target="_blank"
            rel="noopener noreferrer"
            data-cal-link={CAL_LINK}
            className="btn-gold !px-5 !py-2.5 text-[0.7rem]"
          >
            Reservar
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-12 pb-24">
        <Breadcrumbs current={breadcrumb} />
        <h1 className="mt-6 font-display text-3xl md:text-5xl">
          <span className="text-gold">{title}</span>
        </h1>
        <div className="mt-6 w-24 rule-gold" />
        {intro ? <p className="mt-6 text-muted-foreground">{intro}</p> : null}
        <div className="mt-10">{children}</div>

        <div className="mt-16 border border-border bg-card p-8 text-center">
          <h2 className="font-display text-2xl text-foreground">¿Nos vemos en la barbería?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Reserva online en menos de un minuto o llámanos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={calUrl(CAL_LINK)}
              target="_blank"
              rel="noopener noreferrer"
              data-cal-link={CAL_LINK}
              className="btn-gold"
            >
              Reservar cita
            </a>
            <a href="tel:+34611869405" className="btn-ghost-gold">
              <Phone className="h-4 w-4" /> 611 869 405
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
