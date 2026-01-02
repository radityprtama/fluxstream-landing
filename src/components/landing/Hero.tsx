import React from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'
import { IconArrowRight, IconLayers, IconShield, IconZap } from './ui/Icons'

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply animate-pulse" />
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          v2.0 is now live: Intelligent Routing
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] text-slate-900 mb-8 max-w-4xl mx-auto tracking-tight">
          Orchestrate workflows at <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">
            hyperscale speed.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          FluxStream replaces fragile scripts with a resilient, AI-driven
          orchestration engine. Connect your stack, define your logic, and let
          the system optimize for throughput.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button
            size={'lg'}
            className="h-12 px-8 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-900/20 hover:scale-105 active:scale-95 duration-200"
          >
            Start Building Free
          </Button>
          <Link to="/demo-request">
            <Button
              size={'lg'}
              className="group h-12 px-8 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/30 hover:scale-105 active:scale-95 duration-200 flex items-center gap-2"
            >
              Request a Demo
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
          {[
            {
              icon: IconZap,
              title: 'Real-time Execution',
              desc: 'Sub-millisecond latency for critical paths.',
            },
            {
              icon: IconShield,
              title: 'Enterprise Grade',
              desc: 'SOC2 Type II certified and GDPR compliant.',
            },
            {
              icon: IconLayers,
              title: 'Universal Connectors',
              desc: 'Integrates with 200+ SaaS tools out of the box.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <item.icon className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
