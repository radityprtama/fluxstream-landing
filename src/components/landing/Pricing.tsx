import React from 'react'
import { Button } from '../ui/button'
import { IconCheck } from './ui/Icons'
import type { PricingTier } from '../../types'

const tiers: Array<PricingTier> = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for hacking on side projects.',
    features: [
      '500 Executions / mo',
      '10 Active Workflows',
      'Community Support',
      '1 Day Log Retention',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'For growing teams automating core ops.',
    features: [
      '50,000 Executions / mo',
      'Unlimited Workflows',
      'Priority Email Support',
      '30 Day Log Retention',
      'SSO (Google & GitHub)',
    ],
    recommended: true,
  },
  {
    name: 'Business',
    price: '$249',
    description: 'Scale with confidence and compliance.',
    features: [
      '1M Executions / mo',
      'Unlimited Workflows',
      'Dedicated Success Manager',
      'Unlimited Retention',
      'SSO (SAML/Okta)',
      'Audit Logs',
    ],
  },
]

export const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-4xl text-slate-900 mb-4">
          Simple, usage-based pricing.
        </h2>
        <p className="text-slate-500 mb-16 text-lg">
          Start for free, scale as your automation grows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-3xl text-left transition-all duration-300 ${
                tier.recommended
                  ? 'bg-white border-2 border-brand-500 shadow-xl scale-105 z-10'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-lg'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-slate-900">
                  {tier.price}
                </span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
                {tier.description}
              </p>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-xl font-bold transition-colors ${
                  tier.recommended
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                Choose {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
