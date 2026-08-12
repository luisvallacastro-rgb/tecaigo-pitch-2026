"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const scenes = [
  { image:"/assets/page-5/tour-operador.jpg", sector:"Tour operadores", title:"Primero, conectamos la oferta.", detail:"Una red nacional que une experiencias de todos los destinos." },
  { image:"/assets/page-5/transporte.jpg", sector:"Transporte", title:"Después, activamos la movilidad.", detail:"Capacidad disponible conectada con rutas que necesitan operar." },
  { image:"/assets/page-5/comercios.jpg", sector:"Comercios turísticos", title:"Integramos cada destino.", detail:"Hoteles, restaurantes y comercios transforman su oferta en experiencias." },
  { image:"/assets/page-5/turistas.jpg", sector:"Turistas", title:"La red llega a todo el país.", detail:"Más oferta visible, reservable y comprable desde un solo lugar." },
  { image:"/assets/page-5/turistas-online.jpg", sector:"Mercado conectado", title:"El Salvador, nuestra primera meta.", detail:"Aquí validaremos, fortaleceremos y haremos predecible el modelo." },
  { image:"/assets/page-5/banca.jpg", sector:"Ecosistema", title:"Una red que genera confianza.", detail:"Actividad digital, trazabilidad y nuevas posibilidades de crecimiento." },
  { image:"/assets/page-5/universidades.jpg", sector:"Siguiente generación", title:"Del mercado nacional a la región.", detail:"Un modelo probado en El Salvador, listo para cruzar fronteras." },
] as const;

const SCENE_MS = 30000 / scenes.length;

export default function MarketPotentialSlide({reduceMotion,running}:{reduceMotion:boolean;running:boolean}) {
  const [active,setActive] = useState(0);
  useEffect(() => {
    setActive(0);
    if (reduceMotion || !running) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % scenes.length), SCENE_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion,running]);
  const scene = scenes[active];
  return <div className="market-potential" aria-label="Potencial de mercado de TeCaiGO en El Salvador">
    <AnimatePresence initial={false} mode="popLayout">
      <motion.figure key={scene.image} className="market-potential__scene" initial={reduceMotion?false:{opacity:0,x:"12%",scale:1.06}} animate={{opacity:1,x:0,scale:1}} exit={reduceMotion?undefined:{opacity:0,x:"-7%",scale:1.02}} transition={{duration:reduceMotion?0:1.15,ease:[.22,1,.36,1]}}>
        <img src={scene.image} alt="" />
      </motion.figure>
    </AnimatePresence>
    <div className="market-potential__shade" aria-hidden="true" />
    <AnimatePresence mode="wait">
      <motion.div key={active} className="market-potential__copy" initial={reduceMotion?false:{opacity:0,y:32}} animate={{opacity:1,y:0}} exit={reduceMotion?undefined:{opacity:0,y:-18}} transition={{delay:reduceMotion?0:.32,duration:.72}}>
        <span>{scene.sector}</span><h1>{scene.title}</h1><p>{scene.detail}</p>
      </motion.div>
    </AnimatePresence>
    <div className="market-potential__thesis"><strong>EL SALVADOR</strong><span>VALIDAR</span><i/><span>FORTALECER</span><i/><span>HACER PREDECIBLE</span></div>
    <div className="market-potential__rail" aria-label={`Vista ${active+1} de ${scenes.length}`}>
      {scenes.map((item,index)=><button key={item.image} className={index===active?"is-active":""} onClick={()=>setActive(index)} aria-label={`Mostrar ${item.sector}`}><i/></button>)}
    </div>
  </div>;
}
