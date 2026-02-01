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

const sourceUrls: Record<string, string> = {
  "1": "https://dl.acm.org/doi/10.1145/3687301",
  "2": "https://www.oracle.com/a/ocom/docs/datamesh-ebook.pdf",
  "3": "https://www.oreilly.com/library/view/data-mesh/9781492092384/",
}

function CitationLink({ num }: { num: string }) {
  return (
    <a
      href={sourceUrls[num]}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-0.5 inline-flex h-4 w-4 items-center justify-center rounded bg-fuchsia-500/20 font-mono text-[10px] text-fuchsia-400 transition-colors hover:bg-fuchsia-500/40 hover:text-fuchsia-300 align-super"
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
    subtitle: "Most enterprise AI initiatives fail not because of model limitations, but because their data foundations cannot support autonomous operation.",
    date: "Jan 10, 2026",
    readTime: "15 min read",
    tag: "Data Architecture",

    // Section: Data Swamp Reality
    section1Title: "From Data Lake to Data Swamp",
    section1P1: "For the last decade, enterprise data strategy followed a single mandate:",
    section1P1Bold: "Centralize Everything",
    section1P1End: ". Extract data from Sales, Marketing, and Logistics. Load it into one giant data lake. Analysis and insights would follow.",
    section1P2: "In practice, this approach produced something different: a Data Swamp.",
    section1P3: "According to research from Goedegebuure et al., centralized data architectures tend to fail in three predictable ways:",
    section1P3Bold: "",
    contextLoss: "Context Loss:",
    contextLossDesc: "Central data teams lack the domain expertise to interpret business metrics correctly. What \"Churn Rate\" means to Sales differs from what it means to Marketing.",
    bottlenecks: "Bottlenecks:",
    bottlenecksDesc: "AI initiatives stall waiting for overworked data engineers to resolve tickets. The central team becomes a constraint on innovation.",
    fragility: "Fragility:",
    fragilityDesc: "When the Sales team changes a column name in Salesforce, downstream AI pipelines break days later—often without anyone noticing until production fails.",
    section1Conclusion: "Autonomous AI agents require clear, reliable data boundaries to function. Building agents on top of a data swamp produces unreliable results. The solution is a",
    section1ConclusionBold: "Data Mesh",

    // Section: What is Data Mesh
    section2Title: "Under the Hood: What is a Data Mesh?",
    section2P1: "Data Mesh is not a technology—it is a",
    section2P1Bold: "socio-technical paradigm shift",
    section2P1End: ". It moves from \"Centralized Ownership\" to",
    section2P1End2: "\"Domain-Oriented Decentralization.\"",
    section2P2: "Originally defined by Zhamak Dehghani and validated across 100+ industrial implementations, Data Mesh rests on four foundational principles:",

    // Principles
    principle1Title: "1. Domain Ownership (The \"Who\")",
    principle1Desc: "Data ownership stays with the teams who create it. The Sales team understands their data better than a central platform team ever could. They clean it, document it, and serve it.",
    principle2Title: "2. Data as a Product (The \"What\")",
    principle2Intro: "This principle transforms how AI systems interact with enterprise data. Data is no longer a byproduct—it becomes a",
    principle2IntroBold: "Product",
    principle2Desc: "Like an API, a Data Product requires:",
    principle2Point1: "Discoverability:",
    principle2Point1Desc: "AI agents can locate relevant data without human intervention.",
    principle2Point2: "Addressability:",
    principle2Point2Desc: "Stable endpoints (SQL, REST, S3) with consistent interfaces.",
    principle2Point3: "Trustworthiness:",
    principle2Point3Desc: "Service-level agreements that guarantee data quality and freshness.",
    principle3Title: "3. Self-Serve Data Platform (The \"How\")",
    principle3Desc: "Domain teams need infrastructure support without infrastructure expertise. The central IT team shifts from \"doing the work\" to \"building the platform\"—providing storage, compute, and templates that enable domains to publish data products independently.",
    principle4Title: "4. Federated Governance (The \"Rules\")",
    principle4Desc: "Decentralization requires coordination. Global standards for security, PII handling, and interoperability get enforced automatically through the platform. Each domain operates independently while following shared protocols—similar to how city zoning allows diverse businesses while maintaining building codes.",

    // Section: Why AI Agents Need Mesh
    section3Title: "Why AI Agents",
    section3TitleEm: "Require",
    section3TitleEnd: "a Mesh",
    section3P1: "The connection between data architecture and AI reliability is often underestimated.",
    section3P2: "An AI Agent (like a",
    section3P2End: ") functions as a reasoning engine that discovers and uses tools.",
    inMonolith: "In a Monolithic Architecture:",
    inMonolithDesc: "The agent must determine which of 5,000 warehouse tables contains the authoritative inventory count. Without clear boundaries, it guesses.",
    inMonolithBold: "Hallucination becomes inevitable.",
    inMesh: "In a Mesh Architecture:",
    inMeshDesc: "The agent calls the",
    inMeshDescEnd: " and receives a governed, authoritative response:",
    keyInsight: "The Mesh provides the semantic layer that constrains agent behavior to reliable data sources.",

    // Conclusion
    conclusionTitle: "The Path Forward",
    conclusionP1: "Data Mesh cannot be purchased as a product. Installing",
    conclusionP1End: "alone does not create one.",
    conclusionP2: "Building a mesh requires treating data with the same engineering discipline applied to application code: versioning, testing, documentation, and ownership.",
    conclusionP3: "For organizations building autonomous AI systems,",
    conclusionP3Bold: "the data architecture often matters more than the prompt engineering",

    // References
    referencesTitle: "Research & Sources",
    ref1Title: "Data Mesh: A Systematic Gray Literature Review",
    ref1Author: "Goedegebuure et al. (ACM Computing Surveys, 2025)",
    ref2Title: "Enterprise Data Mesh",
    ref2Author: "Oracle",
    ref3Title: "Data Mesh: Delivering Data-Driven Value at Scale",
    ref3Author: "Zhamak Dehghani (O'Reilly, 2022)",
  },
  de: {
    backToHome: "Zurück zu Artikeln",
    backToArticles: "Zurück zu allen Artikeln",
    title: "Data Mesh:",
    titleGradient: "Der unsichtbare Motor für autonome KI",
    subtitle: "Die meisten KI-Initiativen in Unternehmen scheitern nicht an Modell-Limitierungen, sondern daran, dass ihre Datenfundamente keinen autonomen Betrieb unterstützen können.",
    date: "10. Jan 2026",
    readTime: "15 Min. Lesezeit",
    tag: "Datenarchitektur",

    // Section: Data Swamp Reality
    section1Title: "Vom Data Lake zum Data Swamp",
    section1P1: "Im letzten Jahrzehnt folgte die Datenstrategie in Unternehmen einem einzigen Mandat:",
    section1P1Bold: "Alles zentralisieren",
    section1P1End: ". Daten aus Vertrieb, Marketing und Logistik extrahieren. In einen riesigen Data Lake laden. Analysen und Erkenntnisse würden folgen.",
    section1P2: "In der Praxis produzierte dieser Ansatz etwas anderes: einen Data Swamp (Datensumpf).",
    section1P3: "Laut Forschungen von Goedegebuure et al. scheitern zentralisierte Datenarchitekturen tendenziell auf drei vorhersehbare Arten:",
    section1P3Bold: "",
    contextLoss: "Kontextverlust:",
    contextLossDesc: "Zentralen Datenteams fehlt die Domänenexpertise, um Geschäftsmetriken korrekt zu interpretieren. Was \"Churn Rate\" für den Vertrieb bedeutet, unterscheidet sich von dem, was es für Marketing bedeutet.",
    bottlenecks: "Engpässe:",
    bottlenecksDesc: "KI-Initiativen stagnieren, während sie darauf warten, dass überlastete Data Engineers Tickets bearbeiten. Das zentrale Team wird zum Innovationshemmnis.",
    fragility: "Fragilität:",
    fragilityDesc: "Wenn das Vertriebsteam einen Spaltennamen in Salesforce ändert, brechen nachgelagerte KI-Pipelines Tage später—oft ohne dass es jemand bemerkt, bis die Produktion ausfällt.",
    section1Conclusion: "Autonome KI-Agenten benötigen klare, verlässliche Datengrenzen, um zu funktionieren. Agenten auf einem Datensumpf zu bauen, produziert unzuverlässige Ergebnisse. Die Lösung ist ein",
    section1ConclusionBold: "Data Mesh",

    // Section: What is Data Mesh
    section2Title: "Ein Blick unter die Haube: Was ist ein Data Mesh?",
    section2P1: "Data Mesh ist keine Technologie—es ist ein",
    section2P1Bold: "sozio-technischer Paradigmenwechsel",
    section2P1End: ". Er bewegt sich von \"Zentraler Eigentümerschaft\" zu",
    section2P1End2: "\"Domänen-orientierter Dezentralisierung.\"",
    section2P2: "Ursprünglich von Zhamak Dehghani definiert und in über 100 industriellen Implementierungen validiert, basiert Data Mesh auf vier grundlegenden Prinzipien:",

    // Principles
    principle1Title: "1. Domänen-Eigentümerschaft (Das \"Wer\")",
    principle1Desc: "Die Datenhoheit bleibt bei den Teams, die die Daten erzeugen. Das Vertriebsteam versteht seine Daten besser als jedes zentrale Plattformteam. Sie bereinigen, dokumentieren und stellen sie bereit.",
    principle2Title: "2. Daten als Produkt (Das \"Was\")",
    principle2Intro: "Dieses Prinzip transformiert, wie KI-Systeme mit Unternehmensdaten interagieren. Daten sind kein Nebenprodukt mehr—sie werden zum",
    principle2IntroBold: "Produkt",
    principle2Desc: "Wie eine API erfordert ein Datenprodukt:",
    principle2Point1: "Auffindbarkeit:",
    principle2Point1Desc: "KI-Agenten können relevante Daten ohne menschliches Eingreifen lokalisieren.",
    principle2Point2: "Adressierbarkeit:",
    principle2Point2Desc: "Stabile Endpunkte (SQL, REST, S3) mit konsistenten Schnittstellen.",
    principle2Point3: "Vertrauenswürdigkeit:",
    principle2Point3Desc: "Service-Level-Agreements, die Datenqualität und Aktualität garantieren.",
    principle3Title: "3. Self-Serve Datenplattform (Das \"Wie\")",
    principle3Desc: "Domänenteams brauchen Infrastruktur-Unterstützung ohne Infrastruktur-Expertise. Das zentrale IT-Team wechselt von \"die Arbeit machen\" zu \"die Plattform bauen\"—Bereitstellung von Speicher, Rechenleistung und Vorlagen, die es Domänen ermöglichen, Datenprodukte eigenständig zu veröffentlichen.",
    principle4Title: "4. Föderierte Governance (Die \"Regeln\")",
    principle4Desc: "Dezentralisierung erfordert Koordination. Globale Standards für Sicherheit, Datenschutz und Interoperabilität werden automatisch durch die Plattform durchgesetzt. Jede Domäne operiert unabhängig und folgt dabei gemeinsamen Protokollen—ähnlich wie Stadtplanung vielfältige Geschäfte ermöglicht und gleichzeitig Bauvorschriften aufrechterhält.",

    // Section: Why AI Agents Need Mesh
    section3Title: "Warum KI-Agenten einen Mesh",
    section3TitleEm: "benötigen",
    section3TitleEnd: "",
    section3P1: "Die Verbindung zwischen Datenarchitektur und KI-Zuverlässigkeit wird oft unterschätzt.",
    section3P2: "Ein KI-Agent (wie ein",
    section3P2End: ") funktioniert als Reasoning-Engine, die Werkzeuge entdeckt und nutzt.",
    inMonolith: "In einer monolithischen Architektur:",
    inMonolithDesc: "Der Agent muss ermitteln, welche der 5.000 Warehouse-Tabellen den autoritativen Lagerbestand enthält. Ohne klare Grenzen rät er.",
    inMonolithBold: "Halluzination wird unvermeidlich.",
    inMesh: "In einer Mesh-Architektur:",
    inMeshDesc: "Der Agent ruft die",
    inMeshDescEnd: " auf und erhält eine geprüfte, autoritative Antwort:",
    keyInsight: "Der Mesh bietet die semantische Schicht, die das Agentenverhalten auf zuverlässige Datenquellen beschränkt.",

    // Conclusion
    conclusionTitle: "Der Weg nach vorne",
    conclusionP1: "Ein Data Mesh kann nicht als Produkt gekauft werden. Die Installation von",
    conclusionP1End: "allein schafft keinen.",
    conclusionP2: "Der Aufbau eines Mesh erfordert, Daten mit der gleichen technischen Disziplin zu behandeln, die auf Anwendungscode angewendet wird: Versionierung, Testing, Dokumentation und Ownership.",
    conclusionP3: "Für Organisationen, die autonome KI-Systeme aufbauen,",
    conclusionP3Bold: "ist die Datenarchitektur oft wichtiger als das Prompt Engineering",

    // References
    referencesTitle: "Quellen & Referenzen",
    ref1Title: "Data Mesh: A Systematic Gray Literature Review",
    ref1Author: "Goedegebuure et al. (ACM Computing Surveys, 2025)",
    ref2Title: "Enterprise Data Mesh",
    ref2Author: "Oracle",
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
              {t.section1P3}<CitationLink num="1" />
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
              {t.section2P2}<CitationLink num="3" /><CitationLink num="1" />
            </p>

            {/* Principle 1 */}
            <div className="mb-6 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4">
              <h3 className="mb-2 font-mono text-lg font-semibold text-fuchsia-400">
                {t.principle1Title}
              </h3>
              <p className="text-zinc-300">
                {t.principle1Desc}<CitationLink num="3" />
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
              <p className="mb-2 text-zinc-300">{t.principle2Desc}<CitationLink num="2" /><CitationLink num="3" /></p>
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
              {t.conclusionP2}<CitationLink num="3" />
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
                  href="https://dl.acm.org/doi/10.1145/3687301"
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
                  href="https://www.oracle.com/a/ocom/docs/datamesh-ebook.pdf"
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
