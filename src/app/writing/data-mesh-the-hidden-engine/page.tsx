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

function ArticleLanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="mb-8 flex items-center gap-1 rounded-lg border border-white/10 bg-zinc-900/50 p-1 backdrop-blur-md w-fit">
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-md px-4 py-2 font-mono text-sm transition-all ${
          language === "en"
            ? "bg-fuchsia-500/20 text-fuchsia-300"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("de")}
        className={`rounded-md px-4 py-2 font-mono text-sm transition-all ${
          language === "de"
            ? "bg-fuchsia-500/20 text-fuchsia-300"
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
    title: "Data Mesh:",
    titleGradient: "The Hidden Engine of Autonomous AI",
    subtitle: "Why your AI Agents are failing: They are trying to drink from a swamp.",
    date: "Jan 10, 2026",
    readTime: "15 min read",
    tag: "Data Architecture",

    // Section: Data Swamp Reality
    section1Title: "The \"Data Swamp\" Reality",
    section1P1: "Let's be honest about the state of enterprise data. For the last decade, the standard advice was simple:",
    section1P1Bold: "Centralize Everything",
    section1P1End: ". Extract data from Sales, Marketing, and Logistics, and load it into one giant data lake.",
    section1P2: "The intuition here was that if we put all the data in one place, magic would happen.",
    section1P3: "Instead, we built a",
    section1P3Bold: "Data Swamp",
    contextLoss: "Context Loss:",
    contextLossDesc: "The central data team has no idea what \"Churn Rate\" actually means to the Sales team.",
    bottlenecks: "Bottlenecks:",
    bottlenecksDesc: "Every AI initiative stalls because you're waiting for a ticket to be resolved by an overworked data engineer.",
    fragility: "Fragility:",
    fragilityDesc: "If the Sales team changes a column name in Salesforce, your entire AI pipeline crashes three days later.",
    section1Conclusion: "If you are trying to build autonomous AI agents on top of this mess, you are setting them up to fail. An agent needs clear, reliable boundaries to function. It needs a",
    section1ConclusionBold: "Data Mesh",

    // Section: What is Data Mesh
    section2Title: "Under the Hood: What is a Data Mesh?",
    section2P1: "Don't be fooled by the buzzwords. At its core, Data Mesh is not a technology; it is a",
    section2P1Bold: "socio-technical shift",
    section2P1End: ". It flips the script from \"Centralized Ownership\" to",
    section2P1End2: "\"Domain-Oriented Decentralization.\"",
    section2P2: "Based on a systematic review of over 100 industrial implementations, here are the four pillars that actually matter:",

    // Principles
    principle1Title: "1. Domain Ownership (The \"Who\")",
    principle1Desc: "Stop moving data to a central team. The people who create the data should own it. The Sales team knows their data best; they should be the ones cleaning and serving it.",
    principle2Title: "2. Data as a Product (The \"What\")",
    principle2Intro: "This is the game-changer for AI. Data isn't a byproduct anymore; it is a",
    principle2IntroBold: "Product",
    principle2Desc: "Just like an API, a Data Product must have:",
    principle2Point1: "Discoverability:",
    principle2Point1Desc: "Your AI agent should be able to find it without asking a human.",
    principle2Point2: "Addressability:",
    principle2Point2Desc: "A stable endpoint (SQL, REST, S3) that doesn't change randomly.",
    principle2Point3: "Trustworthiness:",
    principle2Point3Desc: "An SLA that guarantees quality.",
    principle3Title: "3. Self-Serve Data Platform (The \"How\")",
    principle3Desc: "You can't expect a Marketing analyst to build a Kubernetes cluster. The central IT team shifts from \"doing the work\" to \"building the platform.\" They provide the tooling (storage, compute, templates) so domains can build products easily.",
    principle4Title: "4. Federated Governance (The \"Rules\")",
    principle4Desc: "Decentralization doesn't mean anarchy. You still need global standards (security, PII) enforced automatically. Think of it like a city: local shops (domains) operate independently, but everyone follows the same building codes and traffic laws.",

    // Section: Why AI Agents Need Mesh
    section3Title: "Why AI Agents",
    section3TitleEm: "Need",
    section3TitleEnd: "a Mesh",
    section3P1: "This is the critical link most leaders miss.",
    section3P2: "An AI Agent (like a",
    section3P2End: ") is essentially a reasoning engine looking for tools.",
    inMonolith: "In a Monolith:",
    inMonolithDesc: "The Agent has to guess which of the 5,000 tables in the warehouse contains the \"real\" inventory count.",
    inMonolithBold: "It will hallucinate.",
    inMesh: "In a Mesh:",
    inMeshDesc: "The Agent calls the",
    inMeshDescEnd: ". It gets a clean, governed answer:",
    keyInsight: "The Mesh provides the semantic layer that prevents Agents from going rogue.",

    // Conclusion
    conclusionTitle: "The Path Forward",
    conclusionP1: "You cannot buy a \"Data Mesh\" off the shelf. You cannot just install",
    conclusionP1End: "and call it a day.",
    conclusionP2: "It requires a cultural shift: treating data with the same engineering rigor as application code.",
    conclusionP3: "If you want to build Agents that actually work,",
    conclusionP3Bold: "stop polishing the prompt and start fixing the pipes",

    // References
    referencesTitle: "Research & Sources",
    ref1Title: "Data Mesh: A Systematic Gray Literature Review",
    ref1Author: "Goedegebuure et al. (ACM, 2024)",
    ref2Title: "Data Mesh ebook",
    ref2Author: "Oracle (2021)",
    ref3Title: "Data Mesh: Delivering Data-Driven Value at Scale",
    ref3Author: "Zhamak Dehghani (O'Reilly, 2022)",
  },
  de: {
    backToHome: "Zurück zu Artikeln",
    backToArticles: "Zurück zu allen Artikeln",
    title: "Data Mesh:",
    titleGradient: "Der unsichtbare Motor für autonome KI",
    subtitle: "Warum Ihre KI-Agenten scheitern: Sie versuchen, aus einem Sumpf zu trinken.",
    date: "10. Jan 2026",
    readTime: "15 Min. Lesezeit",
    tag: "Datenarchitektur",

    // Section: Data Swamp Reality
    section1Title: "Die Realität des \"Data Swamp\"",
    section1P1: "Seien wir ehrlich, was den Zustand von Unternehmensdaten angeht. Im letzten Jahrzehnt war der Rat simpel:",
    section1P1Bold: "Alles zentralisieren",
    section1P1End: ". Daten aus Vertrieb, Marketing und Logistik extrahieren und in einen riesigen Data Lake kippen.",
    section1P2: "Die Intuition dabei war: Wenn wir alle Daten an einem Ort haben, passiert Magie.",
    section1P3: "Stattdessen haben wir einen",
    section1P3Bold: "Data Swamp (Datensumpf)",
    contextLoss: "Kontextverlust:",
    contextLossDesc: "Das zentrale Datenteam hat keine Ahnung, was \"Churn Rate\" für das Vertriebsteam wirklich bedeutet.",
    bottlenecks: "Flaschenhälse:",
    bottlenecksDesc: "Jede KI-Initiative stockt, weil Sie darauf warten, dass ein überlasteter Data Engineer ein Ticket bearbeitet.",
    fragility: "Fragilität:",
    fragilityDesc: "Wenn das Vertriebsteam einen Spaltennamen in Salesforce ändert, stürzt Ihre gesamte KI-Pipeline drei Tage später ab.",
    section1Conclusion: "Wenn Sie versuchen, autonome KI-Agenten auf dieses Chaos zu bauen, sind sie zum Scheitern verurteilt. Ein Agent braucht klare, verlässliche Grenzen, um zu funktionieren. Er braucht einen",
    section1ConclusionBold: "Data Mesh",

    // Section: What is Data Mesh
    section2Title: "Ein Blick unter die Haube: Was ist ein Data Mesh?",
    section2P1: "Lassen Sie sich nicht von Buzzwords täuschen. Im Kern ist Data Mesh keine Technologie, sondern ein",
    section2P1Bold: "sozio-technischer Wandel",
    section2P1End: ". Er dreht das Skript von \"Zentraler Eigentümerschaft\" zu",
    section2P1End2: "\"Domänen-orientierter Dezentralisierung.\"",
    section2P2: "Basierend auf einer systematischen Analyse von über 100 industriellen Implementierungen sind hier die vier Säulen, auf die es wirklich ankommt:",

    // Principles
    principle1Title: "1. Domänen-Eigentümerschaft (Das \"Wer\")",
    principle1Desc: "Hören Sie auf, Daten zu einem zentralen Team zu schieben. Die Menschen, die die Daten erzeugen, sollten sie auch besitzen. Das Vertriebsteam kennt seine Daten am besten; sie sollten diejenigen sein, die sie bereinigen und bereitstellen.",
    principle2Title: "2. Daten als Produkt (Das \"Was\")",
    principle2Intro: "Das ist der Game-Changer für KI. Daten sind kein Abfallprodukt mehr; sie sind ein",
    principle2IntroBold: "Produkt",
    principle2Desc: "Genau wie eine API muss ein Datenprodukt Folgendes bieten:",
    principle2Point1: "Auffindbarkeit:",
    principle2Point1Desc: "Ihr KI-Agent sollte es finden können, ohne einen Menschen zu fragen.",
    principle2Point2: "Adressierbarkeit:",
    principle2Point2Desc: "Ein stabiler Endpunkt (SQL, REST, S3), der sich nicht willkürlich ändert.",
    principle2Point3: "Vertrauenswürdigkeit:",
    principle2Point3Desc: "Ein SLA, das Qualität garantiert.",
    principle3Title: "3. Self-Serve Datenplattform (Das \"Wie\")",
    principle3Desc: "Sie können nicht erwarten, dass ein Marketing-Analyst ein Kubernetes-Cluster baut. Das zentrale IT-Team wechselt von \"die Arbeit machen\" zu \"die Plattform bauen\". Sie stellen die Werkzeuge (Speicher, Rechenleistung, Vorlagen) bereit, damit Domänen einfach Produkte bauen können.",
    principle4Title: "4. Föderierte Governance (Die \"Regeln\")",
    principle4Desc: "Dezentralisierung bedeutet nicht Anarchie. Sie brauchen immer noch globale Standards (Sicherheit, Datenschutz), die automatisch durchgesetzt werden. Stellen Sie es sich wie eine Stadt vor: Lokale Geschäfte (Domänen) agieren unabhängig, aber alle halten sich an die gleichen Bauvorschriften und Verkehrsregeln.",

    // Section: Why AI Agents Need Mesh
    section3Title: "Warum KI-Agenten einen Mesh",
    section3TitleEm: "brauchen",
    section3TitleEnd: "",
    section3P1: "Dies ist der kritische Link, den die meisten Führungskräfte übersehen.",
    section3P2: "Ein KI-Agent (wie ein",
    section3P2End: ") ist im Grunde eine Denkmaschine auf der Suche nach Werkzeugen.",
    inMonolith: "Im Monolithen:",
    inMonolithDesc: "Der Agent muss raten, welche der 5.000 Tabellen im Warehouse den \"echten\" Lagerbestand enthält.",
    inMonolithBold: "Er wird halluzinieren.",
    inMesh: "Im Mesh:",
    inMeshDesc: "Der Agent ruft die",
    inMeshDescEnd: " auf. Er erhält eine saubere, geprüfte Antwort:",
    keyInsight: "Der Mesh bietet die semantische Ebene, die verhindert, dass Agenten außer Kontrolle geraten.",

    // Conclusion
    conclusionTitle: "Der Weg nach vorne",
    conclusionP1: "Sie können einen \"Data Mesh\" nicht von der Stange kaufen. Sie können nicht einfach",
    conclusionP1End: "installieren und Feierabend machen.",
    conclusionP2: "Es erfordert einen kulturellen Wandel: Daten mit der gleichen technischen Strenge zu behandeln wie Anwendungscode.",
    conclusionP3: "Wenn Sie Agenten bauen wollen, die tatsächlich funktionieren,",
    conclusionP3Bold: "hören Sie auf, den Prompt zu polieren, und fangen Sie an, die Leitungen zu reparieren",

    // References
    referencesTitle: "Quellen & Referenzen",
    ref1Title: "Data Mesh: A Systematic Gray Literature Review",
    ref1Author: "Goedegebuure et al. (ACM, 2024)",
    ref2Title: "Data Mesh ebook",
    ref2Author: "Oracle (2021)",
    ref3Title: "Data Mesh: Delivering Data-Driven Value at Scale",
    ref3Author: "Zhamak Dehghani (O'Reilly, 2022)",
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
            href="/writing"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-fuchsia-400"
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
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
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
          className="prose-article"
        >
          {/* Section 1: The Data Swamp Reality */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section1Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section1P1} <strong className="text-zinc-50">{t.section1P1Bold}</strong>{t.section1P1End}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section1P2}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section1P3} <strong className="text-zinc-50">{t.section1P3Bold}</strong>.
            </p>

            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
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

            <p className="leading-relaxed text-zinc-300">
              {t.section1Conclusion} <strong className="text-fuchsia-300">{t.section1ConclusionBold}</strong>.
            </p>
          </section>

          {/* Section 2: What is a Data Mesh? */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section2Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section2P1} <strong className="text-zinc-50">{t.section2P1Bold}</strong>{t.section2P1End} <strong className="text-fuchsia-300">{t.section2P1End2}</strong>
            </p>

            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section2P2}
            </p>

            {/* Principle 1 */}
            <div className="mb-6 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
              <h3 className="mb-2 font-mono text-lg font-semibold text-fuchsia-400">
                {t.principle1Title}
              </h3>
              <p className="text-zinc-300">
                {t.principle1Desc}
              </p>
            </div>

            {/* Principle 2 */}
            <div className="mb-6 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
              <h3 className="mb-2 font-mono text-lg font-semibold text-fuchsia-400">
                {t.principle2Title}
              </h3>
              <p className="mb-3 text-zinc-300">
                {t.principle2Intro} <strong className="text-zinc-50">{t.principle2IntroBold}</strong>.
              </p>
              <p className="mb-2 text-zinc-300">{t.principle2Desc}</p>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong className="text-zinc-50">{t.principle2Point1}</strong> {t.principle2Point1Desc}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong className="text-zinc-50">{t.principle2Point2}</strong> {t.principle2Point2Desc}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong className="text-zinc-50">{t.principle2Point3}</strong> {t.principle2Point3Desc}</span>
                </li>
              </ul>
            </div>

            {/* Principle 3 */}
            <div className="mb-6 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
              <h3 className="mb-2 font-mono text-lg font-semibold text-fuchsia-400">
                {t.principle3Title}
              </h3>
              <p className="text-zinc-300">
                {t.principle3Desc}
              </p>
            </div>

            {/* Principle 4 */}
            <div className="mb-6 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
              <h3 className="mb-2 font-mono text-lg font-semibold text-fuchsia-400">
                {t.principle4Title}
              </h3>
              <p className="text-zinc-300">
                {t.principle4Desc}
              </p>
            </div>
          </section>

          {/* Section 3: Why AI Agents Need a Mesh */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section3Title} <em className="text-fuchsia-300">{t.section3TitleEm}</em> {t.section3TitleEnd}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P1}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P2} <InlineCode>SupplyChainBot</InlineCode>{t.section3P2End}
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

            <p className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-lg leading-relaxed text-zinc-200">
              <strong className="text-fuchsia-400">{t.keyInsight}</strong>
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
            <ul className="space-y-4">
              <li>
                <a
                  href="https://dl.acm.org/doi/10.1145/3643678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-fuchsia-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">1</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300 transition-colors group-hover:text-fuchsia-300">{t.ref1Title}</p>
                      <p className="mt-1 text-xs text-zinc-500">{t.ref1Author}</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.oracle.com/a/ocom/docs/data-mesh-ebook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-fuchsia-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">2</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">{t.ref2Title}</p>
                      <p className="mt-1 text-xs text-zinc-500">{t.ref2Author}</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.oreilly.com/library/view/data-mesh/9781492092384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-fuchsia-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-fuchsia-500/20 font-mono text-xs text-fuchsia-400">3</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">{t.ref3Title}</p>
                      <p className="mt-1 text-xs text-zinc-500">{t.ref3Author}</p>
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
