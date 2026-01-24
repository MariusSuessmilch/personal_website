"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-orange-300">
      {children}
    </code>
  )
}

function CodeBlock({ children, language }: { children: string; language: string }) {
  return (
    <div className="relative my-6 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-2">
        <span className="font-mono text-xs text-zinc-500">{language}</span>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm leading-relaxed text-zinc-300">{children}</code>
      </pre>
    </div>
  )
}

export default function PromptEngineeringPage() {
  return (
    <main className="relative min-h-screen bg-zinc-950">
      <GrainOverlay />

      {/* Background gradient orb */}
      <div className="pointer-events-none fixed inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-32 h-[600px] w-[800px] rounded-full bg-gradient-to-br from-orange-600/10 via-red-600/10 to-rose-600/10 blur-3xl" />
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
            className="mb-12 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-orange-400"
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
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 bg-clip-text text-transparent">
              Prompt Engineering That Actually Works
            </span>
          </h1>
          <p className="mb-6 text-xl leading-relaxed text-zinc-400">
            Stop telling the model to &quot;Act as Steve Jobs.&quot; It doesn&apos;t care. Here is the engineering reality of reliable prompting.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Dec 5, 2025
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              8 min read
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              AI Engineering
            </span>
          </div>
        </motion.header>

        {/* Executive Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 rounded-r-lg border-l-4 border-orange-500 bg-zinc-900/50 p-6 backdrop-blur-md"
        >
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-orange-400">
            The &quot;Vibe&quot; Era is Over
          </h2>
          <p className="italic leading-relaxed text-zinc-300">
            For the last two years, &quot;Prompt Engineering&quot; has been treated like casting a spell. We were told that if we just found the right combination of words&quot;Act as a World Class Expert,&quot; &quot;Take a deep breath,&quot; &quot;I will tip you $200&quot; the model would magically become smarter.
          </p>
          <p className="mt-4 italic leading-relaxed text-zinc-300">
            It turns out, most of that was noise.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            Recent research (late 2024) on model behavior has shown that <strong className="text-zinc-50">&quot;Persona Prompting&quot;</strong> often degrades performance on reasoning tasks. When you ask a model to &quot;Act as a CEO,&quot; it prioritizes <em>sounding</em> confident over being <em>factually</em> correct. It mimics the style, not the competence.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            Reliable production systems rely on <strong className="text-zinc-50">structure, not role-play</strong>. Here are the three patterns that actually move the needle.
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
              1. The Death of the Persona
            </h2>

            <div className="mb-6 space-y-4">
              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-red-400">
                  The Myth
                </h4>
                <p className="text-zinc-300">
                  &quot;Act as a Senior Python Developer with 20 years of experience.&quot;
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-amber-400">
                  The Reality
                </h4>
                <p className="text-zinc-300">
                  The model already has access to its entire training set. Constraining it to a specific persona often narrows its retrieval space unnecessarily or induces bias.
                </p>
              </div>

              <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-orange-400">
                  The Fix: Context Framing
                </h4>
                <p className="mb-4 text-zinc-300">
                  Don&apos;t tell it <em>who</em> to be; tell it <em>what</em> to know.
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex gap-2">
                    <span className="text-red-400">Bad:</span>
                    <span>&quot;You are an expert lawyer. Write a contract.&quot;</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">Good:</span>
                    <span>&quot;Use the following standard Terms of Service [Insert Text] as the ground truth context. Draft a termination clause that strictly adheres to Section 4.2.&quot;</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              2. XML Tags are the New Paragraphs
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              LLMs are not humans; they are token processing engines. They struggle to parse dense walls of text. The most robust way to structure a prompt is using <InlineCode>XML tags</InlineCode> to delineate distinct sections. This technique (popularized by Anthropic) reduces <strong className="text-zinc-50">&quot;instruction leaking,&quot;</strong> where the model confuses the instructions with the data.
            </p>

            <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-orange-400">
                The Pattern
              </h4>
            </div>

            <CodeBlock language="xml">{`<context>
    You are analyzing customer support tickets for sentiment.
</context>

<rules>
    1. Output strictly in JSON.
    2. Rank sentiment from 1 (Angry) to 5 (Happy).
    3. If the language is ambiguous, default to 3.
</rules>

<examples>
    <input>I hate this product!</input>
    <output>{"score": 1, "category": "product_quality"}</output>
</examples>

<task>
    Analyze the following ticket: {{ticket_body}}
</task>`}</CodeBlock>

            <p className="mt-4 leading-relaxed text-zinc-300">
              The explicit structure eliminates ambiguity. The model knows exactly where the rules end and where the task begins. This is the difference between a flaky demo and a production-grade prompt.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              3. Chain-of-Thought is Not a Magic Word
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              Simply adding &quot;Let&apos;s think step by step&quot; to the end of a prompt is not chain-of-thought reasoning. Real <InlineCode>CoT</InlineCode> requires <strong className="text-zinc-50">structured scaffolding</strong>.
            </p>

            <div className="mb-6 rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-orange-400">
                The Engineering Pattern
              </h4>
              <ol className="space-y-2 text-zinc-300">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 font-mono text-xs text-orange-400">1</span>
                  <span><strong className="text-zinc-50">Decomposition:</strong> Force the model to break down the problem before answering.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 font-mono text-xs text-orange-400">2</span>
                  <span><strong className="text-zinc-50">Self-Verification:</strong> Ask the model to check its own work against the original constraints.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 font-mono text-xs text-orange-400">3</span>
                  <span><strong className="text-zinc-50">Explicit Output Format:</strong> Never let the model decide how to format the answer. Define it.</span>
                </li>
              </ol>
            </div>

            <CodeBlock language="xml">{`<task>
    Calculate the total cost of the following order.
</task>

<thinking_process>
    Before answering, you MUST:
    1. List each item and its unit price.
    2. Calculate the subtotal for each line item.
    3. Sum all subtotals.
    4. Apply the 8% tax rate.
    5. State the final total.
</thinking_process>

<output_format>
    Return your answer ONLY as a JSON object:
    {"subtotal": number, "tax": number, "total": number}
</output_format>`}</CodeBlock>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              4. The Temperature Dial is Overrated
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              Developers obsess over <InlineCode>temperature</InlineCode> settings, but in most production scenarios, it matters far less than prompt structure.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg border border-zinc-800">
                <thead>
                  <tr className="bg-zinc-900">
                    <th className="border-b border-zinc-800 px-4 py-3 text-left font-mono text-sm font-semibold text-zinc-50">
                      Use Case
                    </th>
                    <th className="border-b border-zinc-800 px-4 py-3 text-left font-mono text-sm font-semibold text-orange-400">
                      Temperature
                    </th>
                    <th className="border-b border-zinc-800 px-4 py-3 text-left font-mono text-sm font-semibold text-zinc-400">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">Code Generation</td>
                    <td className="border-b border-zinc-800 px-4 py-3 font-mono text-orange-300">0.0 - 0.2</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">Determinism is critical</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">Data Extraction</td>
                    <td className="border-b border-zinc-800 px-4 py-3 font-mono text-orange-300">0.0</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">No creativity needed</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">Marketing Copy</td>
                    <td className="border-b border-zinc-800 px-4 py-3 font-mono text-orange-300">0.7 - 0.9</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">Variety is the point</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">Brainstorming</td>
                    <td className="border-b border-zinc-800 px-4 py-3 font-mono text-orange-300">1.0+</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">Maximize divergence</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-relaxed text-zinc-300">
              The key insight: <strong className="text-zinc-50">a well-structured prompt at temperature 0.7 will outperform a vague prompt at temperature 0.0</strong>. Structure beats tuning.
            </p>
          </section>

          {/* Conclusion */}
          <section className="rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
            <h2 className="mb-4 font-mono text-xl font-bold text-zinc-50">
              The Bottom Line
            </h2>
            <p className="text-lg leading-relaxed text-zinc-200">
              The era of &quot;prompt whispering&quot; is ending. What remains is engineering: structured inputs, explicit constraints, and testable outputs. Treat your prompts like code. Version them. Test them. Review them.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              The models will keep getting smarter. But <strong className="text-orange-300">the gap between amateur prompts and production prompts will only widen</strong>.
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
                  href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors duration-200 hover:text-orange-400"
                >
                  Use XML Tags to Structure Prompts
                </a>
                <span className="ml-2 text-xs text-zinc-600">Anthropic Documentation</span>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2408.08631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors duration-200 hover:text-orange-400"
                >
                  Persona is a Double-edged Sword: Mitigating the Negative Impact of Role-playing Prompts
                </a>
                <span className="ml-2 text-xs text-zinc-600">arXiv, 2024</span>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2201.11903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors duration-200 hover:text-orange-400"
                >
                  Chain-of-Thought Prompting Elicits Reasoning in Large Language Models
                </a>
                <span className="ml-2 text-xs text-zinc-600">arXiv, 2022</span>
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
            className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-orange-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </motion.footer>
      </article>
    </main>
  )
}
