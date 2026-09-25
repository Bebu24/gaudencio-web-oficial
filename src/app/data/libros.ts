// src/app/data/libros.ts

export interface Book {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  /** Correo al que se envían las solicitudes de compra de este libro (temporal, mientras no hay pagos en línea) */
  email: string;
}

export const books: Book[] = [
  {
    id: "libro_cero_golpes",
    title: "Cero golpes",
    price: 400,
    image: "/images/cero-golpes.jpg",
    description: "100 ideas para la erradicación del maltrato infantil. Una guía fundamental para educar desde el respeto y la empatía.",
    email: "cerogolpes22@gmail.com",
  },
  {
    id: "libro_verdades_adopcion",
    title: "Verdades de la adopción",
    price: 550,
    image: "/images/verdades-de-la-adopcion.webp",
    description: "Una mirada profunda, humana y científica sobre el proceso de la adopción, sus retos y la construcción del vínculo.",
    email: "verdadesdelaadopcion@gmail.com",
  },
];
