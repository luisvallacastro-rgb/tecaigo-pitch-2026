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
import FounderFinaleSlide from "./FounderFinaleSlide";
import Slide10BusinessModel from "./Slide10BusinessModel";

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
const conversationImages = [1, 2, 3, 4, 5].map(number => `/assets/conversations/conversation-${number}.jpeg`);
const formationSectors = [
  [Hotel, "Comercios turísticos", "-34vw", "-24vh", "-30vw", "-22vh"],
  [BriefcaseBusiness, "Tour operadores", "22vw", "26vh", "-10vw", "-22vh"],
  [BusFront, "Transportistas", "24vw", "-27vh", "10vw", "-22vh"],
  [Users, "Turistas", "-34vw", "20vh", "30vw", "-22vh"],
  [GraduationCap, "Universidades", "-8vw", "-32vh", "-21vw", "22vh"],
  [Landmark, "Gobierno", "35vw", "2vh", "0vw", "22vh"],
  [CircleDollarSign, "Banca", "-8vw", "32vh", "21vw", "22vh"],
] as const;

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
        <p className="operator-gallery__statement">Lo que ven en pantalla es una comunidad real de tour operadores que se organiza, colabora y crece unida.</p>
      </motion.div>
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

function ProblemVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const [activeConversation, setActiveConversation] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setActiveConversation(value => (value + 1) % conversationImages.length), 3300);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="conversation-carousel" aria-label="Carrusel de conversaciones de tour operadores">
      <div className="conversation-carousel__label"><span /> Conversaciones reales · operación diaria</div>
      <div className="conversation-carousel__stage">
        {conversationImages.map((image, imageIndex) => {
          let offset = (imageIndex - activeConversation + conversationImages.length) % conversationImages.length;
          if (offset > 2) offset -= conversationImages.length;
          const distance = Math.abs(offset);
          return (
            <motion.div
              className="conversation-carousel__item"
              key={image}
              style={{ zIndex: 10 - distance }}
              animate={{ x: `${offset * 34}%`, scale: distance === 0 ? 1 : distance === 1 ? .82 : .66, opacity: distance === 0 ? 1 : distance === 1 ? .58 : .2, rotateY: offset * -7 }}
              transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 20, mass: .85 }}
            >
              <figure className={`conversation-phone ${distance === 0 ? "is-active" : ""}`}>
                <div className="conversation-phone__speaker" aria-hidden="true" />
                <img src={image} alt={`Conversación de coordinación ${imageIndex + 1}`} />
                <span className="conversation-phone__shine" aria-hidden="true" />
              </figure>
            </motion.div>
          );
        })}
      </div>
      <div className="conversation-carousel__dots" aria-label="Seleccionar conversación">
        {conversationImages.map((_, dotIndex) => <button key={dotIndex} className={dotIndex === activeConversation ? "is-active" : ""} onClick={() => setActiveConversation(dotIndex)} aria-label={`Mostrar conversación ${dotIndex + 1}`} />)}
      </div>
    </div>
  );
}

function ProblemPointsSlide({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  return (
    <div className="problem-impact">
      <div className="problem-impact__grid" aria-hidden="true" />
      <div className="problem-impact__pulse" aria-hidden="true"><span /><span /><span /></div>
      <motion.div className="problem-impact__title" initial={reduceMotion ? false : { opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>
        <small>05 · Diagnóstico</small>
        <h1>Problema<span>:</span></h1>
        <motion.i initial={reduceMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: reduceMotion ? 0 : .6, duration: .8 }} />
      </motion.div>
      <div className="problem-impact__stack">
        {slide.bullets?.map((item, itemIndex) => (
          <motion.div
            className="problem-impact__card"
            key={item}
            style={{ "--item": itemIndex } as React.CSSProperties}
            initial={reduceMotion ? false : { opacity: 0, x: 180, rotateX: -58, scale: .84 }}
            animate={{ opacity: 1, x: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: .7, delay: reduceMotion ? 0 : .28 + itemIndex * .16, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>{String(itemIndex + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
            <i aria-hidden="true" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FormationSlide({ reduceMotion }: { reduceMotion: boolean }) {
  const [settled, setSettled] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) { setSettled(true); return; }
    setSettled(false);
    const id = window.setTimeout(() => setSettled(true), 9800);
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

  return (
    <div className={`formation ${settled ? "is-settled" : ""}`} aria-label="Sectores que se unen para formar TeCaiGO">
      <div className="formation__field" aria-hidden="true" />
      <div className="formation__caption"><span /> Siete sectores · una sola red <span /></div>
      <div className="formation__energy" aria-hidden="true"><i /><i /><i /></div>
      <div className="formation__core">
        <div className="formation__rings" aria-hidden="true"><i /><i /><i /></div>
        <div className="formation__brand"><Brand /><small>Ecosistema conectado</small></div>
      </div>
      <div className="formation__sectors">
        {formationSectors.map(([Icon, label, x, y, endX, endY], sectorIndex) => (
          <div className="formation__sector" key={label} style={{ "--x": x, "--y": y, "--end-x": endX, "--end-y": endY, "--sector": sectorIndex } as React.CSSProperties}>
            <motion.div className="formation__chip" initial={reduceMotion ? false : { opacity: 0, scale: .65 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduceMotion ? 0 : .18 + sectorIndex * .09, duration: .55, ease: [0.22, 1, 0.36, 1] }}>
              <span><Icon size={23} /></span><strong>{label}</strong>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="formation__group formation__group--direct"><span>Directamente</span><i /></div>
      <div className="formation__group formation__group--indirect"><span>De manera indirecta</span><i /></div>
      <div className="formation__result">Cuando todos se conectan, nace <strong>TeCaiGO.</strong></div>
    </div>
  );
}

function HomefeedPanorama({ reduceMotion }: { reduceMotion: boolean }) {
  const story = [
    [Store, "Publican", "Comercios turísticos"],
    [Sparkles, "Descubren", "Tour operadores"],
    [Route, "Convierten", "Rutas y eventos"],
  ] as const;
  return (
    <div className="homefeed-panorama" aria-label="Funciones del Homefeed de TeCaiGO">
      <motion.img
        className="homefeed-panorama__image"
        src="/assets/homefeed-panorama.png"
        alt="Interfaz panorámica del Homefeed de TeCaiGO"
        initial={reduceMotion ? false : { scale: 1.09, filter: "brightness(.55) saturate(.78)" }}
        animate={{ scale: 1, filter: "brightness(.86) saturate(1.02)" }}
        transition={{ duration: reduceMotion ? 0 : 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="homefeed-panorama__shade" aria-hidden="true" />
      <motion.div className="homefeed-panorama__label" initial={reduceMotion ? false : { opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : .35, duration: .6 }}>
        <span>07</span><i /> Producto en acción
      </motion.div>
      <motion.div className="homefeed-panorama__title" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .55, duration: .7 }}>
        <small>Homefeed</small>
        <strong>La oportunidad<br />empieza aquí.</strong>
      </motion.div>
      <div className="homefeed-panorama__story" aria-label="Publicar, descubrir y convertir">
        {story.map(([Icon, action, actor], storyIndex) => (
          <motion.div key={action} initial={reduceMotion ? false : { opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : .9 + storyIndex * .22, duration: .55, ease: [0.16, 1, 0.3, 1] }}>
            <span><Icon size={19} /></span><small>{actor}</small><strong>{action}</strong>
          </motion.div>
        ))}
      </div>
      <motion.aside className="homefeed-panorama__narrative" initial={reduceMotion ? false : { opacity: 0, y: 55 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.25, duration: .75, ease: [0.16, 1, 0.3, 1] }}>
        <i aria-hidden="true" />
        <p>Es una ventana tipo red social donde los <strong>comercios turísticos publican</strong> sus instalaciones, servicios y promociones para que los <strong>tour operadores descubran oportunidades</strong> y las <strong>conviertan en nuevas rutas y eventos turísticos.</strong></p>
      </motion.aside>
      <motion.div className="homefeed-panorama__scan" aria-hidden="true" initial={reduceMotion ? false : { x: "-130%" }} animate={{ x: "260%" }} transition={{ delay: reduceMotion ? 0 : .5, duration: 2.2, ease: "easeInOut" }} />
    </div>
  );
}

function HomefeedConnection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="homefeed-connection" aria-label="Conexión entre comercio turístico y tour operador por medio del Homefeed">
      <motion.div className="homefeed-connection__panel homefeed-connection__panel--commerce" initial={reduceMotion ? false : { opacity: 0, x: -120 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}>
        <img src="/assets/homefeed-commerce.png" alt="Comercio turístico usando el Homefeed de TeCaiGO" />
        <div className="homefeed-connection__role"><span><Store size={20} /></span><small>Origen de la oportunidad</small><strong>Comercio turístico</strong></div>
      </motion.div>
      <motion.div className="homefeed-connection__panel homefeed-connection__panel--operator" initial={reduceMotion ? false : { opacity: 0, x: 120 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}>
        <img src="/assets/homefeed-tour-operator.png" alt="Tour operador descubriendo oportunidades en el Homefeed de TeCaiGO" />
        <div className="homefeed-connection__role"><span><BriefcaseBusiness size={20} /></span><small>Destino de la oportunidad</small><strong>Tour operador</strong></div>
      </motion.div>
      <div className="homefeed-connection__veil" aria-hidden="true" />
      <motion.header className="homefeed-connection__headline" initial={reduceMotion ? false : { opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .45, duration: .65 }}>
        <small>La conexión ocurre en tiempo real</small>
        <strong>Una publicación.<br /><span>Dos mundos conectados.</span></strong>
      </motion.header>
      <div className="homefeed-connection__bridge" aria-hidden="true">
        <motion.i className="homefeed-connection__line" initial={reduceMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: reduceMotion ? 0 : 1.05, duration: .9, ease: [0.16, 1, 0.3, 1] }} />
        <i className="homefeed-connection__packet homefeed-connection__packet--1" />
        <i className="homefeed-connection__packet homefeed-connection__packet--2" />
        <i className="homefeed-connection__packet homefeed-connection__packet--3" />
      </div>
      <motion.div className="homefeed-connection__hub" initial={reduceMotion ? false : { opacity: 0, scale: .4, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: reduceMotion ? 0 : 1.1, duration: .75, type: "spring", stiffness: 140, damping: 16 }}>
        <span>Conexión por</span><Brand compact /><small>HOMEFEED</small>
      </motion.div>
      <motion.div className="homefeed-connection__exchange" initial={reduceMotion ? false : { opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.65, duration: .7, ease: [0.16, 1, 0.3, 1] }}>
        <div><Store size={18} /><span><small>El comercio</small><strong>Publica una oportunidad</strong></span></div>
        <ChevronRight className="homefeed-connection__arrow" />
        <div><Network size={18} /><span><small>El Homefeed</small><strong>La hace visible</strong></span></div>
        <ChevronRight className="homefeed-connection__arrow" />
        <div><Route size={18} /><span><small>El operador</small><strong>La convierte en ruta</strong></span></div>
      </motion.div>
      <motion.p className="homefeed-connection__statement" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduceMotion ? 0 : 2.15, duration: .7 }}>
        Lo que antes era una publicación aislada, ahora se convierte en una <strong>oportunidad compartida, operable y vendible.</strong>
      </motion.p>
    </div>
  );
}

function EventModes({ reduceMotion }: { reduceMotion: boolean }) {
  const modes = [
    {
      kind: "private",
      image: "/assets/event-private.png",
      icon: ShieldCheck,
      number: "01",
      title: "Evento privado",
      lead: "Control interno",
      description: "Solo el clúster del anfitrión puede completar los cupos.",
      chips: ["Sin vendedores externos", "Gobernanza del anfitrión"],
    },
    {
      kind: "public",
      image: "/assets/event-public.png",
      icon: Network,
      number: "02",
      title: "Evento público",
      lead: "Alcance colaborativo",
      description: "Otros vendedores conectados ayudan a completar los cupos.",
      chips: ["Mayor alcance", "Comisión por cliente"],
    },
  ] as const;
  return (
    <div className="event-modes" aria-label="Comparación entre eventos públicos y privados en TeCaiGO">
      <div className="event-modes__grid">
        {modes.map(({ kind, image, icon: Icon, number, title, lead, description, chips }, modeIndex) => (
          <motion.article className={`event-mode event-mode--${kind}`} key={kind} initial={reduceMotion ? false : { opacity: 0, x: modeIndex === 0 ? -90 : 90, scale: .95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: reduceMotion ? 0 : .9, delay: reduceMotion ? 0 : .12 + modeIndex * .14, ease: [0.16, 1, 0.3, 1] }}>
            <img src={image} alt={title} />
            <div className="event-mode__veil" />
            <div className="event-mode__top"><span>{number}</span><small>Modo operativo</small></div>
            <div className="event-mode__content">
              <span className="event-mode__icon"><Icon size={24} /></span>
              <small>{lead}</small>
              <strong>{title}</strong>
              <p>{description}</p>
              <div>{chips.map((chip, chipIndex) => <motion.span key={chip} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.05 + modeIndex * .18 + chipIndex * .12 }}>{chip}</motion.span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.header className="event-modes__headline" initial={reduceMotion ? false : { opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .6, duration: .65 }}>
        <small>La estrategia cambia. La operación permanece conectada.</small>
        <strong>Un evento. <span>Dos caminos.</span></strong>
      </motion.header>
      <motion.div className="event-modes__choice" initial={reduceMotion ? false : { opacity: 0, scale: .4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 1.15, duration: .7, type: "spring", stiffness: 160, damping: 16 }}>
        <span>El anfitrión</span><strong>ELIGE</strong><small>cómo completar sus cupos</small>
      </motion.div>
      <motion.div className="event-modes__footer" initial={reduceMotion ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.55, duration: .7, ease: [0.16, 1, 0.3, 1] }}>
        <div><ShieldCheck size={18} /><span><small>Privado</small><strong>Protege el control</strong></span></div>
        <i />
        <p>TeCaiGO permite decidir entre <strong>control interno</strong> o <strong>distribución colaborativa</strong> según el objetivo de cada salida.</p>
        <i />
        <div><Network size={18} /><span><small>Público</small><strong>Multiplica el alcance</strong></span></div>
      </motion.div>
    </div>
  );
}

function TransportIntegration({ reduceMotion }: { reduceMotion: boolean }) {
  const stages = [
    [TicketCheck, "Cupos completos", "Demanda confirmada"],
    [Network, "Solicitud publicada", "La red se activa"],
    [BusFront, "Transporte asignado", "Vehículo adecuado"],
    [Route, "Ruta definida", "Operación lista"],
  ] as const;
  return (
    <div className="transport-integration" aria-label="Integración del sector transporte en TeCaiGO">
      <motion.img className="transport-integration__image" src="/assets/transport-route-assignment.png" alt="Transportista recibiendo una solicitud y ruta definida en TeCaiGO" initial={reduceMotion ? false : { scale: 1.08, filter: "brightness(.55) saturate(.8)" }} animate={{ scale: 1, filter: "brightness(.92) saturate(1.04)" }} transition={{ duration: reduceMotion ? 0 : 1.7, ease: [0.16, 1, 0.3, 1] }} />
      <div className="transport-integration__shade" aria-hidden="true" />
      <motion.div className="transport-integration__label" initial={reduceMotion ? false : { opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : .3, duration: .6 }}><span>10</span><i /> Cierre del ciclo operativo</motion.div>
      <motion.header className="transport-integration__headline" initial={reduceMotion ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .5, duration: .75, ease: [0.16, 1, 0.3, 1] }}>
        <small>Sector transporte integrado</small>
        <strong>Los cupos se llenan.<br /><span>La ruta se pone en marcha.</span></strong>
        <p>TeCaiGO comunica la demanda confirmada, asigna el vehículo adecuado y entrega la <b>ruta definida.</b></p>
      </motion.header>
      <motion.div className="transport-integration__badge" initial={reduceMotion ? false : { opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : .75, duration: .6 }}>
        <span><BusFront size={25} /></span><div><small>Nuevo actor activado</small><strong>Transporte turístico</strong></div><i>EN RUTA</i>
      </motion.div>
      <div className="transport-integration__signal" aria-hidden="true"><i /><i /><i /></div>
      <motion.div className="transport-integration__route" initial={reduceMotion ? false : { opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.1, duration: .72, ease: [0.16, 1, 0.3, 1] }}>
        <motion.i className="transport-integration__route-line" initial={reduceMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: reduceMotion ? 0 : 1.45, duration: 1.15, ease: [0.16, 1, 0.3, 1] }} />
        {stages.map(([Icon, title, detail], stageIndex) => (
          <motion.div key={title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.35 + stageIndex * .23, duration: .5 }}>
            <span><Icon size={20} /></span><small>0{stageIndex + 1}</small><strong>{title}</strong><p>{detail}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="transport-integration__result" initial={reduceMotion ? false : { opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 2.5, duration: .65, type: "spring", stiffness: 130, damping: 15 }}>
        <Sparkles size={18} /><span>De una oportunidad comercial a una <strong>operación real.</strong></span>
      </motion.div>
    </div>
  );
}

function TouristArrival({ reduceMotion }: { reduceMotion: boolean }) {
  const benefits = [
    [Smartphone, "Todo en un solo lugar", "Explorar, comparar y reservar"],
    [ShieldCheck, "Compra segura", "Información y pago trazables"],
    [Route, "Experiencia coordinada", "Ruta, operador y transporte alineados"],
    [TicketCheck, "Decisión más simple", "Oferta clara y disponibilidad real"],
  ] as const;
  return (
    <div className="tourist-arrival" aria-label="Ventajas de centralizar el ecosistema para el turista">
      <motion.img className="tourist-arrival__image" src="/assets/tourist-final-destination.png" alt="Turista explorando y reservando una experiencia en TeCaiGO" initial={reduceMotion ? false : { scale: 1.08, filter: "brightness(.62) saturate(.82)" }} animate={{ scale: 1, filter: "brightness(.96) saturate(1.05)" }} transition={{ duration: reduceMotion ? 0 : 1.7, ease: [0.16, 1, 0.3, 1] }} />
      <div className="tourist-arrival__shade" aria-hidden="true" />
      <motion.div className="tourist-arrival__label" initial={reduceMotion ? false : { opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : .28, duration: .6 }}><span>11</span><i /> El destino de toda la red</motion.div>
      <motion.aside className="tourist-arrival__glass" initial={reduceMotion ? false : { opacity: 0, x: -85, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : .45, duration: .85, ease: [0.16, 1, 0.3, 1] }}>
        <small>Usuario final</small>
        <h2>Todo llega al turista en <strong>una sola experiencia.</strong></h2>
        <p>La complejidad se coordina detrás de TeCaiGO. El turista solo descubre, decide y disfruta.</p>
        <div className="tourist-arrival__benefits">
          {benefits.map(([Icon, title, detail], benefitIndex) => (
            <motion.div key={title} initial={reduceMotion ? false : { opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : .95 + benefitIndex * .18, duration: .5 }}>
              <span><Icon size={19} /></span><div><strong>{title}</strong><small>{detail}</small></div><i />
            </motion.div>
          ))}
        </div>
        <motion.blockquote initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.85, duration: .6 }}>Centralizar por dentro.<br /><strong>Simplificar por fuera.</strong></motion.blockquote>
      </motion.aside>
      <motion.div className="tourist-arrival__network" initial={reduceMotion ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.35, duration: .7, ease: [0.16, 1, 0.3, 1] }}>
        <span><Store size={17} /> Comercio</span><ChevronRight /><span><BriefcaseBusiness size={17} /> Operador</span><ChevronRight /><span><BusFront size={17} /> Transporte</span><ChevronRight /><strong><Users size={18} /> Turista</strong>
      </motion.div>
      <div className="tourist-arrival__focus" aria-hidden="true"><i /><i /><i /></div>
      <motion.div className="tourist-arrival__ready" initial={reduceMotion ? false : { opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 2.2, duration: .6, type: "spring", stiffness: 150, damping: 15 }}><TicketCheck size={18} /> Experiencia lista para reservar</motion.div>
    </div>
  );
}

function EcosystemImpact({ reduceMotion }: { reduceMotion: boolean }) {
  const pillars = [
    ["/assets/impact-banking.png", CircleDollarSign, "Banca", "Financiamiento", "El historial transaccional convierte actividad real en acceso a capital."],
    ["/assets/impact-government.png", Landmark, "Gobierno", "Formalización", "Más negocios visibles fortalecen la recaudación y la toma de decisiones."],
    ["/assets/impact-university.png", GraduationCap, "Universidades", "Talento", "La operación conectada abre formación y empleo para nuevas generaciones."],
  ] as const;
  return (
    <div className="ecosystem-impact" aria-label="Impacto de TeCaiGO en banca, gobierno y universidades">
      <div className="ecosystem-impact__grid">
        {pillars.map(([image, Icon, sector, impact, detail], pillarIndex) => (
          <motion.article
            className="ecosystem-impact__pillar"
            key={sector}
            initial={reduceMotion ? false : { opacity: 0, top: "0%", height: "100%" }}
            animate={reduceMotion ? { opacity: 1, top: `${pillarIndex * 33.333}%`, height: "33.334%" } : {
              opacity: pillarIndex === 0 ? [1, 1, 1] : [0, 0, 1, 1],
              top: pillarIndex === 0 ? ["0%", "0%", "0%"] : ["0%", "0%", "0%", `${pillarIndex * 33.333}%`],
              height: pillarIndex === 0 ? ["100%", "100%", "33.334%"] : ["100%", "100%", "100%", "33.334%"],
            }}
            transition={reduceMotion ? { duration: 0 } : { delay: pillarIndex * 2.05, duration: 2.05, times: pillarIndex === 0 ? [0, .55, 1] : [0, .06, .52, 1], ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img src={image} alt={`${sector}: ${impact}`} animate={reduceMotion ? undefined : { scale: [1.06, 1, 1.025] }} transition={{ delay: pillarIndex * 2.05, duration: 4.1, ease: "easeInOut" }} />
            <div className="ecosystem-impact__veil" />
            <motion.div className="ecosystem-impact__pillar-copy" initial={reduceMotion ? false : { opacity: 0, x: 42 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 6.25 + pillarIndex * .12, duration: .55 }}><span><Icon size={20} /></span><small>{sector}</small><strong>{impact}</strong><p>{detail}</p></motion.div>
          </motion.article>
        ))}
      </div>
      <motion.header className="ecosystem-impact__manifesto" initial={reduceMotion ? false : { opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 6.3, duration: .75, ease: [0.16, 1, 0.3, 1] }}>
        <small><span>12</span><i /> Impacto sistémico</small>
        <strong>El turismo se conecta.<br /><b>El desarrollo se multiplica.</b></strong>
      </motion.header>
      <motion.div className="ecosystem-impact__promise" initial={reduceMotion ? false : { opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 6.75, duration: .65 }}>
        <span>Formal</span><i /><span>Inclusivo</span><i /><span>Sostenible</span>
      </motion.div>
    </div>
  );
}

function RegionalPotential({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  const countries = [
    ["Belice", "32%", "15%"],
    ["Guatemala", "23%", "30%"],
    ["Honduras", "40%", "31%"],
    ["El Salvador", "30%", "43%"],
    ["Nicaragua", "47%", "49%"],
    ["Costa Rica", "54%", "65%"],
    ["Panamá", "74%", "72%"],
  ] as const;
  const collage = Array.from({ length: 18 }, (_, index) => `/assets/regional-collage/collage-bg-${String(index + 1).padStart(2, "0")}.jpeg`);
  return (
    <div className="regional-potential" aria-label="Potencial regional y efecto de red de TeCaiGO">
      <div className="regional-potential__collage" aria-hidden="true">
        {collage.map((image, tileIndex) => <motion.figure key={image} initial={reduceMotion ? false : { opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduceMotion ? 0 : tileIndex * .035, duration: .65, ease: [0.16, 1, 0.3, 1] }}><motion.img src={image} alt="" animate={reduceMotion ? undefined : { scale: [1, 1.08, 1.025] }} transition={{ duration: 11 + tileIndex % 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} /></motion.figure>)}
      </div>
      <div className="regional-potential__veil" aria-hidden="true" />
      <div className="regional-potential__grid" aria-hidden="true" />
      <motion.section className="regional-potential__copy" initial={reduceMotion ? false : { opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : .45, duration: .8, ease: [0.16, 1, 0.3, 1] }}>
        <small><span>13</span><i /> {slide.eyebrow}</small>
        <h2>Un mercado definido por <strong>cómo opera,</strong><br />no por dónde está.</h2>
        <div className="regional-potential__text">
          <p>Cada nueva frontera conectada convierte a TeCaigo en una <b>red más fuerte</b>, un <b>ecosistema más inteligente</b> y una <b>industria más integrada.</b></p>
        </div>
      </motion.section>
      <motion.div className="regional-potential__network" initial={reduceMotion ? false : { opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduceMotion ? 0 : .8, duration: .8, ease: [0.16, 1, 0.3, 1] }}>
        <div className="regional-potential__map-glow" />
        <motion.svg className="regional-potential__map" viewBox="0 0 900 620" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduceMotion ? 0 : .9, duration: .8 }}>
          <defs>
            <path id="regionalPotentialRouteNorth" d="M287 100 C306 150 330 184 359 207 C326 218 296 230 271 235 C246 216 226 198 208 187" />
            <path id="regionalPotentialRouteSouth" d="M271 235 C332 258 382 272 420 288 C446 318 462 356 474 389 C528 416 594 430 658 433" />
          </defs>
          <path className="regional-potential__map-halo" d="M142 224 C176 144 240 94 310 92 C376 96 430 144 492 184 C570 234 654 314 746 412 C784 454 766 516 704 530 C622 548 560 486 512 432 C468 386 420 360 358 330 C300 300 240 284 184 270 C148 262 132 244 142 224Z" />
          <path d="M261.9 212.6 L253 213.1 L255.4 220 L235.2 231.9 L232.2 240.2 L212.7 232.9 L183 231.1 L145.4 207.3 L152.4 186 L146.9 178 L165.9 146.1 L218.5 144.6 L220.2 131.7 L210.6 129.1 L204 116.1 L177.9 98.6 L196.1 98 L196.5 75.5 L270.1 75.3 L267 152.9 L285.1 154.3 L292.3 160.6 L297.2 154.8 L292.5 149.8 L308 159.7 L270.1 186.5 L270.1 205.9Z" />
          <path d="M268.7 132.7 L270.3 70.2 L281.7 72.2 L295.6 49.5 L304.7 48.4 L302.5 55.6 L313 52.7 L313.6 59.3 L305.3 83.8 L310.2 87.5 L305.4 94.5 L308.2 109.5 L303 127.4 L304.4 121.8 L278.5 153.4 L267 152.9Z" />
          <path d="M261.9 212.6 L270.1 205.9 L270.1 186.5 L304.1 161.7 L333.4 151.2 L338 157.2 L382.6 157.8 L400.4 151.1 L397.4 147.3 L418.3 153.9 L438.1 149.1 L451.8 157.7 L460.2 156.8 L466.6 156.2 L489.4 172.8 L480.9 178.5 L493.7 177 L499.4 180.3 L490.5 172.7 L513.6 189.1 L498.3 188.5 L494 194.1 L459 204.3 L441.9 196.4 L432.2 206.6 L431.2 216.4 L408.7 230.8 L408.1 236.5 L396.9 227.1 L384 239.2 L366.8 239.6 L369.3 257.7 L360.9 260.1 L355.9 270.6 L344.6 270.5 L336.6 258.2 L341.1 253.1 L324.3 253.3 L328.9 236.8 L316.3 234.7 L307.4 229.6 L296.9 235.4 L283.1 225.3 L272.2 213.4Z" />
          <path className="is-core" d="M232.2 240.2 L235.2 231.9 L255.4 220 L253 213.1 L260.5 211.4 L272.2 213.4 L283.1 225.3 L296.6 230 L296.9 235.4 L311.9 229.7 L328.9 236.8 L328.2 251.1 L323.5 251.9 L325.4 258.1 L319.8 263.3 L285.2 259.8 L266.4 250.7 L243.9 248.5Z" />
          <path d="M409.7 347.2 L330.4 270.5 L341.5 273.2 L355.9 270.6 L360.9 260.1 L369.3 257.7 L366.8 239.6 L384 239.2 L393.8 227.6 L408.1 236.5 L431.2 216.4 L432.2 206.6 L441.9 196.4 L459 204.3 L494 194.1 L513.6 189.1 L501.7 196.9 L511.3 215.3 L496.3 252.9 L499.4 293.3 L491.7 310.6 L492.5 325.5 L483.8 339.4 L492.1 358.3 L481.4 362 L470.7 359.3 L464.1 350.7 L451.1 347.7 L440.8 352.8 L413.9 342Z" />
          <path d="M490.7 353.1 L510.6 385.7 L536.5 409.5 L525 407 L521.2 412.8 L521.3 428.9 L530.2 434.4 L522 441.1 L525 452.9 L516.7 458.4 L523 470.2 L512.8 456.7 L499.4 442.9 L489.1 447.7 L495.6 439.8 L493.2 429.5 L470 412.5 L453.6 407.9 L448.8 392.2 L426.4 379.5 L443.5 397.8 L433.3 408.8 L426 398.6 L411.3 394.9 L404 381.6 L405.4 370.1 L412.6 365.8 L399.9 354.6 L409.4 353.4 L413.9 342 L440.8 352.8 L451.1 347.7 L464.1 350.7 L481.8 362.1 L492.1 358.3Z" />
          <path d="M536.1 408 L545.4 413.8 L545.1 422.9 L552.3 423.2 L549.4 431.1 L568.3 433.7 L564 424 L577.8 438.8 L587.3 440.1 L648.4 417.2 L654.9 406.7 L681.6 408.1 L678 412.8 L702.5 414.8 L726.4 426.8 L746.1 444.8 L741.4 452.5 L754.6 474.1 L737.7 490.7 L730.3 483.5 L724 502.3 L703.1 469.3 L710.6 466.9 L715.4 455.3 L731.4 466.4 L715.3 449 L704.3 449.5 L696 440.4 L677 431.7 L657.5 432.9 L650 438.7 L649.1 448.2 L621 462.7 L639.3 493.6 L605.2 503.7 L597.4 475.2 L590.8 475.8 L582.5 484.9 L569.5 463.9 L552.9 465.3 L526.6 459.7 L523 470.2 L516.7 458.4 L525 452.9 L522 441.1 L530.2 434.4 L521.3 428.9 L521.2 412.8 L525 407 L533.7 411.7Z" />
          <path className="regional-potential__map-border" d="M146 178 C204 114 282 78 362 154 C422 211 494 190 514 189 C498 255 498 300 410 347 C454 408 536 410 536 408 C607 438 686 390 754 474" />
          <path className="regional-potential__route" d="M287 100 C306 150 330 184 359 207 C326 218 296 230 271 235 C246 216 226 198 208 187" />
          <path className="regional-potential__route regional-potential__route--south" d="M271 235 C332 258 382 272 420 288 C446 318 462 356 474 389 C528 416 594 430 658 433" />
          {!reduceMotion && <>
            <g className="regional-potential__moving-icon regional-potential__moving-icon--phone">
              <animateMotion dur="8.5s" repeatCount="indefinite" rotate="auto"><mpath href="#regionalPotentialRouteNorth" /></animateMotion>
              <circle r="18" /><rect x="-7" y="-12" width="14" height="24" rx="3" /><circle cx="0" cy="8" r="1.3" />
            </g>
            <g className="regional-potential__moving-icon regional-potential__moving-icon--bus">
              <animateMotion dur="10.5s" begin="-3s" repeatCount="indefinite" rotate="auto"><mpath href="#regionalPotentialRouteSouth" /></animateMotion>
              <circle r="19" /><rect x="-13" y="-8" width="26" height="16" rx="4" /><rect x="-8" y="-4" width="6" height="5" rx="1" /><rect x="2" y="-4" width="6" height="5" rx="1" /><circle cx="-8" cy="8" r="2.4" /><circle cx="8" cy="8" r="2.4" />
            </g>
          </>}
        </motion.svg>
        {countries.map(([country, left, top], countryIndex) => {
          const Icon = countryIndex % 2 ? BusFront : Smartphone;
          return <motion.div className={`regional-potential__node ${country === "El Salvador" ? "is-core" : ""}`} style={{ left, top }} key={country} initial={reduceMotion ? false : { opacity: 0, scale: .4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 1.15 + countryIndex * .17, duration: .55, type: "spring", stiffness: 150, damping: 15 }}><strong>{country}</strong><span><Icon size={20} /></span></motion.div>;
        })}
      </motion.div>
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
    case "problemPoints": return null;
    case "formation": return null;
    case "homefeedPanorama": return null;
    case "homefeedConnection": return null;
    case "eventModes": return null;
    case "transportIntegration": return null;
    case "touristArrival": return null;
    case "ecosystemImpact": return null;
    case "regionalPotential": return null;
    case "businessModel": return null;
    case "problem": return <ProblemVisual reduceMotion={reduceMotion} />;
    case "founder": return null;
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
  const immersive = current.kind === "cover" || current.kind === "gallery" || current.kind === "question" || current.kind === "problemPoints" || current.kind === "formation" || current.kind === "homefeedPanorama" || current.kind === "homefeedConnection" || current.kind === "eventModes" || current.kind === "transportIntegration" || current.kind === "touristArrival" || current.kind === "ecosystemImpact" || current.kind === "regionalPotential" || current.kind === "businessModel" || current.kind === "founder";
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
          {current.kind === "cover" ? <LandingHeroCover reduceMotion={reduceMotion} /> : current.kind === "gallery" ? <OperatorGallery reduceMotion={reduceMotion} /> : current.kind === "question" ? <AudienceQuestion reduceMotion={reduceMotion} /> : current.kind === "problemPoints" ? <ProblemPointsSlide slide={current} reduceMotion={reduceMotion} /> : current.kind === "formation" ? <FormationSlide reduceMotion={reduceMotion} /> : current.kind === "homefeedPanorama" ? <HomefeedPanorama reduceMotion={reduceMotion} /> : current.kind === "homefeedConnection" ? <HomefeedConnection reduceMotion={reduceMotion} /> : current.kind === "eventModes" ? <EventModes reduceMotion={reduceMotion} /> : current.kind === "transportIntegration" ? <TransportIntegration reduceMotion={reduceMotion} /> : current.kind === "touristArrival" ? <TouristArrival reduceMotion={reduceMotion} /> : current.kind === "ecosystemImpact" ? <EcosystemImpact reduceMotion={reduceMotion} /> : current.kind === "regionalPotential" ? <RegionalPotential slide={current} reduceMotion={reduceMotion} /> : current.kind === "businessModel" ? <Slide10BusinessModel slide={current} reduceMotion={reduceMotion} /> : current.kind === "founder" ? <FounderFinaleSlide slide={current} reduceMotion={reduceMotion} /> : <><div className="slide-copy"><span className="eyebrow">{current.eyebrow}</span><h1>{current.title}</h1>{current.statement && <p>{current.statement}</p>}</div><div className="slide-visual"><SlideVisual slide={current} reduceMotion={reduceMotion} /></div></>}
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
