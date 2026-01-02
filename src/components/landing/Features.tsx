import React from 'react';
import { motion } from 'framer-motion';

const VisualDebuggerAnim = () => {
  return (
    <div className="w-full h-48 bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs overflow-hidden relative">
      <div className="flex gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
      </div>
      <div className="space-y-2">
        <div className="flex gap-2 text-slate-500">
          <span>01</span> <span className="text-blue-400">INIT</span> workflow_id=8291
        </div>
        <div className="flex gap-2 text-slate-500">
          <span>02</span> <span className="text-purple-400">FETCH</span> source="salesforce"
        </div>
        <motion.div 
          className="flex gap-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-slate-600">03</span> 
          <motion.span 
            animate={{ 
              color: ["#ef4444", "#ef4444", "#10b981", "#10b981"],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              times: [0, 0.4, 0.5, 1] 
            }}
          >
            TRANSFORM
          </motion.span>
          <motion.span
             animate={{ 
              textDecorationColor: ["transparent", "#ef4444", "transparent", "transparent"],
              color: ["#94a3b8", "#ef4444", "#94a3b8", "#94a3b8"]
             }}
             transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 1] }}
          >
             payload_mapping
          </motion.span>
        </motion.div>
        
        <motion.div
            className="absolute right-4 top-12 bg-red-500/10 border border-red-500/50 text-red-400 px-2 py-1 rounded text-[10px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: [0, 1, 0, 0], x: [20, 0, 0, 20] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.4, 0.5] }}
        >
            Error: Invalid Type
        </motion.div>

        <motion.div
            className="absolute right-4 top-12 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 px-2 py-1 rounded text-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6, 1] }}
        >
            Fixed
        </motion.div>

        <motion.div 
          className="flex gap-2 text-slate-500"
          animate={{ opacity: [0.3, 0.3, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6, 1] }}
        >
          <span>04</span> <span className="text-amber-400">SYNC</span> destination="slack"
        </motion.div>
      </div>
    </div>
  );
};

const SmartRetriesAnim = () => {
  return (
    <div className="w-full h-full min-h-[140px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100" />

        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center z-10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>

        <motion.div 
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-500 shadow-sm z-20"
            animate={{ 
                left: ["10%", "70%", "65%", "70%", "85%"],
                backgroundColor: ["#10b981", "#ef4444", "#f59e0b", "#10b981", "#10b981"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
            className="absolute right-20 top-1/2 -translate-y-1/2 w-1 h-8 bg-red-400 rounded-full"
            animate={{ opacity: [0, 1, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.6, 0.7] }}
        />

        <div className="absolute bottom-4 text-[10px] font-mono text-slate-400">
            Auto-retry: Jitter(250ms)
        </div>
    </div>
  );
};

const GitOpsAnim = () => {
  return (
    <div className="w-full h-full min-h-[140px] flex items-center justify-center relative">
       <svg viewBox="0 0 100 60" className="w-full h-full max-w-[180px] stroke-slate-300 stroke-[2px] fill-none">
          <line x1="20" y1="50" x2="20" y2="10" />
          
          <path d="M 20 50 C 20 40, 50 40, 50 30 L 50 20" />
          
          <circle cx="20" cy="50" r="3" className="fill-slate-300 stroke-none" />
          <circle cx="20" cy="30" r="3" className="fill-slate-300 stroke-none" />
          <circle cx="20" cy="10" r="3" className="fill-slate-300 stroke-none" />

          <motion.circle 
            cx="50" 
            cy="30" 
            r="3" 
            className="fill-brand-500 stroke-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.2, 1, 0], cy: [35, 30, 20, 10], cx: [50, 50, 50, 20] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
       </svg>
       <div className="absolute bottom-4 right-4 bg-white shadow-sm border border-slate-100 px-2 py-1 rounded text-[10px] text-slate-500 font-mono">
          git push origin
       </div>
    </div>
  );
};

const ColdStartAnim = () => {
  return (
    <div className="w-full h-full min-h-[140px] flex items-center justify-center gap-8 relative overflow-hidden px-8">
        <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-xl shadow-lg flex items-center justify-center text-slate-400 border border-slate-200">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
            </div>
            <span className="text-xs font-semibold text-slate-500">Trigger</span>
        </div>

        <div className="flex-1 h-0.5 bg-slate-200 relative overflow-hidden">
            <motion.div 
                className="absolute top-0 bottom-0 left-0 bg-brand-500 w-1/2"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "circIn" }}
            />
        </div>

        <div className="flex flex-col items-center gap-2 z-10">
            <motion.div 
                className="w-12 h-12 bg-white rounded-xl shadow-lg border border-brand-200 flex items-center justify-center relative overflow-hidden"
                animate={{ 
                    borderColor: ["#e2e8f0", "#10b981", "#e2e8f0"],
                    scale: [1, 1.05, 1],
                    boxShadow: ["0 4px 6px -1px rgb(0 0 0 / 0.1)", "0 10px 15px -3px rgb(16 185 129 / 0.2)", "0 4px 6px -1px rgb(0 0 0 / 0.1)"]
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "circIn" }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600 relative z-10"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <motion.div 
                    className="absolute inset-0 bg-brand-50"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            </motion.div>
            <span className="text-xs font-semibold text-brand-700">100ms</span>
        </div>
    </div>
  );
};


const features = [
  {
    title: "Visual Debugger",
    description: "Replay any past execution step-by-step to pinpoint failures instantly.",
    gridArea: "md:col-span-2",
    bg: "bg-slate-900 text-white",
    AnimComponent: VisualDebuggerAnim
  },
  {
    title: "Smart Retries",
    description: "AI-predicted retry policies that adapt to API downtime patterns.",
    gridArea: "md:col-span-1",
    bg: "bg-white text-slate-900",
    AnimComponent: SmartRetriesAnim
  },
  {
    title: "GitOps Native",
    description: "Version control your workflows. Rollback instantly if metrics drop.",
    gridArea: "md:col-span-1",
    bg: "bg-white text-slate-900",
    AnimComponent: GitOpsAnim
  },
  {
    title: "100ms Cold Starts",
    description: "Our edge network ensures your workflows trigger instantly, globally.",
    gridArea: "md:col-span-2",
    bg: "bg-brand-50 text-slate-900 border-brand-100",
    AnimComponent: ColdStartAnim
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-bold text-4xl text-slate-900 mb-6">
            Everything you need to <br/> scale operations.
          </h2>
          <p className="text-slate-500 text-lg">
            Built for engineering teams who demand control, visibility, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`${feature.gridArea} ${feature.bg} p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between min-h-[320px] overflow-hidden relative`}
            >
              <div className="relative z-10 pointer-events-none">
                <h3 className="font-display font-bold text-2xl mb-4">{feature.title}</h3>
                <p className="opacity-80 leading-relaxed font-medium max-w-sm">{feature.description}</p>
              </div>

              <div className="mt-8 flex-1 flex items-end justify-center">
                 <div className="w-full relative rounded-xl overflow-hidden">
                    <feature.AnimComponent />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
