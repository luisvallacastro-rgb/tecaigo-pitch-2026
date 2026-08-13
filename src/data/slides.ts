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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
