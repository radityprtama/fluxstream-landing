import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../ui/button'
import { IconCheck, IconCode, IconTerminal } from './ui/Icons'

const steps = [
  { id: 1, label: 'Trigger', code: "trigger: 'user.signup',", icon: '⚡' },
  { id: 2, label: 'Enrich', code: '  await enrich(user.email);', icon: '🔍' },
  {
    id: 3,
    label: 'Sync CRM',
    code: '  await salesforce.create(user);',
    icon: '☁️',
  },
  {
    id: 4,
    label: 'Notify',
    code: "  await slack.send('#leads', user);",
    icon: '💬',
  },
]

export const CodeIntegration: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="integration"
      className="py-24 bg-slate-950 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
              <IconTerminal className="w-3 h-3" />
              Developer First
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Define in Code. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-teal-200">
                Run in Cloud.
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Stop clicking through endless wizard steps. Orbin lets you define
              complex business logic using the languages you already love. We
              handle the infrastructure, retries, and scalability.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'TypeScript & Python SDKs available',
                'Local testing with CLI runner',
                'Zero-config deployment',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-300 font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center">
                    <IconCheck className="w-3.5 h-3.5" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button className="h-12 px-6 rounded-lg bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors flex items-center gap-2">
              <IconCode className="w-4 h-4" />
              Read the Docs
            </Button>
          </div>

          <div className="relative">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[400px]">
              <div className="flex-1 p-6 font-mono text-sm border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <div className="flex gap-1.5 mb-6 opacity-50">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>

                <div className="space-y-1">
                  <div className="text-slate-500">{'// workflow.ts'}</div>
                  <div className="text-purple-400">
                    export const{' '}
                    <span className="text-blue-400">onboardUser</span> ={' '}
                    <span className="text-yellow-300">workflow</span>
                    {'({'}
                  </div>

                  {steps.map((step, idx) => (
                    <motion.div
                      key={step.id}
                      className={`pl-4 transition-colors duration-300 ${activeStep === idx + 1 ? 'bg-slate-800/80 rounded border-l-2 border-brand-500' : ''}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-slate-300">{step.code}</span>
                    </motion.div>
                  ))}

                  <div className="text-purple-400">{'})'};'</div>
                </div>
              </div>

              <div className="w-full md:w-48 bg-slate-950 p-6 flex flex-col items-center justify-center gap-4 relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                <AnimatePresence mode="popLayout">
                  {steps.map((step, idx) => {
                    const isActive = activeStep >= idx + 1
                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{
                          opacity: isActive ? 1 : 0.3,
                          scale: isActive ? 1 : 0.9,
                          filter: isActive
                            ? 'grayscale(0%)'
                            : 'grayscale(100%)',
                        }}
                        className={`relative z-10 w-32 p-3 rounded-xl border ${isActive ? 'bg-slate-800 border-brand-500/50 shadow-lg shadow-brand-500/20' : 'bg-slate-900 border-slate-800'} flex items-center gap-3 transition-colors duration-500`}
                      >
                        <div className="text-lg">{step.icon}</div>
                        <div
                          className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-600'}`}
                        >
                          {step.label}
                        </div>

                        {idx < steps.length - 1 && (
                          <div
                            className={`absolute left-1/2 -bottom-4 w-0.5 h-4 -ml-[1px] ${activeStep > idx + 1 ? 'bg-brand-500' : 'bg-slate-800'}`}
                          />
                        )}
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

                {activeStep === 5 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center z-20"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2 text-slate-900">
                        <IconCheck className="w-6 h-6" />
                      </div>
                      <p className="text-emerald-400 font-bold text-sm">
                        Deployed Successfully
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-slate-800 text-white p-4 rounded-xl shadow-xl border border-slate-700 hidden lg:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-slate-400">
                  SYSTEM STATUS
                </span>
              </div>
              <div className="font-mono text-xl font-bold tracking-tighter">
                99.99% UPTIME
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
