"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"
import { LanguageProvider, useLanguage } from "@/lib/i18n"

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-indigo-300">
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
            ? "bg-indigo-500/20 text-indigo-300"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("de")}
        className={`rounded-md px-4 py-2 font-mono text-sm transition-all ${
          language === "de"
            ? "bg-indigo-500/20 text-indigo-300"
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
    backToArticles: "Back to articles",
    backToAllArticles: "Back to all articles",
    title: "The Future of AI Agents in Production Systems",
    subtitle: "Exploring the architectural patterns, state management challenges, and the reality of deploying autonomous agents at scale.",
    date: "Aug 15, 2025",
    readTime: "12 min read",
    tag: "AI Architecture",
    summaryTitle: "Executive Summary",
    summaryP1: "We are currently peak-hype cycle for Generative AI. Every SaaS platform has bolted on a \"copilot,\" and nearly every developer has spun up a RAG wrapper. But if you look closely at production systems today, 95% of them are still just sophisticated Q&A machines. They are passive. They wait for input, process it, and generate text.",
    summaryP2Start: "The next phase of AI isn't just about better models; it's about a fundamental shift in architecture. It's the move from ",
    summaryP2Bold1: "passive chatbots",
    summaryP2Mid: " to ",
    summaryP2Bold2: "autonomous agents",
    summaryP2End: ": systems that don't just tell you how to do something, but actually go out and do it.",
    section1Title: "1. The Definition Problem: What is an Agent?",
    section1P1: "Before we talk about the future, we need to define the present. The term \"agent\" is currently being abused by marketing departments, but in engineering terms, the distinction is clear:",
    chatbotLabel: "A Chatbot",
    chatbotDesc: "responds to a prompt. Its output is text intended for a human. It is stateless and reactive.",
    agentLabel: "An Agent",
    agentDesc: "pursues a goal. Its primary output is action: executing code, calling an API, querying a database: intended to change the state of a system.",
    section1P2: "The defining characteristic of an agent is the Reasoning Loop (often implemented via the ReAct pattern). It observes the environment, forms a thought about what to do next, acts on that thought, observes the new result, and repeats until the goal is met.",
    section1P3: "It's the difference between asking a junior engineer, \"What's the syntax for an S3 bucket policy?\" versus saying, \"Go ensure all our public S3 buckets are set to private.\"",
    section2Title: "2. The Three Horsemen of the Agent Apocalypse",
    section2P1: "Why don't we have fully autonomous DevOps agents fixing our servers today? Because traditional software engineering principles break when applied to non-deterministic systems.",
    fragility: "The Fragility of Reasoning Loops",
    fragilityP1: "Traditional software is deterministic: Input A always leads to Output B. Agents are probabilistic. You can give an agent the exact same goal five times, and it might take five different paths to get there: or fail completely on the fifth try because it \"hallucinated\" a nonexistent API parameter.",
    fragilityBox: "The Engineering Challenge: We are moving from writing \"logic\" to writing \"guardrails.\" We aren't coding the path; we are coding the boundaries of the path.",
    cost: "The Cost and Latency Spiral",
    costP1: "In a standard web app, an API call takes milliseconds. In an agentic system, a single user request might trigger a reasoning loop that requires ten separate LLM calls back-to-back before a final action is taken.",
    costP2: "If an agent gets stuck in a loop, repeatedly trying the wrong tool, failing, and trying again, it isn't just frustrating the user. It is actively burning cash.",
    security: "The Security Nightmare of Autonomy",
    securityP1: "Giving an LLM access to tools is essentially giving it a shell interface. If you give an agent write access to your production database, you are one clever prompt injection attack away from catastrophe.",
    securityP2Start: "Security cannot be linguistic (i.e., \"Please don't delete tables\"); it must be ",
    securityP2Bold: "architectural",
    securityP2End: " (i.e., The database user for the agent literally lacks DROP TABLE permissions).",
    section3Title: "3. The Landscape of Automation: A Tale of Two Stacks",
    section3P1: "For AI Managers, the most critical decision is not \"which model to use,\" but \"which architecture fits the problem.\"",
    categoryA: "Category A: The Deterministic Orchestrators",
    categoryABest: "Best for: \"If This, Then That\" workflows.",
    categoryAP1: "Tools like Zapier and Make (formerly Integromat) are excellent for connecting pipes. n8n offers a self-hostable, developer-friendly version.",
    categoryABox: "The Limitation: They are fundamentally linear. They lack stateful reasoning. If you ask a Make scenario to \"research a competitor,\" it runs step A, then step B. It cannot realize midway through that it needs more data, loop back, run a different search, and self-correct. It is a \"fire and forget\" missile, not a pilot.",
    categoryB: "Category B: The Cognitive Architectures",
    categoryBBest: "Best for: \"Figure out how to solve this\" workflows.",
    categoryBP1: "LangChain provides the primitives, but LangGraph is the game-changer. It models an agent not as a chain, but as a State Machine.",
    howItWorks: "How it works:",
    howItWorksDesc: "An agent enters a graph: Start \u2192 Think \u2192 Tool Call \u2192 Update State \u2192 Think. It continues until the state satisfies the exit condition.",
    whyItMatters: "Why it matters:",
    whyItMattersDesc: "This allows for \"Human-in-the-loop\" patterns. The agent can pause execution, ask a human for permission (\"I am about to refund $500, proceed?\"), and then resume the graph with the new state.",
    section4Title: "4. Comparative Analysis: When to Use What?",
    tableCriteria: "Criteria",
    tableZapier: "Zapier / Make / n8n",
    tableLangGraph: "LangGraph",
    tableExecution: "Execution Model",
    tableExecutionZapier: "Linear, deterministic",
    tableExecutionLG: "Graph-based, stateful",
    tableSelfCorrect: "Self-Correction",
    tableSelfCorrectZapier: "None",
    tableSelfCorrectLG: "Built-in via loops",
    tableHuman: "Human-in-the-Loop",
    tableHumanZapier: "Limited (approval steps)",
    tableHumanLG: "Native support",
    tableCost: "Cost Predictability",
    tableCostZapier: "High (fixed steps)",
    tableCostLG: "Low (variable loops)",
    tableDebug: "Debugging",
    tableDebugZapier: "Easy (visual logs)",
    tableDebugLG: "Requires LangSmith",
    tableBest: "Best Use Case",
    tableBestZapier: "Workflow automation",
    tableBestLG: "Complex reasoning tasks",
    section5Title: "5. The Critical Missing Link: Data Mesh",
    section5P1: "A common failure mode in enterprise AI is connecting a brilliant agent (LangGraph) to a messy data swamp. Simple automations act on events (a new row in a spreadsheet). Complex agents need context (the entire history of a customer relationship).",
    section5P2: "This is where a Data Mesh architecture becomes essential.",
    monolith: "In a Monolith:",
    monolithDesc: "Data is trapped in one giant warehouse. An agent has to understand complex SQL schemas to find anything, leading to high hallucination rates.",
    mesh: "In a Data Mesh:",
    meshDesc: "Data is exposed as a product via clean APIs. The \"Sales Domain\" exposes a getCustomerContext(id) endpoint.",
    section5P3: "The agent doesn't need to be a SQL expert; it just needs to know which API to call. This decoupling allows you to swap out backend systems without breaking the agent's \"brain.\"",
    section6Title: "6. Strategic Recommendation: The \"Escalation Ladder\"",
    section6P1: "Do not build a custom LangGraph agent if a Zapier loop will suffice. The complexity cost is not worth it. Use the Escalation Ladder strategy:",
    level1: "Level 1: The Assistant",
    level1Desc: "Use n8n or Make with simple LLM nodes for tasks like \"Summarize this email.\" The logic is fixed; only the content varies.",
    level2: "Level 2: The Router",
    level2Desc: "Use Make to classify incoming requests and route them to different deterministic flows.",
    level3: "Level 3: The Agent",
    level3Desc: "If the workflow requires investigation, iteration, or state management, this requires LangGraph. But ensure you have LangSmith attached for observability: you need to see the \"thought trace\" to debug why the agent did what it did.",
    conclusion: "The future isn't about replacing engineers with AI; it's about engineering the systems that allow AI to safely do the heavy lifting.",
    referencesTitle: "Research & Sources",
  },
  de: {
    backToArticles: "Zur\u00fcck zu Artikeln",
    backToAllArticles: "Zur\u00fcck zu allen Artikeln",
    title: "Die Zukunft von KI-Agenten in Produktionssystemen",
    subtitle: "Architekturmuster, State-Management-Herausforderungen und die Realit\u00e4t des Deployments autonomer Agenten im gro\u00dfen Ma\u00dfstab.",
    date: "15. Aug 2025",
    readTime: "12 Min. Lesezeit",
    tag: "KI-Architektur",
    summaryTitle: "Zusammenfassung",
    summaryP1: "Wir befinden uns aktuell auf dem H\u00f6hepunkt des Generative-AI-Hypes. Jede SaaS-Plattform hat einen \"Copilot\" angeschraubt, und fast jeder Entwickler hat einen RAG-Wrapper gebaut. Aber wenn man genau hinschaut, sind 95% der heutigen Produktionssysteme immer noch nur ausgefeilte Q&A-Maschinen. Sie sind passiv. Sie warten auf Input, verarbeiten ihn und generieren Text.",
    summaryP2Start: "Die n\u00e4chste Phase der KI geht nicht nur um bessere Modelle; es geht um einen fundamentalen Architekturwandel. Es ist der Wechsel von ",
    summaryP2Bold1: "passiven Chatbots",
    summaryP2Mid: " zu ",
    summaryP2Bold2: "autonomen Agenten",
    summaryP2End: ": Systeme, die nicht nur sagen, wie etwas geht, sondern es tats\u00e4chlich tun.",
    section1Title: "1. Das Definitionsproblem: Was ist ein Agent?",
    section1P1: "Bevor wir \u00fcber die Zukunft sprechen, m\u00fcssen wir die Gegenwart definieren. Der Begriff \"Agent\" wird derzeit von Marketing-Abteilungen missbraucht, aber in technischer Hinsicht ist die Unterscheidung klar:",
    chatbotLabel: "Ein Chatbot",
    chatbotDesc: "antwortet auf einen Prompt. Seine Ausgabe ist Text f\u00fcr Menschen. Er ist zustandslos und reaktiv.",
    agentLabel: "Ein Agent",
    agentDesc: "verfolgt ein Ziel. Seine prim\u00e4re Ausgabe ist Aktion: Code ausf\u00fchren, APIs aufrufen, Datenbanken abfragen: um den Zustand eines Systems zu \u00e4ndern.",
    section1P2: "Das definierende Merkmal eines Agenten ist die Reasoning Loop (oft implementiert \u00fcber das ReAct-Pattern). Er beobachtet die Umgebung, bildet einen Gedanken dar\u00fcber, was als n\u00e4chstes zu tun ist, handelt danach, beobachtet das neue Ergebnis und wiederholt, bis das Ziel erreicht ist.",
    section1P3: "Es ist der Unterschied zwischen der Frage an einen Junior-Entwickler: \"Wie ist die Syntax f\u00fcr eine S3-Bucket-Policy?\" versus \"Stelle sicher, dass alle unsere \u00f6ffentlichen S3-Buckets auf privat gesetzt sind.\"",
    section2Title: "2. Die drei Reiter der Agenten-Apokalypse",
    section2P1: "Warum haben wir keine vollst\u00e4ndig autonomen DevOps-Agenten, die heute unsere Server reparieren? Weil traditionelle Software-Engineering-Prinzipien bei nicht-deterministischen Systemen versagen.",
    fragility: "Die Fragilit\u00e4t von Reasoning Loops",
    fragilityP1: "Traditionelle Software ist deterministisch: Input A f\u00fchrt immer zu Output B. Agenten sind probabilistisch. Sie k\u00f6nnen einem Agenten f\u00fcnfmal dasselbe Ziel geben, und er nimmt m\u00f6glicherweise f\u00fcnf verschiedene Wege: oder scheitert beim f\u00fcnften Versuch komplett, weil er einen nicht existierenden API-Parameter \"halluziniert\" hat.",
    fragilityBox: "Die Engineering-Herausforderung: Wir wechseln vom Schreiben von \"Logik\" zum Schreiben von \"Leitplanken\". Wir codieren nicht den Pfad; wir codieren die Grenzen des Pfads.",
    cost: "Die Kosten- und Latenz-Spirale",
    costP1: "In einer Standard-Web-App dauert ein API-Call Millisekunden. In einem agentischen System kann eine einzelne Benutzeranfrage eine Reasoning-Loop ausl\u00f6sen, die zehn separate LLM-Calls hintereinander erfordert, bevor eine finale Aktion ausgef\u00fchrt wird.",
    costP2: "Wenn ein Agent in einer Schleife stecken bleibt \u2013 wiederholt das falsche Tool versucht, scheitert und es erneut versucht \u2013 frustriert er nicht nur den Benutzer. Er verbrennt aktiv Geld.",
    security: "Der Sicherheits-Albtraum der Autonomie",
    securityP1: "Einem LLM Zugriff auf Tools zu geben, ist im Wesentlichen wie ihm eine Shell-Schnittstelle zu geben. Wenn Sie einem Agenten Schreibzugriff auf Ihre Produktionsdatenbank geben, sind Sie nur eine clevere Prompt-Injection-Attacke von einer Katastrophe entfernt.",
    securityP2Start: "Sicherheit kann nicht linguistisch sein (z.B. \"Bitte l\u00f6sche keine Tabellen\"); sie muss ",
    securityP2Bold: "architektonisch",
    securityP2End: " sein (z.B. der Datenbank-Benutzer f\u00fcr den Agenten hat buchst\u00e4blich keine DROP TABLE-Berechtigung).",
    section3Title: "3. Die Automatisierungslandschaft: Eine Geschichte zweier Stacks",
    section3P1: "F\u00fcr KI-Manager ist die kritischste Entscheidung nicht \"welches Modell\", sondern \"welche Architektur passt zum Problem\".",
    categoryA: "Kategorie A: Die deterministischen Orchestratoren",
    categoryABest: "Ideal f\u00fcr: \"Wenn dies, dann das\"-Workflows.",
    categoryAP1: "Tools wie Zapier und Make (ehemals Integromat) sind hervorragend zum Verbinden von Pipes. n8n bietet eine selbst-hostbare, entwicklerfreundliche Version.",
    categoryABox: "Die Einschr\u00e4nkung: Sie sind grunds\u00e4tzlich linear. Ihnen fehlt zustandsbehaftetes Reasoning. Wenn Sie ein Make-Szenario bitten, \"einen Wettbewerber zu recherchieren\", l\u00e4uft es Schritt A, dann Schritt B. Es kann nicht mittendrin erkennen, dass es mehr Daten braucht, zur\u00fcckschleifen, eine andere Suche starten und sich selbst korrigieren. Es ist eine \"Fire and Forget\"-Rakete, kein Pilot.",
    categoryB: "Kategorie B: Die kognitiven Architekturen",
    categoryBBest: "Ideal f\u00fcr: \"Finde heraus, wie man das l\u00f6st\"-Workflows.",
    categoryBP1: "LangChain liefert die Primitive, aber LangGraph ist der Game-Changer. Es modelliert einen Agenten nicht als Kette, sondern als State Machine.",
    howItWorks: "Wie es funktioniert:",
    howItWorksDesc: "Ein Agent betritt einen Graph: Start \u2192 Denken \u2192 Tool-Aufruf \u2192 State aktualisieren \u2192 Denken. Es geht weiter, bis der State die Exit-Bedingung erf\u00fcllt.",
    whyItMatters: "Warum es wichtig ist:",
    whyItMattersDesc: "Dies erm\u00f6glicht \"Human-in-the-Loop\"-Patterns. Der Agent kann die Ausf\u00fchrung pausieren, einen Menschen um Erlaubnis fragen (\"Ich bin dabei, 500\u20ac zu erstatten, fortfahren?\") und dann den Graph mit dem neuen State fortsetzen.",
    section4Title: "4. Vergleichende Analyse: Wann was verwenden?",
    tableCriteria: "Kriterium",
    tableZapier: "Zapier / Make / n8n",
    tableLangGraph: "LangGraph",
    tableExecution: "Ausf\u00fchrungsmodell",
    tableExecutionZapier: "Linear, deterministisch",
    tableExecutionLG: "Graph-basiert, zustandsbehaftet",
    tableSelfCorrect: "Selbstkorrektur",
    tableSelfCorrectZapier: "Keine",
    tableSelfCorrectLG: "Eingebaut via Loops",
    tableHuman: "Human-in-the-Loop",
    tableHumanZapier: "Begrenzt (Genehmigungsschritte)",
    tableHumanLG: "Native Unterst\u00fctzung",
    tableCost: "Kostenvorhersagbarkeit",
    tableCostZapier: "Hoch (feste Schritte)",
    tableCostLG: "Niedrig (variable Loops)",
    tableDebug: "Debugging",
    tableDebugZapier: "Einfach (visuelle Logs)",
    tableDebugLG: "Ben\u00f6tigt LangSmith",
    tableBest: "Bester Anwendungsfall",
    tableBestZapier: "Workflow-Automatisierung",
    tableBestLG: "Komplexe Reasoning-Aufgaben",
    section5Title: "5. Das kritische fehlende Glied: Data Mesh",
    section5P1: "Ein h\u00e4ufiger Fehlermodus in Enterprise-KI ist die Verbindung eines brillanten Agenten (LangGraph) mit einem chaotischen Data Swamp. Einfache Automatisierungen agieren auf Events (eine neue Zeile in einem Spreadsheet). Komplexe Agenten brauchen Kontext (die gesamte Historie einer Kundenbeziehung).",
    section5P2: "Hier wird eine Data-Mesh-Architektur essenziell.",
    monolith: "Im Monolith:",
    monolithDesc: "Daten sind in einem riesigen Warehouse gefangen. Ein Agent muss komplexe SQL-Schemas verstehen, um etwas zu finden, was zu hohen Halluzinationsraten f\u00fchrt.",
    mesh: "Im Data Mesh:",
    meshDesc: "Daten werden als Produkt \u00fcber saubere APIs exponiert. Die \"Sales Domain\" stellt einen getCustomerContext(id)-Endpoint bereit.",
    section5P3: "Der Agent muss kein SQL-Experte sein; er muss nur wissen, welche API er aufrufen soll. Diese Entkopplung erm\u00f6glicht es, Backend-Systeme auszutauschen, ohne das \"Gehirn\" des Agenten zu zerst\u00f6ren.",
    section6Title: "6. Strategische Empfehlung: Die \"Eskalationsleiter\"",
    section6P1: "Bauen Sie keinen benutzerdefinierten LangGraph-Agenten, wenn eine Zapier-Loop ausreicht. Die Komplexit\u00e4tskosten lohnen sich nicht. Verwenden Sie die Eskalationsleiter-Strategie:",
    level1: "Level 1: Der Assistent",
    level1Desc: "Verwenden Sie n8n oder Make mit einfachen LLM-Nodes f\u00fcr Aufgaben wie \"Diese E-Mail zusammenfassen\". Die Logik ist fest; nur der Inhalt variiert.",
    level2: "Level 2: Der Router",
    level2Desc: "Verwenden Sie Make, um eingehende Anfragen zu klassifizieren und an verschiedene deterministische Flows weiterzuleiten.",
    level3: "Level 3: Der Agent",
    level3Desc: "Wenn der Workflow Investigation, Iteration oder State-Management erfordert, brauchen Sie LangGraph. Aber stellen Sie sicher, dass LangSmith f\u00fcr Observability angebunden ist: Sie m\u00fcssen den \"Thought Trace\" sehen, um zu debuggen, warum der Agent getan hat, was er getan hat.",
    conclusion: "Die Zukunft geht nicht darum, Ingenieure durch KI zu ersetzen; es geht darum, Systeme zu entwickeln, die es KI erm\u00f6glichen, sicher die schwere Arbeit zu erledigen.",
    referencesTitle: "Quellen & Referenzen",
  },
}

function FutureOfAIAgentsContent() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <main className="relative min-h-screen bg-zinc-950">
      <GrainOverlay />

      {/* Background gradient orb */}
      <div className="pointer-events-none fixed inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-32 h-[600px] w-[800px] rounded-full bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-cyan-600/10 blur-3xl" />
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
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-indigo-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToArticles}
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
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
          className="mb-12 rounded-r-lg border-l-4 border-indigo-500 bg-zinc-900/50 p-6 backdrop-blur-md"
        >
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-indigo-400">
            {t.summaryTitle}
          </h2>
          <p className="italic leading-relaxed text-zinc-300">
            {t.summaryP1}
          </p>
          <p className="mt-4 italic leading-relaxed text-zinc-300">
            {t.summaryP2Start}<strong className="text-zinc-50">{t.summaryP2Bold1}</strong>{t.summaryP2Mid}<strong className="text-zinc-50">{t.summaryP2Bold2}</strong>{t.summaryP2End}
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
              {t.section1P1}
            </p>
            <ul className="mb-4 space-y-3 text-zinc-300">
              <li className="flex gap-2">
                <span className="text-indigo-400">&bull;</span>
                <span><strong className="text-zinc-50">{t.chatbotLabel}</strong> {t.chatbotDesc}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">&bull;</span>
                <span><strong className="text-zinc-50">{t.agentLabel}</strong> {t.agentDesc}</span>
              </li>
            </ul>
            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section1P2}
            </p>
            <p className="leading-relaxed text-zinc-300">
              {t.section1P3}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section2Title}
            </h2>
            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section2P1}
            </p>

            <h3 className="mb-3 font-mono text-xl font-semibold text-zinc-100">
              {t.fragility}
            </h3>
            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.fragilityP1}
            </p>
            <p className="mb-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-zinc-300">
              <strong className="text-indigo-400">{t.fragilityBox.split(":")[0]}:</strong>{t.fragilityBox.substring(t.fragilityBox.indexOf(":"))}
            </p>

            <h3 className="mb-3 font-mono text-xl font-semibold text-zinc-100">
              {t.cost}
            </h3>
            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.costP1}
            </p>
            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.costP2}
            </p>

            <h3 className="mb-3 font-mono text-xl font-semibold text-zinc-100">
              {t.security}
            </h3>
            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.securityP1}
            </p>
            <p className="leading-relaxed text-zinc-300">
              {t.securityP2Start}<strong className="text-zinc-50">{t.securityP2Bold}</strong>{t.securityP2End}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section3Title}
            </h2>
            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section3P1}
            </p>

            <h3 className="mb-3 font-mono text-xl font-semibold text-zinc-100">
              {t.categoryA}
            </h3>
            <p className="mb-2 text-sm font-medium text-indigo-400">
              {t.categoryABest}
            </p>
            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.categoryAP1}
            </p>
            <p className="mb-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-zinc-300">
              <strong className="text-indigo-400">{t.categoryABox.split(":")[0]}:</strong>{t.categoryABox.substring(t.categoryABox.indexOf(":"))}
            </p>

            <h3 className="mb-3 font-mono text-xl font-semibold text-zinc-100">
              {t.categoryB}
            </h3>
            <p className="mb-2 text-sm font-medium text-indigo-400">
              {t.categoryBBest}
            </p>
            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.categoryBP1}
            </p>
            <ul className="mb-4 space-y-3 text-zinc-300">
              <li className="flex gap-2">
                <span className="text-indigo-400">&bull;</span>
                <span><strong className="text-zinc-50">{t.howItWorks}</strong> {t.howItWorksDesc}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">&bull;</span>
                <span><strong className="text-zinc-50">{t.whyItMatters}</strong> {t.whyItMattersDesc}</span>
              </li>
            </ul>
          </section>

          {/* Section 4 - Comparison Table */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section4Title}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg border border-zinc-800">
                <thead>
                  <tr className="bg-zinc-900">
                    <th className="border-b border-zinc-800 px-4 py-3 text-left font-mono text-sm font-semibold text-zinc-50">
                      {t.tableCriteria}
                    </th>
                    <th className="border-b border-zinc-800 px-4 py-3 text-left font-mono text-sm font-semibold text-indigo-400">
                      {t.tableZapier}
                    </th>
                    <th className="border-b border-zinc-800 px-4 py-3 text-left font-mono text-sm font-semibold text-cyan-400">
                      {t.tableLangGraph}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 font-medium text-zinc-300">{t.tableExecution}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableExecutionZapier}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableExecutionLG}</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 font-medium text-zinc-300">{t.tableSelfCorrect}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableSelfCorrectZapier}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableSelfCorrectLG}</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 font-medium text-zinc-300">{t.tableHuman}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableHumanZapier}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableHumanLG}</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 font-medium text-zinc-300">{t.tableCost}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableCostZapier}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableCostLG}</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 font-medium text-zinc-300">{t.tableDebug}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableDebugZapier}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableDebugLG}</td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-900/50">
                    <td className="border-b border-zinc-800 px-4 py-3 font-medium text-zinc-300">{t.tableBest}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableBestZapier}</td>
                    <td className="border-b border-zinc-800 px-4 py-3 text-zinc-400">{t.tableBestLG}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section5Title}
            </h2>
            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section5P1}
            </p>
            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section5P2}
            </p>
            <ul className="mb-4 space-y-3 text-zinc-300">
              <li className="flex gap-2">
                <span className="text-indigo-400">&bull;</span>
                <span><strong className="text-zinc-50">{t.monolith}</strong> {t.monolithDesc}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">&bull;</span>
                <span><strong className="text-zinc-50">{t.mesh}</strong> {t.meshDesc}</span>
              </li>
            </ul>
            <p className="leading-relaxed text-zinc-300">
              {t.section5P3}
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section6Title}
            </h2>
            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section6P1}
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-indigo-400">
                  {t.level1}
                </h4>
                <p className="text-zinc-300">
                  {t.level1Desc}
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-indigo-400">
                  {t.level2}
                </h4>
                <p className="text-zinc-300">
                  {t.level2Desc}
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <h4 className="mb-2 font-mono text-sm font-semibold text-indigo-400">
                  {t.level3}
                </h4>
                <p className="text-zinc-300">
                  {t.level3Desc}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="rounded-lg border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-transparent p-6">
            <p className="text-lg leading-relaxed text-zinc-200">
              {t.conclusion}
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
                  href="https://www.langchain.com/langgraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-indigo-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-indigo-500/20 font-mono text-xs text-indigo-400">1</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">LangGraph: Build Stateful Multi-Actor Applications</p>
                      <p className="mt-1 text-xs text-zinc-500">LangChain Documentation</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2210.03629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-indigo-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-indigo-500/20 font-mono text-xs text-indigo-400">2</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">ReAct: Synergizing Reasoning and Acting in Language Models</p>
                      <p className="mt-1 text-xs text-zinc-500">arXiv, 2022</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://docs.smith.langchain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-indigo-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-indigo-500/20 font-mono text-xs text-indigo-400">3</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">LangSmith: Debugging and Observability for LLM Applications</p>
                      <p className="mt-1 text-xs text-zinc-500">LangChain Documentation</p>
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
            className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-indigo-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToAllArticles}
          </Link>
        </motion.footer>
      </article>
    </main>
  )
}

export default function FutureOfAIAgentsPage() {
  return (
    <LanguageProvider>
      <FutureOfAIAgentsContent />
    </LanguageProvider>
  )
}
