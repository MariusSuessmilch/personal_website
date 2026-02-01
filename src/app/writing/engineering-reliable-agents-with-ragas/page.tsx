"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"
import { LanguageProvider, useLanguage } from "@/lib/i18n"
import { Callout } from "@/components/ui/callout"

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-cyan-300">
      {children}
    </code>
  )
}

const sourceUrls: Record<string, string> = {
  "1": "https://arxiv.org/abs/2309.15217",
  "2": "https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/",
}

function CitationLink({ num }: { num: string }) {
  return (
    <a
      href={sourceUrls[num]}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-0.5 inline-flex h-4 w-4 items-center justify-center rounded bg-cyan-500/20 font-mono text-[10px] text-cyan-400 transition-colors hover:bg-cyan-500/40 hover:text-cyan-300 align-super"
      title={`Source ${num}`}
    >
      {num}
    </a>
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
            ? "bg-cyan-500/20 text-cyan-300"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("de")}
        className={`rounded-md px-4 py-2 font-mono text-sm transition-all ${
          language === "de"
            ? "bg-cyan-500/20 text-cyan-300"
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
    title: "Beyond the \"Vibe Check\":",
    titleGradient: "Engineering Reliable Agents with Ragas",
    subtitle: "Most RAG systems ship after passing three manual tests. Production requires systematic evaluation metrics that identify exactly where pipelines fail.",
    date: "Jan 24, 2026",
    readTime: "10 min read",
    tag: "AI Testing",

    // Section 1: The "Works on My Machine" Trap
    section1Title: "The \"Works on My Machine\" Trap",
    section1P1: "Most RAG (Retrieval-Augmented Generation) systems follow the same validation pattern: build a pipeline in LangChain, ask three questions—\"What is our refund policy?\", \"Who is the CEO?\", \"Summarize Q3 revenue\"—and if the answers look reasonable, ship it.",
    section1P2: "This approach has a name:",
    section1P2Bold: "the \"Vibe Check.\"",
    section1P3: "The problem is that vibes do not scale. Moving from prototype to production means handling thousands of edge cases where \"looking reasonable\" provides no diagnostic value. The questions that matter are specific:",
    section1P3Em: "Did the model hallucinate that number? Did the retriever miss the crucial document? Did the agent misunderstand the user's intent?",
    section1P4: "This is where",
    section1P4Bold: "Ragas",
    section1P4End: "provides value. It enables the shift from guessing to",
    section1P4End2: "engineering",

    // Section 2: The RAG Triad
    section2Title: "Under the Hood: The RAG Triad",
    section2P1: "Despite the complexity of modern agent frameworks, RAG systems have two primary failure points:",
    section2P1Bold1: "Retrieval",
    section2P1Mid: "(finding the right data) and",
    section2P1Bold2: "Generation",
    section2P1End: "(synthesizing an accurate answer).",
    section2P2: "Ragas moves beyond binary pass/fail scoring. It decomposes evaluation into what the authors call the",
    section2P2Bold: "RAG Triad",
    section2P2End: "—three metrics that pinpoint exactly where a pipeline breaks.",

    // Faithfulness Callout
    faithfulnessTitle: "1. Faithfulness (The \"Hallucination\" Check)",
    faithfulnessQuestion: "The Question:",
    faithfulnessQuestionText: "\"Is the answer actually derived from the retrieved documents?\"",
    faithfulnessExample: "Imagine your agent answers, \"The project deadline is Friday.\"",
    faithfulnessGood: "If the retrieved email says \"Deadline is Friday,\" Faithfulness is",
    faithfulnessGoodScore: "1.0",
    faithfulnessBad: "If the retrieved email says \"Deadline TBD,\" but the model guessed \"Friday,\" Faithfulness is",
    faithfulnessBadScore: "0.0",
    faithfulnessIntuition: "The Intuition:",
    faithfulnessIntuitionText: "This metric measures",
    faithfulnessIntuitionBold: "groundedness",
    faithfulnessIntuitionEnd: ". It catches when your LLM stops reading the context and starts improvising.",

    // Answer Relevance Callout
    relevanceTitle: "2. Answer Relevance (The \"Focus\" Check)",
    relevanceQuestion: "The Question:",
    relevanceQuestionText: "\"Did the agent actually answer the user's question?\"",
    relevanceUser: "User:",
    relevanceUserText: "\"How do I reset my password?\"",
    relevanceAgent: "Agent:",
    relevanceAgentText: "\"Passwords are a secure way to protect your account. Security is our priority.\"",
    relevanceExplanation: "The answer is",
    relevanceExplanationEm: "true",
    relevanceExplanationMid: ", but it's",
    relevanceExplanationBold: "irrelevant",
    relevanceExplanationEnd: ". The agent ignored the user's intent. Ragas scores this by generating potential questions from the answer and comparing them to the original query.",

    // Context Precision Callout
    precisionTitle: "3. Context Precision (The \"Signal-to-Noise\" Check)",
    precisionQuestion: "The Question:",
    precisionQuestionText: "\"Did the retriever find the right data, or did it just get lucky?\"",
    precisionExample: "Say you retrieved 10 chunks of text. The answer was in chunk #9.",
    precisionExplanation: "While the agent might still answer correctly, this is a fragile system. Your retrieval pipeline is drowning the model in noise.",
    precisionBold: "Context Precision",
    precisionEnd: "penalizes your system if the relevant information is buried at the bottom of the list.",

    // Section 3: Why This Matters for Agents
    section3Title: "Why This Matters for Agents",
    section3P1: "If you are building autonomous agents using LangChain or LangGraph, Ragas is even more critical.",
    section3P2: "An agent is essentially a",
    section3P2Bold: "reasoning loop",
    section3P2End: ". It uses tools (like a RAG retriever) to make decisions. If your RAG tool returns low-precision context, the agent's reasoning capabilities degrade. It's like trying to drive a car with a muddy windshield—you might stay on the road for a while, but eventually, you're going to crash.",
    section3P3: "By instrumenting your LangChain callbacks with Ragas metrics, you can create a continuous evaluation pipeline. You stop optimizing for \"vibes\" and start optimizing for:",
    section3Point1: "Retrieval Parameters:",
    section3Point1Desc: "Should",
    section3Point1Code: "k",
    section3Point1End: "be 5 or 10? Check the",
    section3Point1Metric: "Recall",
    section3Point1Final: "score.",
    section3Point2: "Chunking Strategy:",
    section3Point2Desc: "Are chunks too small? Check",
    section3Point2Metric: "Context Relevancy",
    section3Point3: "Model Choice:",
    section3Point3Desc: "Is GPT-3.5 hallucinating? Check",
    section3Point3Metric: "Faithfulness",

    // Section 4: The Path to Production
    section4Title: "The Path to Production",
    section4P1: "Building a demo is easy. Building a system that you can trust with customer data is hard.",
    section4P2: "Ragas provides the observability layer that transforms RAG from a black box into a measurable engineering system.",
    section4P3: "So, before you ship that next update, don't just ask the bot if it \"feels\" right.",
    section4P3Bold: "Measure it.",

    // References
    referencesTitle: "Research & Sources",
    ref1Title: "RAGAS: Automated Evaluation of Retrieval Augmented Generation",
    ref1Author: "Es, James, Espinosa-Anke & Schockaert (arXiv, 2023)",
    ref2Title: "Ragas Documentation",
    ref2Author: "docs.ragas.io",
  },
  de: {
    backToHome: "Zurück zu Artikeln",
    backToArticles: "Zurück zu allen Artikeln",
    title: "Jenseits des \"Vibe Check\":",
    titleGradient: "Entwicklung verlässlicher KI-Agenten mit Ragas",
    subtitle: "Die meisten RAG-Systeme gehen nach drei manuellen Tests in Produktion. Produktionsreife erfordert systematische Evaluationsmetriken, die genau identifizieren, wo Pipelines versagen.",
    date: "24. Jan 2026",
    readTime: "10 Min. Lesezeit",
    tag: "KI-Testing",

    // Section 1: The "Works on My Machine" Trap
    section1Title: "Die \"Läuft auf meinem Rechner\"-Falle",
    section1P1: "Die meisten RAG-Systeme (Retrieval-Augmented Generation) folgen dem gleichen Validierungsmuster: Pipeline in LangChain bauen, drei Fragen stellen—\"Wie ist unsere Rückerstattungsrichtlinie?\", \"Wer ist der CEO?\", \"Fasse den Q3-Umsatz zusammen\"—und wenn die Antworten vernünftig aussehen, live gehen.",
    section1P2: "Dieser Ansatz hat einen Namen:",
    section1P2Bold: "der \"Vibe Check\".",
    section1P3: "Das Problem: Vibes skalieren nicht. Der Übergang vom Prototyp zur Produktion bedeutet, Tausende von Edge Cases zu bearbeiten, bei denen \"sieht vernünftig aus\" keinen diagnostischen Wert bietet. Die relevanten Fragen sind spezifisch:",
    section1P3Em: "Hat das Modell diese Zahl halluziniert? Hat der Retriever das entscheidende Dokument übersehen? Hat der Agent die Absicht des Nutzers missverstanden?",
    section1P4: "Hier bietet",
    section1P4Bold: "Ragas",
    section1P4End: "seinen Wert. Es ermöglicht den Wechsel vom Raten zum",
    section1P4End2: "Engineering",

    // Section 2: The RAG Triad
    section2Title: "Ein Blick unter die Haube: Das RAG-Triad",
    section2P1: "Trotz der Komplexität moderner Agent-Frameworks haben RAG-Systeme zwei primäre Fehlerquellen:",
    section2P1Bold1: "Retrieval",
    section2P1Mid: "(die richtigen Daten finden) und",
    section2P1Bold2: "Generation",
    section2P1End: "(eine akkurate Antwort synthetisieren).",
    section2P2: "Ragas geht über binäre Bestanden/Durchgefallen-Bewertungen hinaus. Es zerlegt die Evaluation in das, was die Autoren das",
    section2P2Bold: "RAG-Triad",
    section2P2End: " nennen—drei Metriken, die genau lokalisieren, wo eine Pipeline bricht.",

    // Faithfulness Callout
    faithfulnessTitle: "1. Faithfulness (Der \"Hallucinations\"-Check)",
    faithfulnessQuestion: "Die Frage:",
    faithfulnessQuestionText: "\"Stammt die Antwort tatsächlich aus den abgerufenen Dokumenten?\"",
    faithfulnessExample: "Stellen Sie sich vor, Ihr Agent antwortet: \"Die Projektdeadline ist Freitag.\"",
    faithfulnessGood: "Wenn in der abgerufenen E-Mail steht \"Deadline ist Freitag\", ist die Faithfulness",
    faithfulnessGoodScore: "1.0",
    faithfulnessBad: "Wenn in der E-Mail steht \"Deadline TBD\", aber das Modell \"Freitag\" geraten hat, ist die Faithfulness",
    faithfulnessBadScore: "0.0",
    faithfulnessIntuition: "Die Intuition:",
    faithfulnessIntuitionText: "Diese Metrik misst die",
    faithfulnessIntuitionBold: "Faktentreue",
    faithfulnessIntuitionEnd: ". Sie erkennt, wenn Ihr LLM aufhört, den Kontext zu lesen, und anfängt zu improvisieren.",

    // Answer Relevance Callout
    relevanceTitle: "2. Answer Relevance (Der \"Fokus\"-Check)",
    relevanceQuestion: "Die Frage:",
    relevanceQuestionText: "\"Hat der Agent tatsächlich die Frage des Nutzers beantwortet?\"",
    relevanceUser: "Nutzer:",
    relevanceUserText: "\"Wie setze ich mein Passwort zurück?\"",
    relevanceAgent: "Agent:",
    relevanceAgentText: "\"Passwörter sind ein sicherer Weg, Ihr Konto zu schützen. Sicherheit ist unsere Priorität.\"",
    relevanceExplanation: "Die Antwort ist",
    relevanceExplanationEm: "wahr",
    relevanceExplanationMid: ", aber sie ist",
    relevanceExplanationBold: "irrelevant",
    relevanceExplanationEnd: ". Der Agent hat die Absicht des Nutzers ignoriert. Ragas bewertet dies, indem es potenzielle Fragen aus der Antwort generiert und sie mit der ursprünglichen Anfrage vergleicht.",

    // Context Precision Callout
    precisionTitle: "3. Context Precision (Der \"Signal-Rausch\"-Check)",
    precisionQuestion: "Die Frage:",
    precisionQuestionText: "\"Hat der Retriever die richtigen Daten gefunden oder hatte er nur Glück?\"",
    precisionExample: "Angenommen, Sie haben 10 Textblöcke abgerufen. Die Antwort befand sich in Block #9.",
    precisionExplanation: "Obwohl der Agent vielleicht noch richtig antwortet, ist das System fragil. Ihre Retrieval-Pipeline ertränkt das Modell in Rauschen.",
    precisionBold: "Context Precision",
    precisionEnd: "bestraft Ihr System, wenn die relevanten Informationen ganz unten in der Liste vergraben sind.",

    // Section 3: Why This Matters for Agents
    section3Title: "Warum dies für Agenten wichtig ist",
    section3P1: "Wenn Sie autonome Agenten mit LangChain oder LangGraph bauen, ist Ragas noch kritischer.",
    section3P2: "Ein Agent ist im Grunde eine",
    section3P2Bold: "Reasoning Loop (Schlussfolgerungsschleife)",
    section3P2End: ". Er nutzt Werkzeuge (wie einen RAG-Retriever), um Entscheidungen zu treffen. Wenn Ihr RAG-Tool Kontext mit geringer Präzision liefert, verschlechtern sich die Schlussfolgerungsfähigkeiten des Agenten. Es ist, als würde man versuchen, ein Auto mit einer verschlammten Windschutzscheibe zu fahren – man bleibt vielleicht eine Weile auf der Straße, aber irgendwann baut man einen Unfall.",
    section3P3: "Indem Sie Ihre LangChain-Callbacks mit Ragas-Metriken instrumentieren, können Sie eine kontinuierliche Evaluations-Pipeline erstellen. Sie optimieren nicht mehr für \"Vibes\", sondern für:",
    section3Point1: "Retrieval-Parameter:",
    section3Point1Desc: "Sollte",
    section3Point1Code: "k",
    section3Point1End: "5 oder 10 sein? Prüfen Sie den",
    section3Point1Metric: "Recall",
    section3Point1Final: "-Score.",
    section3Point2: "Chunking-Strategie:",
    section3Point2Desc: "Sind die Chunks zu klein? Prüfen Sie die",
    section3Point2Metric: "Context Relevancy",
    section3Point3: "Modellwahl:",
    section3Point3Desc: "Halluziniert GPT-3.5? Prüfen Sie die",
    section3Point3Metric: "Faithfulness",

    // Section 4: The Path to Production
    section4Title: "Der Weg zur Produktion",
    section4P1: "Eine Demo zu bauen ist einfach. Ein System zu bauen, dem Sie Kundendaten anvertrauen können, ist schwer.",
    section4P2: "Ragas bietet die Observability-Schicht, die RAG von einer Black Box in ein messbares Engineering-System verwandelt.",
    section4P3: "Bevor Sie also das nächste Update veröffentlichen, fragen Sie den Bot nicht einfach, ob er sich \"richtig anfühlt\".",
    section4P3Bold: "Messen Sie es.",

    // References
    referencesTitle: "Quellen & Referenzen",
    ref1Title: "RAGAS: Automated Evaluation of Retrieval Augmented Generation",
    ref1Author: "Es, James, Espinosa-Anke & Schockaert (arXiv, 2023)",
    ref2Title: "Ragas Documentation",
    ref2Author: "docs.ragas.io",
  },
}

function RagasContent() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <main className="relative min-h-screen bg-zinc-950">
      <GrainOverlay />

      {/* Background gradient orb */}
      <div className="pointer-events-none fixed inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-32 h-[600px] w-[800px] rounded-full bg-gradient-to-br from-cyan-600/10 via-teal-600/10 to-emerald-600/10 blur-3xl" />
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
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-cyan-400"
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
            <span className="text-zinc-50">{t.title}</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              {t.titleGradient}
            </span>
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

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert prose-zinc"
        >
          {/* Section 1: The "Works on My Machine" Trap */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section1Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section1P1}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section1P2} <strong className="text-cyan-300">{t.section1P2Bold}</strong>
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section1P3} <em className="text-zinc-200">{t.section1P3Em}</em>
            </p>

            <p className="leading-relaxed text-zinc-300">
              {t.section1P4} <strong className="text-cyan-300">{t.section1P4Bold}</strong> {t.section1P4End} <strong className="text-zinc-50">{t.section1P4End2}</strong>.
            </p>
          </section>

          {/* Section 2: The RAG Triad */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section2Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section2P1} <strong className="text-zinc-50">{t.section2P1Bold1}</strong> {t.section2P1Mid} <strong className="text-zinc-50">{t.section2P1Bold2}</strong> {t.section2P1End}
            </p>

            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section2P2} <strong className="text-cyan-300">{t.section2P2Bold}</strong>{t.section2P2End}<CitationLink num="1" />
            </p>

            {/* Faithfulness Callout */}
            <Callout variant="info">
              <h3 className="mb-3 font-mono text-lg font-semibold text-cyan-400">
                {t.faithfulnessTitle}<CitationLink num="1" />
              </h3>
              <p className="mb-3 text-zinc-300">
                <em className="text-zinc-400">{t.faithfulnessQuestion}</em> {t.faithfulnessQuestionText}
              </p>
              <p className="mb-3 text-zinc-300">{t.faithfulnessExample}</p>
              <ul className="mb-4 space-y-2 text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>{t.faithfulnessGood} <strong className="text-emerald-400">{t.faithfulnessGoodScore}</strong>.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>{t.faithfulnessBad} <strong className="text-red-400">{t.faithfulnessBadScore}</strong>.</span>
                </li>
              </ul>
              <p className="text-zinc-300">
                <strong className="text-zinc-50">{t.faithfulnessIntuition}</strong> {t.faithfulnessIntuitionText} <strong className="text-cyan-300">{t.faithfulnessIntuitionBold}</strong>{t.faithfulnessIntuitionEnd}
              </p>
            </Callout>

            {/* Answer Relevance Callout */}
            <Callout variant="info">
              <h3 className="mb-3 font-mono text-lg font-semibold text-cyan-400">
                {t.relevanceTitle}<CitationLink num="1" />
              </h3>
              <p className="mb-3 text-zinc-300">
                <em className="text-zinc-400">{t.relevanceQuestion}</em> {t.relevanceQuestionText}
              </p>
              <div className="mb-4 space-y-2">
                <p className="text-zinc-300">
                  <strong className="text-zinc-50">{t.relevanceUser}</strong> {t.relevanceUserText}
                </p>
                <p className="text-zinc-300">
                  <strong className="text-zinc-50">{t.relevanceAgent}</strong> {t.relevanceAgentText}
                </p>
              </div>
              <p className="text-zinc-300">
                {t.relevanceExplanation} <em>{t.relevanceExplanationEm}</em>{t.relevanceExplanationMid} <strong className="text-amber-400">{t.relevanceExplanationBold}</strong>{t.relevanceExplanationEnd}
              </p>
            </Callout>

            {/* Context Precision Callout */}
            <Callout variant="info">
              <h3 className="mb-3 font-mono text-lg font-semibold text-cyan-400">
                {t.precisionTitle}<CitationLink num="1" />
              </h3>
              <p className="mb-3 text-zinc-300">
                <em className="text-zinc-400">{t.precisionQuestion}</em> {t.precisionQuestionText}
              </p>
              <p className="mb-3 text-zinc-300">{t.precisionExample}</p>
              <p className="text-zinc-300">
                {t.precisionExplanation} <strong className="text-cyan-300">{t.precisionBold}</strong> {t.precisionEnd}
              </p>
            </Callout>
          </section>

          {/* Section 3: Why This Matters for Agents */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section3Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P1}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P2} <strong className="text-zinc-50">{t.section3P2Bold}</strong>{t.section3P2End}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P3}<CitationLink num="2" />
            </p>

            <ul className="mb-6 space-y-3 text-zinc-300">
              <li className="flex gap-2">
                <span className="text-cyan-400">•</span>
                <span>
                  <strong className="text-zinc-50">{t.section3Point1}</strong> {t.section3Point1Desc} <InlineCode>{t.section3Point1Code}</InlineCode> {t.section3Point1End} <strong className="text-cyan-300">{t.section3Point1Metric}</strong> {t.section3Point1Final}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">•</span>
                <span>
                  <strong className="text-zinc-50">{t.section3Point2}</strong> {t.section3Point2Desc} <strong className="text-cyan-300">{t.section3Point2Metric}</strong>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">•</span>
                <span>
                  <strong className="text-zinc-50">{t.section3Point3}</strong> {t.section3Point3Desc} <strong className="text-cyan-300">{t.section3Point3Metric}</strong>.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 4: The Path to Production */}
          <section className="rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent p-6">
            <h2 className="mb-4 font-mono text-xl font-bold text-zinc-50">
              {t.section4Title}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-200">
              {t.section4P1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              {t.section4P2}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              {t.section4P3} <strong className="text-cyan-300">{t.section4P3Bold}</strong>
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
                  href="https://arxiv.org/abs/2309.15217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-cyan-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-cyan-500/20 font-mono text-xs text-cyan-400">1</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">{t.ref1Title}</p>
                      <p className="mt-1 text-xs text-zinc-500">{t.ref1Author}</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-cyan-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-cyan-500/20 font-mono text-xs text-cyan-400">2</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">{t.ref2Title}</p>
                      <p className="mt-1 text-xs text-zinc-500">{t.ref2Author}</p>
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
            className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToArticles}
          </Link>
        </motion.footer>
      </article>
    </main>
  )
}

export default function EngineeringReliableAgentsPage() {
  return (
    <LanguageProvider>
      <RagasContent />
    </LanguageProvider>
  )
}
