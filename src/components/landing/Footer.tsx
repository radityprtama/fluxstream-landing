import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-display font-bold text-2xl text-white mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            FluxStream
          </div>
          <p className="text-sm leading-relaxed mb-6">
            The next generation of workflow orchestration. Built for developers, trusted by enterprises.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors" />
            <div className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors" />
            <div className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-brand-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Changelog</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Docs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-brand-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs text-center md:text-left">
        &copy; {new Date().getFullYear()} FluxStream Inc. All rights reserved.
      </div>
    </footer>
  );
};
