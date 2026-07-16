"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  BusFront,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Expand,
  GraduationCap,
  HandCoins,
  Hotel,
  Landmark,
  Maximize2,
  Network,
  Pause,
  Play,
  Presentation,
  Printer,
  RefreshCcw,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  TicketCheck,
  TimerReset,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { slides, totalPitchSeconds, type PitchSlide } from "../data/slides";

const actorIcons = [Users, Network, Store, BusFront, HandCoins, TicketCheck, Landmark];
const actors = ["Tour operadores", "Clústeres", "Comercios", "Transporte", "Comisionistas", "Turistas", "Instituciones"];
const flow = [
  [Store, "Comercio publica"],
  [Route, "Operador crea la ruta"],
  [BusFront, "Transporte aporta capacidad"],
  [HandCoins, "La red comercializa"],
  [TicketCheck, "Turistas reservan"],
  [Sparkles, "Todos generan valor"],
] as const;

const innovation = [
  [Network, "Clústeres colaborativos", "ACTUAL"],
  [ShieldCheck, "Eventos privados", "ACTUAL"],
  [Users, "Eventos públicos", "ACTUAL"],
  [Store, "HomeFeed comercial", "ACTUAL"],
  [BusFront, "Transporte integrado", "ACTUAL"],
  [HandCoins, "Red de comisionistas", "DESPLIEGUE"],
] as const;

const productPanels = [
  ["Tour operadores", "Crear, compartir y controlar eventos.", "/assets/operadores.png"],
  ["Turistas", "Explorar, reservar y comprar experiencias.", "/assets/turistas.png"],
  ["Comercios", "Publicar capacidad y oportunidades.", "/assets/comercios.png"],
  ["Transporte", "Coordinar disponibilidad, flota y rutas.", "/assets/transporte.png"],
] as const;

const revenue = [
  [CircleDollarSign, "Suscripciones"],
  [TicketCheck, "Comisiones"],
  [TrendingUp, "Posicionamiento"],
  [Sparkles, "Servicios premium"],
  [BarChart3, "Analítica sectorial"],
  [Landmark, "Finanzas futuras"],
] as const;

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className={`brand ${compact ? "brand--compact" : ""}`}><span>TeCai</span><b>GO</b></div>;
}

const heroBackgrounds = [
  ["/assets/hero/guide-mountain.png", "Tour operadores"],
  ["/assets/hero/transport-microbus.png", "Transporte"],
  ["/assets/hero/restaurant-owner.png", "Comercios"],
  ["/assets/hero/guides-cluster.png", "Clusters"],
  ["/assets/hero/university-classroom.png", "Instituciones"],
  ["/assets/hero/tourist-beach.png", "Turistas"],
] as const;

const operatorGallery = [
  "45442007_1907864685917564_2402222178415149056_n.jpg",
  "45570123_1907864512584248_8965224646731366400_n.jpg",
  "48406134_1974158145954884_6418375105390313472_n.jpg",
  "52038601_2054577661246265_4502118890150559744_n.jpg",
  "57244795_2138685466168817_1917057604597579776_n.jpg",
  "57251271_2138212869549410_4119106814933467136_n.jpg",
  "57311619_2138212939549403_3508221113773588480_n.jpg",
  "57319701_2138212682882762_6475376412399239168_n.jpg",
  "57352905_2138212899549407_8256299230344249344_n.jpg",
  "57352965_2138685449502152_1897649459135774720_n.jpg",
  "57437629_2138685536168810_4536898981262786560_n.jpg",
  "57486702_2138212776216086_8381434876334702592_n.jpg",
  "57503844_2138212706216093_1031818983231193088_n.jpg",
  "57989048_2138685489502148_5610972836299538432_n.jpg",
  "58377032_2138212786216085_3731329228688326656_n.jpg",
] as const;

const audienceQuestion = "Cómo creen que se organizan hoy gran parte de los tour operadores en nuestros países?";

function HeroNetwork({ activeLabel, reduceMotion }: { activeLabel: string; reduceMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const nodes = [
      { x: .68, y: .31, r: 5, label: "Tour operadores", labelY: -34 },
      { x: .82, y: .23, r: 4, label: "Clusters", labelY: -34 },
      { x: .94, y: .39, r: 5, label: "Transporte", labelY: -34 },
      { x: .91, y: .58, r: 4, label: "Comercios", labelY: 34 },
      { x: .82, y: .71, r: 6, label: "Turistas", labelY: 36 },
      { x: .63, y: .49, r: 4, label: "Instituciones", labelY: 36 },
      { x: .80, y: .49, r: 10, label: "Tecaigo", labelY: -40 },
    ];
    const links = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5]];
    let width = 0, height = 0, frame = 0, animationFrame = 0;
    let pointer = { x: .5, y: .5 };
    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.offsetWidth; height = canvas.offsetHeight;
      canvas.width = width * ratio; canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const onPointerMove = (event: PointerEvent) => { pointer = { x: event.clientX / Math.max(window.innerWidth, 1), y: event.clientY / Math.max(window.innerHeight, 1) }; };
    const draw = () => {
      frame += 1; ctx.clearRect(0, 0, width, height);
      const points = nodes.map((node, index) => ({
        x: node.x * width + (reduceMotion ? 0 : Math.sin(frame * .012 + index) * 8) + (pointer.x - .5) * 10,
        y: node.y * height + (reduceMotion ? 0 : Math.cos(frame * .01 + index) * 8) + (pointer.y - .5) * 10,
      }));
      const core = points[6];
      const glow = ctx.createRadialGradient(core.x, core.y, 20, core.x, core.y, Math.min(width, height) * .34);
      glow.addColorStop(0, "rgba(10,165,173,.38)"); glow.addColorStop(.48, "rgba(10,165,173,.16)"); glow.addColorStop(1, "rgba(10,165,173,0)");
      ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(core.x, core.y, Math.min(width, height) * .34, 0, Math.PI * 2); ctx.fill();
      links.forEach(([a,b], linkIndex) => {
        const alpha = .52 + (reduceMotion ? 0 : Math.sin(frame * .018 + linkIndex) * .1);
        ctx.strokeStyle = `rgba(10,165,173,${alpha})`; ctx.lineWidth = 1.45; ctx.beginPath(); ctx.moveTo(points[a].x, points[a].y); ctx.lineTo(points[b].x, points[b].y); ctx.stroke();
      });
      points.forEach((point, nodeIndex) => {
        const node = nodes[nodeIndex]; const coreNode = node.label === "Tecaigo"; const highlighted = node.label === activeLabel;
        ctx.beginPath(); ctx.arc(point.x, point.y, node.r + (coreNode ? 6 : highlighted ? 8 : 2), 0, Math.PI * 2); ctx.fillStyle = coreNode || highlighted ? "rgba(10,165,173,.34)" : "rgba(10,165,173,.22)"; ctx.fill();
        ctx.beginPath(); ctx.arc(point.x, point.y, node.r, 0, Math.PI * 2); ctx.fillStyle = coreNode || highlighted ? "#0aa5ad" : "rgba(255,253,247,.94)"; ctx.fill();
        const labelY = point.y + node.labelY; ctx.font = `${coreNode || highlighted ? 800 : 700} ${coreNode || highlighted ? 15 : 13}px Arial, sans-serif`; ctx.textBaseline = "middle"; ctx.textAlign = "center";
        const textWidth = ctx.measureText(node.label).width; ctx.fillStyle = coreNode || highlighted ? "rgba(10,165,173,.34)" : "rgba(6,18,17,.55)"; ctx.strokeStyle = coreNode || highlighted ? "rgba(10,165,173,.84)" : "rgba(10,165,173,.48)"; ctx.lineWidth = highlighted ? 1.6 : 1;
        ctx.beginPath(); ctx.roundRect(point.x - textWidth / 2 - 9, labelY - 13, textWidth + 18, 26, 8); ctx.fill(); ctx.stroke();
        ctx.fillStyle = coreNode || highlighted ? "rgba(10,210,220,1)" : "rgba(255,253,247,.96)"; ctx.fillText(node.label, point.x, labelY);
      });
      if (!reduceMotion) animationFrame = requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener("resize", resize); window.addEventListener("pointermove", onPointerMove);
    return () => { cancelAnimationFrame(animationFrame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", onPointerMove); };
  }, [activeLabel, reduceMotion]);

  return <canvas ref={canvasRef} className="landing-hero__network" aria-hidden="true" />;
}

function LandingHeroCover({ reduceMotion }: { reduceMotion: boolean }) {
  const [backgroundIndex, setBackgroundIndex] = useState(4);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setBackgroundIndex(value => (value + 1) % heroBackgrounds.length), 5600);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="landing-hero" aria-label="Turismo conectado por TeCaiGO">
      <div className="landing-hero__background" aria-hidden="true">
        {heroBackgrounds.map(([src, label], imageIndex) => <img key={src} className={imageIndex === backgroundIndex ? "is-active" : ""} src={src} alt="" data-actor={label} />)}
      </div>
      <div className="landing-hero__shade" />
      <HeroNetwork activeLabel={heroBackgrounds[backgroundIndex][1]} reduceMotion={reduceMotion} />
      <div className="landing-hero__focus">
        <motion.div className="landing-hero__focus-inner" initial={reduceMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="landing-hero__aura" aria-hidden="true"><span /><span /><span /></div>
          <div className="landing-hero__brand"><Brand /></div>
          <div className="landing-hero__actions">
            <a className="is-primary" href="https://tecaigo-app.onrender.com/?v=tecaigo-mobile-login-20" target="_blank" rel="noreferrer"><Network size={25} /><span>TeCaiGO.EXE</span></a>
            <a href="https://tecaigo-flutter-prototype.onrender.com/?v=desktop-frame-36a965e" target="_blank" rel="noreferrer"><Smartphone size={25} /><span>TeCaiGO.APP</span></a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function OperatorGallery({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="operator-gallery" aria-label="Galería de tour operadores">
      <div className="operator-gallery__grid" aria-hidden="true">
        {operatorGallery.map((image, photoIndex) => (
          <motion.figure
            className={`operator-photo operator-photo--${photoIndex + 1}`}
            key={image}
            initial={reduceMotion ? false : { opacity: 0, scale: .88, y: photoIndex % 2 ? 28 : -28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: .72, delay: reduceMotion ? 0 : photoIndex * .045, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={`/assets/tour-operators/${image}`} alt="" />
          </motion.figure>
        ))}
      </div>
      <div className="operator-gallery__veil" aria-hidden="true" />
      <motion.div className="operator-gallery__panel" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .55, duration: .7 }}>
        <div className="operator-gallery__eyebrow"><span /> Nuestro origen</div>
        <h1>Tour operadores<br /><em>en acción.</em></h1>
        <p>Personas que convierten territorio, conocimiento y colaboración en experiencias.</p>
        <div className="operator-gallery__signals">
          <span><b>15</b> memorias reales</span>
          <span><b>1</b> comunidad conectada</span>
          <span><Network size={18} /> la red antes de la plataforma</span>
        </div>
      </motion.div>
      <div className="operator-gallery__live"><i /> RED EN MOVIMIENTO</div>
    </div>
  );
}

function AudienceQuestion({ reduceMotion }: { reduceMotion: boolean }) {
  const words = audienceQuestion.split(" ");
  return (
    <div className="audience-question" aria-label={audienceQuestion}>
      <div className="audience-question__orb audience-question__orb--one" aria-hidden="true" />
      <div className="audience-question__orb audience-question__orb--two" aria-hidden="true" />
      <div className="audience-question__mark" aria-hidden="true">?</div>
      <motion.div className="audience-question__content" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="audience-question__eyebrow"><i /> Pensemos por un momento</span>
        <h1 aria-hidden="true">
          {words.map((word, wordIndex) => (
            <motion.span
              key={`${word}-${wordIndex}`}
              initial={reduceMotion ? false : { opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .5, delay: reduceMotion ? 0 : .28 + wordIndex * .15, ease: [0.22, 1, 0.36, 1] }}
            >{word}</motion.span>
          ))}
          <motion.i className="audience-question__cursor" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ delay: reduceMotion ? 0 : 2.65, duration: 1.1, repeat: reduceMotion ? 0 : Infinity }} />
        </h1>
        <motion.div className="audience-question__line" initial={reduceMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: reduceMotion ? 0 : 2.5, duration: .8, ease: [0.22, 1, 0.36, 1] }} />
      </motion.div>
    </div>
  );
}

function ProblemVisual() {
  return (
    <div className="problem-grid">
      <div className="chat-evidence" aria-label="Representación anonimizada de coordinación por mensajería">
        <div className="chat-evidence__top"><span className="anon-avatar">TO</span><div><strong>Grupo de coordinación</strong><small>Identidad anonimizada</small></div><span>•••</span></div>
        <div className="bubble bubble--in">¿Cuántos cupos quedan para el sábado?<time>10:42</time></div>
        <div className="bubble bubble--out">Tengo 6… creo que otro operador reservó 3.<time>10:44</time></div>
        <div className="bubble bubble--in">¿Quién confirma el microbús?<time>10:47</time></div>
        <div className="bubble bubble--out bubble--alert">Mensaje eliminado<time>10:51</time></div>
        <div className="privacy-label"><ShieldCheck size={16} /> Evidencia recreada y anonimizada</div>
      </div>
      <div className="problem-list">
        {slides.find(slide => slide.kind === "problem")?.bullets?.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}
      </div>
    </div>
  );
}

function FounderVisual() {
  const path = [
    [BusFront, "Tour operador"],
    [BriefcaseBusiness, "Contador público"],
    [GraduationCap, "Máster en Banca y Finanzas"],
    [ShieldCheck, "Gestión de Riesgos"],
    [Sparkles, "Fundador de TeCaiGO"],
  ] as const;
  return (
    <div className="founder-grid">
      <div className="founder-photo-placeholder"><span>LV</span><strong>Luis Valladares</strong><small>Fotografía reemplazable</small></div>
      <div className="founder-path">{path.map(([Icon, label], index) => <div key={label}><span><Icon size={25} /></span><strong>{label}</strong>{index < path.length - 1 && <ChevronRight size={20} />}</div>)}</div>
    </div>
  );
}

function EcosystemVisual() {
  return (
    <div className="ecosystem-map">
      <div className="ecosystem-core"><Brand compact /><small>B2E</small></div>
      {actors.map((actor, index) => { const Icon = actorIcons[index]; return <div className={`actor actor--${index + 1}`} key={actor}><span><Icon size={22} /></span><strong>{actor}</strong></div>; })}
    </div>
  );
}

function FlowVisual({ reduceMotion }: { reduceMotion: boolean }) {
  return <div className="flow-line">{flow.map(([Icon, label], index) => <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : index * .14 }}><span className="flow-step"><Icon size={25} /></span><strong>{label}</strong>{index < flow.length - 1 && <ChevronRight className="flow-arrow" size={24} />}</motion.div>)}</div>;
}

function InnovationVisual() {
  return <div className="innovation-grid"><div className="b2e-card"><span>B2E</span><strong>Business to Ecosystem</strong><small>Una red. Múltiples ganadores.</small></div>{innovation.map(([Icon, title, status]) => <div className="innovation-card" key={title}><div><Icon size={25} /></div><strong>{title}</strong><small>{status}</small></div>)}</div>;
}

function ProductVisual() {
  return <div className="product-grid">{productPanels.map(([title, text, image]) => <div className="product-card" key={title}><div className="product-card__crop"><img src={image} alt={`Interfaz para ${title}`} /></div><div><strong>{title}</strong><small>{text}</small></div></div>)}</div>;
}

function MarketVisual() {
  return <div className="market-layout"><div className="expansion"><div className="map-glow"><Route size={44} /><span>ES</span></div><div className="route-labels"><b>El Salvador</b><ChevronRight /><b>Triángulo Norte</b><ChevronRight /><b>Centroamérica</b><ChevronRight /><b>Modelo replicable</b></div></div><div className="metrics-grid">{["TAM", "SAM", "SOM", "Operadores", "Turistas", "Comercios"].map(item => <div key={item}><small>{item}</small><strong>Dato por validar</strong></div>)}</div></div>;
}

function BusinessVisual() {
  const loop = ["Más actores", "Más oferta", "Más transacciones", "Más datos", "Más valor"];
  return <div className="business-layout"><div className="revenue-grid">{revenue.map(([Icon, label]) => <div key={label}><Icon size={25} /><strong>{label}</strong></div>)}</div><div className="network-loop"><div className="network-loop__core"><Network size={32} /><strong>Efecto de red</strong></div>{loop.map((label, index) => <span className={`loop-node loop-node--${index + 1}`} key={label}>{label}</span>)}</div></div>;
}

function ClosingVisual() {
  return <div className="closing-layout"><div className="impact-grid">{slides.find(slide => slide.kind === "closing")?.bullets?.map((item, index) => { const icons = [BriefcaseBusiness, Landmark, Users, Building2, BarChart3, TrendingUp]; const Icon = icons[index]; return <div key={item}><Icon size={28} /><strong>{item}</strong></div>; })}</div><div className="closing-brand"><Brand /><span>En TeCaiGO nadie gana solo.</span></div></div>;
}

function SlideVisual({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  switch (slide.kind) {
    case "cover": return null;
    case "gallery": return null;
    case "question": return null;
    case "problem": return <ProblemVisual />;
    case "founder": return <FounderVisual />;
    case "ecosystem": return <EcosystemVisual />;
    case "flow": return <FlowVisual reduceMotion={reduceMotion} />;
    case "innovation": return <InnovationVisual />;
    case "product": return <ProductVisual />;
    case "market": return <MarketVisual />;
    case "business": return <BusinessVisual />;
    case "closing": return <ClosingVisual />;
  }
}

function formatTime(seconds: number) {
  const safe = Math.max(0, seconds);
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
}

export default function PitchDeck() {
  const [index, setIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [autoDemo, setAutoDemo] = useState(false);
  const [aspectWarning, setAspectWarning] = useState(false);
  const reduceMotion = Boolean(useReducedMotion());
  const slideStartedAt = useRef(0);

  const current = slides[index];
  const immersive = current.kind === "cover" || current.kind === "gallery" || current.kind === "question";
  const progress = ((index + 1) / slides.length) * 100;
  const remaining = totalPitchSeconds - elapsed;

  const goTo = useCallback((next: number) => {
    setIndex(Math.max(0, Math.min(slides.length - 1, next)));
    slideStartedAt.current = Date.now();
  }, []);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const resetTimer = useCallback(() => { setElapsed(0); slideStartedAt.current = Date.now(); }, []);

  useEffect(() => {
    const check = () => setAspectWarning(Math.abs(window.innerWidth / window.innerHeight - 16 / 9) > .32);
    check(); window.addEventListener("resize", check); return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setElapsed(value => value + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (!autoDemo || !running) return;
    const id = window.setTimeout(() => index < slides.length - 1 ? next() : setAutoDemo(false), current.duration * 1000);
    return () => window.clearTimeout(id);
  }, [autoDemo, current.duration, index, next, running]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); next(); }
      if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); previous(); }
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(slides.length - 1);
      if (event.key.toLowerCase() === "p") setNotesOpen(value => !value);
      if (event.key.toLowerCase() === "f") document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [goTo, next, previous]);

  const timeline = useMemo(() => slides.slice(0, index).reduce((sum, slide) => sum + slide.duration, 0), [index]);

  const toggleFullscreen = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();

  return (
    <main className={`deck-shell ${immersive ? "deck-shell--cover" : ""}`}>
      {aspectWarning && <div className="aspect-warning"><Maximize2 size={16} /> Para una mejor experiencia usa una pantalla 16:9.</div>}
      <div className="deck-progress" style={{ "--progress": `${progress}%` } as React.CSSProperties} />
      <header className="deck-header"><Brand compact /><div className="deck-header__meta"><span>{current.evaluation}</span><span>{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div></header>

      <AnimatePresence mode="wait">
        <motion.section key={current.id} className={`slide slide--${current.kind}`} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }} transition={{ duration: reduceMotion ? 0 : .42, ease: [0.22, 1, 0.36, 1] }}>
          {current.kind === "cover" ? <LandingHeroCover reduceMotion={reduceMotion} /> : current.kind === "gallery" ? <OperatorGallery reduceMotion={reduceMotion} /> : current.kind === "question" ? <AudienceQuestion reduceMotion={reduceMotion} /> : <><div className="slide-copy"><span className="eyebrow">{current.eyebrow}</span><h1>{current.title}</h1>{current.statement && <p>{current.statement}</p>}</div><div className="slide-visual"><SlideVisual slide={current} reduceMotion={reduceMotion} /></div></>}
        </motion.section>
      </AnimatePresence>

      <nav className="deck-controls" aria-label="Controles de la presentación">
        <button onClick={previous} disabled={index === 0} aria-label="Diapositiva anterior"><ArrowLeft /></button>
        <div className="deck-dots">{slides.map((slide, dot) => <button key={slide.id} onClick={() => goTo(dot)} className={dot === index ? "is-active" : ""} aria-label={`Ir a diapositiva ${slide.id}`} />)}</div>
        <button onClick={next} disabled={index === slides.length - 1} aria-label="Diapositiva siguiente"><ArrowRight /></button>
      </nav>

      <div className="deck-tools">
        <button onClick={() => setRunning(value => !value)} aria-label={running ? "Pausar temporizador" : "Iniciar temporizador"}>{running ? <Pause /> : <Play />}</button>
        <button onClick={resetTimer} aria-label="Reiniciar temporizador"><TimerReset /></button>
        <button className={`timer ${remaining < 30 ? "timer--danger" : ""}`} onClick={() => setRunning(value => !value)}><Clock3 /> {formatTime(elapsed)} <span>/ 5:00</span></button>
        <button className={autoDemo ? "is-selected" : ""} onClick={() => setAutoDemo(value => !value)} aria-label="Alternar demostración automática"><RefreshCcw /></button>
        <button onClick={() => setNotesOpen(value => !value)} aria-label="Abrir notas del presentador"><Presentation /></button>
        <button onClick={() => window.print()} aria-label="Imprimir o exportar a PDF"><Printer /></button>
        <button onClick={toggleFullscreen} aria-label="Pantalla completa"><Expand /></button>
      </div>

      <AnimatePresence>{notesOpen && <motion.aside className="presenter-notes" initial={{ x: 420 }} animate={{ x: 0 }} exit={{ x: 420 }} transition={{ duration: .28 }}><button className="notes-close" onClick={() => setNotesOpen(false)}><X /></button><span className="eyebrow">Vista del presentador · P</span><h2>Diapositiva {current.id}</h2><div className="notes-time"><Clock3 /> {current.duration}s recomendados <span>Inicio ideal {formatTime(timeline)}</span></div><h3>Mensaje principal</h3><p>{current.notes.message}</p><h3>Texto sugerido</h3><p>{current.notes.script}</p><div className="notes-evaluation">P asociada <strong>{current.evaluation}</strong></div></motion.aside>}</AnimatePresence>

    </main>
  );
}
