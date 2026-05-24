export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Freelancer Fintech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-track expenses from{' '}
          <span className="text-[#58a6ff]">any purchase form</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Install our browser extension and every online purchase you make is automatically captured, categorized, and ready for tax time — no manual entry ever.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $12/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {['Auto-detects checkout forms', 'Receipt screenshots', 'Tax export (CSV/PDF)', 'Lemon Squeezy billing', 'Works on 500+ stores'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro Plan</span>
          <div className="mt-3 mb-1">
            <span className="text-5xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay tax-ready</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Browser extension (Chrome & Firefox)',
              'Unlimited expense capture',
              'Auto-categorization with AI',
              'Receipt screenshot storage',
              'CSV & PDF tax export',
              'Dashboard & analytics',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Free
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">7-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the browser extension detect purchases?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              The extension uses a content script that scans for common checkout form patterns (order confirmation pages, payment success screens) across 500+ popular stores. When detected, it captures the page data and a screenshot, then syncs it to your dashboard automatically.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my financial data secure?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              Yes. The extension never captures payment card numbers or passwords — only order confirmation details. All data is encrypted in transit and at rest. We never sell your data to third parties.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I export expenses for my accountant?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              Absolutely. From your dashboard you can export all expenses as a CSV or a formatted PDF report, filtered by date range or category. Perfect for quarterly tax prep or handing off to your accountant.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        <p>© {new Date().getFullYear()} ExpenseSnap. Built for freelancers who hate manual bookkeeping.</p>
      </footer>
    </main>
  )
}
