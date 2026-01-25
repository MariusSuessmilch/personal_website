"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"
import { LanguageProvider, LanguageSwitcher, useLanguage } from "@/lib/i18n"
import { ARTICLES, getLocalizedArticle, formatArticleDate } from "@/lib/articles"

const content = {
  en: {
    backToHome: "Back to home",
    title: "Engineering Log",
    subtitle: "Thoughts on AI, Architecture, and Production Systems.",
    articleCount: "articles",
  },
  de: {
    backToHome: "Zurück zur Startseite",
    title: "Engineering Log",
    subtitle: "Gedanken zu KI, Architektur und Produktionssystemen.",
    articleCount: "Artikel",
  },
}

function WritingArchiveContent() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <main className="relative min-h-screen bg-zinc-950">
      <GrainOverlay />
      <LanguageSwitcher />

      {/* Background gradient orb */}
      <div className="pointer-events-none fixed inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-32 h-[600px] w-[800px] rounded-full bg-gradient-to-br from-fuchsia-600/10 via-purple-600/10 to-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-fuchsia-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToHome}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-zinc-400">
            {t.subtitle}
          </p>
          <p className="mt-2 font-mono text-sm text-zinc-600">
            {ARTICLES.length} {t.articleCount}
          </p>
        </motion.header>

        {/* Articles List */}
        <div className="space-y-6">
          {ARTICLES.map((article, index) => {
            const localized = getLocalizedArticle(article, language)
            const formattedDate = formatArticleDate(article.date, language)

            return (
              <Link key={article.slug} href={article.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="group cursor-pointer rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-fuchsia-500/30 hover:bg-zinc-900/70"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h2 className="mb-2 font-mono text-xl font-semibold text-zinc-50 transition-colors group-hover:text-fuchsia-300">
                        {localized.title}
                      </h2>
                      <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                        {localized.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formattedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {localized.readTime}
                        </span>
                        <div className="flex gap-2">
                          {localized.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-400 transition-all duration-200 group-hover:border-fuchsia-400/50 group-hover:bg-fuchsia-500/10 group-hover:text-fuchsia-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 flex-shrink-0 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-fuchsia-400 sm:block" />
                  </div>
                </motion.article>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default function WritingArchivePage() {
  return (
    <LanguageProvider>
      <WritingArchiveContent />
    </LanguageProvider>
  )
}
