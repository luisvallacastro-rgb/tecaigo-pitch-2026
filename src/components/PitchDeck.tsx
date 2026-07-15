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

function CoverVisual() {
  return (
    <div className="cover-visual" aria-label="Vista del producto TeCaiGO">
      <div className="orbit orbit--one" />
      <div className="orbit orbit--two" />
      <div className="phone">
        <div className="phone__speaker" />
        <img src="/assets/operadores.png" alt="Pantalla de TeCaiGO para tour operadores" />
      </div>
      <div className="floating-card floating-card--top"><Network size={22} /> TeCaiGO.EXE</div>
      <div className="floating-card floating-card--bottom"><TicketCheck size={22} /> TeCaiGO.APP</div>
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
        {slides[1].bullets?.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}
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
  return <div className="closing-layout"><div className="impact-grid">{slides[9].bullets?.map((item, index) => { const icons = [BriefcaseBusiness, Landmark, Users, Building2, BarChart3, TrendingUp]; const Icon = icons[index]; return <div key={item}><Icon size={28} /><strong>{item}</strong></div>; })}</div><div className="closing-brand"><Brand /><span>En TeCaiGO nadie gana solo.</span></div></div>;
}

function SlideVisual({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  switch (slide.kind) {
    case "cover": return <CoverVisual />;
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
  const [started, setStarted] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [autoDemo, setAutoDemo] = useState(false);
  const [aspectWarning, setAspectWarning] = useState(false);
  const reduceMotion = Boolean(useReducedMotion());
  const slideStartedAt = useRef(0);

  const current = slides[index];
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

  const start = () => { setStarted(true); setRunning(true); resetTimer(); };
  const toggleFullscreen = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();

  return (
    <main className="deck-shell">
      {aspectWarning && <div className="aspect-warning"><Maximize2 size={16} /> Para una mejor experiencia usa una pantalla 16:9.</div>}
      <div className="deck-progress" style={{ "--progress": `${progress}%` } as React.CSSProperties} />
      <header className="deck-header"><Brand compact /><div className="deck-header__meta"><span>{current.evaluation}</span><span>{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div></header>

      <AnimatePresence mode="wait">
        <motion.section key={current.id} className={`slide slide--${current.kind}`} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }} transition={{ duration: reduceMotion ? 0 : .42, ease: [0.22, 1, 0.36, 1] }}>
          <div className="slide-copy"><span className="eyebrow">{current.eyebrow}</span><h1>{current.title}</h1>{current.statement && <p>{current.statement}</p>}{current.kind === "cover" && <div className="founder-signature"><strong>Luis Valladares</strong><span>Fundador</span></div>}</div>
          <div className="slide-visual"><SlideVisual slide={current} reduceMotion={reduceMotion} /></div>
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

      <AnimatePresence>{!started && <motion.div className="start-screen" exit={{ opacity: 0 }}><div className="start-card"><Brand /><span className="eyebrow">Pitch de inversión · 5 minutos</span><h2>Una industria conectada empieza aquí.</h2><p>10 diapositivas · Navegación por teclado · Notas del presentador</p><button onClick={start}><Play fill="currentColor" /> Iniciar presentación</button><small>Usa ← →, Page Up / Page Down, P para notas y F para pantalla completa.</small></div></motion.div>}</AnimatePresence>
    </main>
  );
}
