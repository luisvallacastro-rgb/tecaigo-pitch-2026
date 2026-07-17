"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { PitchSlide } from "../data/slides";

type ProductView = {
  sector: "operadores" | "turistas" | "comercios" | "transporte";
  sectorLabel: string;
  title: string;
  image: string;
};

const groups = [
  { key: "operadores", label: "Tour operadores", count: 11 },
  { key: "turistas", label: "Turistas", count: 6 },
  { key: "comercios", label: "Comercios", count: 9 },
  { key: "transporte", label: "Transporte", count: 11 },
] as const;

const buildViews = (
  sector: ProductView["sector"],
  sectorLabel: string,
  prefix: string,
  titles: string[],
): ProductView[] => titles.map((title, index) => ({
  sector,
  sectorLabel,
  title,
  image: `/assets/founder-carousel/${prefix}-${String(index + 1).padStart(2, "0")}.jpg`,
}));

const productViews: ProductView[] = [
  ...buildViews("operadores", "Tour operadores", "tecaigo-to-mobile", [
    "Radar turístico",
    "Oferta conectada",
    "Clúster operativo",
    "Puntos de salida",
    "Crear experiencia",
    "Solicitudes",
    "Autorizar cupos",
    "Mis eventos",
    "Ocupación",
    "Gestión privada",
    "Tendencias",
  ]),
  ...buildViews("turistas", "Turistas", "tecaigo-tourist-mobile", [
    "Explorar",
    "Promociones",
    "Detalle",
    "Reserva",
    "Seguimiento",
    "Comunidad",
  ]),
  ...buildViews("comercios", "Comercios turísticos", "tecaigo-commerce-mobile", [
    "Perfil comercial",
    "Catálogo",
    "Promociones",
    "Detalle",
    "Reservas",
    "Gestión",
    "Ventas",
    "Reputación",
    "Red local",
  ]),
  ...buildViews("transporte", "Transporte", "tecaigo-transport-mobile", [
    "Panel móvil",
    "Flota",
    "Rutas",
    "Salidas",
    "Capacidad",
    "Pasajeros",
    "Responsables",
    "Control logístico",
    "Seguimiento",
    "Historial",
    "Red conectada",
  ]),
];

const credentialIcons = [BriefcaseBusiness, Calculator, GraduationCap, ShieldCheck] as const;

function getCircularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export default function FounderFinaleSlide({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeView = productViews[activeIndex];

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % productViews.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const visibleViews = useMemo(() => productViews.map((view, index) => ({
    ...view,
    index,
    offset: getCircularOffset(index, activeIndex, productViews.length),
  })).filter(view => Math.abs(view.offset) <= 2), [activeIndex]);

  const jumpToSector = (sector: ProductView["sector"]) => {
    const nextIndex = productViews.findIndex(view => view.sector === sector);
    if (nextIndex >= 0) setActiveIndex(nextIndex);
  };

  return (
    <div className="founder-finale" aria-label="Fundador de TeCaiGO y vistas de la aplicación">
      <section className="founder-finale__profile">
        <div className="founder-finale__grid" aria-hidden="true" />
        <motion.div
          className="founder-finale__profile-inner"
          initial={reduceMotion ? false : { opacity: 0, x: -42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .72, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="founder-finale__eyebrow"><span>15</span><i /> Personas · Capacidad de ejecución</div>
          <div className="founder-finale__monogram" aria-hidden="true"><b>LV</b><span><Sparkles size={18} /></span></div>
          <p className="founder-finale__role">CEO &amp; fundador de TeCaiGO</p>
          <h1>Luis<br /><strong>Valladares.</strong></h1>
          <p className="founder-finale__thesis">El problema lo viví.<br /><b>La solución la construyo.</b></p>

          <div className="founder-finale__credentials">
            {slide.bullets?.map((credential, index) => {
              const Icon = credentialIcons[index] ?? Sparkles;
              return (
                <motion.div
                  key={credential}
                  initial={reduceMotion ? false : { opacity: 0, x: -26 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : .55 + index * .14, duration: .5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span><Icon size={19} /></span>
                  <strong>{credential}</strong>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="founder-finale__closing"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 1.25, duration: .55 }}
          >
            <span>Operación</span><ArrowRight size={15} /><span>Finanzas</span><ArrowRight size={15} /><span>Riesgo</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="founder-finale__product" aria-label="Carrusel de vistas de TeCaiGO">
        <div className="founder-finale__aura" aria-hidden="true"><i /><i /><i /></div>
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : .35, duration: .55 }}
        >
          <div><small>Un producto · Cuatro experiencias</small><strong>Toda la red, en movimiento.</strong></div>
          <span>{String(activeIndex + 1).padStart(2, "0")} <i>/</i> {String(productViews.length).padStart(2, "0")}</span>
        </motion.header>

        <nav className="founder-finale__sectors" aria-label="Filtrar vistas por sector">
          {groups.map(group => (
            <button
              type="button"
              key={group.key}
              className={activeView.sector === group.key ? "is-active" : ""}
              onClick={() => jumpToSector(group.key)}
            >
              <span>{group.label}</span><small>{group.count}</small>
            </button>
          ))}
        </nav>

        <div className="founder-finale__stage">
          <AnimatePresence initial={false}>
            {visibleViews.map(view => {
              const distance = Math.abs(view.offset);
              const isActive = distance === 0;
              return (
                <motion.figure
                  className={`founder-finale__phone ${isActive ? "is-active" : ""}`}
                  key={view.image}
                  initial={reduceMotion ? false : { opacity: 0, scale: .7 }}
                  animate={{
                    x: `${view.offset * 48}%`,
                    y: distance === 0 ? "0%" : "4%",
                    scale: distance === 0 ? 1 : distance === 1 ? .78 : .62,
                    opacity: distance === 0 ? 1 : distance === 1 ? .48 : .14,
                    rotateY: view.offset * -12,
                    zIndex: 20 - distance,
                    filter: `saturate(${distance === 0 ? 1 : .68}) brightness(${distance === 0 ? 1 : .7})`,
                  }}
                  exit={{ opacity: 0, scale: .65 }}
                  transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 92, damping: 20, mass: .8 }}
                  aria-hidden={!isActive}
                >
                  <div className="founder-finale__island" aria-hidden="true" />
                  <img src={view.image} alt={isActive ? `${view.title}, vista para ${view.sectorLabel}` : ""} />
                  <span className="founder-finale__shine" aria-hidden="true" />
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="founder-finale__caption"
            key={`${activeView.sector}-${activeView.title}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: .35 }}
          >
            <span>{activeView.sectorLabel}</span>
            <strong>{activeView.title}</strong>
          </motion.div>
        </AnimatePresence>

        <div className="founder-finale__progress" aria-hidden="true">
          <motion.span animate={{ width: `${((activeIndex + 1) / productViews.length) * 100}%` }} transition={{ duration: .4 }} />
        </div>
      </section>
    </div>
  );
}
