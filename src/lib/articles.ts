export interface Article {
  slug: string
  title: {
    en: string
    de: string
  }
  excerpt: {
    en: string
    de: string
  }
  date: string
  readTime: {
    en: string
    de: string
  }
  tags: {
    en: string[]
    de: string[]
  }
}

export const ARTICLES: Article[] = [
  {
    slug: "/writing/engineering-reliable-agents-with-ragas",
    title: {
      en: "Engineering Reliable Agents with Ragas",
      de: "Entwicklung verlässlicher KI-Agenten mit Ragas",
    },
    excerpt: {
      en: "Moving beyond the \"Vibe Check\" by instrumenting LangChain agents with the RAG Triad metrics.",
      de: "Jenseits des \"Vibe Check\": LangChain-Agenten mit den RAG-Triad-Metriken instrumentieren.",
    },
    date: "2026-01-24",
    readTime: {
      en: "10 min read",
      de: "10 Min. Lesezeit",
    },
    tags: {
      en: ["Agents", "Testing", "Ragas", "LangChain"],
      de: ["Agenten", "Testing", "Ragas", "LangChain"],
    },
  },
  {
    slug: "/writing/data-mesh-the-hidden-engine",
    title: {
      en: "Data Mesh: The Hidden Engine of AI",
      de: "Data Mesh: Der verborgene Motor der KI",
    },
    excerpt: {
      en: "Why your AI Agents are failing: They are trying to drink from a swamp. The model is not the bottleneck, the data architecture is.",
      de: "Warum Ihre KI-Agenten scheitern: Sie versuchen, aus einem Sumpf zu trinken. Das Modell ist nicht der Engpass, die Datenarchitektur ist es.",
    },
    date: "2026-01-10",
    readTime: {
      en: "15 min read",
      de: "15 Min. Lesezeit",
    },
    tags: {
      en: ["Data Architecture", "AI Agents"],
      de: ["Datenarchitektur", "KI-Agenten"],
    },
  },
  {
    slug: "/writing/prompt-engineering-that-actually-works",
    title: {
      en: "Prompt Engineering That Actually Works",
      de: "Prompt Engineering, das wirklich funktioniert",
    },
    excerpt: {
      en: "Stop telling the model to 'Act as Steve Jobs.' The engineering reality of reliable prompting.",
      de: "Hören Sie auf, dem Modell zu sagen, es soll 'wie Steve Jobs handeln.' Die technische Realität zuverlässiger Prompts.",
    },
    date: "2025-12-05",
    readTime: {
      en: "8 min read",
      de: "8 Min. Lesezeit",
    },
    tags: {
      en: ["AI Engineering", "Prompts"],
      de: ["KI-Engineering", "Prompts"],
    },
  },
  {
    slug: "/writing/future-of-ai-agents",
    title: {
      en: "The Future of AI Agents in Production Systems",
      de: "Die Zukunft von KI-Agenten in Produktionssystemen",
    },
    excerpt: {
      en: "Exploring the architectural patterns and challenges of deploying autonomous AI agents at scale.",
      de: "Architekturmuster und Herausforderungen beim Deployment autonomer KI-Agenten im großen Maßstab.",
    },
    date: "2025-08-15",
    readTime: {
      en: "12 min read",
      de: "12 Min. Lesezeit",
    },
    tags: {
      en: ["AI Agents", "Architecture"],
      de: ["KI-Agenten", "Architektur"],
    },
  },
  {
    slug: "/writing/why-rag-systems-fail",
    title: {
      en: "Why RAG Systems Fail (And How to Fix Them)",
      de: "Warum RAG-Systeme scheitern (und wie man sie repariert)",
    },
    excerpt: {
      en: "Common pitfalls in retrieval-augmented generation and practical strategies for building robust systems.",
      de: "Häufige Fallstricke bei Retrieval-Augmented Generation und praktische Strategien für robuste Systeme.",
    },
    date: "2025-06-12",
    readTime: {
      en: "10 min read",
      de: "10 Min. Lesezeit",
    },
    tags: {
      en: ["RAG", "LLMs"],
      de: ["RAG", "LLMs"],
    },
  },
  {
    slug: "/writing/gradient-descent-explained",
    title: {
      en: "Algorithmic Fundamentals: Gradient Descent",
      de: "Algorithmische Grundlagen: Gradient Descent",
    },
    excerpt: {
      en: "Behind ChatGPT, Midjourney, and every modern neural network lies one simple, powerful idea for finding the \"bottom of the valley.\"",
      de: "Hinter ChatGPT, Midjourney und jedem modernen neuronalen Netzwerk steckt eine einfache, mächtige Idee: das \"Tal\" zu finden.",
    },
    date: "2025-04-15",
    readTime: {
      en: "12 min read",
      de: "12 Min. Lesezeit",
    },
    tags: {
      en: ["AI Fundamentals", "Algorithms"],
      de: ["KI-Grundlagen", "Algorithmen"],
    },
  },
]

// Helper to get localized article data
export function getLocalizedArticle(article: Article, language: "en" | "de") {
  return {
    slug: article.slug,
    title: article.title[language],
    excerpt: article.excerpt[language],
    date: article.date,
    readTime: article.readTime[language],
    tags: article.tags[language],
  }
}

// Format date based on language
export function formatArticleDate(dateStr: string, language: "en" | "de"): string {
  const date = new Date(dateStr)
  if (language === "de") {
    return date.toLocaleDateString("de-DE", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
