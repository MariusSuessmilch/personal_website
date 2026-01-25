"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"
import { LanguageProvider, useLanguage } from "@/lib/i18n"

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

function ArticleLanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="mb-8 flex items-center gap-1 rounded-lg border border-white/10 bg-zinc-900/50 p-1 backdrop-blur-md w-fit">
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-md px-4 py-2 font-mono text-sm transition-all ${
          language === "en"
            ? "bg-orange-500/20 text-orange-300"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("de")}
        className={`rounded-md px-4 py-2 font-mono text-sm transition-all ${
          language === "de"
            ? "bg-orange-500/20 text-orange-300"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        Deutsch
      </button>
    </div>
  )
}

const content = {
  en: {
    backToHome: "Back to articles",
    backToArticles: "Back to all articles",
    title: "Prompt Engineering That Actually Works",
    titleAccent: "(2025 Edition)",
    subtitle: "Stop casting spells. Start writing code. The engineering reality of reliable prompting.",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    tag: "AI Engineering",

    // Intro Section
    introTitle: "The \"Vibe\" Era is Over",
    introP1: "For the last two years, \"Prompt Engineering\" was treated like dark magic. We were told that if we just found the perfect incantation—\"Act as a World Class CEO,\" \"Take a deep breath,\" \"I will tip you $200\"—the model would magically become smarter.",
    introP2: "Let's be honest: that wasn't engineering. It was guessing.",
    introP3: "As we move into 2025, the \"Vibe Era\" is dead. We are entering the",
    introP3Bold: "Engineering Era",
    introP4: "The best prompts today don't look like conversations; they look like configuration files. They rely on",
    introP4Bold: "structure, determinism, and data",
    introP5: "Here is what actually moves the needle in production systems, based on the latest research from OpenAI and Google.",

    // Section 1
    section1Title: "1. The \"Persona\" Trap (and what to do instead)",
    mythLabel: "The Myth:",
    mythContent: "\"Act as a Senior Python Developer with 20 years of experience.\"",
    realityLabel: "The Reality:",
    realityContent1: "While assigning a role ",
    realityContentEm: "can",
    realityContent2: " help set the tone, it is often a crutch. Research shows that lazy personas (\"You are smart\") can actually degrade reasoning by forcing the model into a narrow distribution of \"sounding confident\" rather than \"being correct.\"",
    fixLabel: "The Fix: Context Framing",
    fixContent1: "Don't just tell the model ",
    fixContentEm1: "who",
    fixContent2: " to be; tell it ",
    fixContentEm2: "what",
    fixContent3: " it knows.",
    bad: "Bad:",
    badExample: "\"You are an expert lawyer. Write a contract.\"",
    good: "Good:",
    goodExample: "\"Use the following standard Terms of Service [Insert Text] as the ground truth context. Draft a termination clause that strictly adheres to Section 4.2.\"",

    // Section 2
    section2Title: "2. XML Tags: The Syntax of Clarity",
    section2P1: "LLMs are not humans; they are token processing engines. They struggle to parse dense walls of text. The most robust way to structure a prompt is using",
    section2P1Bold: "XML Delimiters",
    section2P1End: ". This technique (strongly recommended by Anthropic and Google) reduces \"instruction leaking,\" where the model confuses your instructions with your data.",
    patternLabel: "The Pattern:",

    // Section 3
    section3Title: "3. Few-Shot Prompting (The Silver Bullet)",
    section3P1: "If you take one thing away from this post:",
    section3P1Bold: "Examples beat Instructions",
    section3P1End: ". Telling a model \"Be concise\" is vague. \"Concise\" means different things to everyone. Showing the model three examples of input/output pairs establishes the pattern mathematically. This is called",
    section3P1Bold2: "Few-Shot Prompting",
    zeroShot: "Zero-Shot:",
    zeroShotExample: "\"Extract the brands from this text.\" (High failure rate)",
    fewShot: "Few-Shot:",
    fewShotExample1: "Input: \"I bought a Nike shirt.\" → Output: [\"Nike\"]",
    fewShotExample2: "Input: \"The Apple iPhone is great.\" → Output: [\"Apple\", \"iPhone\"]",
    fewShotExample3: "Input: \"I use Notion for notes.\" → Output: [\"Notion\"]",

    // Section 4
    section4Title: "4. Chain of Thought (The \"Reasoning\" Layer)",
    section4P1: "Models are great at guessing, but bad at math. If you ask for a final answer immediately, the model will hallucinate. You need to force it to show its work.",
    level1: "Level 1:",
    level1Desc: "\"Let's think step by step.\" (The classic hack).",
    level2: "Level 2:",
    level2Desc: "Explicitly structuring the output to separate \"Thinking\" from \"Answering.\"",

    // Conclusion
    conclusionTitle: "Conclusion: Treat Prompts Like Code",
    conclusionP1: "If your prompt relies on begging the model (\"Please, it is vital for my career...\"), you have failed. Good prompts are",
    conclusionP1Bold: "deterministic, structured, and boring",
    conclusionP2: "They should be version-controlled, A/B tested, and optimized just like any other part of your stack.",

    referencesTitle: "Research & Sources",
  },
  de: {
    backToHome: "Zurück zu Artikeln",
    backToArticles: "Zurück zu allen Artikeln",
    title: "Prompt Engineering, das tatsächlich funktioniert",
    titleAccent: "(Edition 2025)",
    subtitle: "Hören Sie auf zu zaubern. Fangen Sie an zu programmieren. Die technische Realität verlässlicher Prompts.",
    date: "5. Dez 2025",
    readTime: "8 Min. Lesezeit",
    tag: "KI-Engineering",

    // Intro Section
    introTitle: "Die Ära des \"Vibes\" ist vorbei",
    introP1: "In den letzten zwei Jahren wurde \"Prompt Engineering\" wie schwarze Magie behandelt. Man erzählte uns, dass das Modell magisch intelligenter würde, wenn wir nur die richtige Beschwörungsformel fänden – \"Handle als Weltklasse-CEO\", \"Atme tief durch\", \"Ich gebe dir 200 Dollar Trinkgeld\".",
    introP2: "Seien wir ehrlich: Das war kein Engineering. Das war Raten.",
    introP3: "Auf dem Weg ins Jahr 2025 ist die \"Vibe-Ära\" tot. Wir treten in die",
    introP3Bold: "Engineering-Ära",
    introP4: "Die besten Prompts von heute sehen nicht aus wie Gespräche; sie sehen aus wie Konfigurationsdateien. Sie basieren auf",
    introP4Bold: "Struktur, Determinismus und Daten",
    introP5: "Hier ist, was in Produktionssystemen wirklich funktioniert, basierend auf den neuesten Erkenntnissen von OpenAI und Google.",

    // Section 1
    section1Title: "1. Die \"Persona\"-Falle (und die Alternative)",
    mythLabel: "Der Mythos:",
    mythContent: "\"Handle als Senior Python-Entwickler mit 20 Jahren Erfahrung.\"",
    realityLabel: "Die Realität:",
    realityContent1: "Während das Zuweisen einer Rolle helfen ",
    realityContentEm: "kann",
    realityContent2: ", den Tonfall festzulegen, ist es oft eine Krücke. Untersuchungen zeigen, dass faule Personas (\"Du bist schlau\") das logische Denken sogar verschlechtern können, indem sie das Modell in eine enge Verteilung von \"selbstbewusst klingen\" zwingen, anstatt \"korrekt sein\".",
    fixLabel: "Die Lösung: Context Framing",
    fixContent1: "Sagen Sie dem Modell nicht nur, ",
    fixContentEm1: "wer",
    fixContent2: " es sein soll; sagen Sie ihm, ",
    fixContentEm2: "was",
    fixContent3: " es weiß.",
    bad: "Schlecht:",
    badExample: "\"Du bist ein erfahrener Anwalt. Schreibe einen Vertrag.\"",
    good: "Gut:",
    goodExample: "\"Verwende die folgenden Standard-AGB [Text einfügen] als Ground Truth Kontext. Entwirf eine Kündigungsklausel, die sich strikt an Abschnitt 4.2 hält.\"",

    // Section 2
    section2Title: "2. XML-Tags: Die Syntax der Klarheit",
    section2P1: "LLMs sind keine Menschen; sie sind Token-Verarbeitungsmaschinen. Sie haben Mühe, dichte Textwände zu parsen. Der robusteste Weg, einen Prompt zu strukturieren, ist die Verwendung von",
    section2P1Bold: "XML-Delimitern",
    section2P1End: ". Diese Technik (von Anthropic und Google dringend empfohlen) reduziert \"Instruction Leaking\", bei dem das Modell Ihre Anweisungen mit Ihren Daten verwechselt.",
    patternLabel: "Das Muster:",

    // Section 3
    section3Title: "3. Few-Shot Prompting (Die Wunderwaffe)",
    section3P1: "Wenn Sie eine Sache aus diesem Beitrag mitnehmen:",
    section3P1Bold: "Beispiele schlagen Instruktionen",
    section3P1End: ". Dem Modell zu sagen \"Sei prägnant\" ist vage. \"Prägnant\" bedeutet für jeden etwas anderes. Dem Modell drei Beispiele von Input/Output-Paaren zu zeigen, etabliert das Muster mathematisch. Dies nennt man",
    section3P1Bold2: "Few-Shot Prompting",
    zeroShot: "Zero-Shot:",
    zeroShotExample: "\"Extrahiere die Marken aus diesem Text.\" (Hohe Fehlerrate)",
    fewShot: "Few-Shot:",
    fewShotExample1: "Input: \"Ich kaufte ein Nike-Shirt.\" → Output: [\"Nike\"]",
    fewShotExample2: "Input: \"Das Apple iPhone ist toll.\" → Output: [\"Apple\", \"iPhone\"]",
    fewShotExample3: "Input: \"Ich nutze Notion für Notizen.\" → Output: [\"Notion\"]",

    // Section 4
    section4Title: "4. Chain of Thought (Die \"Denk\"-Ebene)",
    section4P1: "Modelle sind gut im Raten, aber schlecht in Mathe. Wenn Sie sofort nach einer endgültigen Antwort fragen, wird das Modell halluzinieren. Sie müssen es zwingen, seinen Rechenweg zu zeigen.",
    level1: "Level 1:",
    level1Desc: "\"Lass uns Schritt für Schritt denken.\" (Der klassische Hack).",
    level2: "Level 2:",
    level2Desc: "Die Ausgabe explizit strukturieren, um \"Denken\" von \"Antworten\" zu trennen.",

    // Conclusion
    conclusionTitle: "Fazit: Behandeln Sie Prompts wie Code",
    conclusionP1: "Wenn Ihr Prompt darauf angewiesen ist, das Modell anzuflehen (\"Bitte, es ist wichtig für meine Karriere...\"), haben Sie versagt. Gute Prompts sind",
    conclusionP1Bold: "deterministisch, strukturiert und langweilig",
    conclusionP2: "Sie sollten versionskontrolliert, A/B-getestet und optimiert werden, genau wie jeder andere Teil Ihres Tech-Stacks.",

    referencesTitle: "Quellen & Referenzen",
  },
}

function PromptEngineeringContent() {
  const { language } = useLanguage()
  const t = content[language]

  const xmlExample1 = language === "de"
    ? `<context>
    Du analysierst Kundensupport-Tickets auf Sentiment.
</context>

<rules>
    1. Ausgabe strikt in JSON.
    2. Bewerte das Sentiment von 1 (Wütend) bis 5 (Glücklich).
    3. Wenn die Sprache mehrdeutig ist, setze den Standard auf 3.
</rules>

<task>
    Analysiere das folgende Ticket: {{ticket_body}}
</task>`
    : `<context>
    You are analyzing customer support tickets for sentiment.
</context>

<rules>
    1. Output strictly in JSON.
    2. Rank sentiment from 1 (Angry) to 5 (Happy).
    3. If the language is ambiguous, default to 3.
</rules>

<task>
    Analyze the following ticket: {{ticket_body}}
</task>`

  const xmlExample2 = `<thinking>
    ${language === "de" ? "Identifiziere die Kernabsicht des Nutzers." : "Identify the core user intent."}
    ${language === "de" ? "Liste mögliche Randfälle auf." : "List potential edge cases."}
    ${language === "de" ? "Formuliere die finale Antwort." : "Formulate the final answer."}
</thinking>

<answer>
    ${language === "de" ? "Hier ist das Ergebnis..." : "Here is the result..."}
</answer>`

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
            href="/writing"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-orange-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToHome}
          </Link>
        </motion.div>

        {/* Language Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <ArticleLanguageToggle />
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
              {t.title}
            </span>
            <br />
            <span className="text-zinc-400">{t.titleAccent}</span>
          </h1>
          <p className="mb-6 text-xl leading-relaxed text-zinc-400">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {t.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {t.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {t.tag}
            </span>
          </div>
        </motion.header>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 rounded-r-lg border-l-4 border-orange-500 bg-zinc-900/50 p-6 backdrop-blur-md"
        >
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-orange-400">
            {t.introTitle}
          </h2>
          <p className="italic leading-relaxed text-zinc-300">
            {t.introP1}
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {t.introP2}
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {t.introP3} <strong className="text-zinc-50">{t.introP3Bold}</strong>.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {t.introP4} <strong className="text-zinc-50">{t.introP4Bold}</strong>.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {t.introP5}
          </p>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose-article"
        >
          {/* Section 1: The Persona Trap */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section1Title}
            </h2>

            <div className="mb-6 space-y-4">
              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <p className="text-zinc-300">
                  <strong className="text-red-400">{t.mythLabel}</strong> {t.mythContent}
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <p className="text-zinc-300">
                  <strong className="text-amber-400">{t.realityLabel}</strong> {t.realityContent1}<em className="text-amber-300">{t.realityContentEm}</em>{t.realityContent2}
                </p>
              </div>

              <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
                <h4 className="mb-3 font-mono text-sm font-semibold text-orange-400">
                  {t.fixLabel}
                </h4>
                <p className="mb-4 text-zinc-300">
                  {t.fixContent1}<em className="text-orange-300">{t.fixContentEm1}</em>{t.fixContent2}<em className="text-orange-300">{t.fixContentEm2}</em>{t.fixContent3}
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex gap-2">
                    <span className="text-red-400">{t.bad}</span>
                    <span>{t.badExample}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">{t.good}</span>
                    <span>{t.goodExample}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: XML Tags */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section2Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section2P1} <strong className="text-zinc-50">{t.section2P1Bold}</strong>{t.section2P1End}
            </p>

            <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-orange-400">
                {t.patternLabel}
              </h4>
              <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-2">
                  <span className="font-mono text-xs text-zinc-500">xml</span>
                </div>
                <pre className="overflow-x-auto p-4">
                  <code className="font-mono text-sm leading-relaxed text-zinc-300">{xmlExample1}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Section 3: Few-Shot Prompting */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section3Title}
            </h2>

            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section3P1} <strong className="text-orange-300">{t.section3P1Bold}</strong>{t.section3P1End} <InlineCode>{t.section3P1Bold2}</InlineCode>.
            </p>

            <div className="mb-4 space-y-4">
              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <p className="text-zinc-300">
                  <strong className="text-red-400">{t.zeroShot}</strong> {t.zeroShotExample}
                </p>
              </div>

              <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
                <p className="mb-3 font-mono text-sm font-semibold text-orange-400">{t.fewShot}</p>
                <ul className="space-y-2 font-mono text-sm text-zinc-300">
                  <li>{t.fewShotExample1}</li>
                  <li>{t.fewShotExample2}</li>
                  <li>{t.fewShotExample3}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Chain of Thought */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section4Title}
            </h2>

            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section4P1}
            </p>

            <div className="mb-6 rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 font-mono text-xs text-orange-400">1</span>
                  <span><strong className="text-zinc-50">{t.level1}</strong> {t.level1Desc}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 font-mono text-xs text-orange-400">2</span>
                  <span><strong className="text-zinc-50">{t.level2}</strong> {t.level2Desc}</span>
                </li>
              </ul>
            </div>

            <CodeBlock language="xml">{xmlExample2}</CodeBlock>
          </section>

          {/* Conclusion */}
          <section className="rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
            <h2 className="mb-4 font-mono text-xl font-bold text-zinc-50">
              {t.conclusionTitle}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-200">
              {t.conclusionP1} <strong className="text-orange-300">{t.conclusionP1Bold}</strong>.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              {t.conclusionP2}
            </p>
          </section>

          {/* References */}
          <section className="mt-12 border-t border-zinc-800 pt-8">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {t.referencesTitle}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://cookbook.openai.com/articles/techniques_to_improve_reliability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-orange-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-orange-500/20 font-mono text-xs text-orange-400">1</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">Strategies for Better Results</p>
                      <p className="mt-1 text-xs text-zinc-500">OpenAI Cookbook (2025)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/introduction-prompt-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-orange-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-orange-500/20 font-mono text-xs text-orange-400">2</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">Prompt Engineering Best Practices</p>
                      <p className="mt-1 text-xs text-zinc-500">Google Cloud Tech</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2408.08631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-orange-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-orange-500/20 font-mono text-xs text-orange-400">3</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">The Impact of Role Design in In-Context Learning</p>
                      <p className="mt-1 text-xs text-zinc-500">arXiv, 2024</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2201.11903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-orange-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-orange-500/20 font-mono text-xs text-orange-400">4</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">Chain-of-Thought Prompting Elicits Reasoning in Large Language Models</p>
                      <p className="mt-1 text-xs text-zinc-500">NeurIPS, 2022</p>
                    </div>
                  </div>
                </a>
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
            href="/writing"
            className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-orange-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToArticles}
          </Link>
        </motion.footer>
      </article>
    </main>
  )
}

export default function PromptEngineeringPage() {
  return (
    <LanguageProvider>
      <PromptEngineeringContent />
    </LanguageProvider>
  )
}
