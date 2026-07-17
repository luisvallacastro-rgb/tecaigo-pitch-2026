"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  CreditCard,
  Database,
  Gem,
  Landmark,
  Megaphone,
  TrendingUp,
  Users,
} from "lucide-react";
import type { PitchSlide } from "../data/slides";

const revenueIcons = {
  subscriptions: BriefcaseBusiness,
  commissions: CreditCard,
  positioning: Megaphone,
  analytics: BarChart3,
  finance: Landmark,
} as const;

const flowIcons = [Users, CalendarDays, CreditCard, Database, Gem, TrendingUp] as const;

export default function Slide10BusinessModel({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  const content = slide.businessModel;
  if (!content) return null;

  return (
    <div className="business-model-slide" aria-label="Modelo de negocio escalable y efecto de red de TeCaiGO">
      <div className="business-model-slide__grid" aria-hidden="true" />
      <motion.header
        className="business-model-slide__header"
        initial={reduceMotion ? false : { opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }}
      >
        <small><span>14</span><i /> {slide.eyebrow}</small>
        <h2>{slide.title}</h2>
        <p>{slide.statement}</p>
      </motion.header>

      <section className="business-model-slide__streams" aria-label="Fuentes de ingreso">
        {content.streams.map((stream, index) => {
          const Icon = revenueIcons[stream.icon];
          return (
            <motion.article
              className={`business-model-slide__card ${stream.status ? "is-roadmap" : ""}`}
              key={stream.title}
              initial={reduceMotion ? false : { opacity: 0, y: 34, scale: .96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: reduceMotion ? 0 : .55 + index * .15, duration: .55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="business-model-slide__card-top">
                <span><Icon size={22} /></span>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </div>
              {stream.status && <em>{stream.status}</em>}
              <h3>{stream.title}</h3>
              <p>{stream.description}</p>
              <i aria-hidden="true" />
            </motion.article>
          );
        })}
      </section>

      <motion.section
        className="business-model-slide__flywheel"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 1.45, duration: .6 }}
        aria-label="Efecto de red"
      >
        <header><small>Efecto de red</small><strong>Crecimiento que se retroalimenta</strong></header>
        <div className="business-model-slide__flow">
          {content.networkFlow.map((label, index) => {
            const Icon = flowIcons[index];
            return (
              <div className="business-model-slide__flow-step" key={label}>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, scale: .65 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: reduceMotion ? 0 : 1.72 + index * .13, duration: .4, type: "spring", stiffness: 160, damping: 16 }}
                >
                  <span><Icon size={17} /></span><strong>{label}</strong>
                </motion.div>
                {index < content.networkFlow.length - 1 && <motion.i initial={reduceMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: reduceMotion ? 0 : 1.83 + index * .13, duration: .35 }}><ChevronRight size={16} /></motion.i>}
              </div>
            );
          })}
        </div>
      </motion.section>

      <motion.footer
        className="business-model-slide__message"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 2.55, duration: .65, ease: [0.16, 1, 0.3, 1] }}
      >
        <span aria-hidden="true"><TrendingUp size={24} /></span>
        <div><strong>{content.impact}</strong><small>{content.support}</small></div>
      </motion.footer>
    </div>
  );
}
