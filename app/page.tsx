export default function Page() {
  const faqs = [
    {
      q: 'Which LLM providers are supported?',
      a: 'OpenAI, Anthropic, and Mistral are supported out of the box. You bring your own API keys and we handle the rest.'
    },
    {
      q: 'How are prompts ranked?',
      a: 'We score each response on response time, token efficiency, and a coherence heuristic, then combine them into a single quality score you can sort and filter.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel from your billing portal at any time — no questions asked and no lock-in.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Rank AI Prompts by{' '}
          <span className="text-[#58a6ff]">Output Quality</span>{' '}
          Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Run A/B experiments across multiple LLM providers, collect response-time, token-usage, and coherence metrics, and get instant ranked results — no manual review needed.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Ranking Prompts — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No lock-in.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to ship better prompts faster</p>
          <div className="text-5xl font-bold text-white mb-1">$29<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt experiments',
              'OpenAI, Anthropic & Mistral support',
              'Automated quality scoring & ranking',
              'Response time & token analytics',
              'Export results as CSV',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} AI Prompt Performance Ranker. All rights reserved.
      </footer>
    </main>
  )
}
