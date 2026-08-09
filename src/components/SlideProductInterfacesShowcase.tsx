"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { PitchSlide } from "../data/slides";

type InterfaceId = NonNullable<PitchSlide["productInterfaces"]>[number]["id"];
type SystemView = { title: string; image: string };

function getCircularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

const buildViews = (prefix: string, titles: string[]): SystemView[] => titles.map((title, index) => ({
  title,
  image: `/assets/founder-carousel/${prefix}-${String(index + 1).padStart(2, "0")}.jpg`,
}));

const viewCatalog: Record<InterfaceId, SystemView[]> = {
  operators: buildViews("tecaigo-to-mobile", [
    "Radar turístico", "Oferta conectada", "Clúster operativo", "Puntos de salida", "Crear experiencia", "Solicitudes",
    "Autorizar cupos", "Mis eventos", "Ocupación", "Gestión privada", "Tendencias",
  ]),
  commerce: buildViews("tecaigo-commerce-mobile", [
    "Perfil comercial", "Catálogo", "Promociones", "Detalle", "Reservas", "Gestión", "Ventas", "Reputación", "Red local",
  ]),
  tourists: buildViews("tecaigo-tourist-mobile", [
    "Explorar", "Promociones", "Detalle", "Reserva", "Seguimiento", "Comunidad",
  ]),
  transport: buildViews("tecaigo-transport-mobile", [
    "Panel móvil", "Flota", "Rutas", "Salidas", "Capacidad", "Pasajeros", "Responsables", "Control logístico", "Seguimiento", "Historial", "Red conectada",
  ]),
};

export default function SlideProductInterfacesShowcase({ slide, reduceMotion, running }: { slide: PitchSlide; reduceMotion: boolean; running: boolean }) {
  const interfaces = slide.productInterfaces ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const active = interfaces[activeIndex];
  const views = active ? viewCatalog[active.id] : [];
  const activeView = views[activeViewIndex] ?? views[0];

  useEffect(() => {
    if (!running || reduceMotion || interfaces.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % interfaces.length);
    }, 10_000);
    return () => window.clearInterval(timer);
  }, [interfaces.length, reduceMotion, running]);

  useEffect(() => {
    setActiveViewIndex(0);
    if (!running || reduceMotion || views.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveViewIndex(current => (current + 1) % views.length);
    }, 10_000 / views.length);
    return () => window.clearInterval(timer);
  }, [active?.id, reduceMotion, running, views.length]);

  if (!active || !activeView) return null;

  const carouselViews = views.map((view, index) => ({
    ...view,
    index,
    offset: getCircularOffset(index, activeViewIndex, views.length),
  })).filter(view => Math.abs(view.offset) <= 2);

  return (
    <div className="product-interfaces" aria-label="Cuatro interfaces del sistema TeCaiGO">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={`background-${activeView.image}`}
          className="product-interfaces__background"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.52 }}
          style={{ backgroundImage: `url(${activeView.image})` }}
        />
      </AnimatePresence>
      <div className="product-interfaces__veil" />
      <div className="product-interfaces__rings" aria-hidden="true"><i /><i /><i /></div>

      <header className="product-interfaces__header">
        <div><span>{active.label}</span><h1>{activeView.title}</h1></div>
      </header>

      <motion.div
        key={active.id}
        className="product-interfaces__stage"
        initial={reduceMotion ? false : { opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="product-interfaces__carousel" aria-label={`Carrusel de ${active.label}`}>
          <AnimatePresence initial={false}>
            {carouselViews.map(view => {
              const distance = Math.abs(view.offset);
              return (
                <motion.figure
                  key={`${active.id}-${view.image}`}
                  className={distance === 0 ? "is-active" : ""}
                  initial={reduceMotion ? false : { opacity: 0, x: `${view.offset * 42}%`, scale: 0.58 }}
                  animate={{
                    x: `${view.offset * 42}%`,
                    y: distance === 0 ? "0%" : "3%",
                    scale: distance === 0 ? 1 : distance === 1 ? 0.78 : 0.62,
                    opacity: distance === 0 ? 1 : distance === 1 ? 0.42 : 0.11,
                    rotateY: view.offset * -12,
                    zIndex: 20 - distance,
                    filter: `brightness(${distance === 0 ? 1 : distance === 1 ? 0.67 : 0.46}) saturate(${distance === 0 ? 1 : 0.62})`,
                  }}
                  exit={{ opacity: 0, x: `${view.offset * 48}%`, scale: 0.54 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden={distance !== 0}
                >
                  <img src={view.image} alt={distance === 0 ? `${view.title}, interfaz para ${active.label}` : ""} />
                  <span />
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="product-interfaces__role-progress" key={`progress-${active.id}-${running}`}><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: running ? 1 : 0 }} transition={{ duration: reduceMotion || !running ? 0 : 10, ease: "linear" }} /></div>
    </div>
  );
}
