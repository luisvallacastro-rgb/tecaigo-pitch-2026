"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Luis Antonio Valladares",
    role: "Dirección estratégica y financiera",
    description: "Ex tour operador con más de 15 años en finanzas, riesgos y evaluación de proyectos.",
    image: "/assets/team/luis-valladares.png",
  },
  {
    name: "Sigfrido Alexander Villegas",
    role: "Arquitectura y tecnología",
    description: "Ingeniero de sistemas especializado en software, datos e integración de plataformas.",
    image: "/assets/team/sigfrido-villegas.png",
  },
  {
    name: "Sara Michelle Flores",
    role: "Gestión humana y comunicación",
    description: "Experiencia regional en talento, organización, capacitación y desarrollo de procesos.",
    image: "/assets/team/sara-flores.png",
  },
  {
    name: "Yobani Alexander Franco",
    role: "Contabilidad y cumplimiento",
    description: "Más de 11 años en finanzas, tributación, control interno y facturación electrónica.",
    image: "/assets/team/yobani-franco.png",
  },
  {
    name: "Alejandra Johanna Echeverría",
    role: "Mercadeo y comunicación comercial",
    description: "Especialista en posicionamiento, eventos, atención al cliente y contenido multimedia.",
    image: "/assets/team/alejandra-echeverria.png",
  },
] as const;

export default function TeamFinaleSlide({ reduceMotion }: { reduceMotion: boolean }) {
  const delay = reduceMotion ? 0 : 1;
  return (
    <div className="team-finale">
      <div className="team-finale__backdrop" aria-hidden="true"><i /><i /><i /></div>
      <motion.div className="team-finale__content" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: reduceMotion ? 0 : .8 }}>
        <header>
          <div className="team-finale__brand" aria-label="TeCaigo"><span>TeCai</span><b>GO</b></div>
          <small>EQUIPO FUNDADOR · CIERRE</small>
          <h1>La capacidad para convertir visión en operación.</h1>
          <p>Cinco perfiles complementarios para construir, formalizar, comercializar y hacer crecer TeCaigo.</p>
        </header>
        <div className="team-finale__members">
          {team.map((member, index) => (
            <motion.article key={member.name} className={index === 0 ? "is-lead" : ""} initial={reduceMotion ? false : { opacity: 0, y: 28, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 1.35 + index * .14, duration: .62, ease: [0.22, 1, 0.36, 1] }}>
              <div className="team-finale__portrait"><img src={member.image} alt={member.name} /></div>
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
            </motion.article>
          ))}
        </div>
        <footer><span>Turismo</span><i>+</i><span>Tecnología</span><i>+</i><span>Finanzas</span><i>+</i><span>Personas</span><i>+</i><span>Mercadeo</span><strong>Una sola visión: conectar el turismo.</strong></footer>
      </motion.div>
    </div>
  );
}
