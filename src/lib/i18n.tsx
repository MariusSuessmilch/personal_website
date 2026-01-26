"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "de" | "en"

interface Translations {
  hero: {
    subtitle: string
    headline1: string
    headline2: string
    description: string
    cta: string
    viewWork: string
    scroll: string
  }
  skills: {
    label: string
    title: string
    aiEngineering: {
      title: string
      description: string
      tags: string[]
    }
    llmOps: {
      title: string
      description: string
      tags: string[]
    }
    productStrategy: {
      title: string
      description: string
      tags: string[]
    }
    systemDesign: {
      title: string
      description: string
      tags: string[]
    }
    teamLeadership: {
      title: string
      description: string
      tags: string[]
    }
  }
  projects: {
    label: string
    title: string
    items: {
      title: string
      description: string
      tags: string[]
      link?: string
    }[]
  }
  writing: {
    label: string
    title: string
    articles: {
      title: string
      excerpt: string
      date: string
      readTime: string
      tags: string[]
      link?: string
    }[]
  }
  philosophy: {
    label: string
    title: string
    paragraphs: string[]
    cta: string
  }
  footer: {
    copyright: string
  }
}

const translations: Record<Language, Translations> = {
  de: {
    hero: {
      subtitle: "Senior KI-Engineer & Technical Lead",
      headline1: "Architektur für",
      headline2: "Intelligenz.",
      description:
        "Spezialisiert auf den Weg von LLMs vom Prototyp zur Produktion. Ich überbrücke die Lücke zwischen Forschung und skalierbarem Product Engineering.",
      cta: "Kontakt aufnehmen",
      viewWork: "Projekte ansehen",
      scroll: "Scrollen",
    },
    skills: {
      label: "Kompetenzen",
      title: "Die Mind Map",
      aiEngineering: {
        title: "KI-Engineering",
        description:
          "Entwicklung und Deployment von produktionsreifen KI-Systemen. Von Modellarchitektur bis zur Inferenz-Optimierung.",
        tags: ["LLMs", "ML Pipelines", "RAG Systeme"],
      },
      llmOps: {
        title: "LLM Ops",
        description:
          "End-to-End LLM Lifecycle Management. Fine-Tuning, Evaluation und Deployment im großen Maßstab.",
        tags: ["Fine-tuning", "Evaluation", "Monitoring"],
      },
      productStrategy: {
        title: "Produktstrategie",
        description:
          "Brücke zwischen technischen Möglichkeiten und Marktbedürfnissen. KI-Produkte, die Nutzer lieben.",
        tags: ["Roadmapping", "User Research", "GTM"],
      },
      systemDesign: {
        title: "System Design",
        description:
          "Architektur skalierbarer, resilienter Systeme, die Millionen von Anfragen souverän verarbeiten.",
        tags: ["Verteilte Systeme", "APIs", "Cloud"],
      },
      teamLeadership: {
        title: "Team Leadership",
        description:
          "Aufbau hochperformanter Engineering-Teams. Mentoring, Hiring und Etablierung einer Engineering-Kultur.",
        tags: ["Mentorship", "Hiring", "Kultur"],
      },
    },
    projects: {
      label: "Portfolio",
      title: "Ausgewählte Arbeiten",
      items: [
        {
          title: "KI macht Schule",
          description:
            "Co-Founder einer Initiative, die KI-Bildung an deutsche Schulen bringt. Bundesweite Skalierung mit Partnern wie Google und PwC.",
          tags: ["EdTech", "Strategie", "Non-Profit"],
          link: "https://ki-macht-schule.de/",
        },
        {
          title: "Biometric Privacy & Vision",
          description:
            "Forschung zur Robustheit neuronaler Netze gegen Verdeckungen. Veröffentlichung vergleichender Studien zur \"Masked Face Recognition\"-Performance während der Pandemie.",
          tags: ["PyTorch", "Computer Vision", "Forschung"],
        },
        {
          title: "Autonomous Edge Robotics",
          description:
            "Entwicklung eines Reinforcement-Learning-Stacks für selbstfahrende Fahrzeuge auf NVIDIA Jetson Nano Hardware. Deployment in 6 europäischen Ländern.",
          tags: ["Reinforcement Learning", "Edge AI", "IoT"],
        },
        {
          title: "Enterprise AI Architecture",
          description:
            "Design von Data-Governance-Frameworks und Predictive-Maintenance-Use-Cases für internationale Automobil- und Pharmakunden.",
          tags: ["System Design", "Architektur", "Strategie"],
        },
      ],
    },
    writing: {
      label: "Texte",
      title: "Gedanken & Essays",
      articles: [
        {
          title: "Data Mesh: Der verborgene Motor der KI",
          excerpt:
            "Warum Ihre KI-Agenten scheitern: Sie versuchen, aus einem Sumpf zu trinken. Das Modell ist nicht der Engpass, die Datenarchitektur ist es.",
          date: "2026-01-10",
          readTime: "15 Min. Lesezeit",
          tags: ["Datenarchitektur", "KI-Agenten"],
          link: "/writing/data-mesh-the-hidden-engine",
        },
        {
          title: "Prompt Engineering, das wirklich funktioniert",
          excerpt:
            "Hören Sie auf, dem Modell zu sagen, es soll 'wie Steve Jobs handeln.' Die technische Realität zuverlässiger Prompts.",
          date: "2025-12-05",
          readTime: "8 Min. Lesezeit",
          tags: ["KI-Engineering", "Prompts"],
          link: "/writing/prompt-engineering-that-actually-works",
        },
        {
          title: "Die Zukunft von KI-Agenten in Produktionssystemen",
          excerpt:
            "Architekturmuster und Herausforderungen beim Deployment autonomer KI-Agenten im großen Maßstab.",
          date: "2025-08-15",
          readTime: "12 Min. Lesezeit",
          tags: ["KI-Agenten", "Architektur"],
          link: "/writing/future-of-ai-agents",
        },
        {
          title: "Warum RAG-Systeme scheitern (und wie man sie repariert)",
          excerpt:
            "Häufige Fallstricke bei Retrieval-Augmented Generation und praktische Strategien für robuste Systeme.",
          date: "2025-06-12",
          readTime: "10 Min. Lesezeit",
          tags: ["RAG", "LLMs"],
          link: "/writing/why-rag-systems-fail",
        },
        {
          title: "Algorithmische Grundlagen: Gradient Descent",
          excerpt:
            "Hinter ChatGPT, Midjourney und jedem modernen neuronalen Netzwerk steckt eine einfache, mächtige Idee: das \"Tal\" zu finden.",
          date: "2025-04-15",
          readTime: "12 Min. Lesezeit",
          tags: ["KI-Grundlagen", "Algorithmen"],
          link: "/writing/gradient-descent-explained",
        },
      ],
    },
    philosophy: {
      label: "Prinzipien",
      title: "Engineering Prinzipien",
      paragraphs: [
        "Die besten KI-Systeme sind unsichtbar. Sie fordern keine Aufmerksamkeit, sondern funktionieren einfach.",
        "Mein Fokus liegt auf der stabilen Infrastruktur, die das erst ermöglicht. Ich schätze einfache Architektur mehr als cleveren Code. Jedes System, das ich baue, muss von Menschen lesbar, von Teams wartbar und von Nutzern vertrauenswürdig sein.",
        "Ich arbeite dort, wo Forschung auf Produktion trifft. Genau dort, wo Komplexität oft Projekte scheitern lässt und wo Einfachheit den größten Wert schafft.",
      ],
      cta: "Meine Texte lesen",
    },
    footer: {
      copyright: "Mit Intention gebaut",
    },
  },
  en: {
    hero: {
      subtitle: "Senior AI Engineer & Technical Lead",
      headline1: "Architecting",
      headline2: "Intelligence.",
      description:
        "Specializing in moving LLMs from prototype to production. I bridge the gap between research science and scalable product engineering.",
      cta: "Get in Touch",
      viewWork: "View Work",
      scroll: "Scroll",
    },
    skills: {
      label: "Capabilities",
      title: "The Mind Map",
      aiEngineering: {
        title: "AI Engineering",
        description:
          "Designing and deploying production-grade AI systems. From model architecture to inference optimization.",
        tags: ["LLMs", "ML Pipelines", "RAG Systems"],
      },
      llmOps: {
        title: "LLM Ops",
        description:
          "End-to-end LLM lifecycle management. Fine-tuning, evaluation, and deployment at scale.",
        tags: ["Fine-tuning", "Evaluation", "Monitoring"],
      },
      productStrategy: {
        title: "Product Strategy",
        description:
          "Bridging technical capabilities with market needs. Building AI products that users love.",
        tags: ["Roadmapping", "User Research", "GTM"],
      },
      systemDesign: {
        title: "System Design",
        description:
          "Architecting scalable, resilient systems that handle millions of requests with grace.",
        tags: ["Distributed Systems", "APIs", "Cloud"],
      },
      teamLeadership: {
        title: "Team Leadership",
        description:
          "Growing high-performance engineering teams. Mentoring, hiring, and establishing engineering culture.",
        tags: ["Mentorship", "Hiring", "Culture"],
      },
    },
    projects: {
      label: "Portfolio",
      title: "Selected Works",
      items: [
        {
          title: "KI macht Schule",
          description:
            "Co-Founder of an initiative bringing AI education to German schools. Scaled to nationwide adoption with partners like Google and PwC.",
          tags: ["EdTech", "Strategy", "Non-Profit"],
          link: "https://ki-macht-schule.de/",
        },
        {
          title: "Biometric Privacy & Vision",
          description:
            "Researching neural network robustness against occlusions. Published comparative studies on \"Masked Face Recognition\" performance during the pandemic.",
          tags: ["PyTorch", "Computer Vision", "Research"],
        },
        {
          title: "Autonomous Edge Robotics",
          description:
            "Developed a Reinforcement Learning stack for self-driving vehicles on NVIDIA Jetson Nano hardware. Deployed across 6 European countries.",
          tags: ["Reinforcement Learning", "Edge AI", "IoT"],
        },
        {
          title: "Enterprise AI Architecture",
          description:
            "Designing data governance frameworks and predictive maintenance use-cases for international automotive and pharma clients.",
          tags: ["System Design", "Architecture", "Strategy"],
        },
      ],
    },
    writing: {
      label: "Writing",
      title: "Thoughts & Essays",
      articles: [
        {
          title: "Data Mesh: The Hidden Engine of AI",
          excerpt:
            "Why your AI Agents are failing: They are trying to drink from a swamp. The model is not the bottleneck, the data architecture is.",
          date: "2026-01-10",
          readTime: "15 min read",
          tags: ["Data Architecture", "AI Agents"],
          link: "/writing/data-mesh-the-hidden-engine",
        },
        {
          title: "Prompt Engineering That Actually Works",
          excerpt:
            "Stop telling the model to 'Act as Steve Jobs.' The engineering reality of reliable prompting.",
          date: "2025-12-05",
          readTime: "8 min read",
          tags: ["AI Engineering", "Prompts"],
          link: "/writing/prompt-engineering-that-actually-works",
        },
        {
          title: "The Future of AI Agents in Production Systems",
          excerpt:
            "Exploring the architectural patterns and challenges of deploying autonomous AI agents at scale.",
          date: "2025-08-15",
          readTime: "12 min read",
          tags: ["AI Agents", "Architecture"],
          link: "/writing/future-of-ai-agents",
        },
        {
          title: "Why RAG Systems Fail (And How to Fix Them)",
          excerpt:
            "Common pitfalls in retrieval-augmented generation and practical strategies for building robust systems.",
          date: "2025-06-12",
          readTime: "10 min read",
          tags: ["RAG", "LLMs"],
          link: "/writing/why-rag-systems-fail",
        },
        {
          title: "Algorithmic Fundamentals: Gradient Descent",
          excerpt:
            "Behind ChatGPT, Midjourney, and every modern neural network lies one simple, powerful idea for finding the \"bottom of the valley.\"",
          date: "2025-04-15",
          readTime: "12 min read",
          tags: ["AI Fundamentals", "Algorithms"],
          link: "/writing/gradient-descent-explained",
        },
      ],
    },
    philosophy: {
      label: "Principles",
      title: "Engineering Principles",
      paragraphs: [
        "The best AI systems are invisible. They do not demand attention; they just work.",
        "My focus is building the boring, reliable infrastructure that makes this possible. I value simple architecture over clever code. Every system I build is designed to be read by humans, maintained by teams, and trusted by users.",
        "I operate where research meets production. This is where complexity usually kills projects, and where simplicity creates the most value.",
      ],
      cta: "Read my writing",
    },
    footer: {
      copyright: "Built with intention",
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isHydrated, setIsHydrated] = useState(false)

  // Read from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null
    if (stored && (stored === "de" || stored === "en")) {
      setLanguageState(stored)
    }
    setIsHydrated(true)
  }, [])

  // Persist to localStorage when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  // Prevent hydration mismatch by rendering with default until hydrated
  if (!isHydrated) {
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "de" ? "en" : "de")}
      className="fixed right-6 top-6 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2 font-mono text-sm backdrop-blur-md transition-all hover:border-white/20 hover:bg-zinc-800/80"
    >
      <span className={language === "de" ? "text-zinc-50" : "text-zinc-500"}>DE</span>
      <span className="text-zinc-600">/</span>
      <span className={language === "en" ? "text-zinc-50" : "text-zinc-500"}>EN</span>
    </button>
  )
}
