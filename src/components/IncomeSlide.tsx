"use client";

import { motion } from "framer-motion";
import { BarChart3, BriefcaseBusiness, CreditCard, Landmark, Megaphone, TrendingUp } from "lucide-react";
import type { PitchSlide } from "../data/slides";

const icons = {
  subscriptions: BriefcaseBusiness,
  commissions: CreditCard,
  positioning: Megaphone,
  analytics: BarChart3,
  finance: Landmark,
} as const;

export default function IncomeSlide({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  const model = slide.businessModel;
  if (!model) return null;
  const currentStreams = model.streams.slice(0, 4);
  const futureStream = model.streams[4];

  return (
    <div className="income-slide" aria-label="Fuentes de ingreso y evolución del modelo de TeCaiGO">
      <style>{`
        .income-slide{position:absolute;inset:0;overflow:hidden;padding:clamp(5rem,8vh,7rem) 5vw clamp(6rem,12vh,8rem);color:#f5fbfa;background:
          radial-gradient(circle at 50% 50%,rgba(13,193,203,.13),transparent 33%),
          linear-gradient(120deg,#020b0d 0%,#06191c 52%,#021012 100%)}
        .income-slide:before{content:"";position:absolute;inset:0;opacity:.25;background-image:linear-gradient(rgba(81,224,231,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(81,224,231,.08) 1px,transparent 1px);background-size:6.5vw 6.5vw;mask-image:radial-gradient(circle at 50% 45%,#000,transparent 72%)}
        .income-slide:after{content:"";position:absolute;inset:-25%;background:conic-gradient(from 90deg at 50% 50%,transparent,rgba(70,228,235,.08),transparent 20%);animation:incomeSweep 12s linear infinite;pointer-events:none}
        .income-slide__content{position:relative;z-index:1;height:100%;display:grid;grid-template-rows:auto 1fr auto;gap:clamp(1rem,2.2vh,1.6rem)}
        .income-slide__intro{display:flex;align-items:flex-end;justify-content:space-between;gap:3vw}
        .income-slide__intro small{display:block;margin-bottom:.55rem;color:#69e4eb;font-size:clamp(.68rem,.82vw,.9rem);font-weight:800;letter-spacing:.24em;text-transform:uppercase}
        .income-slide__intro h2{max-width:62rem;margin:0;font-size:clamp(2.25rem,4vw,4.5rem);line-height:.96;letter-spacing:-.055em}
        .income-slide__intro p{max-width:31rem;margin:0 0 .25rem;color:#a9c4c5;font-size:clamp(.92rem,1.25vw,1.3rem);line-height:1.4;text-align:right}
        .income-slide__stage{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));align-items:stretch;gap:clamp(.75rem,1.2vw,1.25rem);padding-top:2.4rem}
        .income-slide__rail{position:absolute;left:3%;right:3%;top:1.05rem;height:2px;background:linear-gradient(90deg,transparent,#3dd5df 12%,#3dd5df 88%,transparent);transform-origin:left;box-shadow:0 0 18px rgba(61,213,223,.45)}
        .income-slide__rail-label{position:absolute;top:-.15rem;left:50%;padding:0 .75rem;transform:translateX(-50%);background:#061517;color:#72e6ec;font-size:.67rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase}
        .income-card{position:relative;overflow:hidden;min-height:clamp(13rem,31vh,19.5rem);padding:clamp(1rem,1.5vw,1.55rem);border:1px solid rgba(112,226,232,.2);border-radius:1.4rem;background:linear-gradient(145deg,rgba(9,35,38,.96),rgba(3,18,21,.92));box-shadow:0 1.5rem 4rem rgba(0,0,0,.28);display:flex;flex-direction:column}
        .income-card:before{content:"";position:absolute;inset:0 0 auto;height:3px;background:linear-gradient(90deg,#70e7ed,#119faa)}
        .income-card__index{position:absolute;right:1rem;top:.85rem;color:rgba(112,231,237,.28);font-size:clamp(1.4rem,2.2vw,2.4rem);font-weight:900}
        .income-card__icon{width:clamp(3rem,4vw,4.2rem);height:clamp(3rem,4vw,4.2rem);border:1px solid rgba(102,230,236,.48);border-radius:1.15rem;display:grid;place-items:center;color:#6ce5eb;background:rgba(40,192,201,.09);box-shadow:inset 0 0 25px rgba(52,210,220,.08),0 0 28px rgba(52,210,220,.08)}
        .income-card__status{align-self:flex-start;margin-top:auto;margin-bottom:.75rem;padding:.38rem .62rem;border-radius:999px;background:rgba(100,225,232,.1);color:#77e5ea;font-size:clamp(.58rem,.72vw,.72rem);font-weight:800;letter-spacing:.13em;text-transform:uppercase}
        .income-card h3{margin:0 0 .55rem;font-size:clamp(1.1rem,1.65vw,1.75rem);line-height:1.05;letter-spacing:-.035em}
        .income-card p{margin:0;color:#a8bfc0;font-size:clamp(.76rem,.92vw,1rem);line-height:1.42}
        .income-slide__footer{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:1rem;align-items:stretch}
        .income-future,.income-thesis{position:relative;border:1px solid rgba(104,226,232,.22);border-radius:1.15rem;background:rgba(2,18,20,.86);min-height:clamp(5.3rem,10vh,7rem)}
        .income-future{display:grid;grid-template-columns:auto 1fr;gap:1rem;align-items:center;padding:1rem 1.25rem;overflow:hidden}
        .income-future:after{content:"FUTURO";position:absolute;right:-.2rem;bottom:-1.3rem;color:rgba(89,226,234,.06);font-size:5rem;font-weight:900;letter-spacing:-.06em}
        .income-future__icon{width:3.25rem;height:3.25rem;display:grid;place-items:center;border-radius:50%;color:#071517;background:linear-gradient(135deg,#9af0f4,#36cbd5);box-shadow:0 0 30px rgba(56,205,214,.24)}
        .income-future small{color:#6fe1e7;font-size:.65rem;font-weight:800;letter-spacing:.17em;text-transform:uppercase}
        .income-future h3{margin:.28rem 0 .15rem;font-size:clamp(1rem,1.35vw,1.45rem)}
        .income-future p{margin:0;color:#9db8ba;font-size:clamp(.7rem,.85vw,.92rem)}
        .income-thesis{display:flex;align-items:center;gap:1rem;padding:1rem 1.25rem}
        .income-thesis>span{flex:0 0 auto;width:2.7rem;height:2.7rem;display:grid;place-items:center;border-radius:.9rem;color:#62e0e7;background:rgba(63,215,224,.1)}
        .income-thesis strong{display:block;font-size:clamp(.86rem,1.08vw,1.15rem);line-height:1.32}
        .income-thesis small{display:block;margin-top:.22rem;color:#70dce2;font-size:clamp(.62rem,.72vw,.78rem);letter-spacing:.08em}
        @keyframes incomeSweep{to{transform:rotate(360deg)}}
        @media(max-width:900px){.income-slide{padding-left:3vw;padding-right:3vw}.income-slide__intro p{display:none}.income-slide__stage{gap:.55rem}.income-card{padding:.9rem;min-height:14rem}.income-slide__footer{grid-template-columns:1fr 1fr}.income-card__index{font-size:1.2rem}.income-card__status{font-size:.55rem}.income-card p{font-size:.7rem}}
        @media(prefers-reduced-motion:reduce){.income-slide:after{animation:none}}
      `}</style>

      <div className="income-slide__content">
        <motion.header className="income-slide__intro" initial={reduceMotion ? false : { opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div><small>Modelo diversificado</small><h2>{slide.title}</h2></div>
          <p>{slide.statement}</p>
        </motion.header>

        <section className="income-slide__stage" aria-label="Fuentes actuales de ingreso">
          <motion.i className="income-slide__rail" initial={reduceMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: reduceMotion ? 0 : .45, duration: 1.2, ease: [0.16, 1, 0.3, 1] }} />
          <span className="income-slide__rail-label">Evolución del ecosistema</span>
          {currentStreams.map((stream, index) => {
            const Icon = icons[stream.icon];
            return <motion.article className="income-card" key={stream.title} initial={reduceMotion ? false : { opacity: 0, y: 38, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : .72 + index * .36, duration: .62, ease: [0.16, 1, 0.3, 1] }}>
              <span className="income-card__index">0{index + 1}</span>
              <motion.div className="income-card__icon" animate={reduceMotion ? undefined : { boxShadow: ["0 0 18px rgba(52,210,220,.06)", "0 0 34px rgba(52,210,220,.22)", "0 0 18px rgba(52,210,220,.06)"] }} transition={{ delay: 1 + index * .36, duration: 3.2, repeat: Infinity }}><Icon size={26} /></motion.div>
              <span className="income-card__status">{stream.status}</span>
              <h3>{stream.title}</h3><p>{stream.description}</p>
            </motion.article>;
          })}
        </section>

        <div className="income-slide__footer">
          {futureStream && <motion.section className="income-future" initial={reduceMotion ? false : { opacity: 0, x: -34 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 2.45, duration: .7 }}>
            <motion.span className="income-future__icon" animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }}><Landmark size={24} /></motion.span>
            <div><small>Habilitado por el historial transaccional</small><h3>{futureStream.title}</h3><p>{futureStream.description}</p></div>
          </motion.section>}
          <motion.section className="income-thesis" initial={reduceMotion ? false : { opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 2.75, duration: .7 }}>
            <span><TrendingUp size={23} /></span><div><strong>{model.impact}</strong><small>{model.support}</small></div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
