"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { PitchSlide } from "../data/slides";

const TOTAL_DURATION = 35_000;
const ROLE_DURATION = TOTAL_DURATION / 4;
const VIEWS_PER_ROLE = 3;
const VIEW_DURATION = ROLE_DURATION / VIEWS_PER_ROLE;

const roles = [
  { id:"operators", label:"Tour operadores", count:11, prefix:"tecaigo-to-mobile", background:"/assets/page-3/operators.jpg" },
  { id:"commerce", label:"Comercio turístico", count:9, prefix:"tecaigo-commerce-mobile", background:"/assets/page-3/commerce.jpg" },
  { id:"tourists", label:"Turista", count:6, prefix:"tecaigo-tourist-mobile", background:"/assets/page-3/tourists.jpg" },
  { id:"transport", label:"Transporte", count:11, prefix:"tecaigo-transport-mobile", background:"/assets/page-3/transport.jpg" },
] as const;

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
  const roleProgress = reduceMotion ? 1 : Math.min(1,roleElapsed / ROLE_DURATION);

  return (
    <div className="product-interfaces product-interfaces--cinematic" aria-label="Carrusel automático de las cuatro interfaces de TeCaiGO">
      <motion.div className="product-interfaces__role-background" key={role.background} style={{ backgroundImage:`url("${role.background}")` }} initial={reduceMotion ? false : { opacity:0, scale:1.09 }} animate={{ opacity:1, scale:1.02 }} transition={{ duration:reduceMotion ? 0 : 1.35, ease:[.22,1,.36,1] }} /><div className="product-interfaces__veil" /><div className="product-interfaces__light-sweep" aria-hidden="true" />
      <div className="product-interfaces__rings" aria-hidden="true"><i/><i/><i/></div>

      <motion.h1 className="product-interfaces__role-title" key={role.id} initial={reduceMotion ? false : { opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} transition={{ duration:.55 }}>{role.label}</motion.h1>

      <div className="product-interfaces__stage">
        <div className="product-interfaces__carousel">
          {[0,1,2].map(imageIndex => {
            let offset = imageIndex - viewIndex;
            const image = `/assets/founder-carousel/${role.prefix}-${String(imageIndex + 1).padStart(2,"0")}.jpg`;
            const distance = Math.abs(offset);
            return (
              <motion.figure
                key={`${role.id}-${imageIndex}`}
                className={distance === 0 ? "is-active" : ""}
                style={{ zIndex:10-distance }}
                animate={{
                  x:`${offset * 68}%`,
                  scale:distance === 0 ? 1 : .76,
                  opacity:distance === 0 ? 1 : .34,
                  rotateY:offset * -9,
                  filter:distance === 0 ? "brightness(1)" : "brightness(.5)"
                }}
                transition={reduceMotion ? { duration:0 } : { type:"spring", stiffness:72, damping:19, mass:.9 }}
              >
                <span aria-hidden="true" />
                <img src={image} alt={`${role.label}, vista ${imageIndex + 1}`} />
              </motion.figure>
            );
          })}
        </div>
      </div>

      <div className="product-interfaces__role-progress" aria-hidden="true"><motion.span style={{ scaleX:roleProgress }} /></div>
    </div>
  );
}
