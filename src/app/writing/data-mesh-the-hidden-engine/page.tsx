"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-fuchsia-300">
      {children}
    </code>
  )
}

export default function DataMeshPage() {
  return (
    <main className="relative min-h-screen bg-zinc-950">
      <GrainOverlay />

      {/* Background gradient orb */}
      <div className="pointer-events-none fixed inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-32 h-[600px] w-[800px] rounded-full bg-gradient-to-br from-fuchsia-600/10 via-purple-600/10 to-violet-600/10 blur-3xl" />
      </div>

      <article className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#writing"
            className="mb-12 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-fuchsia-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </motion.div>

        {/* Hero Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              Data Mesh: The Hidden Engine of Autonomous AI
            </span>
          </h1>
          <p className="mb-6 text-xl leading-relaxed text-zinc-400">
            Why your AI Agents are failing: They are trying to drink from a swamp.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Jan 10, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              15 min read
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              Data Architecture
            </span>
          </div>
        </motion.header>

        {/* Executive Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 rounded-r-lg border-l-4 border-fuchsia-500 bg-zinc-900/50 p-6 backdrop-blur-md"
        >
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-fuchsia-400">
            Executive Summary
          </h2>
          <p className="italic leading-relaxed text-zinc-300">
            We are entering the era of the <strong className="text-zinc-50">Autonomous Enterprise</strong>. Companies are racing to deploy AI agents that can &quot;optimize supply chains&quot; or &quot;personalize marketing.&quot;
          </p>
          <p className="mt-4 italic leading-relaxed text-zinc-300">
            But there is a dirty secret in the industry: <strong className="text-zinc-50">The Model is not the bottleneck. The Data Architecture is.</strong>
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            Most organizations are still stuck in the <strong className="text-zinc-50">Data Monolith</strong> era, dumping everything into a centralized Data Lake and hoping a small team of engineers can make sense of it. This fails for AI. Agents need clear, semantic boundaries to function. They need a <strong className="text-fuchsia-300">Data Mesh</strong>.
          </p>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose-article"
        >
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              1. The Death of the Monolith
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              For 20 years, the standard advice was &quot;Centralize Everything.&quot; Extract data from Sales, Marketing, and Logistics, and Load it into one giant <InlineCode>Snowflake</InlineCode> or <InlineCode>Databricks</InlineCode> instance (<InlineCode>ETL</InlineCode>).
            </p>

            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-red-400">
                The Result: A Data Swamp
              </h4>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong className="text-zinc-50">Context Loss:</strong> The data engineers don&apos;t understand what &quot;Churn Rate&quot; actually means to the Sales team.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong className="text-zinc-50">Bottlenecks:</strong> Every AI initiative has to wait for the central data team to clean the data.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong className="text-zinc-50">Fragility:</strong> If the Sales team changes a column name, the entire AI pipeline breaks.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              2. Enter the Data Mesh
            </h2>

            <p className="mb-6 leading-relaxed text-zinc-300">
              Coined by Zhamak Dehghani, Data Mesh is not a technology; it is a <strong className="text-zinc-50">socio-technical shift</strong>. It moves from &quot;Centralized Ownership&quot; to <InlineCode>Domain-Oriented Decentralization</InlineCode>.
            </p>

            <div className="mb-6 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-fuchsia-400">
                The Four Principles
              </h4>
              <ol className="space-y-3 text-zinc-300">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">1</span>
                  <span><strong className="text-zinc-50">Domain Ownership:</strong> The Sales team owns the Sales data. They know it best.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">2</span>
                  <span><strong className="text-zinc-50">Data as a Product:</strong> Data isn&apos;t a byproduct; it is a product with an SLA, documentation, and a clean API.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">3</span>
                  <span><strong className="text-zinc-50">Self-Serve Infrastructure:</strong> The platform team provides the tools (storage, compute), but the domains build the products.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">4</span>
                  <span><strong className="text-zinc-50">Federated Governance:</strong> Global standards (security, PII) are enforced automatically, but local logic is free.</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              3. Why AI Agents <em>Need</em> a Mesh
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              This is the critical link most leaders miss. An AI Agent (like a <InlineCode>SupplyChainBot</InlineCode>) is essentially a reasoning engine looking for tools.
            </p>

            <div className="mb-6 space-y-4">
              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-red-400">
                  In a Monolith
                </h4>
                <p className="text-zinc-300">
                  The Agent has to guess which of the 5,000 tables in the warehouse contains the &quot;real&quot; inventory count. <strong className="text-red-300">It will hallucinate.</strong>
                </p>
              </div>

              <div className="rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-fuchsia-400">
                  In a Mesh
                </h4>
                <p className="mb-3 text-zinc-300">
                  The Agent calls the <InlineCode>Inventory Domain API</InlineCode>. It gets a clean, governed answer:
                </p>
                <code className="block rounded bg-zinc-900 p-3 font-mono text-sm text-fuchsia-300">
                  {`{"sku": "A123", "count": 50}`}
                </code>
              </div>
            </div>

            <p className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 leading-relaxed text-zinc-300">
              <strong className="text-fuchsia-400">The Key Insight:</strong> The Mesh provides the semantic layer that prevents Agents from going rogue.
            </p>
          </section>

          {/* Conclusion */}
          <section className="rounded-lg border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-transparent p-6">
            <h2 className="mb-4 font-mono text-xl font-bold text-zinc-50">
              Don&apos;t Buy AI, Build Architecture
            </h2>
            <p className="text-lg leading-relaxed text-zinc-200">
              You cannot buy a &quot;Data Mesh&quot; off the shelf. You cannot just install <InlineCode>dbt</InlineCode> and call it a day.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              It requires a cultural shift: treating data with the same engineering rigor as application code.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              If you want to build Agents that actually work, <strong className="text-fuchsia-300">stop polishing the prompt and start fixing the pipes</strong>.
            </p>
          </section>

          {/* References */}
          <section className="mt-12 border-t border-zinc-800 pt-8">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Research & Sources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.oreilly.com/library/view/data-mesh/9781492092384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors duration-200 hover:text-fuchsia-400"
                >
                  Data Mesh: Delivering Data-Driven Value at Scale
                </a>
                <span className="ml-2 text-xs text-zinc-600">Zhamak Dehghani, O&apos;Reilly</span>
              </li>
              <li>
                <a
                  href="https://www.thoughtworks.com/insights/articles/data-mesh-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors duration-200 hover:text-fuchsia-400"
                >
                  How Data Mesh Enables AI at Scale
                </a>
                <span className="ml-2 text-xs text-zinc-600">ThoughtWorks</span>
              </li>
            </ul>
          </section>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 border-t border-zinc-800 pt-8"
        >
          <Link
            href="/#writing"
            className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-fuchsia-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </motion.footer>
      </article>
    </main>
  )
}
