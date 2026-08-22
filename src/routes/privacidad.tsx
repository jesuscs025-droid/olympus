import { createFileRoute, Link } from "@tanstack/react-router";

import { PageLayout } from "@/components/page-layout";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Barbería Olympus" },
      {
        name: "description",
        content:
          "Cómo trata Barbería Olympus (Armilla, Granada) los datos personales de sus clientes: finalidad, base legal, conservación y derechos RGPD.",
      },
      { property: "og:title", content: "Política de privacidad | Barbería Olympus" },
      {
        property: "og:description",
        content: "Información sobre el tratamiento de datos personales en Barbería Olympus.",
      },
      { property: "og:url", content: "/privacidad" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <PageLayout
      title="Política de privacidad"
      breadcrumb="Política de privacidad"
      intro="Última actualización: agosto de 2026."
    >
      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl text-foreground">1. Responsable del tratamiento</h2>
          <p className="mt-3">
            Barbería Olympus, con domicilio en Av. de Pte., 2, BAJO 1, 18100 Armilla (Granada) y
            teléfono 611 869 405, es la responsable del tratamiento de los datos personales
            facilitados a través de esta web.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground">2. Datos que tratamos</h2>
          <p className="mt-3">
            Únicamente tratamos los datos que nos facilitas al reservar una cita (nombre, teléfono,
            correo electrónico y servicio solicitado) o al contactarnos por teléfono. La reserva se
            gestiona a través de la plataforma Cal.com.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground">3. Finalidad y base legal</h2>
          <p className="mt-3">
            Usamos tus datos para gestionar y confirmar tu cita, avisarte de cambios y responder a
            tus consultas. La base legal es la ejecución de la relación de servicio solicitada y tu
            consentimiento.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground">4. Conservación</h2>
          <p className="mt-3">
            Conservamos los datos mientras exista relación con el cliente y, después, durante los
            plazos legalmente exigibles. Luego se eliminan de forma segura.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground">5. Destinatarios</h2>
          <p className="mt-3">
            No cedemos tus datos a terceros salvo obligación legal. Utilizamos proveedores
            tecnológicos (sistema de reservas online y mapas) que actúan como encargados del
            tratamiento con las garantías exigidas por el RGPD.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground">6. Tus derechos</h2>
          <p className="mt-3">
            Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y
            portabilidad escribiéndonos o llamando al 611 869 405. También puedes reclamar ante la
            Agencia Española de Protección de Datos.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground">7. Cookies</h2>
          <p className="mt-3">
            El uso de cookies se detalla en nuestra{" "}
            <Link to="/cookies" className="text-primary hover:underline">
              política de cookies
            </Link>
            . Si tienes dudas sobre nuestros servicios, consulta las{" "}
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
