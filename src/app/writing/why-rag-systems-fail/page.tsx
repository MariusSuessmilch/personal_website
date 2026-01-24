"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-emerald-300">
      {children}
    </code>
  )
}

export default function WhyRAGSystemsFailPage() {
  return (
    <main className="relative min-h-screen bg-zinc-950">
      <GrainOverlay />

      {/* Background gradient orb */}
      <div className="pointer-events-none fixed inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-32 h-[600px] w-[800px] rounded-full bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10 blur-3xl" />
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
            className="mb-12 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-emerald-400"
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
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Why RAG Systems Fail
            </span>
            <br />
            <span className="text-zinc-300">(And How to Fix Them)</span>
          </h1>
          <p className="mb-6 text-xl leading-relaxed text-zinc-400">
            We built the vector database. We chunked the PDFs. Why is the bot still hallucinating?
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Jun 12, 2025
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              10 min read
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              Engineering
            </span>
          </div>
        </motion.header>

        {/* Executive Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 rounded-r-lg border-l-4 border-emerald-500 bg-zinc-900/50 p-6 backdrop-blur-md"
        >
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Executive Summary
          </h2>
          <p className="italic leading-relaxed text-zinc-300">
            Retrieval-Augmented Generation (RAG) is the default architecture for enterprise AI. But there is a &quot;Valley of Death&quot; between a weekend prototype and a production system. In a demo, you ask &quot;What is Project X?&quot; and it works. In production, a user asks &quot;Compare the error rates of Project X and Y last quarter,&quot; and the system collapses.
          </p>
          <p className="mt-4 italic leading-relaxed text-zinc-300">
            This post explores the <strong className="text-zinc-50">three most common failure modes</strong> in production RAG systems and the architectural patterns to fix them.
          </p>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose-article"
        >
          {/* Failure Mode 1 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              Failure Mode 1: The &quot;Vibe-Based&quot; Retrieval
            </h2>

            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
              <h4 className="mb-2 font-mono text-sm font-semibold text-red-400">
                The Symptom
              </h4>
              <p className="text-zinc-300">
                The user searches for a specific error code <InlineCode>ERR-509</InlineCode>, but the system returns documentation about &quot;General System Errors&quot; because they are <em>semantically</em> similar, even though they are <em>factually</em> useless.
              </p>
            </div>

            <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
              <h4 className="mb-2 font-mono text-sm font-semibold text-amber-400">
                The Cause
              </h4>
              <p className="text-zinc-300">
                Pure vector search (<InlineCode>Dense Retrieval</InlineCode>) operates on semantic meaning, not exact keywords. It is great for concepts (&quot;How do I reset my password?&quot;) but terrible for specifics (SKUs, Acronyms, IDs).
              </p>
            </div>

            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-emerald-400">
                The Fix: Hybrid Search + Re-ranking
              </h4>
              <p className="mb-4 text-zinc-300">
                You cannot rely on vectors alone. Production systems need a <InlineCode>Hybrid Search</InlineCode> pipeline:
              </p>
              <ol className="space-y-2 text-zinc-300">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-xs text-emerald-400">1</span>
                  <span><strong className="text-zinc-50">Keyword Search (BM25):</strong> Catches exact matches (the specific error code).</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-xs text-emerald-400">2</span>
                  <span><strong className="text-zinc-50">Vector Search:</strong> Catches the conceptual intent.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-xs text-emerald-400">3</span>
                  <span><strong className="text-zinc-50">Reciprocal Rank Fusion (RRF):</strong> Merges the two lists.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-xs text-emerald-400">4</span>
                  <span><strong className="text-zinc-50">Re-ranking:</strong> A high-precision Cross-Encoder model (like Cohere or <InlineCode>BGE-Reranker</InlineCode>) scores the top 50 results and passes only the top 5 to the LLM.</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Failure Mode 2 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              Failure Mode 2: Context Poisoning
            </h2>
            <p className="mb-4 text-sm text-zinc-500">&quot;Lost in the Middle&quot;</p>

            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
              <h4 className="mb-2 font-mono text-sm font-semibold text-red-400">
                The Symptom
              </h4>
              <p className="text-zinc-300">
                You pass 10 documents to the LLM. The answer is in Document #7. The LLM ignores it and says &quot;I don&apos;t know,&quot; or worse, makes something up.
              </p>
            </div>

            <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
              <h4 className="mb-2 font-mono text-sm font-semibold text-amber-400">
                The Cause
              </h4>
              <p className="text-zinc-300">
                LLMs struggle to focus on information buried in the middle of a large context window. Furthermore, including irrelevant documents increases the &quot;noise-to-signal&quot; ratio, making hallucinations more likely. <strong className="text-zinc-50">More context is not always better; it is often worse.</strong>
              </p>
            </div>

            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-emerald-400">
                The Fix: Metadata Filtering &amp; Smart Chunking
              </h4>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-zinc-50">Smart Chunking:</strong> Don&apos;t just split by character count. Use <InlineCode>Semantic Chunking</InlineCode> or <InlineCode>Parent-Child Indexing</InlineCode> (retrieve the small chunk for search, but pass the parent paragraph to the LLM).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-zinc-50">Metadata Filtering:</strong> Before you search, filter. If the user asks about &quot;2024 Revenue,&quot; hard-filter your vector search to <InlineCode>year: 2024</InlineCode>. Don&apos;t let the model guess.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Failure Mode 3 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              Failure Mode 3: The Silent Hallucination
            </h2>

            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
              <h4 className="mb-2 font-mono text-sm font-semibold text-red-400">
                The Symptom
              </h4>
              <p className="text-zinc-300">
                The system answers confidently, but the answer is wrong. The worst part? <strong className="text-zinc-50">You don&apos;t know it&apos;s happening.</strong>
              </p>
            </div>

            <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
              <h4 className="mb-2 font-mono text-sm font-semibold text-amber-400">
                The Cause
              </h4>
              <p className="text-zinc-300">
                The system lacks self-awareness. It doesn&apos;t know <em>when</em> it doesn&apos;t know.
              </p>
            </div>

            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-emerald-400">
                The Fix: The RAG Triad Evaluation
              </h4>
              <p className="mb-4 text-zinc-300">
                You need to instrument your pipeline with observability tools (like <InlineCode>Ragas</InlineCode>, <InlineCode>TruLens</InlineCode>, or <InlineCode>LangSmith</InlineCode>) to measure the &quot;RAG Triad&quot; for every interaction:
              </p>
              <ol className="mb-4 space-y-2 text-zinc-300">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-xs text-emerald-400">1</span>
                  <span><strong className="text-zinc-50">Context Relevance:</strong> Did we retrieve the right data?</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-xs text-emerald-400">2</span>
                  <span><strong className="text-zinc-50">Groundedness:</strong> Is the answer supported by the retrieved data?</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-xs text-emerald-400">3</span>
                  <span><strong className="text-zinc-50">Answer Relevance:</strong> Did we actually answer the user&apos;s question?</span>
                </li>
              </ol>
              <p className="text-zinc-300">
                If <strong className="text-zinc-50">Groundedness</strong> is low, your system should automatically fallback to saying &quot;I don&apos;t have enough information&quot; rather than inventing a fact.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              The Path to Production
            </h2>
            <p className="mb-4 leading-relaxed text-zinc-300">
              Building a RAG demo takes an afternoon. Tuning a RAG system for production takes months of iterating on these three layers.
            </p>
            <div className="rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
              <p className="text-lg leading-relaxed text-zinc-200">
                The winning architectures of 2025 won&apos;t just be &quot;GenAI wrappers&quot;; they will be <strong className="text-emerald-300">sophisticated search engineering pipelines</strong> that happen to use an LLM at the very end.
              </p>
            </div>
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
            className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </motion.footer>
      </article>
    </main>
  )
}
