"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { GrainOverlay } from "@/components/grain-overlay"
import { SGDVisualizer } from "@/components/sgd-visualizer"
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
    title: "Algorithmic Fundamentals:",
    titleGradient: "Gradient Descent",
    subtitle: "Behind ChatGPT, Midjourney, and every modern neural network lies one simple, powerful idea for finding the \"bottom of the valley.\"",
    date: "Apr 15, 2025",
    readTime: "12 min read",
    tag: "AI Fundamentals",
    summaryTitle: "Executive Summary",
    summaryP1: "If you strip away the massive datasets, the thousand-GPU clusters, and the complex transformer architectures of modern AI, you are left with a single mathematical problem:",
    summaryP1Bold: "Optimization",
    summaryP2: "How do you tweak billions of parameters until the network stops making mistakes? The answer isn't magic. It's an algorithm used for decades called",
    summaryP2Bold: "Gradient Descent",
    summaryP2End: ". This post explains how it works without drowning you in calculus.",
    section1Title: "1. The Goal: Making Mistakes Smaller",
    section1P1: "At its core, training a neural network is just trying to minimize errors.",
    section1P2Start: "We measure this error using a",
    section1P2Bold: "Loss Function",
    section1P2End: ". Think of the Loss Function as a judge that gives the model a score based on how bad its predictions are.",
    section1Li1: "Prediction is perfect? Loss is near 0.",
    section1Li2: "Prediction is terrible? Loss is very high.",
    section1P3: "The goal of training is simple: find the exact combination of network weights that results in the lowest possible Loss.",
    section2Title: "2. The Analogy: The Hiker in the Fog",
    section2P1: "Imagine you are standing on a vast, complex mountain range. Thick fog surrounds you; you can only see three feet in front of you.",
    section2P2: "Your goal is to get to the absolute lowest point in the entire landscape (the \"Global Minimum\" loss).",
    section2P3: "You don't have a map. You don't know where the bottom is. So, what do you do?",
    section2Li1: "You feel the ground around your feet with your toe.",
    section2Li2: "You find the direction that is steepest downhill.",
    section2Li3: "You take a small step in that direction.",
    section2Li4: "You repeat the process.",
    section2P4: "This is exactly what Gradient Descent does mathematically.",
    mountain: "The Mountain:",
    mountainDesc: "The Loss Landscape (all possible error values).",
    coordinates: "Your Coordinates:",
    coordinatesDesc: "The current values of the network's parameters (weights).",
    steepness: "The Steepness:",
    steepnessDesc: "The Gradient (calculated via calculus/backpropagation).",
    stepSize: "The Step Size:",
    stepSizeDesc: "The Learning Rate.",
    section2P5: "If your step size is too big, you might overshoot the valley and jump to the other side. If it's too small, it will take 10,000 years to get to the bottom.",
    section3Title: "3. Reality Check: Stochastic Gradient Descent (SGD)",
    section3P1: "In the analogy above, to find the perfect downhill direction, you'd have to check the entire mountain topography at once.",
    section3P2: "In AI terms, this means running every single piece of data you have through the model just to figure out one single step. For massive datasets, this is impossibly slow.",
    section3P3Bold: "The solution: approximate.",
    section3P4: "Instead of evaluating the entire landscape, we sample a small subset of data points (a \"mini-batch\"), compute the loss for just those few, and estimate the downhill direction based on this limited but representative view.",
    section3P5Start: "This is called",
    section3P5Bold: "Stochastic Gradient Descent (SGD)",
    section3P5End: ". \"Stochastic\" refers to the probabilistic sampling of training data—we trade perfect information for computational efficiency.",
    section3P6: "Because we are approximating based on limited data, our path down the mountain isn't a smooth, straight line. It's noisy; it oscillates. But on average, it converges toward the minimum faster because we take many quick, iterative steps instead of one perfect but computationally expensive step.",
    section3P7: "Here is a visualization of that noisy path in action on a 2D loss landscape:",
    vizCaption: "A top-down view of SGD taking noisy steps toward the center minimum.",
    conclusionTitle: "Conclusion",
    conclusionP1: "Gradient Descent is the workhorse of the AI revolution. While researchers constantly invent new architectures and activation functions, the underlying mechanism for learning remains surprisingly simple:",
    conclusionP1Bold: "feel the slope, take a step down, and repeat billions of times",
  },
  de: {
    backToHome: "Zurück zu Artikeln",
    backToArticles: "Zurück zu allen Artikeln",
    title: "Algorithmische Grundlagen:",
    titleGradient: "Gradient Descent",
    subtitle: "Hinter ChatGPT, Midjourney und jedem modernen neuronalen Netzwerk steckt eine einfache, mächtige Idee: das \"Tal\" zu finden.",
    date: "15. Apr 2025",
    readTime: "12 Min. Lesezeit",
    tag: "KI-Grundlagen",
    summaryTitle: "Zusammenfassung",
    summaryP1: "Wenn man die massiven Datensätze, die Tausenden von GPUs und die komplexen Transformer-Architekturen moderner KI weglässt, bleibt ein einziges mathematisches Problem übrig:",
    summaryP1Bold: "Optimierung",
    summaryP2: "Wie justiert man Milliarden von Parametern, bis das Netzwerk aufhört, Fehler zu machen? Die Antwort ist keine Magie. Es ist ein seit Jahrzehnten verwendeter Algorithmus namens",
    summaryP2Bold: "Gradient Descent",
    summaryP2End: ". Dieser Artikel erklärt, wie es funktioniert - ohne Sie in Kalkülen zu ertränken.",
    section1Title: "1. Das Ziel: Fehler minimieren",
    section1P1: "Im Kern geht es beim Training eines neuronalen Netzwerks nur darum, Fehler zu minimieren.",
    section1P2Start: "Wir messen diesen Fehler mit einer",
    section1P2Bold: "Verlustfunktion (Loss Function)",
    section1P2End: ". Stellen Sie sich die Verlustfunktion als einen Richter vor, der dem Modell eine Punktzahl gibt, basierend darauf, wie schlecht seine Vorhersagen sind.",
    section1Li1: "Vorhersage ist perfekt? Verlust ist nahe 0.",
    section1Li2: "Vorhersage ist schlecht? Verlust ist sehr hoch.",
    section1P3: "Das Ziel des Trainings ist einfach: Finde die exakte Kombination von Netzwerkgewichten, die zum niedrigstmöglichen Verlust führt.",
    section2Title: "2. Die Analogie: Der Wanderer im Nebel",
    section2P1: "Stellen Sie sich vor, Sie stehen auf einem weiten, komplexen Gebirge. Dichter Nebel umgibt Sie; Sie können nur einen Meter vor sich sehen.",
    section2P2: "Ihr Ziel ist es, zum absolut tiefsten Punkt der gesamten Landschaft zu gelangen (das \"Globale Minimum\" des Verlusts).",
    section2P3: "Sie haben keine Karte. Sie wissen nicht, wo der Boden ist. Also, was tun Sie?",
    section2Li1: "Sie fühlen den Boden um Ihre Füße mit der Zehe.",
    section2Li2: "Sie finden die Richtung, die am steilsten bergab führt.",
    section2Li3: "Sie machen einen kleinen Schritt in diese Richtung.",
    section2Li4: "Sie wiederholen den Prozess.",
    section2P4: "Genau das macht Gradient Descent mathematisch.",
    mountain: "Der Berg:",
    mountainDesc: "Die Verlustlandschaft (alle möglichen Fehlerwerte).",
    coordinates: "Ihre Koordinaten:",
    coordinatesDesc: "Die aktuellen Werte der Netzwerkparameter (Gewichte).",
    steepness: "Die Steilheit:",
    steepnessDesc: "Der Gradient (berechnet via Backpropagation).",
    stepSize: "Die Schrittgröße:",
    stepSizeDesc: "Die Lernrate (Learning Rate).",
    section2P5: "Wenn Ihre Schrittgröße zu groß ist, könnten Sie das Tal überspringen und auf der anderen Seite landen. Wenn sie zu klein ist, dauert es 10.000 Jahre, um unten anzukommen.",
    section3Title: "3. Realitätscheck: Stochastic Gradient Descent (SGD)",
    section3P1: "In der obigen Analogie müssten Sie, um die perfekte Abwärtsrichtung zu finden, die gesamte Bergtopographie auf einmal prüfen.",
    section3P2: "In KI-Begriffen bedeutet das, jeden einzelnen Datenpunkt durch das Modell zu schicken, nur um einen einzigen Schritt zu bestimmen. Für massive Datensätze ist das unmöglich langsam.",
    section3P3Bold: "Die Lösung: Approximation.",
    section3P4: "Anstatt die gesamte Landschaft zu evaluieren, ziehen wir eine kleine Stichprobe von Datenpunkten (einen \"Mini-Batch\"), berechnen den Verlust nur für diese wenigen und schätzen die Abwärtsrichtung basierend auf dieser begrenzten, aber repräsentativen Sicht.",
    section3P5Start: "Das nennt man",
    section3P5Bold: "Stochastic Gradient Descent (SGD)",
    section3P5End: ". \"Stochastisch\" bezeichnet die probabilistische Stichprobenziehung aus den Trainingsdaten—wir tauschen perfekte Information gegen Recheneffizienz.",
    section3P6: "Da wir auf Basis begrenzter Daten approximieren, ist unser Weg den Berg hinunter keine glatte, gerade Linie. Er ist verrauscht, er oszilliert. Aber im Durchschnitt konvergiert er schneller zum Minimum, weil wir viele schnelle, iterative Schritte machen statt eines perfekten, aber rechenintensiven Schritts.",
    section3P7: "Hier ist eine Visualisierung dieses verrauschten Pfads auf einer 2D-Verlustlandschaft:",
    vizCaption: "Eine Draufsicht auf SGD, der verrauschte Schritte zum zentralen Minimum macht.",
    conclusionTitle: "Fazit",
    conclusionP1: "Gradient Descent ist das Arbeitspferd der KI-Revolution. Während Forscher ständig neue Architekturen und Aktivierungsfunktionen erfinden, bleibt der zugrundeliegende Lernmechanismus überraschend einfach:",
    conclusionP1Bold: "Fühle die Steigung, mach einen Schritt nach unten, und wiederhole das Milliarden Male",
  },
}

function GradientDescentContent() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <main className="relative min-h-screen bg-zinc-950">
      <GrainOverlay />

      {/* Background gradient orb */}
      <div className="pointer-events-none fixed inset-0 flex items-start justify-center overflow-hidden">
        <div className="mt-32 h-[600px] w-[800px] rounded-full bg-gradient-to-br from-cyan-600/10 via-lime-600/10 to-emerald-600/10 blur-3xl" />
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
            <span className="text-zinc-50">{t.title}</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
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

        {/* Executive Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 rounded-r-lg border-l-4 border-cyan-500 bg-zinc-900/50 p-6 backdrop-blur-md"
        >
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400">
            {t.summaryTitle}
          </h2>
          <p className="leading-relaxed text-zinc-300">
            {t.summaryP1} <strong className="text-zinc-50">{t.summaryP1Bold}</strong>.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {t.summaryP2} <strong className="text-cyan-300">{t.summaryP2Bold}</strong>{t.summaryP2End}
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

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section1P2Start} <InlineCode>{t.section1P2Bold}</InlineCode>{t.section1P2End}
            </p>

            <ul className="mb-4 space-y-2 text-zinc-300">
              <li className="flex gap-2">
                <span className="text-lime-400">•</span>
                <span>{t.section1Li1}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>{t.section1Li2}</span>
              </li>
            </ul>

            <p className="leading-relaxed text-zinc-300">
              {t.section1P3}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section2Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section2P1}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section2P2}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section2P3}
            </p>

            <ol className="mb-6 space-y-2 text-zinc-300">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 font-mono text-xs text-cyan-400">1</span>
                <span>{t.section2Li1}</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 font-mono text-xs text-cyan-400">2</span>
                <span>{t.section2Li2}</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 font-mono text-xs text-cyan-400">3</span>
                <span>{t.section2Li3}</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 font-mono text-xs text-cyan-400">4</span>
                <span>{t.section2Li4}</span>
              </li>
            </ol>

            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section2P4}
            </p>

            <div className="mb-6 rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-4">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong className="text-zinc-50">{t.mountain}</strong> {t.mountainDesc}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong className="text-zinc-50">{t.coordinates}</strong> {t.coordinatesDesc}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong className="text-zinc-50">{t.steepness}</strong> {t.steepnessDesc}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong className="text-zinc-50">{t.stepSize}</strong> {t.stepSizeDesc}</span>
                </li>
              </ul>
            </div>

            <p className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 leading-relaxed text-zinc-300">
              <strong className="text-amber-400">⚠️</strong> {t.section2P5}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-zinc-50">
              {t.section3Title}
            </h2>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P1}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P2}
            </p>

            <p className="mb-4 text-lg font-semibold text-lime-400">
              {t.section3P3Bold}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P4}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P5Start} <InlineCode>{t.section3P5Bold}</InlineCode>{t.section3P5End}
            </p>

            <p className="mb-4 leading-relaxed text-zinc-300">
              {t.section3P6}
            </p>

            <p className="mb-6 leading-relaxed text-zinc-300">
              {t.section3P7}
            </p>

            {/* SGD Visualizer */}
            <div className="my-12">
              <SGDVisualizer />
              <p className="mt-3 text-center font-mono text-xs text-zinc-500">
                {t.vizCaption}
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="rounded-lg border border-lime-500/30 bg-gradient-to-br from-lime-500/10 to-transparent p-6">
            <h2 className="mb-4 font-mono text-xl font-bold text-zinc-50">
              {t.conclusionTitle}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-200">
              {t.conclusionP1} <strong className="text-lime-300">{t.conclusionP1Bold}</strong>.
            </p>
          </section>

          {/* References */}
          <section className="mt-12 border-t border-zinc-800 pt-8">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {language === "de" ? "Quellen & Referenzen" : "Research & Sources"}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.deeplearningbook.org/contents/optimization.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-cyan-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-cyan-500/20 font-mono text-xs text-cyan-400">1</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">Deep Learning Book: Optimization for Training Deep Models</p>
                      <p className="mt-1 text-xs text-zinc-500">Goodfellow, Bengio, Courville (MIT Press)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/1609.04836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-cyan-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-cyan-500/20 font-mono text-xs text-cyan-400">2</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">An Overview of Gradient Descent Optimization Algorithms</p>
                      <p className="mt-1 text-xs text-zinc-500">Sebastian Ruder (arXiv, 2016)</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://cs231n.github.io/optimization-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-cyan-500/30 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-cyan-500/20 font-mono text-xs text-cyan-400">3</span>
                    <div>
                      <p className="font-mono text-sm text-zinc-300">CS231n: Optimization - Stochastic Gradient Descent</p>
                      <p className="mt-1 text-xs text-zinc-500">Stanford University</p>
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

export default function GradientDescentPage() {
  return (
    <LanguageProvider>
      <GradientDescentContent />
    </LanguageProvider>
  )
}
