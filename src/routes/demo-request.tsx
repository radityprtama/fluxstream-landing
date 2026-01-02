import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import { Navbar, Footer } from '../components/landing'
import { sendDemoRequest } from '../server/sendDemoRequest'

const routePath = '/demo-request' as const
export const Route = createFileRoute(routePath)({
  component: DemoRequestPage,
})

interface DemoFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  companySize: string
  message: string
}

function DemoRequestPage() {
  const [formData, setFormData] = useState<DemoFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    companySize: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await sendDemoRequest({ data: formData })
      setSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        role: '',
        companySize: '',
        message: '',
      })
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit request. Please try again.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900 pt-16 bg-gradient-to-br from-slate-50 via-white to-brand-50/30">
      <Navbar />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-brand-50/50 rounded-full blur-3xl" />
      </div>
      
      <main className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-50 to-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm border border-brand-200/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Request a Demo
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight">
            See FluxStream{' '}
            <span className="bg-gradient-to-r from-brand-600 to-blue-600 bg-clip-text text-transparent">
              in action.
            </span>
          </h1>
          <p className="text-slate-600 text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Experience how our AI-driven workflow orchestration transforms your business processes.
            Fill out the form below and our team will contact you within 24 hours.
          </p>
        </div>

        {success ? (
          <div className="relative bg-gradient-to-br from-brand-50 via-white to-blue-50 border border-brand-200 rounded-3xl p-12 lg:p-16 text-center shadow-2xl shadow-brand-200/30 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-100/50 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl" />
            </div>
            
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30 animate-[bounce_1s_ease-in-out]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-4">
                Request Received!
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                Thank you for your interest in FluxStream. We've received your demo request
                and will reach out to you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Submit Another Request
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/50 p-8 lg:p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-50 to-transparent rounded-bl-full opacity-60" />
                
                <form onSubmit={handleSubmit} className="relative">
                  <div className="mb-8">
                    <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
                      Tell us about yourself
                    </h2>
                    <p className="text-slate-500 text-sm">
                      All fields marked with * are required
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div className="group">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all duration-200 text-sm font-medium hover:border-slate-300"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all duration-200 text-sm font-medium hover:border-slate-300"
                      />
                    </div>
                  </div>

                  <div className="mb-5 group">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">
                      Work Email *
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all duration-200 text-sm font-medium hover:border-slate-300"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">
                        Company *
                      </label>
                      <div className="relative">
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Inc."
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all duration-200 text-sm font-medium hover:border-slate-300"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                          <path d="M10 6h4"/>
                          <path d="M10 10h4"/>
                          <path d="M10 14h4"/>
                          <path d="M10 18h4"/>
                        </svg>
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">
                        Role *
                      </label>
                      <div className="relative">
                        <input
                          id="role"
                          name="role"
                          type="text"
                          required
                          value={formData.role}
                          onChange={handleChange}
                          placeholder="Engineering Manager"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all duration-200 text-sm font-medium hover:border-slate-300"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5 group">
                    <label htmlFor="companySize" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">
                      Company Size *
                    </label>
                    <div className="relative">
                      <select
                        id="companySize"
                        name="companySize"
                        required
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white transition-all duration-200 text-sm font-medium appearance-none cursor-pointer hover:border-slate-300"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </div>
                  </div>

                  <div className="mb-6 group">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-brand-600 transition-colors">
                      What are you looking to automate?
                      <span className="ml-2 text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your use case, current challenges, or specific workflows you'd like to improve..."
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 focus:bg-white resize-none transition-all duration-200 text-sm font-medium hover:border-slate-300"
                    />
                  </div>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" x2="12" y1="8" y2="12"/>
                        <line x1="12" x2="12.01" y1="16" y2="16"/>
                      </svg>
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`group w-full h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                      loading
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/30 p-7 overflow-hidden group hover:shadow-xl hover:border-slate-300/80 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center border border-brand-200/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      What You'll Get
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">Personalized walkthrough of FluxStream features</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">Live Q&A with our product team</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">Custom workflow demo for your use case</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">ROI analysis and implementation roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-brand-500 via-brand-600 to-blue-600 rounded-2xl p-7 text-white overflow-hidden group">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <h4 className="font-display font-bold text-white/90 mb-2 text-sm uppercase tracking-wider">
                    Response Time
                  </h4>
                  <p className="text-5xl font-display font-bold text-white mb-2">
                    &lt; 24 hrs
                  </p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Our team responds to all demo requests within one business day
                  </p>
                </div>
              </div>

              <div className="relative bg-slate-900 rounded-2xl p-7 text-white overflow-hidden group hover:bg-slate-800 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                        <path d="M12 17h.01"/>
                      </svg>
                    </div>
                    <h4 className="font-display font-bold text-lg">
                      Questions?
                    </h4>
                  </div>
                  <p className="text-slate-400 mb-5 text-sm leading-relaxed">
                    Have questions before scheduling? Email us directly and we'll get back to you right away.
                  </p>
                  <a
                    href="mailto:sales@fluxstream.io"
                    className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-sm transition-colors duration-200 group/link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    sales@fluxstream.io
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/link:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>Your information is secure and never shared</span>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
