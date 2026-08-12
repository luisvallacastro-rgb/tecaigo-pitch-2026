"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { PitchSlide } from "../data/slides";

const TOTAL_DURATION = 35_000;
const ROLE_DURATION = TOTAL_DURATION / 4;
const VIEWS_PER_ROLE = 3;
const VIEW_DURATION = ROLE_DURATION / VIEWS_PER_ROLE;

const roles = [
  { id:"operators", label:"Tour operadores", count:11, prefix:"tecaigo-to-mobile", caption:"Crea experiencias y coordina cupos." },
  { id:"commerce", label:"Comercio turístico", count:9, prefix:"tecaigo-commerce-mobile", caption:"Convierte su oferta en nuevas rutas." },
  { id:"tourists", label:"Turista", count:6, prefix:"tecaigo-tourist-mobile", caption:"Descubre, reserva y compra." },
  { id:"transport", label:"Transporte", count:11, prefix:"tecaigo-transport-mobile", caption:"Activa su capacidad disponible." },
] as const;

const selectedViews = [0, 1, 2];

export default function SlideProductInterfacesShowcase({ reduceMotion, running }: { slide: PitchSlide; reduceMotion: boolean; running: boolean }) {
  const [elapsed,setElapsed] = useState(0);

  useEffect(() => {
    if (!running) { setElapsed(0); return; }
    const startedAt = performance.now();
    const timer = window.setInterval(() => setElapsed(Math.min(TOTAL_DURATION - 1,performance.now() - startedAt)),80);
    return () => window.clearInterval(timer);
  }, [running]);

  const roleIndex = Math.min(3,Math.floor(elapsed / ROLE_DURATION));
  const roleElapsed = elapsed - roleIndex * ROLE_DURATION;
  const viewIndex = Math.min(VIEWS_PER_ROLE - 1,Math.floor(roleElapsed / VIEW_DURATION));
  const role = roles[roleIndex];
  const imageNumber = selectedViews[viewIndex] + 1;
  const image = `/assets/founder-carousel/${role.prefix}-${String(imageNumber).padStart(2,"0")}.jpg`;
  const roleProgress = reduceMotion ? 1 : Math.min(1,roleElapsed / ROLE_DURATION);

  const background = useMemo(() => `url("${image}")`,[image]);

  return (
    <div className="product-interfaces" aria-label="Carrusel automático de las cuatro interfaces de TeCaiGO">
      <motion.div className="product-interfaces__background" style={{ backgroundImage:background }} />
      <div className="product-interfaces__veil" />
      <div className="product-interfaces__rings" aria-hidden="true"><i/><i/><i/></div>

      <div className="product-interfaces__header">
        <div><span>{role.label}</span><h1>Toda la red, en movimiento.</h1></div>
      </div>

      <div className="product-interfaces__tabs" aria-label="Secciones de la aplicación">
        {roles.map((item,index) => <button key={item.id} className={index === roleIndex ? "is-active" : ""} tabIndex={-1}>{item.label}<small>{item.count}</small></button>)}
      </div>

      <div className="product-interfaces__stage">
        <div className="product-interfaces__carousel">
          <AnimatePresence initial={false}>
            <motion.figure
              key={image}
              className="is-active"
              initial={reduceMotion ? false : { x:"42%", opacity:0, scale:.88, rotateY:-10 }}
              animate={{ x:0, opacity:1, scale:1, rotateY:0 }}
              exit={reduceMotion ? { opacity:0 } : { x:"-42%", opacity:0, scale:.88, rotateY:10 }}
              transition={{ duration:reduceMotion ? 0 : .72, ease:[.22,1,.36,1] }}
            >
              <span aria-hidden="true" />
              <img src={image} alt={`${role.label}, vista ${viewIndex + 1}`} />
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      <div className="product-interfaces__statement"><strong>{role.label}</strong> · {role.caption}</div>
      <div className="product-interfaces__role-progress" aria-hidden="true"><motion.span style={{ scaleX:roleProgress }} /></div>
    </div>
  );
}
