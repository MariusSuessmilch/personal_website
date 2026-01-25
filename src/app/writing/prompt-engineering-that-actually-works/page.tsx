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

const content = {
  en: {
    backToHome: "Back to home",
    backToArticles: "Back to all articles",
    title: "Prompt Engineering That Actually Works",
    subtitle: "Stop telling the model to \"Act as Steve Jobs.\" It doesn't care. Here is the engineering reality of reliable prompting.",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    tag: "AI Engineering",
    summaryTitle: "The \"Vibe\" Era is Over",
    summaryP1: "For the last two years, \"Prompt Engineering\" has been treated like casting a spell. We were told that if we just found the right combination of words \"Act as a World Class Expert,\" \"Take a deep breath,\" \"I will tip you $200\" the model would magically become smarter.",
    summaryP2: "It turns out, most of that was noise.",
    summaryP3: "Recent research (late 2024) on model behavior has shown that",
    summaryP3Bold: "\"Persona Prompting\"",
    summaryP3End: "often degrades performance on reasoning tasks. When you ask a model to \"Act as a CEO,\" it prioritizes",
    summaryP3Em1: "sounding",
    summaryP3Mid: "confident over being",
    summaryP3Em2: "factually",
    summaryP3End2: "correct. It mimics the style, not the competence.",
    summaryP4: "Reliable production systems rely on",
    summaryP4Bold: "structure, not role-play",
    summaryP4End: ". Here are the three patterns that actually move the needle.",
    section1Title: "1. The Death of the Persona",
    mythTitle: "The Myth",
    mythContent: "\"Act as a Senior Python Developer with 20 years of experience.\"",
    realityTitle: "The Reality",
    realityContent: "The model already has access to its entire training set. Constraining it to a specific persona often narrows its retrieval space unnecessarily or induces bias.",
    fixTitle: "The Fix: Context Framing",
    fixContent: "Don't tell it",
    fixContentEm1: "who",
    fixContentMid: "to be; tell it",
    fixContentEm2: "what",
    fixContentEnd: "to know.",
    bad: "Bad:",
    badExample: "\"You are an expert lawyer. Write a contract.\"",
    good: "Good:",
    goodExample: "\"Use the following standard Terms of Service [Insert Text] as the ground truth context. Draft a termination clause that strictly adheres to Section 4.2.\"",
    section2Title: "2. XML Tags are the New Paragraphs",
    section2P1: "LLMs are not humans; they are token processing engines. They struggle to parse dense walls of text. The most robust way to structure a prompt is using",
    section2P1End: "to delineate distinct sections. This technique (popularized by Anthropic) reduces",
    section2P1Bold: "\"instruction leaking,\"",
    section2P1End2: "where the model confuses the instructions with the data.",
    patternTitle: "The Pattern",
    section2P2: "The explicit structure eliminates ambiguity. The model knows exactly where the rules end and where the task begins. This is the difference between a flaky demo and a production-grade prompt.",
    section3Title: "3. Chain-of-Thought is Not a Magic Word",
    section3P1: "Simply adding \"Let's think step by step\" to the end of a prompt is not chain-of-thought reasoning. Real",
    section3P1End: "requires",
    section3P1Bold: "structured scaffolding",
    engineeringPattern: "The Engineering Pattern",
    decomposition: "Decomposition:",
    decompositionDesc: "Force the model to break down the problem before answering.",
    selfVerification: "Self-Verification:",
    selfVerificationDesc: "Ask the model to check its own work against the original constraints.",
    explicitOutput: "Explicit Output Format:",
    explicitOutputDesc: "Never let the model decide how to format the answer. Define it.",
    section4Title: "4. The Temperature Dial is Overrated",
    section4P1: "Developers obsess over",
    section4P1End: "settings, but in most production scenarios, it matters far less than prompt structure.",
    useCase: "Use Case",
    temperature: "Temperature",
    why: "Why",
    codeGeneration: "Code Generation",
    determinismCritical: "Determinism is critical",
    dataExtraction: "Data Extraction",
    noCreativity: "No creativity needed",
    marketingCopy: "Marketing Copy",
    varietyPoint: "Variety is the point",
    brainstorming: "Brainstorming",
    maximizeDivergence: "Maximize divergence",
    section4P2: "The key insight:",
    section4P2Bold: "a well-structured prompt at temperature 0.7 will outperform a vague prompt at temperature 0.0",
    section4P2End: ". Structure beats tuning.",
    conclusionTitle: "The Bottom Line",
    conclusionP1: "The era of \"prompt whispering\" is ending. What remains is engineering: structured inputs, explicit constraints, and testable outputs. Treat your prompts like code. Version them. Test them. Review them.",
    conclusionP2: "The models will keep getting smarter. But",
    conclusionP2Bold: "the gap between amateur prompts and production prompts will only widen",
    referencesTitle: "Research & Sources",
  },
  de: {
    backToHome: "Zurück zur Startseite",
    backToArticles: "Zurück zu allen Artikeln",
    title: "Prompt Engineering, das wirklich funktioniert",
    subtitle: "Hören Sie auf, dem Modell zu sagen, es soll \"wie Steve Jobs handeln.\" Es interessiert sich nicht dafür. Hier ist die technische Realität zuverlässiger Prompts.",
    date: "5. Dez 2025",
    readTime: "8 Min. Lesezeit",
    tag: "KI-Engineering",
    summaryTitle: "Die \"Vibe\"-Ära ist vorbei",
    summaryP1: "In den letzten zwei Jahren wurde \"Prompt Engineering\" behandelt wie das Wirken eines Zaubers. Man sagte uns, wenn wir nur die richtige Wortkombination fänden \"Handle wie ein Weltklasse-Experte\", \"Atme tief durch\", \"Ich gebe dir 200$ Trinkgeld\" würde das Modell auf magische Weise klüger werden.",
    summaryP2: "Es stellt sich heraus, dass das meiste davon Rauschen war.",
    summaryP3: "Aktuelle Forschung (Ende 2024) zum Modellverhalten hat gezeigt, dass",
    summaryP3Bold: "\"Persona Prompting\"",
    summaryP3End: "die Leistung bei Reasoning-Aufgaben oft verschlechtert. Wenn Sie ein Modell bitten, \"wie ein CEO zu handeln\", priorisiert es,",
    summaryP3Em1: "selbstbewusst zu klingen",
    summaryP3Mid: "gegenüber",
    summaryP3Em2: "faktisch korrekt",
    summaryP3End2: "zu sein. Es imitiert den Stil, nicht die Kompetenz.",
    summaryP4: "Zuverlässige Produktionssysteme basieren auf",
    summaryP4Bold: "Struktur, nicht Rollenspiel",
    summaryP4End: ". Hier sind die drei Muster, die wirklich einen Unterschied machen.",
    section1Title: "1. Der Tod der Persona",
    mythTitle: "Der Mythos",
    mythContent: "\"Handle als Senior Python-Entwickler mit 20 Jahren Erfahrung.\"",
    realityTitle: "Die Realität",
    realityContent: "Das Modell hat bereits Zugang zu seinem gesamten Trainingsdatensatz. Es auf eine bestimmte Persona einzuschränken verengt oft unnötigerweise seinen Abrufraum oder induziert Verzerrungen.",
    fixTitle: "Die Lösung: Kontext-Framing",
    fixContent: "Sagen Sie ihm nicht,",
    fixContentEm1: "wer",
    fixContentMid: "es sein soll; sagen Sie ihm,",
    fixContentEm2: "was",
    fixContentEnd: "es wissen soll.",
    bad: "Schlecht:",
    badExample: "\"Du bist ein Experten-Anwalt. Schreibe einen Vertrag.\"",
    good: "Gut:",
    goodExample: "\"Verwende die folgenden Standard-AGB [Text einfügen] als Grundwahrheits-Kontext. Erstelle eine Kündigungsklausel, die strikt Abschnitt 4.2 entspricht.\"",
    section2Title: "2. XML-Tags sind die neuen Absätze",
    section2P1: "LLMs sind keine Menschen; sie sind Token-Verarbeitungs-Engines. Sie haben Schwierigkeiten, dichte Textwände zu parsen. Der robusteste Weg, einen Prompt zu strukturieren, ist die Verwendung von",
    section2P1End: "um verschiedene Abschnitte abzugrenzen. Diese Technik (populär gemacht von Anthropic) reduziert",
    section2P1Bold: "\"Instruction Leaking\"",
    section2P1End2: ", bei dem das Modell die Anweisungen mit den Daten verwechselt.",
    patternTitle: "Das Muster",
    section2P2: "Die explizite Struktur eliminiert Mehrdeutigkeit. Das Modell weiß genau, wo die Regeln enden und wo die Aufgabe beginnt. Das ist der Unterschied zwischen einer unzuverlässigen Demo und einem produktionsreifen Prompt.",
    section3Title: "3. Chain-of-Thought ist kein Zauberwort",
    section3P1: "Einfach \"Lass uns Schritt für Schritt denken\" am Ende eines Prompts hinzuzufügen ist kein Chain-of-Thought-Reasoning. Echtes",
    section3P1End: "erfordert",
    section3P1Bold: "strukturiertes Scaffolding",
    engineeringPattern: "Das Engineering-Muster",
    decomposition: "Zerlegung:",
    decompositionDesc: "Zwingen Sie das Modell, das Problem zu zerlegen, bevor es antwortet.",
    selfVerification: "Selbst-Verifikation:",
    selfVerificationDesc: "Bitten Sie das Modell, seine eigene Arbeit gegen die ursprünglichen Einschränkungen zu prüfen.",
    explicitOutput: "Explizites Ausgabeformat:",
    explicitOutputDesc: "Lassen Sie das Modell niemals entscheiden, wie die Antwort formatiert werden soll. Definieren Sie es.",
    section4Title: "4. Der Temperature-Regler ist überbewertet",
    section4P1: "Entwickler sind besessen von",
    section4P1End: "-Einstellungen, aber in den meisten Produktionsszenarien ist es weit weniger wichtig als die Prompt-Struktur.",
    useCase: "Anwendungsfall",
    temperature: "Temperature",
    why: "Warum",
    codeGeneration: "Code-Generierung",
    determinismCritical: "Determinismus ist kritisch",
    dataExtraction: "Datenextraktion",
    noCreativity: "Keine Kreativität nötig",
    marketingCopy: "Marketing-Texte",
    varietyPoint: "Vielfalt ist der Punkt",
    brainstorming: "Brainstorming",
    maximizeDivergence: "Divergenz maximieren",
    section4P2: "Die Kernerkenntnis:",
    section4P2Bold: "ein gut strukturierter Prompt bei Temperature 0.7 wird einen vagen Prompt bei Temperature 0.0 übertreffen",
    section4P2End: ". Struktur schlägt Feintuning.",
    conclusionTitle: "Das Fazit",
    conclusionP1: "Die Ära des \"Prompt-Flüsterns\" geht zu Ende. Was bleibt, ist Engineering: strukturierte Eingaben, explizite Einschränkungen und testbare Ausgaben. Behandeln Sie Ihre Prompts wie Code. Versionieren Sie sie. Testen Sie sie. Reviewen Sie sie.",
    conclusionP2: "Die Modelle werden immer klüger werden. Aber",
    conclusionP2Bold: "die Kluft zwischen Amateur-Prompts und Produktions-Prompts wird sich nur vergrößern",
    referencesTitle: "Quellen & Referenzen",
  },
}

function PromptEngineeringContent() {
  const { language } = useLanguage()
  const t = content[language]

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
            {t.backToHome}
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
              {t.title}
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

        {/* Executive Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 rounded-r-lg border-l-4 border-orange-500 bg-zinc-900/50 p-6 backdrop-blur-md"
        >
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-orange-400">
            {t.summaryTitle}
          </h2>
          <p className="italic leading-relaxed text-zinc-300">
            {t.summaryP1}
          </p>
          <p className="mt-4 italic leading-relaxed text-zinc-300">
            {t.summaryP2}
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {t.summaryP3} <strong className="text-zinc-50">{t.summaryP3Bold}</strong> {t.summaryP3End} <em>{t.summaryP3Em1}</em> {t.summaryP3Mid} <em>{t.summaryP3Em2}</em> {t.summaryP3End2}
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {t.summaryP4} <strong className="text-zinc-50">{t.summaryP4Bold}</strong>{t.summaryP4End}
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
              {t.section1Title}
            </h2>

            <div className="mb-6 space-y-4">
              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-red-400">
                  {t.mythTitle}
                </h4>
                <p className="text-zinc-300">
                  {t.mythContent}
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-amber-400">
                  {t.realityTitle}
                </h4>
                <p className="text-zinc-300">
                  {t.realityContent}
                </p>
              </div>

              <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-orange-400">
                  {t.fixTitle}
                </h4>
                <p className="mb-4 text-zinc-300">
                  {t.fixContent} <em>{t.fixContentEm1}</em> {t.fixContentMid} <em>{t.fixContentEm2}</em> {t.fixContentEnd}
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

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section2Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section2P1} <InlineCode>XML tags</InlineCode> {t.section2P1End} <strong className="text-zinc-50">{t.section2P1Bold}</strong> {t.section2P1End2}
            </p>

            <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-orange-400">
                {t.patternTitle}
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
              {t.section2P2}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section3Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P1} <InlineCode>CoT</InlineCode> {t.section3P1End} <strong className="text-zinc-50">{t.section3P1Bold}</strong>.
            </p>

            <div className="mb-6 rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-orange-400">
                {t.engineeringPattern}
              </h4>
              <ol className="space-y-2 text-zinc-300">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 font-mono text-xs text-orange-400">1</span>
                  <span><strong className="text-zinc-50">{t.decomposition}</strong> {t.decompositionDesc}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 font-mono text-xs text-orange-400">2</span>
                  <span><strong className="text-zinc-50">{t.selfVerification}</strong> {t.selfVerificationDesc}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 font-mono text-xs text-orange-400">3</span>
                  <span><strong className="text-zinc-50">{t.explicitOutput}</strong> {t.explicitOutputDesc}</span>
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
              {t.section4Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section4P1} <InlineCode>temperature</InlineCode>{t.section4P1End}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg border border-zinc-800">
                <thead>
                  <tr className="bg-zinc-900">
                    <th className="border-b border-zinc-800 px-4 py-3 text-left font-mono text-sm font-semibold text-zinc-50">
                      {t.useCase}
                    </th>
                    <th className="border-b border-zinc-800 px-4 py-3 text-left font-mono text-sm font-semibold text-orange-400">
                      {t.temperature}
                    </th>
                    <th className="border-b border-zinc-800 px-4 py-3 text-left font-mono text-sm font-semibold text-zinc-400">
                      {t.why}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">{t.codeGeneration}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 font-mono text-orange-300">0.0 - 0.2</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.determinismCritical}</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">{t.dataExtraction}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 font-mono text-orange-300">0.0</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.noCreativity}</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">{t.marketingCopy}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 font-mono text-orange-300">0.7 - 0.9</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.varietyPoint}</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">{t.brainstorming}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 font-mono text-orange-300">1.0+</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.maximizeDivergence}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-relaxed text-zinc-300">
              {t.section4P2} <strong className="text-zinc-50">{t.section4P2Bold}</strong>{t.section4P2End}
            </p>
          </section>

          {/* Conclusion */}
          <section className="rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
            <h2 className="mb-4 font-mono text-xl font-bold text-zinc-50">
              {t.conclusionTitle}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-200">
              {t.conclusionP1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              {t.conclusionP2} <strong className="text-orange-300">{t.conclusionP2Bold}</strong>.
            </p>
          </section>

          {/* References */}
          <section className="mt-12 border-t border-zinc-800 pt-8">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {t.referencesTitle}
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
