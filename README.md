# FluxStream

A modern, full-featured landing page template built with TanStack Start, React 19, and shadcn/ui.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) - Full-stack React framework with file-based routing
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) (radix-vega style) + [Radix UI](https://radix-ui.com)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with CSS variables
- **Animations**: [Framer Motion](https://motion.dev)
- **Icons**: [Lucide React](https://lucide.dev)
- **AI**: [Google Gemini](https://ai.google.dev) integration
- **Email**: [Resend](https://resend.com) for transactional emails
- **Language**: TypeScript
- **Testing**: Vitest + Testing Library

## Features

- Responsive landing page with modern design
- Hero section with call-to-action
- Features showcase
- Product differentiators
- Code integration examples
- Pricing tiers
- Demo request form with AI-powered processing
- Sticky banner for promotions

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fluxstream-start

# Install dependencies
bun install

# Copy environment variables
cp .env.example .env

# Start development server
bun dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env` file based on `.env.example`:

| Variable         | Description                      |
| ---------------- | -------------------------------- |
| `RESEND_API_KEY` | API key for Resend email service |
| `API_KEY`        | Google Gemini API key            |

## Scripts

| Command       | Description                           |
| ------------- | ------------------------------------- |
| `bun dev`     | Start development server on port 3000 |
| `bun build`   | Build for production                  |
| `bun preview` | Preview production build              |
| `bun test`    | Run tests with Vitest                 |
| `bun lint`    | Lint with ESLint                      |
| `bun format`  | Format with Prettier                  |
| `bun check`   | Format and lint fix                   |

## Project Structure

```
src/
├── components/
│   ├── landing/          # Landing page components
│   │   ├── ui/           # Landing-specific UI components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   └── ...
│   └── ui/               # shadcn/ui components
├── lib/
│   └── utils.ts          # Utility functions
├── routes/
│   ├── __root.tsx        # Root layout
│   ├── index.tsx         # Home page
│   └── demo-request.tsx  # Demo request page
├── server/
│   └── sendDemoRequest.ts
├── services/
│   └── geminiService.ts  # Gemini AI integration
├── router.tsx
└── styles.css            # Global styles + Tailwind
```

## Adding Components

This project uses shadcn/ui. To add new components:

```bash
bunx shadcn@latest add <component-name>
```

## License

MIT
