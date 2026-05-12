import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt Performance Ranker — Rank AI Prompts by Output Quality',
  description: 'Run A/B tests on AI prompts, collect quality metrics, and get automated rankings. Built for AI product managers and developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="23d128a9-93f3-4bf4-86d6-f8286e545fc0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
