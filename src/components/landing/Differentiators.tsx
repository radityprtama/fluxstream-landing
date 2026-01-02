import React from 'react'
import { IconCheck, IconCode, IconShield, IconX, IconZap } from './ui/Icons'

export const Differentiators: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
            Why Orbin?
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            Stop fighting your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">
              legacy infrastructure.
            </span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Legacy iPaaS tools were built for a different era. Orbin brings
            modern engineering practices to workflow automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col relative overflow-hidden group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <IconZap className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Real-time Event Bus
            </h3>
            <p className="text-slate-500 text-sm mb-8 flex-1">
              Traditional tools rely on polling intervals (5-15 mins). Orbin is
              purely event-driven.
            </p>

            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <IconX className="w-4 h-4 text-red-400" /> Legacy
                </span>
                <span className="text-slate-400 font-mono">5 min delay</span>
              </div>
              <div className="w-full h-px bg-slate-200" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-900 font-bold flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-brand-500" /> Orbin
                </span>
                <span className="text-brand-600 font-mono font-bold">
                  12ms latency
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col relative overflow-hidden group text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/20 transition-all duration-500" />

            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <IconShield className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2 relative z-10">
              Guaranteed Delivery
            </h3>
            <p className="text-slate-400 text-sm mb-8 flex-1 relative z-10">
              Never lose a webhook again. We persist every event and handle
              replays automatically with exponential backoff.
            </p>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                <div className="flex-1">
                  <div className="h-2 w-16 bg-white/20 rounded mb-1" />
                  <div className="h-1.5 w-24 bg-white/10 rounded" />
                </div>
                <span className="text-xs text-red-400 font-mono">Failed</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-3 w-0.5 bg-slate-700" />
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <div className="flex-1">
                  <div className="h-2 w-16 bg-white/20 rounded mb-1" />
                  <div className="h-1.5 w-24 bg-white/10 rounded" />
                </div>
                <span className="text-xs text-emerald-400 font-mono">
                  Replayed
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col relative overflow-hidden group">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <IconCode className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Type-Safe Infrastructure
            </h3>
            <p className="text-slate-500 text-sm mb-8 flex-1">
              Stop guessing payload structures. Our SDKs are auto-generated from
              your API schema.
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[10px] leading-relaxed text-slate-300 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-2 opacity-30">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
              </div>
              <p>
                <span className="text-pink-400">interface</span> User {'{'}
              </p>
              <p className="pl-4">
                id: <span className="text-amber-400">string</span>;
              </p>
              <p className="pl-4">
                email: <span className="text-amber-400">string</span>;
              </p>
              <p className="pl-4">
                plan: <span className="text-brand-400">'free'</span> |{' '}
                <span className="text-brand-400">'pro'</span>;
              </p>
              <p>{'}'}</p>
              <p className="mt-2 text-slate-500">{'// Autocomplete works!'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
