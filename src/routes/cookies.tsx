import { createFileRoute, Link } from "@tanstack/react-router";

import { PageLayout } from "@/components/page-layout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies | Barbería Olympus" },
      {
        name: "description",
        content:
          "Qué cookies utiliza la web de Barbería Olympus (Armilla, Granada), para qué sirven y cómo puedes desactivarlas desde tu navegador.",
      },
      { property: "og:title", content: "Política de cookies | Barbería Olympus" },
      {
        property: "og:description",
        content: "Tipos de cookies utilizadas en la web de Barbería Olympus y cómo gestionarlas.",
      },
      { property: "og:url", content: "/cookies" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <PageLayout
      title="Política de cookies"
      breadcrumb="Política de cookies"
      intro="Última actualización: agosto de 2026."
    >
      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl text-foreground">¿Qué son las cookies?</h2>
          <p className="mt-3">
            Son pequeños archivos que un sitio web guarda en tu dispositivo para recordar
            información sobre tu visita o permitir el funcionamiento de determinados servicios.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground">Cookies que utilizamos</h2>
          <ul className="mt-3 space-y-3">
            <li>
              <strong className="text-foreground">Técnicas (necesarias):</strong> permiten que la
              web se muestre y funcione correctamente. No requieren consentimiento.
            </li>
            <li>
              <strong className="text-foreground">De terceros — Cal.com:</strong> al abrir el
              calendario de reservas, la plataforma puede instalar cookies necesarias para gestionar
              la cita.
            </li>
            <li>
              <strong className="text-foreground">De terceros — Google Maps:</strong> el mapa
              incrustado en la sección Visítanos puede instalar cookies de Google.
            </li>
          </ul>
          <p className="mt-3">
            No utilizamos cookies publicitarias ni elaboramos perfiles con fines comerciales.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground">Cómo desactivarlas</h2>
          <p className="mt-3">
            Puedes bloquear o eliminar las cookies desde la configuración de tu navegador (Chrome,
            Safari, Firefox o Edge). Ten en cuenta que desactivar las cookies de terceros puede
            impedir que se muestren el mapa o el sistema de reservas.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground">Más información</h2>
          <p className="mt-3">
            Consulta también nuestra{" "}
            <Link to="/privacidad" className="text-primary hover:underline">
              política de privacidad
            </Link>{" "}
            o las{" "}
            <Link to="/faq" className="text-primary hover:underline">
              preguntas frecuentes
            </Link>
            .
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
