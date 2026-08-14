"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  Database,
  GraduationCap,
  Landmark,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import type { PitchSlide } from "../data/slides";

const profileIcons = [BriefcaseBusiness, Calculator, GraduationCap, ShieldCheck] as const;
const capacityIcons = [BriefcaseBusiness, Calculator, TrendingUp, ShieldCheck, Network] as const;
const impactIcons = [Users, Database, Scale, Landmark, Sparkles] as const;

type Props = {
  slide: PitchSlide;
  reduceMotion: boolean;
};

export default function TeamExperienceSlide({ slide, reduceMotion }: Props) {
  const content = slide.teamExperience;
  if (!content) return null;

  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: reduceMotion ? 0 : delay, duration: .55, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="team-experience" aria-label="Experiencia profesional del equipo de TeCaiGO">
      <div className="team-experience__grid" aria-hidden="true" />
      <div className="team-experience__halo" aria-hidden="true"><i /><i /><i /></div>

      <motion.header className="team-experience__heading" {...enter(.08)}>
        <span>{slide.eyebrow}</span>
        <h1>{slide.title}</h1>
        <p>{slide.statement}</p>
      </motion.header>

      <section className="team-experience__profiles" aria-label="Equipo fundador">
        {content.profiles.map((profile, profileIndex) => (
          <motion.article
            className={`team-profile team-profile--${profileIndex + 1}`}
            key={profile.name}
            {...enter(.35 + profileIndex * .18)}
          >
            <div className="team-profile__identity">
              <div className="team-profile__monogram" aria-hidden="true">{profile.initials}</div>
              <div><small>{profile.role}</small><h2>{profile.name}</h2></div>
            </div>
            <div className="team-profile__credentials">
              {profile.credentials.map((credential, index) => {
                const Icon = profileIcons[index] ?? Sparkles;
                return <span key={credential}><Icon size={16} />{credential}</span>;
              })}
            </div>
            <blockquote>“{profile.quote}”</blockquote>
          </motion.article>
        ))}
      </section>

      <motion.section className="team-experience__capacity" {...enter(.82)} aria-label="Capacidades que convergen en TeCaiGO">
        <small>Capacidades que convergen</small>
        <div className="team-experience__capacity-flow">
          {content.capacities.map((capacity, index) => {
            const Icon = capacityIcons[index] ?? Sparkles;
            return (
              <div className="team-capacity" key={capacity}>
                <span><Icon size={16} /></span><b>{capacity}</b>
                {index < content.capacities.length - 1 && <ArrowRight className="team-capacity__arrow" size={14} />}
              </div>
            );
          })}
          <motion.div
            className="team-experience__hub"
            animate={reduceMotion ? undefined : { boxShadow: ["0 0 0 rgba(113,228,234,0)", "0 0 32px rgba(113,228,234,.28)", "0 0 0 rgba(113,228,234,0)"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          ><strong>TeCai<span>GO</span></strong><small>experiencia aplicada</small></motion.div>
        </div>
      </motion.section>

      <motion.section className="team-experience__impact" {...enter(1.12)} aria-label="De la experiencia a nuevas oportunidades">
        <div className="team-experience__impact-title"><span>Experiencia que genera impacto</span><i /></div>
        <div className="team-experience__impact-flow">
          {content.impactPath.map((item, index) => {
            const Icon = impactIcons[index] ?? Sparkles;
            return (
              <div className={`team-impact team-impact--${index + 1}`} key={item}>
                <span><Icon size={15} /></span><b>{item}</b>
                {index < content.impactPath.length - 1 && <ArrowRight size={13} />}
              </div>
            );
          })}
          <div className="team-experience__branch"><Network size={15} /><span>{content.institutionalPath}</span></div>
        </div>
      </motion.section>

      <motion.footer className="team-experience__footer" {...enter(1.42)}>
        <p>{content.highlight}</p>
        <strong>{content.footer}</strong>
      </motion.footer>
    </div>
  );
}
