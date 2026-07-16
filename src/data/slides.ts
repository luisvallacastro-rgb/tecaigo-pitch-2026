export type SlideKind =
  | "cover"
  | "problem"
  | "founder"
  | "ecosystem"
  | "flow"
  | "innovation"
  | "product"
  | "market"
  | "business"
  | "closing";

export type PitchSlide = {
  id: number;
  kind: SlideKind;
  eyebrow: string;
  title: string;
  statement?: string;
  bullets?: string[];
  duration: number;
  evaluation: "Personas" | "Producto" | "Potencial" | "Previsibilidad";
  notes: {
    message: string;
    script: string;
  };
};

// Los tiempos suman exactamente 300 segundos (5:00).
export const slides: PitchSlide[] = [
  {
    id: 1,
    kind: "cover",
    eyebrow: "Turismo conectado",
    title: "Turismo conectado. Economía colaborativa.",
    statement: "Operación turística conectada en una sola red.",
    duration: 15,
    evaluation: "Producto",
    notes: {
      message: "Abrir mostrando que TeCaiGO conecta una economía completa, no solo una aplicación.",
      script: "El turismo no funciona como una sola empresa: funciona como una red. TeCaiGO conecta esa operación en un solo entorno digital, integrando operadores, clústeres, transporte, comercios, turistas e instituciones.",
    },
  },
  {
    id: 2,
    kind: "problem",
    eyebrow: "El problema",
    title: "Así opera hoy una industria completa.",
    statement: "Miles de oportunidades dependen de mensajes que desaparecen en minutos.",
    bullets: ["Cupos dispersos", "Información duplicada", "Capacidad sin visibilidad", "Reservas sin trazabilidad", "Decisiones sin datos"],
    duration: 35,
    evaluation: "Producto",
    notes: {
      message: "Hacer visible la fragmentación operativa que TeCaiGO resuelve.",
      script: "Hoy un viaje puede depender de decenas de mensajes, llamadas y hojas de cálculo. Un cupo cambia, un transporte queda libre o aparece una oportunidad, pero la información se pierde y nadie ve el sistema completo.",
    },
  },
  {
    id: 3,
    kind: "founder",
    eyebrow: "Personas",
    title: "Viví el problema antes de construir la solución.",
    statement: "Experiencia operativa, visión financiera y conocimiento del riesgo aplicados a una industria conocida desde adentro.",
    duration: 30,
    evaluation: "Personas",
    notes: {
      message: "Conectar la experiencia del fundador con la capacidad para ejecutar.",
      script: "Antes de terminar mi formación fui tour operador. Coordiné transporte, hoteles, restaurantes, grupos y cobros desde WhatsApp. Después me formé como contador, máster en banca y finanzas y especialista en riesgos. Primero viví el problema; luego adquirí las herramientas para resolverlo.",
    },
  },
  {
    id: 4,
    kind: "ecosystem",
    eyebrow: "La solución",
    title: "TeCaiGO organiza a quienes hacen posible el turismo.",
    statement: "No somos únicamente una aplicación; somos una infraestructura digital de coordinación turística.",
    duration: 30,
    evaluation: "Producto",
    notes: {
      message: "Explicar la arquitectura B2E en una frase y una imagen.",
      script: "TeCaiGO conecta toda la cadena de valor en un mismo entorno. TeCaiGO.EXE coordina la operación y TeCaiGO.APP conecta la experiencia del turista. Cada actor conserva su rol, pero comparte información y oportunidades.",
    },
  },
  {
    id: 5,
    kind: "flow",
    eyebrow: "Cómo funciona",
    title: "De una oportunidad local a una experiencia comercial.",
    duration: 30,
    evaluation: "Producto",
    notes: {
      message: "Contar un caso concreto que muestre el valor para todos.",
      script: "Un restaurante publica una experiencia. Un operador la convierte en ruta. El transporte aporta capacidad. Otros operadores y comisionistas venden. El turista reserva. Una sola oportunidad activa a todo el ecosistema.",
    },
  },
  {
    id: 6,
    kind: "innovation",
    eyebrow: "Innovación",
    title: "Una forma diferente de organizar el turismo.",
    statement: "La mayoría conecta oferta y demanda. TeCaiGO conecta toda la cadena de valor.",
    duration: 30,
    evaluation: "Producto",
    notes: {
      message: "Definir B2E como la innovación central y separar presente de visión.",
      script: "Nuestra innovación es B2E: Business to Ecosystem. Los clústeres, eventos públicos y privados, HomeFeed, transporte y comisionistas convierten capacidades aisladas en una red coordinada. La analítica avanzada permanece como hoja de ruta.",
    },
  },
  {
    id: 7,
    kind: "product",
    eyebrow: "Producto en funcionamiento",
    title: "Una plataforma para cada actor del ecosistema.",
    statement: "Una experiencia especializada; una misma infraestructura compartida.",
    duration: 30,
    evaluation: "Producto",
    notes: {
      message: "Demostrar que el producto traduce el modelo en flujos concretos.",
      script: "Los operadores crean y controlan eventos. Los turistas exploran y reservan. Los comercios publican oportunidades. Transporte comunica capacidad y coordina rutas. Estas interfaces ya muestran cómo cada actor entra a la misma red.",
    },
  },
  {
    id: 8,
    kind: "market",
    eyebrow: "Potencial",
    title: "Nuestro mercado no es un país; es un modelo operativo.",
    statement: "Donde existan organizadores que integran proveedores y venden experiencias manualmente, existe una oportunidad para TeCaiGO.",
    duration: 35,
    evaluation: "Potencial",
    notes: {
      message: "Presentar la lógica de expansión sin inventar cifras.",
      script: "Comenzamos en El Salvador, avanzamos al Triángulo Norte y después a Centroamérica. No dependemos de una atracción específica: seguimos un modelo operativo que se repite en múltiples mercados. Las cifras TAM, SAM y SOM están marcadas para validación.",
    },
  },
  {
    id: 9,
    kind: "business",
    eyebrow: "Previsibilidad",
    title: "Un modelo escalable con múltiples fuentes de ingresos.",
    statement: "Más actores generan más oferta, transacciones, datos y valor para toda la red.",
    duration: 35,
    evaluation: "Previsibilidad",
    notes: {
      message: "Mostrar cómo captura valor la plataforma sin prometer precios no validados.",
      script: "El modelo combina suscripciones, comisiones por transacción, posicionamiento, servicios premium y analítica. A futuro, el historial del ecosistema habilita soluciones financieras. El efecto de red mejora la utilidad de la plataforma con cada nuevo actor.",
    },
  },
  {
    id: 10,
    kind: "closing",
    eyebrow: "Impacto",
    title: "Organizar digitalmente el turismo para transformar la economía.",
    statement: "Mientras otras plataformas venden viajes, TeCaiGO organiza la industria que los hace posibles.",
    bullets: ["Formalización", "Inclusión financiera", "Empleo", "Capacidad productiva", "Datos para decidir", "Desarrollo regional"],
    duration: 30,
    evaluation: "Potencial",
    notes: {
      message: "Cerrar con diferenciación, impacto y una visión memorable.",
      script: "TeCaiGO convierte coordinación en formalización, empleo, inclusión financiera y mejores decisiones. En TeCaiGO nadie gana solo: el crecimiento de cada actor impulsa el crecimiento de todo el ecosistema.",
    },
  },
];

export const totalPitchSeconds = slides.reduce((sum, slide) => sum + slide.duration, 0);
