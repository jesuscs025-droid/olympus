// Carga del embed de Cal.com (snippet oficial vanilla).
// Los elementos con data-cal-link abren el modal de reserva automáticamente.
export function initCalEmbed(calLink: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as Record<string, any>;
  if (!w['Cal']) {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.createElement("script");
            s.src = A;
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api: any = function (...a: any[]) {
              p(api, a);
            };
            const namespace = args[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, args);
            return;
          }
          p(cal, args);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
  }
  w['Cal']("init", { origin: "https://app.cal.com" });
  w['Cal']("ui", {
    theme: "dark",
    hideEventTypeDetails: false,
    layout: "month_view",
  });
  return calLink;
}

export function calUrl(calLink: string, servicio?: string) {
  const base = `https://cal.com/${calLink}`;
  return servicio
    ? `${base}?notes=${encodeURIComponent(`Servicio: ${servicio}`)}`
    : base;
}

// Enlace de Cal.com de la barbería (usuario/evento)
export const CAL_LINK = "barberia-olympus";
