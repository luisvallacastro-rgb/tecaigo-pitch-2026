export type SlideKind =
  | "cover"
  | "gallery"
  | "question"
  | "problem"
  | "problemPoints"
  | "marketPotential"
  | "formation"
  | "homefeedPanorama"
  | "homefeedConnection"
  | "eventModes"
  | "transportIntegration"
  | "touristArrival"
  | "ecosystemImpact"
  | "regionalPotential"
  | "competitiveAdvantage"
  | "impact"
  | "businessModel"
  | "founder"
  | "teamExperience"
  | "ecosystem"
  | "flow"
  | "innovation"
  | "innovationClosing"
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
  innovationIntro?: {
    actors: Array<{
      id: "operators" | "commerce" | "transport" | "tourists";
      label: string;
      description: string;
      image: string;
    }>;
  };
  productInterfaces?: Array<{
    id: "operators" | "commerce" | "tourists" | "transport";
    label: string;
    title: string;
    description: string;
    image: string;
  }>;
  businessModel?: {
    streams: Array<{
      icon: "subscriptions" | "commissions" | "positioning" | "analytics" | "finance";
      title: string;
      description: string;
      detail?: string;
      status?: string;
    }>;
    networkFlow: string[];
    impact: string;
    support?: string;
  };
  teamExperience?: {
    profiles: Array<{
      initials: string;
      name: string;
      role: string;
      credentials: string[];
      quote: string;
    }>;
    capacities: string[];
    impactPath: string[];
    institutionalPath: string;
    highlight: string;
    footer: string;
  };
  duration: number;
  evaluation: "Personas" | "Producto" | "Potencial" | "Previsibilidad";
  notes: {
    message: string;
    script: string;
  };
};

// Los tiempos se calculan automáticamente para acompañar la reconstrucción del pitch.
export const slides: PitchSlide[] = [
  {
    id: 1,
    kind: "innovation",
    eyebrow: "Innovación · Ecosistema conectado",
    title: "¿Y si pudiéramos conectar todo el ecosistema turístico en un solo lugar?",
    statement: "TeCaiGO convierte actores dispersos en un ecosistema que crea nuevas oportunidades de negocio.",
    bullets: ["Quienes crean, operan, comercializan y consumen experiencias turísticas."],
    innovationIntro: {
      actors: [
        {
          id: "operators",
          label: "Tour Operadores",
          description: "Crean experiencias y colaboran.",
          image: "/assets/page-1/TourOperador02.png",
        },
        {
          id: "commerce",
          label: "Comercios Turísticos",
          description: "Transforman su oferta en nuevas experiencias.",
          image: "/assets/page-1/Comercio01.png",
        },
        {
          id: "transport",
          label: "Transporte",
          description: "Activa su capacidad disponible.",
          image: "/assets/page-1/Transportista01.png",
        },
        {
          id: "tourists",
          label: "Turistas",
          description: "Descubren, reservan y compran.",
          image: "/assets/page-1/Turista01.png",
        },
      ],
    },
    duration: 15,
    evaluation: "Producto",
    notes: {
      message: "Introducir la innovación de TeCaiGO como una red de cuatro actores que crea valor por medio de su interacción.",
      script: "¿Y si pudiéramos conectar en un solo lugar a quienes crean, operan, comercializan y consumen experiencias turísticas? TeCaiGO convierte actores dispersos en un ecosistema que crea nuevas oportunidades de negocio.",
    },
  },
  {
    id: 2,
    kind: "problem",
    eyebrow: "La colaboración ya existe",
    title: "Así opera hoy una industria completa.",
    statement: "Está fragmentada entre WhatsApp, llamadas y contactos personales.",
    bullets: ["Cupos dispersos", "Información duplicada", "Capacidad sin visibilidad", "Reservas sin trazabilidad", "Decisiones sin datos"],
    duration: 30,
    evaluation: "Producto",
    notes: {
      message: "Mostrar que TeCaiGO organiza digitalmente una colaboración económica que ya sucede, pero hoy está fragmentada.",
      script: "Hoy los operadores buscan cupos, transporte, clientes y proveedores mediante WhatsApp, llamadas y contactos personales. La colaboración ya existe, pero está fragmentada. TeCaiGO no intenta crear un comportamiento nuevo: organiza digitalmente una actividad económica que ya ocurre todos los días.",
    },
  },
  {
    id: 3,
    kind: "product",
    eyebrow: "Innovación",
    title: "Toda la red, en movimiento.",
    statement: "Cuatro interfaces especializadas. Un solo ecosistema conectado.",
    productInterfaces: [
      { id:"operators", label:"Tour operadores", title:"Crear y coordinar", description:"Crea experiencias y coordina cupos.", image:"/assets/founder-carousel/tecaigo-to-mobile-01.jpg" },
      { id:"commerce", label:"Comercio turístico", title:"Convertir oferta", description:"Convierte su oferta en nuevas rutas.", image:"/assets/founder-carousel/tecaigo-commerce-mobile-01.jpg" },
      { id:"tourists", label:"Turista", title:"Descubrir y comprar", description:"Descubre, reserva y compra.", image:"/assets/founder-carousel/tecaigo-tourist-mobile-01.jpg" },
      { id:"transport", label:"Transporte", title:"Activar capacidad", description:"Activa su capacidad disponible.", image:"/assets/founder-carousel/tecaigo-transport-mobile-01.jpg" },
    ],
    duration: 35,
    evaluation: "Producto",
    notes: {
      message: "Mostrar las cuatro interfaces especializadas de TeCaiGO con el mismo tiempo y protagonismo.",
      script: "TeCaiGO organiza la colaboración existente mediante cuatro experiencias conectadas: una para tour operadores, una para comercios turísticos, una para turistas y una para transporte. Cada actor recibe herramientas específicas, pero todos operan dentro de una sola red.",
    },
  },
  {
    id: 4,
    kind: "problemPoints",
    eyebrow: "Propuesta de Valor",
    title: "Cuando la red comparte oportunidades, cada actor puede crecer más.",
    statement: "Un ecosistema conectado multiplica beneficios para todos.",
    duration: 30,
    evaluation: "Producto",
    notes: {
      message: "Presentar la amplitud de beneficios que TeCaiGO genera cuando convierte actores dispersos en una red colaborativa.",
      script: "La propuesta de valor de TeCaiGO se traduce en beneficios concretos: nuevas rutas, más ventas, costos compartidos, capacidad aprovechada, nuevos clientes, mayor visibilidad, acceso financiero y crecimiento compartido. Cuando la red comparte oportunidades, cada actor puede crecer más.",
    },
  },
  {
    id: 5,
    kind: "marketPotential",
    eyebrow: "Potencial de Mercado",
    title: "El Salvador, nuestra primera meta.",
    statement: "Cobertura nacional para consolidar el mercado turístico de El Salvador.",
    duration: 30,
    evaluation: "Potencial",
    notes: {
      message: "Demostrar que la prioridad inicial es alcanzar cobertura nacional y consolidar el mercado de El Salvador.",
      script: "Nuestra primera meta es cubrir El Salvador. Queremos consolidar una red nacional de operadores, transporte, hoteles, restaurantes, comercios, comisionistas y turistas que conecte la oferta de los distintos destinos del país. El Salvador es el mercado donde validaremos, fortaleceremos y haremos predecible el modelo antes de llevarlo a la región.",
    },
  },
  {
    id: 6,
    kind: "regionalPotential",
    eyebrow: "Escalabilidad",
    title: "Primero El Salvador. Luego el Triángulo Norte. Después Centroamérica.",
    statement: "Una expansión ordenada y sostenible, construida mercado por mercado.",
    duration: 25,
    evaluation: "Potencial",
    notes: {
      message: "Demostrar una expansión ordenada y sostenible: después de consolidar El Salvador, ganar el Triángulo Norte y luego Centroamérica.",
      script: "Nuestra expansión sigue una secuencia clara. Primero consolidamos El Salvador y hacemos predecible el modelo. Luego ganamos el Triángulo Norte, conectando Guatemala y Honduras a la red. Con esa base operativa, escalamos al resto de Centroamérica de manera ordenada, sostenible y replicable.",
    },
  },
  {
    id: 7,
    kind: "competitiveAdvantage",
    eyebrow: "Ventaja Competitiva",
    title: "El software puede copiarse. La confianza que conecta a toda una red, no.",
    duration: 25,
    evaluation: "Potencial",
    notes: {
      message: "Explicar que la ventaja competitiva sostenible de TeCaiGO es la red activa de relaciones, información, transacciones y confianza construida alrededor del software.",
      script: "Nuestra ventaja no es únicamente el software; es el ecosistema que construimos alrededor de él. Una función puede copiarse, pero una red activa de operadores, comercios, transporte, comisionistas y turistas, con relaciones, información e historial transaccional, requiere tiempo y confianza.",
    },
  },
  {
    id: 8,
    kind: "impact",
    eyebrow: "Impacto",
    title: "Una industria que ya mueve al país. Una red capaz de multiplicar su impacto.",
    statement: "TeCaiGO conecta la actividad turística existente y la convierte en oportunidades medibles.",
    duration: 30,
    evaluation: "Potencial",
    notes: {
      message: "Dimensionar el impacto económico del turismo y mostrar el valor que TeCaiGO puede movilizar al conectar una pequeña parte de esa actividad.",
      script: "El Salvador recibió 4.1 millones de visitantes y generó 3,635 millones de dólares en divisas turísticas, sosteniendo más de 300 mil empleos. TeCaiGO conecta operadores, transporte, comercios y turistas para crear nuevas rutas y aprovechar mejor la capacidad existente. Al conectar solo el uno por ciento de esta actividad, podríamos movilizar cerca de 36.4 millones de dólares e impulsar formalización e inclusión financiera.",
    },
  },
  {
    id: 9,
    kind: "businessModel",
    eyebrow: "Ingresos",
    title: "Modelo de negocio escalable",
    statement: "Múltiples fuentes de ingresos impulsadas por un solo ecosistema.",
    businessModel: {
      streams: [
        { icon: "subscriptions", title: "Suscripciones SaaS", description: "Planes mensuales.", detail: "Operadores · Comercios · Transporte" },
        { icon: "commissions", title: "Comisiones", description: "Por reservas e intermediación." },
        { icon: "positioning", title: "Publicidad", description: "Mayor visibilidad comercial." },
        { icon: "analytics", title: "Analítica", description: "Datos estratégicos." },
        { icon: "finance", title: "Próxima evolución", description: "Servicios financieros.", status: "Próxima evolución" },
      ],
      networkFlow: ["Más actores", "Más transacciones", "Más ingresos"],
      impact: "Cada nuevo participante fortalece el ecosistema y aumenta el valor de toda la plataforma.",
    },
    duration: 20,
    evaluation: "Previsibilidad",
    notes: {
      message: "Demostrar ingresos recurrentes, diversificación y crecimiento sostenible impulsado por el efecto de red.",
      script: "TeCaiGO no depende de una única comisión. Combina suscripciones, comisiones, posicionamiento y analítica. Los servicios financieros son una evolución futura, habilitada por el historial transaccional. A medida que llegan más actores, crecen los eventos, las transacciones, la información, el valor del ecosistema y las oportunidades de ingreso.",
    },
  },
  {
    id: 10,
    kind: "gallery",
    eyebrow: "Experiencia real · Antes del software",
    title: "La industria no me la contaron. La operé.",
    statement: "TeCaiGO nace de experiencia real en la industria. Antes de desarrollar la plataforma fui tour operador: organicé rutas nacionales e internacionales y coordiné grupos, transporte, hoteles y proveedores. Esa experiencia me permite diseñar una solución basada en problemas operativos que conozco de primera mano.",
    bullets: ["Rutas nacionales e internacionales", "Grupos y transporte", "Hoteles y proveedores"],
    duration: 25,
    evaluation: "Personas",
    notes: {
      message: "Demostrar que TeCaiGO nace del conocimiento directo de la operación turística y de problemas vividos en primera persona.",
      script: "TeCaiGO nace de experiencia real en la industria. Antes de desarrollar la plataforma fui tour operador: organicé rutas nacionales e internacionales y coordiné grupos, transporte, hoteles y proveedores. Esa experiencia me permite diseñar una solución basada en problemas operativos que conozco de primera mano.",
    },
  },
  {
    id: 11,
    kind: "teamExperience",
    eyebrow: "Personas · Experiencia",
    title: "Experiencia para transformar el sector",
    statement: "Turismo + Finanzas + Contabilidad + Tecnología",
    teamExperience: {
      profiles: [
        {
          initials: "LV",
          name: "Mtro. Luis Valladares",
          role: "Fundador de TeCaiGO",
          credentials: [
            "Ex tour operador turístico",
            "Lic. en Contaduría Pública",
            "Maestría en Banca y Finanzas",
            "Posgrado en Riesgos Bancarios y Financieros",
          ],
          quote: "Experiencia de campo convertida en infraestructura tecnológica.",
        },
        {
          initials: "AF",
          name: "Lic. Alexander Franco",
          role: "Cofundador de TeCaiGO",
          credentials: [
            "Lic. en Contaduría Pública",
            "Experiencia financiera",
            "Experiencia legal",
            "Estructura financiera y legal del proyecto",
          ],
          quote: "Estructura financiera y legal para construir un modelo sostenible.",
        },
      ],
      capacities: ["Turismo", "Contabilidad", "Finanzas", "Riesgos", "Tecnología"],
      impactPath: ["Experiencia", "Datos e historial", "Formalización", "Inclusión financiera", "Oportunidades"],
      institutionalPath: "Diálogo institucional · estudio de mecanismos de formalización tributaria",
      highlight: "Tecnología para construir historial, trazabilidad y acceso a nuevas oportunidades.",
      footer: "No solo conocemos el problema. Tenemos la experiencia para conectar al sector con nuevas oportunidades.",
    },
    duration: 20,
    evaluation: "Personas",
    notes: {
      message: "Demostrar que el equipo combina conocimiento turístico, financiero, contable, legal y tecnológico para transformar experiencia real en oportunidades medibles.",
      script: "TeCaiGO está fundado por profesionales que conocen tanto la operación turística como el mundo financiero y contable. Esa experiencia nos permite ir más allá de la tecnología: queremos generar historial, impulsar la inclusión financiera y abrir espacios de diálogo para que más actores del turismo puedan avanzar hacia la formalización y nuevas oportunidades.",
    },
  },
  {
    id: 12,
    kind: "closing",
    eyebrow: "Cierre",
    title: "TeCaiGO no solo conecta el turismo: conecta oportunidades, formaliza relaciones y construye la infraestructura para que el sector crezca como una sola red.",
    duration: 15,
    evaluation: "Producto",
    notes: {
      message: "Cerrar el pitch en cinco minutos con la visión de TeCaiGO como infraestructura para el crecimiento coordinado del sector turístico.",
      script: "TeCaiGO no solo conecta el turismo: conecta oportunidades, formaliza relaciones y construye la infraestructura para que el sector crezca como una sola red.",
    },
  },
];

export const totalPitchSeconds = slides.reduce((sum, slide) => sum + slide.duration, 0);
