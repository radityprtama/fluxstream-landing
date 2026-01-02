import { createFileRoute } from '@tanstack/react-router'
import {
  Navbar,
  Hero,
  Features,
  Differentiators,
  CodeIntegration,
  Pricing,
  Footer,
  StickyBanner,
} from '../components/landing'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Differentiators />
        <CodeIntegration />
        <Pricing />
      </main>
      <Footer />
      <StickyBanner />
    </div>
  )
}
