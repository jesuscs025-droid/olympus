import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { PageLayout } from "@/components/page-layout";
import { faqs } from "@/lib/faq";
import { initCalEmbed, CAL_LINK } from "@/lib/cal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes | Barbería Olympus Armilla" },
      {
        name: "description",
        content:
          "Resolvemos tus dudas sobre citas, precios, horario y ubicación de Barbería Olympus en Armilla, Granada. Corte desde 11 € y reserva online.",
      },
      { property: "og:title", content: "Preguntas frecuentes | Barbería Olympus" },
      {
        property: "og:description",
        content: "Citas, precios, horario y ubicación de Barbería Olympus en Armilla, Granada.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
                { "@type": "ListItem", position: 2, name: "Preguntas frecuentes", item: "/faq" },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  React.useEffect(() => {
    initCalEmbed(CAL_LINK);
  }, []);

  return (
    <PageLayout
      title="Preguntas frecuentes"
      breadcrumb="Preguntas frecuentes"
      intro="Todo lo que sueles preguntarnos antes de sentarte en la silla."
    >
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="cursor-pointer list-none font-display text-lg text-foreground transition-colors group-open:text-primary">
              {f.q}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </PageLayout>
  );
}
