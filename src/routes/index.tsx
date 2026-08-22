import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone, Scissors, Star, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";
import * as React from "react";

import { initCalEmbed, calUrl, CAL_LINK } from "@/lib/cal";
import { faqs } from "@/lib/faq";
import { SiteFooter } from "@/components/page-layout";
import logoUrl from "@/assets/olympus-logo.jpg";
import heroImg from "@/assets/hero-barberia.jpg";
import corteImg from "@/assets/servicio-corte.jpg";
import barbaImg from "@/assets/servicio-barba.jpg";
import ritualImg from "@/assets/servicio-ritual.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbería Olympus Armilla | Barbería en Granada" },
      {
        name: "description",
        content:
          "Barbería Olympus en Armilla, Granada. Cortes, arreglo de barba y afeitado clásico. C/ Poniente 2, Local 1. Reserva tu cita: 611 869 405.",
      },
      { property: "og:title", content: "Barbería Olympus | Armilla, Granada" },
      {
        property: "og:description",
        content:
          "Cortes de precisión, barba y afeitado clásico en Armilla, Granada. Reserva tu cita en Barbería Olympus.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Barbería Olympus",
          description:
            "Barbería en Armilla, Granada: cortes de caballero, barba y afeitado clásico.",
          telephone: "+34611869405",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C/ Poniente 2, Local 1",
            addressLocality: "Armilla",
            postalCode: "18100",
            addressRegion: "Granada",
            addressCountry: "ES",
          },
          priceRange: "€€",
          openingHours: ["Mo-Fr 10:00-14:00", "Mo-Fr 16:30-21:00", "Sa 09:00-14:00"],
        }),
      },
    ],
  }),

  component: Index,
});


const servicios = [
  {
    img: corteImg,
    nombre: "Corte caballero + lavado",
    desc: "Lavado opcional, tijera y máquina, acabado a tu gusto.",
    precio: "11 €",
  },
  {
    img: barbaImg,
    nombre: "Corte + barba",
    desc: "Corte completo acompañado de arreglo de barba.",
    precio: "14 €",
  },
  {
    img: corteImg,
    nombre: "Corte menores de 10 años",
    desc: "El mismo cuidado y detalle para los pequeños.",
    precio: "10,50 €",
  },
];


const otrosServicios = [
  {
    nombre: "Corte jubilado",
    desc: "Tarifa especial para jubilados.",
    precio: "8 €",
  },
  {
    nombre: "Corte + barba + cejas",
    desc: "El pack completo para salir impecable de arriba a abajo.",
    precio: "16 €",
  },
  {
    nombre: "Corte caballero + cejas + lavado",
    desc: "Corte, lavado opcional y perfilado de cejas.",
    precio: "13 €",
  },
  {
    nombre: "Arreglo de barba",
    desc: "Perfilado y definición con navaja y máquina.",
    precio: "5 €",
  },
  {
    nombre: "Tinte de barba",
    desc: "Color uniforme y natural para tu barba.",
    precio: "8 €",
  },
  {
    nombre: "Mechas de gorro + corte",
    desc: "Decoloración con gorro y corte a juego.",
    precio: "45 €",
  },
  {
    nombre: "Decoloración cabeza + corte",
    desc: "Cabeza entera decolorada con corte incluido.",
    precio: "55 €",
  },
  {
    nombre: "Mechas de gorro + corte + barba",
    desc: "Mechas con gorro, corte y arreglo de barba.",
    precio: "48 €",
  },
  {
    nombre: "Decoloración + corte + barba",
    desc: "Cabeza entera decolorada con corte y barba.",
    precio: "60 €",
  },
  {
    nombre: "Matiz mechas",
    desc: "Toque de color para mantener el tono deseado.",
    precio: "12 €",
  },
  {
    nombre: "Color fantasía",
    desc: "Consulta precio según el tono y trabajo a realizar.",
    precio: "variable",
  },
];


const horario = [
  { dia: "Lunes a Viernes", horas: "10:00 – 14:00 · 16:30 – 21:00" },
  { dia: "Sábado", horas: "9:00 – 14:00" },
  { dia: "Domingo", horas: "Cerrado" },
];

const reseñas = [
  {
    autor: "Juan Antonio",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Trabajan bien y buen precio. Perfecto",
  },
  {
    autor: "Pablo",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "servicio perfecto💯💯",
  },
  {
    autor: "Francisco",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Roberto",
    texto: "Un gran profesional, simpático y asesorando para el mejor corte de pelo y barba.",
  },
  {
    autor: "Roberto",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "Buen trato del personal y un corte de pelo idéntico al que he pedido.",
  },
  {
    autor: "Francisco",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "10/10",
  },
  {
    autor: "Felipe",
    rol: "Cliente verificado",
    servicio: "Corte Menores De 10 Años con Roberto",
    texto: "Un crack, que buen corte de pelo",
  },
  {
    autor: "Sandra",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "Un corte perfecto!!!",
  },
  {
    autor: "Tor",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "Magnífico trato y pelado espectacular!!",
  },
  {
    autor: "Esteban",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Espectacular como siempre!!",
  },
  {
    autor: "Christian",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "la mejor peluquería",
  },
  {
    autor: "Miguel",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Muy bien",
  },
  {
    autor: "Jesus",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "10/10 trato inmejorable",
  },
  {
    autor: "Josue",
    rol: "Cliente verificado",
    servicio: "Corte + Barba + Cejas con Roberto",
    texto: "Excelente servicio. Buena atención y corte detallado 10/10",
  },
  {
    autor: "Iván",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Roberto",
    texto: "Buen cortecito flama",
  },
  {
    autor: "Fito",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "10/10",
  },
  {
    autor: "Jose",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Todo perfecto como siempre",
  },
  {
    autor: "Ian",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Roberto",
    texto: "Excelente trabajo y excelente tarto, cada que voy siempre salgo contento y con una sonrirsa.",
  },
  {
    autor: "Manu",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Primera vez en esta barberia y estoy muy contento con el resultado, fue muy atento y servicial. Muy recomendable",
  },
  {
    autor: "Jorge",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "buen trato y trabajan bien",
  },
  {
    autor: "CARLOS",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Roberto",
    texto: "Genial",
  },
  {
    autor: "german",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Muy buena peluquería trato excelente de Giorgios y Roberto👌",
  },
  {
    autor: "Alejandro",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Súper bien y 100% recomendado",
  },
  {
    autor: "Javier",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "barberos profesionales, corte excelente y trato escepcional",
  },
  {
    autor: "Agustín",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "muy buen corte y ambiente",
  },
  {
    autor: "Sergio",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Muy buen profesional,excelente trato.👍",
  },
  {
    autor: "Joaquín",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "servicio estupendo y muy buena persona",
  },
  {
    autor: "Iván",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Excelente trato y corte",
  },
  {
    autor: "marcos",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "buen trato al cliente y local bastante limpio",
  },
  {
    autor: "Javier",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "todo perfecto 👌",
  },
  {
    autor: "Mr M",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "repetire",
  },
  {
    autor: "Jesús",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "excelente",
  },
  {
    autor: "Felipe",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "Genial!!! Son muy apañados.",
  },
  {
    autor: "Javier",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "Muy buena atención y atentos.",
  },
  {
    autor: "Carlos",
    rol: "Cliente verificado",
    servicio: "Corte caballero + Cejas + Lavado con Giorgos",
    texto: "Muy buen peluquero, es la primera y no es la última vez que visite esta peluquería. 100% recomendable.",
  },
  {
    autor: "Esteban",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Roberto",
    texto: "Buen profesional y acabado fantástico",
  },
  {
    autor: "Jo",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Acabado perfecto, trato impecable",
  },
  {
    autor: "Marcoslolma",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "muy bien trato y buen pelado",
  },
  {
    autor: "Carlos",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Servicio de 10. Par colmo, Giorgio es un tío súper agradable",
  },
  {
    autor: "Esther",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Muy buen trabajo y agradables",
  },
  {
    autor: "Eduardo",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Muy buena calidad y servicio",
  },
  {
    autor: "Pablo",
    rol: "Cliente verificado",
    servicio: "Mechas de gorro + corte con Giorgos",
    texto: "La mejor barbería de toda armilla.",
  },
  {
    autor: "Josemi",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Quede nuevecito de paquete, bonito y bello cuando sali barberia",
  },
  {
    autor: "Rodrigo",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Súper contento con el trabajo de Giorgos, es súper cercano y muy experto en su trabajo, gran peluquería si lo que quieres es un buen corte y profesionalidad.",
  },
  {
    autor: "juan Jesus",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Roberto",
    texto: "Muy bueno Roberto, muy atento y el corte perfecto 🙌 volveré",
  },
  {
    autor: "rafa",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Perfecto",
  },
  {
    autor: "Francisco",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Primera vez en acudir a esta barberia. Trato genial. Corte perfecto. Volvere a repetir!",
  },
  {
    autor: "Jesus",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Giorgio es magnífico! Sigo repitiendo una y otra vez en esta barbería porque es genial, un máquina",
  },
  {
    autor: "Nacho",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Es el mejor se procupa mucho por los detalles y que todo quede como el cliente quiere",
  },
  {
    autor: "Antonio",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "muy profesional y simpático",
  },
  {
    autor: "Kevin Alexander",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Corte estupendo, y giorgio muy buena persona y muy profesional! Repeteria 1000 veces mas",
  },
  {
    autor: "David Vilchez",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Muy buen trato, me encantó",
  },
  {
    autor: "Jorge",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "100% RECOMENDABLE",
  },
  {
    autor: "Jesus",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "El mejor peluquero de Granada",
  },
  {
    autor: "VICTOR",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Detallista y muy buen trato. Corte de cabello + barba impecable. Me dejó bien peluche, 10/10",
  },
  {
    autor: "Stefan",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Muy bien cortado",
  },
  {
    autor: "Yorel",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Un Peluqero excelente, una gran persona y muy profesional.",
  },
  {
    autor: "Jesús",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "De 10 👏",
  },
  {
    autor: "Antonio",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "muy buen peluquero siempre voy👌🏽👌🏽",
  },
  {
    autor: "Ian",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Alvaro",
    texto: "Satisfecho con el corte+barba que pedi en ningun lado igual que Barbería Olympus, lugar ideal para salir tal y como gustas.",
  },
  {
    autor: "Renzox247x",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "El chico q atiende es muy amigable y hace q sea divertido cortarte el pelo con. 10/10 su trabajo",
  },
  {
    autor: "Jose",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Magnífico trato siempre. Fue un acierto dar con Giorgos y ya siempre voy ahí.",
  },
  {
    autor: "Rubén",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Una experiencia de 10",
  },
  {
    autor: "Pedro",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "todo bien",
  },
  {
    autor: "Alvaro",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "giorgios el mejor siempre",
  },
  {
    autor: "Alex",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "10/10 un gran barbero y muy cuidadoso con su trabajo, excelente servicio",
  },
  {
    autor: "Samy",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Muy buen corte👏🏽",
  },
  {
    autor: "Ali",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Todo muy bien",
  },
  {
    autor: "Daniel",
    rol: "Cliente verificado",
    servicio: "Corte caballero + Cejas + Lavado con Luciano",
    texto: "Perfecto el corte y el trato",
  },
  {
    autor: "Luis",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Justo lo que quería, buena atención y puntuales",
  },
  {
    autor: "Antonio",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Buen servicio y pela muy bien.",
  },
  {
    autor: "Francisco Miguel",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Top",
  },
  {
    autor: "Daniel",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Que buen corte y excelente charla",
  },
  {
    autor: "David",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Todo perfecto!",
  },
  {
    autor: "Pablo",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Excelente tratamiento",
  },
  {
    autor: "Isidro",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "genial, muy rápida!",
  },
  {
    autor: "H",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "Genial, atentos y amables, es la segunda vez q vamos alli,y no sera la ultima!",
  },
  {
    autor: "Sergio",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Siempre un placer, muy profesional, educado y atento",
  },
  {
    autor: "Emilio",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "como siempre atento y ptofesonal",
  },
  {
    autor: "Daniel",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "Muy buen trato y muy amables",
  },
  {
    autor: "Francisco Javier",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "Corte y persona de 10",
  },
  {
    autor: "Álvaro",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "gran profesional",
  },
  {
    autor: "Javier",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Excelente",
  },
  {
    autor: "Álvaro López",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "Un crack, gran profesional.",
  },
  {
    autor: "Alejandro",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "Todo genial. Buen servicio y atención.",
  },
  {
    autor: "Alexander Gregorio",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Alvaro",
    texto: "Excelente atención",
  },
  {
    autor: "Diego",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "de 10",
  },
  {
    autor: "Gustavo",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Alvaro",
    texto: "Excelente servicio",
  },
  {
    autor: "Jose",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Alvaro",
    texto: "buena atención al cliente y un fenómeno",
  },
  {
    autor: "Tamara",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "Son unos chicos ejemplares. Mi hijo le encanta ir",
  },
  {
    autor: "Luis Maldonado Hernández",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "Increible trato y corte, te hacen sentir como en casa",
  },
  {
    autor: "Diego",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Alvaro",
    texto: "Muy contento con el corte de pelo",
  },
  {
    autor: "Román",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Un trato excelente y el resultado del corte genial.",
  },
  {
    autor: "Juan",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Como siempre un trato excelente y resultados satisfactorios.",
  },
  {
    autor: "Alfonso",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "🔝",
  },
  {
    autor: "pablo",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "muy buenos barberos cualquiera de los dos muy recomendable y excelente atención",
  },
  {
    autor: "Francisco",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Gran trato y atención. Súper profesional.",
  },
  {
    autor: "Mohamed",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "b",
  },
  {
    autor: "Alberto",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "top",
  },
  {
    autor: "Jesus",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Muy buen servicio, y los dos peluqueros majos",
  },
  {
    autor: "Esteban",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "en su linea, buen trabajo",
  },
  {
    autor: "Fernando",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Muy profesional y buena gente",
  },
  {
    autor: "Tomás",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "llevo ya un tiempo y la verdad que el trato y el resultado espectaculares, 10/10",
  },
  {
    autor: "Juan Víctor",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Muy buen trato y profesional",
  },
  {
    autor: "Eduardo",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Alvaro",
    texto: "Un ligar donde se te trata super bien recomiendo mucho esa barbería 👍🏻💯",
  },
  {
    autor: "Pedro",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Giorgos",
    texto: "Excelente atención",
  },
  {
    autor: "Marta",
    rol: "Cliente verificado",
    servicio: "Corte Menores De 11 Años con Giorgos",
    texto: "💯",
  },
  {
    autor: "Paul",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "muy bueno",
  },
  {
    autor: "Top",
    rol: "Cliente verificado",
    servicio: "Corte caballero + Cejas + Lavado con Giorgos",
    texto: "⭐️⭐️⭐️⭐️⭐️ Una experiencia de 10 en Olympus Barbería",
  },
  {
    autor: "Ivan",
    rol: "Cliente verificado",
    servicio: "Corte + Barba con Alvaro",
    texto: "Muy buen servicio y muy apañados. Repetire",
  },
  {
    autor: "Manu",
    rol: "Cliente verificado",
    servicio: "Corte caballero + lavado con Giorgos",
    texto: "Es la mejor barbería",
  },
  {
    autor: "Carlos Olivares",
    rol: "Local Guide",
    texto:
      "Llevo cortándome el pelo con él desde mucho antes de que montara su propia peluquería, y no puedo estar más contento. Se nota la experiencia, el cuidado por los detalles y el trato cercano. Un auténtico profesional y una persona de 10. Lo recomiendo al 100%.",
  },
  {
    autor: "Javier A",
    rol: "Local Guide",
    texto:
      "Giorgios es un tipo que te hace sentir cómodo tanto por su servicio profesional como con su cercanía. No duda en echarte el tiempo que cree necesario para dejarte perfecto y eso no tiene precio. Gracias Giorgios! Volveré!",
  },
  {
    autor: "Juan Luis Garcia Framit",
    rol: "",
    texto:
      "Giorgos es todo un profesional, muy detallista y atento. Lo mejor es que lo tengo al lado de casa. Mil gracias siempre.",
  },
  {
    autor: "Jose Ángel Ruano Cámara",
    rol: "Local Guide",
    texto:
      "Súper agradable y profesional el chico que me ha atendido. Rápido y el corte me lo ha hecho perfecto, el precio lo veo genial.",
  },
  {
    autor: "Juan Carlos Sánchez Garcés",
    rol: "",
    texto:
      "Hoy ha sido nuestra primera vez y creo que a partir de hoy tenemos nuevo peluquero. Su trato es muy profesional, atento, detallista y muy cuidadoso y limpio con su trabajo. 10/10. Gracias Giorgos.",
  },
  {
    autor: "Jon A.",
    rol: "",
    texto:
      "Experiencia 10/10 en corte y barba. Giorgios es súper profesional y da un trato espectacular. Se adapta a tus necesidades, es muy empático y te hace sentir genial.",
  },
  {
    autor: "Neo Montero",
    rol: "",
    texto:
      "Giorgos da un trato impecable. Además de ser rápido y perfeccionista es muy atento y agradable. Lo recomiendo. Fue mi primera vez pero pienso volver!",
  },
  {
    autor: "Luis Torres Wangensteen",
    rol: "Local Guide",
    texto:
      "Como Giorgios nadie, amable y muy muy atento y perfeccionista con su trabajo, sigue así!",
  },
  {
    autor: "Manuel Muñoz",
    rol: "",
    texto:
      "Giorgos me ha aconsejado y tratado estupendamente; ha sido majísimo y muy profesional, he quedado encantado. Repetiré sin duda.",
  },
  {
    autor: "David Puertollano",
    rol: "",
    texto:
      "Trato super agradable, está pendiente del mínimo detalle y se preocupa por el cliente en todo momento. Mil gracias por tu amabilidad y simpatía, repetiré sin duda.",
  },
  {
    autor: "Pablo Sánchez",
    rol: "",
    texto:
      "Genial trato y trabajo de corte de pelo y barba, con un servicio profesional y agradable. Mi nuevo sitio de confianza!",
  },
  {
    autor: "Serafin Martin Arroyo",
    rol: "",
    texto:
      "He encontrado un barbero excepcional, atento, un trabajo impecable, la barbería es muy acogedora y limpia. Giorgos es una gran persona, lo recomiendo 100x100.",
  },
  {
    autor: "David Perez",
    rol: "",
    texto:
      "Todo un profesional, se nota nada más empieza con el corte de pelo y luego el uso con la cuchilla me dejó la barba perfecta. Super amable y limpio. Fue mi primera vez pero después de probar y probar encontré mi barbería.",
  },
  {
    autor: "Carlos A",
    rol: "Local Guide",
    texto:
      "Servicio excepcional y profesional. Captó justo lo que quería y el corte quedó perfecto. Lo recomiendo 100%.",
  },
  {
    autor: "Dardo Martin Ospital",
    rol: "Local Guide",
    texto:
      "Muy grata experiencia. Un trabajo muy bueno, atento al detalle. Será mi peluquería de confianza desde hoy.",
  },
  {
    autor: "Rodrigo",
    rol: "",
    texto:
      "Es un gran profesional, está atento de cualquier detalle, súper agradable y un trabajo excelente, mi peluquería favorita sin ninguna duda.",
  },
  {
    autor: "Raúl",
    rol: "Local Guide",
    texto:
      "Gran profesional, siempre cuida que sus clientes queden satisfechos. Desde que lo descubrí no voy a otro sitio.",
  },
  {
    autor: "Juan Anaya",
    rol: "Local Guide",
    texto:
      "Muy profesional y un resultado inmejorable, con una relación calidad/precio imbatible. Lo recomiendo al 100%.",
  },
  {
    autor: "Vagelis Tsaggalas",
    rol: "",
    texto: "El mejor barbero de España 🤙.",
  },
  {
    autor: "Noelia Martin",
    rol: "",
    texto: "La mejor barberia del mundo!!!",
  },
];

function Index() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    initCalEmbed(CAL_LINK);
  }, []);


  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Logo Barbería Olympus"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-sm tracking-[0.3em] text-primary">
              OLYMPUS
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] uppercase text-muted-foreground md:flex">
            <a href="#servicios" className="transition-colors hover:text-primary">
              Servicios
            </a>
            <a href="#reseñas" className="transition-colors hover:text-primary">
              Reseñas
            </a>
            <a href="#horario" className="transition-colors hover:text-primary">
              Horario
            </a>
            <a href="#visitanos" className="transition-colors hover:text-primary">
              Visítanos
            </a>
            <a href="#faq" className="transition-colors hover:text-primary">
              FAQ
            </a>
          </nav>
          <a
            href={calUrl(CAL_LINK)}
            target="_blank"
            rel="noopener noreferrer"
            data-cal-link={CAL_LINK}
            data-cal-config={JSON.stringify({ theme: "dark" })}
            className="btn-gold !px-5 !py-2.5 text-[0.7rem]"
          >
            Reservar
          </a>

        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-screen items-center">
        <img
          src={heroImg}
          alt="Interior de Barbería Olympus"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/85" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-20 text-center">
          <img
            src={logoUrl}
            alt="Barbería Olympus, Armilla"
            width={260}
            height={260}
            className="mx-auto w-52 md:w-64"
          />
          <h1 className="mt-8 font-display text-4xl leading-tight md:text-6xl">
            <span className="text-gold">El templo del buen corte</span>
            <br />
            <span className="text-foreground/90 text-2xl md:text-4xl">
              en Armilla, Granada
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Tijera, navaja y oficio. Un sitio donde sentarte, desconectar y salir
            con la cabeza bien alta.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={calUrl(CAL_LINK)}
              target="_blank"
              rel="noopener noreferrer"
              data-cal-link={CAL_LINK}
              data-cal-config={JSON.stringify({ theme: "dark" })}
              className="btn-gold"
            >
              Reservar cita
            </a>
            <a href="tel:+34611869405" className="btn-ghost-gold">
              <Phone className="h-4 w-4" /> 611 869 405
            </a>
            <a href="#servicios" className="btn-ghost-gold">
              Ver servicios
            </a>
          </div>

        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow text-center">La carta</p>
        <h2 className="mt-4 text-center font-display text-3xl md:text-5xl">
          <span className="text-gold">Servicios</span>
        </h2>
        <div className="mx-auto mt-6 w-24 rule-gold" />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <a
              key={s.nombre}
              href={calUrl(CAL_LINK, s.nombre)}
              target="_blank"
              rel="noopener noreferrer"
              data-cal-link={CAL_LINK}
              data-cal-config={JSON.stringify({
                theme: "dark",
                notes: `Servicio: ${s.nombre}`,
              })}
              className="group block cursor-pointer overflow-hidden border border-border bg-card transition-transform duration-500 hover:-translate-y-2 hover:border-primary/60"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.nombre}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl text-foreground">{s.nombre}</h3>
                  <span className="font-display text-lg text-primary">{s.precio}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-primary">
                  Reservar cita →
                </span>
              </div>
            </a>
          ))}

        </div>

        {/* Otros servicios */}
        <div className="mt-24">
          <p className="eyebrow text-center">Carta completa</p>
          <h2 className="mt-4 text-center font-display text-3xl md:text-5xl">
            <span className="text-gold">Otros servicios</span>
          </h2>
          <div className="mx-auto mt-6 w-24 rule-gold" />
          <div className="mt-12 grid gap-x-12 gap-y-6 md:grid-cols-2">
            {otrosServicios.map((s) => (
              <a
                key={s.nombre}
                href={calUrl(CAL_LINK, s.nombre)}
                target="_blank"
                rel="noopener noreferrer"
                data-cal-link={CAL_LINK}
                data-cal-config={JSON.stringify({
                  theme: "dark",
                  notes: `Servicio: ${s.nombre}`,
                })}
                className="flex cursor-pointer items-baseline justify-between gap-4 border-b border-border pb-4 transition-colors hover:border-primary/60"
              >
                <div>
                  <h3 className="font-display text-lg text-foreground transition-colors group-hover:text-primary">
                    {s.nombre}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <span className="shrink-0 font-display text-lg text-primary">{s.precio}</span>
              </a>
            ))}

          </div>
        </div>

        <p className="mt-12 text-center text-xs tracking-widest uppercase text-muted-foreground">
          Precios orientativos · consúltanos por teléfono
        </p>
      </section>


      {/* Reseñas */}
      <section id="reseñas" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="eyebrow text-center">Opiniones</p>
          <h2 className="mt-4 text-center font-display text-3xl md:text-5xl">
            <span className="text-gold">Lo que dicen nuestros clientes</span>
          </h2>
          <div className="mx-auto mt-6 w-24 rule-gold" />
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[0.7rem] font-medium tracking-wider text-primary uppercase">
              <Star className="h-3 w-3 fill-primary text-primary" />
              {reseñas.length} reseñas verificadas
            </span>
          </div>

          <div className="mt-12">
            <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className="mx-auto w-full max-w-4xl">
              <CarouselContent>
                {reseñas.map((r) => (
                  <CarouselItem key={r.autor + r.texto.slice(0, 20)}>
                    <div className="relative mx-auto max-w-2xl border border-border bg-background p-8 md:p-12 text-center">
                      <Quote className="mx-auto h-8 w-8 text-primary/60" />
                      <div className="mt-4 flex items-center justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="mt-6 text-base leading-relaxed text-foreground/90 md:text-lg">
                        "{r.texto}"
                      </p>
                      <div className="mt-8">
                        <p className="font-display text-sm tracking-widest uppercase text-primary">
                          {r.autor}
                        </p>
                        {(r.rol || r.servicio) && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            {[r.rol, r.servicio].filter(Boolean).join(" · ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 border-border text-muted-foreground hover:bg-card hover:text-primary" />
              <CarouselNext className="right-0 border-border text-muted-foreground hover:bg-card hover:text-primary" />
            </Carousel>
            <div className="mt-6 flex justify-center gap-2">
              {reseñas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className="h-2 w-2 rounded-full transition-colors"
                  aria-label={`Ir a reseña ${i + 1}`}
                  style={{
                    backgroundColor: i === current ? "var(--primary)" : "var(--border)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horario */}
      <section id="horario" className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="eyebrow">Cuándo</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              <span className="text-gold">Horario</span>
            </h2>
            <ul className="mt-8 space-y-5">
              {horario.map((h) => (
                <li
                  key={h.dia}
                  className="flex items-center justify-between border-b border-border pb-4"
                >
                  <span className="flex items-center gap-3 text-sm tracking-widest uppercase text-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {h.dia}
                  </span>
                  <span className="text-sm text-muted-foreground">{h.horas}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center border border-border bg-card p-10 text-center">
            <Scissors className="mx-auto h-8 w-8 text-primary" />
            <h3 className="mt-6 font-display text-2xl text-foreground">
              Contacto
            </h3>
            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+34611869405" className="btn-gold">
                <Phone className="h-4 w-4" /> Llamar ahora
              </a>
              <a
                href="https://www.instagram.com/olympus.barberia_?igsi=MWdwNjR5eGd1NWE4MA=="
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-gold"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visítanos */}
      <section id="visitanos" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Dónde</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              <span className="text-gold">Visítanos</span>
            </h2>
            <p className="mt-6 flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              C/ Poniente 2, Local 1
              <br />
              Armilla, 18100 · Granada
            </p>
            <a
              href="tel:+34611869405"
              className="mt-4 flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-5 w-5 text-primary" /> 611 869 405
            </a>
            <a
              href="https://wa.me/34611869405"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-primary"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.014 2C6.478 2 2 6.477 2 12.014c0 1.99.582 3.845 1.583 5.401L2 22l4.71-1.554a9.96 9.96 0 0 0 5.304 1.518h.004c5.536 0 10.014-4.477 10.014-10.014C22.032 6.477 17.55 2 12.014 2zm0 18.13a8.098 8.098 0 0 1-4.132-1.134l-.296-.176-3.088 1.019 1.037-3.008-.193-.31a8.089 8.089 0 0 1-1.242-4.307c0-4.478 3.643-8.121 8.12-8.121 4.478 0 8.121 3.643 8.121 8.121 0 4.479-3.643 8.121-8.121 8.121z" />
              </svg>{" "}
              611 869 405
            </a>
          </div>
          <div className="overflow-hidden border border-border">
            <iframe
              title="Mapa de Barbería Olympus en Armilla, Granada"
              src="https://www.google.com/maps?q=C/%20Poniente%202,%20Armilla,%2018100%20Granada&output=embed"
              loading="lazy"
              className="h-80 w-full grayscale"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="eyebrow text-center">Dudas</p>
          <h2 className="mt-4 text-center font-display text-3xl md:text-5xl">
            <span className="text-gold">Preguntas frecuentes</span>
          </h2>
          <div className="mx-auto mt-6 w-24 rule-gold" />
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faqs.slice(0, 5).map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-lg text-foreground transition-colors group-open:text-primary">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            ¿Te queda alguna duda?{" "}
            <Link to="/faq" className="text-primary hover:underline">
              Ver todas las preguntas frecuentes
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
