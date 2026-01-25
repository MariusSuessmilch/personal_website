"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"
import { LanguageProvider, useLanguage } from "@/lib/i18n"

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-fuchsia-300">
      {children}
    </code>
  )
}

const content = {
  en: {
    backToHome: "Back to home",
    backToArticles: "Back to all articles",
    title: "Data Mesh: The Hidden Engine of Autonomous AI",
    subtitle: "Why your AI Agents are failing: They are trying to drink from a swamp.",
    date: "Jan 10, 2026",
    readTime: "15 min read",
    tag: "Data Architecture",
    summaryTitle: "Executive Summary",
    summaryP1: "We are entering the era of the",
    summaryP1Bold: "Autonomous Enterprise",
    summaryP1End: ". Companies are racing to deploy AI agents that can \"optimize supply chains\" or \"personalize marketing.\"",
    summaryP2: "But there is a dirty secret in the industry:",
    summaryP2Bold: "The Model is not the bottleneck. The Data Architecture is.",
    summaryP3Start: "Most organizations are still stuck in the",
    summaryP3Bold: "Data Monolith",
    summaryP3Mid: "era, dumping everything into a centralized Data Lake and hoping a small team of engineers can make sense of it. This fails for AI. Agents need clear, semantic boundaries to function. They need a",
    summaryP3End: "Data Mesh",
    section1Title: "1. The Death of the Monolith",
    section1P1: "For 20 years, the standard advice was \"Centralize Everything.\" Extract data from Sales, Marketing, and Logistics, and Load it into one giant",
    section1P1End: "instance",
    resultTitle: "The Result: A Data Swamp",
    contextLoss: "Context Loss:",
    contextLossDesc: "The data engineers don't understand what \"Churn Rate\" actually means to the Sales team.",
    bottlenecks: "Bottlenecks:",
    bottlenecksDesc: "Every AI initiative has to wait for the central data team to clean the data.",
    fragility: "Fragility:",
    fragilityDesc: "If the Sales team changes a column name, the entire AI pipeline breaks.",
    section2Title: "2. Enter the Data Mesh",
    section2P1Start: "Coined by Zhamak Dehghani, Data Mesh is not a technology; it is a",
    section2P1Bold: "socio-technical shift",
    section2P1End: ". It moves from \"Centralized Ownership\" to",
    principlesTitle: "The Four Principles",
    principle1Title: "Domain Ownership:",
    principle1Desc: "The Sales team owns the Sales data. They know it best.",
    principle2Title: "Data as a Product:",
    principle2Desc: "Data isn't a byproduct; it is a product with an SLA, documentation, and a clean API.",
    principle3Title: "Self-Serve Infrastructure:",
    principle3Desc: "The platform team provides the tools (storage, compute), but the domains build the products.",
    principle4Title: "Federated Governance:",
    principle4Desc: "Global standards (security, PII) are enforced automatically, but local logic is free.",
    section3Title: "3. Why AI Agents",
    section3TitleEm: "Need",
    section3TitleEnd: "a Mesh",
    section3P1: "This is the critical link most leaders miss. An AI Agent (like a",
    section3P1End: ") is essentially a reasoning engine looking for tools.",
    inMonolith: "In a Monolith",
    inMonolithDesc: "The Agent has to guess which of the 5,000 tables in the warehouse contains the \"real\" inventory count.",
    inMonolithBold: "It will hallucinate.",
    inMesh: "In a Mesh",
    inMeshDesc: "The Agent calls the",
    inMeshDescEnd: ". It gets a clean, governed answer:",
    keyInsight: "The Key Insight:",
    keyInsightDesc: "The Mesh provides the semantic layer that prevents Agents from going rogue.",
    conclusionTitle: "Don't Buy AI, Build Architecture",
    conclusionP1: "You cannot buy a \"Data Mesh\" off the shelf. You cannot just install",
    conclusionP1End: "and call it a day.",
    conclusionP2: "It requires a cultural shift: treating data with the same engineering rigor as application code.",
    conclusionP3: "If you want to build Agents that actually work,",
    conclusionP3Bold: "stop polishing the prompt and start fixing the pipes",
    referencesTitle: "Research & Sources",
  },
  de: {
    backToHome: "Zurück zur Startseite",
    backToArticles: "Zurück zu allen Artikeln",
    title: "Data Mesh: Der verborgene Motor autonomer KI",
    subtitle: "Warum Ihre KI-Agenten scheitern: Sie versuchen, aus einem Sumpf zu trinken.",
    date: "10. Jan 2026",
    readTime: "15 Min. Lesezeit",
    tag: "Datenarchitektur",
    summaryTitle: "Zusammenfassung",
    summaryP1: "Wir treten in die Ära des",
    summaryP1Bold: "Autonomen Unternehmens",
    summaryP1End: " ein. Unternehmen wetteifern darum, KI-Agenten einzusetzen, die \"Lieferketten optimieren\" oder \"Marketing personalisieren\" können.",
    summaryP2: "Aber es gibt ein schmutziges Geheimnis in der Branche:",
    summaryP2Bold: "Das Modell ist nicht der Engpass. Die Datenarchitektur ist es.",
    summaryP3Start: "Die meisten Organisationen stecken noch in der",
    summaryP3Bold: "Daten-Monolith",
    summaryP3Mid: "-Ära fest und kippen alles in einen zentralen Data Lake, in der Hoffnung, dass ein kleines Team von Ingenieuren daraus schlau wird. Das funktioniert für KI nicht. Agenten brauchen klare, semantische Grenzen. Sie brauchen ein",
    summaryP3End: "Data Mesh",
    section1Title: "1. Der Tod des Monolithen",
    section1P1: "20 Jahre lang lautete der Standardrat \"Zentralisiere alles.\" Extrahiere Daten aus Vertrieb, Marketing und Logistik und lade sie in eine riesige",
    section1P1End: "-Instanz",
    resultTitle: "Das Ergebnis: Ein Datensumpf",
    contextLoss: "Kontextverlust:",
    contextLossDesc: "Die Dateningenieure verstehen nicht, was \"Abwanderungsrate\" für das Vertriebsteam tatsächlich bedeutet.",
    bottlenecks: "Engpässe:",
    bottlenecksDesc: "Jede KI-Initiative muss warten, bis das zentrale Datenteam die Daten bereinigt hat.",
    fragility: "Fragilität:",
    fragilityDesc: "Wenn das Vertriebsteam einen Spaltennamen ändert, bricht die gesamte KI-Pipeline zusammen.",
    section2Title: "2. Das Data Mesh betritt die Bühne",
    section2P1Start: "Von Zhamak Dehghani geprägt, ist Data Mesh keine Technologie; es ist ein",
    section2P1Bold: "soziotechnischer Wandel",
    section2P1End: ". Es bewegt sich von \"Zentralisiertem Eigentum\" zu",
    principlesTitle: "Die vier Prinzipien",
    principle1Title: "Domain-Ownership:",
    principle1Desc: "Das Vertriebsteam besitzt die Vertriebsdaten. Sie kennen sie am besten.",
    principle2Title: "Daten als Produkt:",
    principle2Desc: "Daten sind kein Nebenprodukt; sie sind ein Produkt mit SLA, Dokumentation und einer sauberen API.",
    principle3Title: "Self-Service-Infrastruktur:",
    principle3Desc: "Das Plattform-Team stellt die Werkzeuge bereit (Speicher, Rechenleistung), aber die Domains bauen die Produkte.",
    principle4Title: "Föderierte Governance:",
    principle4Desc: "Globale Standards (Sicherheit, personenbezogene Daten) werden automatisch durchgesetzt, aber lokale Logik ist frei.",
    section3Title: "3. Warum KI-Agenten ein Mesh",
    section3TitleEm: "brauchen",
    section3TitleEnd: "",
    section3P1: "Dies ist die kritische Verbindung, die die meisten Führungskräfte übersehen. Ein KI-Agent (wie ein",
    section3P1End: ") ist im Wesentlichen eine Reasoning-Engine auf der Suche nach Werkzeugen.",
    inMonolith: "Im Monolith",
    inMonolithDesc: "Der Agent muss raten, welche der 5.000 Tabellen im Warehouse den \"echten\" Lagerbestand enthält.",
    inMonolithBold: "Er wird halluzinieren.",
    inMesh: "Im Mesh",
    inMeshDesc: "Der Agent ruft die",
    inMeshDescEnd: " auf. Er erhält eine saubere, verwaltete Antwort:",
    keyInsight: "Die Kernerkenntnis:",
    keyInsightDesc: "Das Mesh bietet die semantische Schicht, die verhindert, dass Agenten außer Kontrolle geraten.",
    conclusionTitle: "Kaufen Sie keine KI, bauen Sie Architektur",
    conclusionP1: "Sie können kein \"Data Mesh\" von der Stange kaufen. Sie können nicht einfach",
    conclusionP1End: "installieren und fertig.",
    conclusionP2: "Es erfordert einen kulturellen Wandel: Daten mit der gleichen ingenieurtechnischen Sorgfalt zu behandeln wie Anwendungscode.",
    conclusionP3: "Wenn Sie Agenten bauen wollen, die tatsächlich funktionieren,",
    conclusionP3Bold: "hören Sie auf, den Prompt zu polieren und fangen Sie an, die Leitungen zu reparieren",
    referencesTitle: "Quellen & Referenzen",
  },
}

function DataMeshContent() {
  const { language } = useLanguage()
  const t = content[language]

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
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
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
          className="mb-12 rounded-r-lg border-l-4 border-fuchsia-500 bg-zinc-900/50 p-6 backdrop-blur-md"
        >
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-fuchsia-400">
            {t.summaryTitle}
          </h2>
          <p className="italic leading-relaxed text-zinc-300">
            {t.summaryP1} <strong className="text-zinc-50">{t.summaryP1Bold}</strong>{t.summaryP1End}
          </p>
          <p className="mt-4 italic leading-relaxed text-zinc-300">
            {t.summaryP2} <strong className="text-zinc-50">{t.summaryP2Bold}</strong>
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {t.summaryP3Start} <strong className="text-zinc-50">{t.summaryP3Bold}</strong>{t.summaryP3Mid} <strong className="text-fuchsia-300">{t.summaryP3End}</strong>.
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

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section1P1} <InlineCode>Snowflake</InlineCode> {language === "de" ? "oder" : "or"} <InlineCode>Databricks</InlineCode>{t.section1P1End} (<InlineCode>ETL</InlineCode>).
            </p>

            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-red-400">
                {t.resultTitle}
              </h4>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong className="text-zinc-50">{t.contextLoss}</strong> {t.contextLossDesc}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong className="text-zinc-50">{t.bottlenecks}</strong> {t.bottlenecksDesc}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong className="text-zinc-50">{t.fragility}</strong> {t.fragilityDesc}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section2Title}
            </h2>

            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section2P1Start} <strong className="text-zinc-50">{t.section2P1Bold}</strong>{t.section2P1End} <InlineCode>Domain-Oriented Decentralization</InlineCode>.
            </p>

            <div className="mb-6 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-fuchsia-400">
                {t.principlesTitle}
              </h4>
              <ol className="space-y-3 text-zinc-300">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">1</span>
                  <span><strong className="text-zinc-50">{t.principle1Title}</strong> {t.principle1Desc}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">2</span>
                  <span><strong className="text-zinc-50">{t.principle2Title}</strong> {t.principle2Desc}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">3</span>
                  <span><strong className="text-zinc-50">{t.principle3Title}</strong> {t.principle3Desc}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">4</span>
                  <span><strong className="text-zinc-50">{t.principle4Title}</strong> {t.principle4Desc}</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section3Title} <em>{t.section3TitleEm}</em> {t.section3TitleEnd}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P1} <InlineCode>SupplyChainBot</InlineCode>{t.section3P1End}
            </p>

            <div className="mb-6 space-y-4">
              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-red-400">
                  {t.inMonolith}
                </h4>
                <p className="text-zinc-300">
                  {t.inMonolithDesc} <strong className="text-red-300">{t.inMonolithBold}</strong>
                </p>
              </div>

              <div className="rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-fuchsia-400">
                  {t.inMesh}
                </h4>
                <p className="mb-3 text-zinc-300">
                  {t.inMeshDesc} <InlineCode>Inventory Domain API</InlineCode>{t.inMeshDescEnd}
                </p>
                <code className="block rounded bg-zinc-900 p-3 font-mono text-sm text-fuchsia-300">
                  {`{"sku": "A123", "count": 50}`}
                </code>
              </div>
            </div>

            <p className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 leading-relaxed text-zinc-300">
              <strong className="text-fuchsia-400">{t.keyInsight}</strong> {t.keyInsightDesc}
            </p>
          </section>

          {/* Conclusion */}
          <section className="rounded-lg border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-transparent p-6">
            <h2 className="mb-4 font-mono text-xl font-bold text-zinc-50">
              {t.conclusionTitle}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-200">
              {t.conclusionP1} <InlineCode>dbt</InlineCode> {t.conclusionP1End}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              {t.conclusionP2}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              {t.conclusionP3} <strong className="text-fuchsia-300">{t.conclusionP3Bold}</strong>.
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
            {t.backToArticles}
          </Link>
        </motion.footer>
      </article>
    </main>
  )
}

export default function DataMeshPage() {
  return (
    <LanguageProvider>
      <DataMeshContent />
    </LanguageProvider>
  )
}
