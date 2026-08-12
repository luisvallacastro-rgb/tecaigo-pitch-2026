export type SlideKind =
  | "cover"
  | "gallery"
  | "question"
  | "problem"
  | "problemPoints"
  | "formation"
  | "homefeedPanorama"
  | "homefeedConnection"
  | "eventModes"
  | "transportIntegration"
  | "touristArrival"
  | "ecosystemImpact"
  | "regionalPotential"
  | "businessModel"
  | "founder"
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
    kind: "innovationClosing",
    eyebrow: "Producto · Innovación",
    title: "Una oportunidad puede nacer en cualquier punto de la red.",
    statement: "TeCaiGO la conecta y la convierte en valor.",
    duration: 20,
    evaluation: "Producto",
    notes: {
      message: "Cerrar innovación mostrando cómo una industria fragmentada se convierte en una red colaborativa que genera valor.",
      script: "La innovación de TeCaiGO no es solamente digitalizar una reserva. Es conectar actores, capacidad, rutas, datos y oportunidades para convertir cualquier punto de la red en nuevo valor.",
    },
  },
  {
    id: 5,
    kind: "problemPoints",
    eyebrow: "Problema",
    title: "Problema:",
    bullets: ["Cupos dispersos", "Información duplicada", "Capacidad sin visibilidad", "Reservas sin trazabilidad", "Decisiones sin datos"],
    duration: 15,
    evaluation: "Producto",
    notes: {
      message: "Condensar la fragmentación operativa en cinco problemas concretos.",
      script: "El problema se manifiesta en cinco puntos: cupos dispersos, información duplicada, capacidad sin visibilidad, reservas sin trazabilidad y decisiones sin datos.",
    },
  },
  {
    id: 6,
    kind: "formation",
    eyebrow: "El ecosistema",
    title: "Cuando todos se conectan, nace TeCaiGO.",
    duration: 18,
    evaluation: "Producto",
    notes: {
      message: "Mostrar que TeCaiGO es el resultado de conectar a toda la cadena de valor.",
      script: "Al inicio todos aparecen desordenados. Luego TeCaiGO organiza directamente a comercios turísticos, tour operadores, transportistas y turistas; y de manera indirecta conecta a universidades, gobierno y banca.",
    },
  },
  {
    id: 7,
    kind: "homefeedPanorama",
    eyebrow: "Producto · Homefeed",
    title: "Descubrir oportunidades antes de que se conviertan en rutas.",
    statement: "Es una ventana tipo red social donde los comercios turísticos publican sus instalaciones, servicios y promociones para que los tour operadores descubran oportunidades y las conviertan en nuevas rutas y eventos turísticos.",
    duration: 20,
    evaluation: "Producto",
    notes: {
      message: "Explicar el Homefeed como el punto de encuentro entre la oferta de los comercios y la capacidad creadora de los tour operadores.",
      script: "El Homefeed funciona como una ventana tipo red social. Los comercios turísticos publican instalaciones, servicios y promociones; los tour operadores descubren esas oportunidades y las convierten en nuevas rutas y eventos turísticos.",
    },
  },
  {
    id: 8,
    kind: "homefeedConnection",
    eyebrow: "Conexión · Homefeed",
    title: "Una publicación conecta dos mundos.",
    statement: "El comercio muestra su oportunidad; el tour operador la descubre y la transforma en una experiencia vendible.",
    duration: 20,
    evaluation: "Producto",
    notes: {
      message: "Mostrar cómo el Homefeed conecta en tiempo real la oferta del comercio turístico con la capacidad creadora del tour operador.",
      script: "A un lado está el comercio turístico con instalaciones, servicios y promociones. Al otro está el tour operador buscando nuevas experiencias. El Homefeed conecta ambas necesidades: convierte una publicación en una oportunidad y una oportunidad en una nueva ruta.",
    },
  },
  {
    id: 9,
    kind: "eventModes",
    eyebrow: "Operación flexible",
    title: "Un evento. Dos formas de completar los cupos.",
    statement: "Privado para proteger el control del clúster anfitrión; público para activar el alcance comercial de toda la red.",
    duration: 20,
    evaluation: "Producto",
    notes: {
      message: "Explicar que TeCaiGO permite elegir entre control interno y distribución colaborativa según la estrategia del evento.",
      script: "El evento privado conserva los cupos dentro del clúster del anfitrión y evita vendedores externos. El evento público abre la venta a operadores conectados, amplía el alcance y reconoce comisión por cada cliente aportado. El anfitrión decide cómo quiere crecer.",
    },
  },
  {
    id: 10,
    kind: "transportIntegration",
    eyebrow: "Sector transporte",
    title: "Los cupos se llenan. La ruta se pone en marcha.",
    statement: "TeCaiGO integra al sector transporte, comunica la demanda confirmada y asigna la ruta definida para ejecutar la experiencia.",
    duration: 20,
    evaluation: "Producto",
    notes: {
      message: "Cerrar el ciclo operativo mostrando cómo una demanda confirmada activa al transporte con una ruta ya definida.",
      script: "Cuando los cupos se completan, TeCaiGO integra al sector transporte. La plataforma comunica cuántas personas viajarán, publica la solicitud, permite asignar el vehículo adecuado y entrega una ruta definida. Así, la oportunidad comercial se convierte finalmente en una operación real.",
    },
  },
  {
    id: 11,
    kind: "touristArrival",
    eyebrow: "Usuario final",
    title: "Todo el ecosistema llega al turista en una sola experiencia.",
    statement: "Centralizar comercios, operadores, eventos, cupos y transporte simplifica la búsqueda, la reserva y la compra para el usuario final.",
    duration: 20,
    evaluation: "Producto",
    notes: {
      message: "Mostrar que la complejidad operativa queda detrás de la plataforma mientras el turista recibe una experiencia simple y confiable.",
      script: "Después de conectar comercios, operadores, cupos, eventos y transporte, todo llega al turista en una sola experiencia. Puede descubrir, comparar, reservar y comprar con información clara, una ruta coordinada y una transacción trazable. Centralizar por dentro simplifica por fuera.",
    },
  },
  {
    id: 12,
    kind: "ecosystemImpact",
    eyebrow: "Impacto sistémico",
    title: "La tecnología activa desarrollo económico y social.",
    statement: "TeCaigo impulsa un turismo más formal, inclusivo y sostenible. Al digitalizar la actividad del sector, genera historial transaccional que facilita el acceso a financiamiento, fortalece la recaudación fiscal mediante la formalización de los negocios y crea oportunidades de formación y empleo para nuevas generaciones de profesionales del turismo. Nuestro impacto trasciende la tecnología: fortalecemos el desarrollo económico y social de todo el ecosistema.",
    duration: 20,
    evaluation: "Potencial",
    notes: {
      message: "Conectar la digitalización operativa con sus efectos indirectos en banca, gobierno y universidades.",
      script: "TeCaigo impulsa un turismo más formal, inclusivo y sostenible. La actividad digital genera historial transaccional para acceder a financiamiento, fortalece la recaudación mediante la formalización y abre oportunidades de formación y empleo. Nuestro impacto trasciende la tecnología: fortalece el desarrollo económico y social de todo el ecosistema.",
    },
  },
  {
    id: 13,
    kind: "regionalPotential",
    eyebrow: "Potencial",
    title: "Cada nueva frontera conectada convierte a TeCaigo en una red más fuerte, un ecosistema más inteligente y una industria más integrada.",
    statement: "El mercado de TeCaigo no está definido por un país, sino por un modelo operativo presente en múltiples destinos turísticos. Miles de organizadores de experiencias crean grupos, subcontratan transporte, integran proveedores y comercializan viajes de forma manual. TeCaigo digitaliza este modelo y lo convierte en un ecosistema colaborativo, replicable en cualquier mercado donde exista esta forma de operar. Su ventaja competitiva radica en conectar toda la cadena de valor del turismo —operadores, comercios, transporte, comisionistas, turistas e instituciones— generando un efecto de red donde cada nuevo participante incrementa el valor de toda la plataforma.",
    duration: 20,
    evaluation: "Potencial",
    notes: {
      message: "Definir el mercado por un patrón operativo replicable y mostrar cómo el efecto de red permite escalar regionalmente.",
      script: "El mercado de TeCaigo no está definido por un país. Está definido por una forma de operar que se repite en múltiples destinos: organizadores que crean grupos, integran proveedores, subcontratan transporte y comercializan viajes manualmente. TeCaigo digitaliza ese patrón y conecta toda la cadena de valor. Cada nuevo participante incrementa el valor de toda la plataforma.",
    },
  },
  {
    id: 14,
    kind: "businessModel",
    eyebrow: "Previsibilidad",
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
    id: 15,
    kind: "founder",
    eyebrow: "Personas",
    title: "El problema lo viví. La solución la construyo.",
    statement: "Experiencia operativa, visión financiera y conocimiento del riesgo aplicados a una industria conocida desde adentro.",
    bullets: [
      "Ex tour operador",
      "Contador Público",
      "Maestro en Banca y Finanzas",
      "Posgrado en Riesgos Bancarios y Financieros",
    ],
    duration: 52,
    evaluation: "Personas",
    notes: {
      message: "Cerrar demostrando que la experiencia del fundador y la amplitud del producto sostienen la capacidad para ejecutar.",
      script: "Soy Luis Valladares, CEO y fundador de TeCaiGO. Fui tour operador y conozco esta operación desde adentro. Soy Contador Público, Maestro en Banca y Finanzas y cuento con un Posgrado en Riesgos Bancarios y Financieros. Esa combinación me permite entender la operación, la sostenibilidad financiera y los riesgos de construir una plataforma para toda la industria. A la derecha pueden ver las experiencias que ya hemos diseñado para tour operadores, turistas, comercios y transporte. El problema lo viví; la solución la estoy construyendo.",
    },
  },
];

export const totalPitchSeconds = slides.reduce((sum, slide) => sum + slide.duration, 0);
