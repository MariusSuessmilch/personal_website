"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GrainOverlay } from "@/components/grain-overlay"
import { AnimatedGradient } from "@/components/animated-gradient"
import { BentoCard } from "@/components/bento-card"
import { ProjectCard } from "@/components/project-card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { LanguageProvider, LanguageSwitcher, useLanguage } from "@/lib/i18n"
import {
  Brain,
  Sparkles,
  Layers,
  Cpu,
  Target,
  Users,
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Calendar,
  Clock,
} from "lucide-react"

// Hero Section
function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-20">
      <AnimatedGradient />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-zinc-300">
              {t.hero.subtitle}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 font-mono text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {t.hero.headline1}
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
              {t.hero.headline2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-zinc-400 lg:mx-0"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="mailto:marius.suessmilch@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)]"
            >
              <Mail className="h-4 w-4" />
              {t.hero.cta}
            </a>
          </motion.div>
        </div>

        {/* Right Column - Portrait Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* Gradient glow behind image */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
            <div className="h-[400px] w-[300px] rounded-2xl bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-indigo-500/30 blur-3xl" />
          </div>

          {/* Image container with 3:4 aspect ratio */}
          <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm lg:max-w-[320px]">
            <Image
              src="/portrait.jpg"
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />

            {/* Tech-style overlay lines */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Skills Bento Grid Section
function SkillsSection() {
  const { t } = useLanguage()

  const skills = [
    {
      title: t.skills.aiEngineering.title,
      description: t.skills.aiEngineering.description,
      icon: Brain,
      tags: t.skills.aiEngineering.tags,
      glowColor: "purple" as const,
      className: "md:col-span-2",
    },
    {
      title: t.skills.llmOps.title,
      description: t.skills.llmOps.description,
      icon: Cpu,
      tags: t.skills.llmOps.tags,
      glowColor: "cyan" as const,
    },
    {
      title: t.skills.productStrategy.title,
      description: t.skills.productStrategy.description,
      icon: Target,
      tags: t.skills.productStrategy.tags,
      glowColor: "lime" as const,
    },
    {
      title: t.skills.systemDesign.title,
      description: t.skills.systemDesign.description,
      icon: Layers,
      tags: t.skills.systemDesign.tags,
      glowColor: "purple" as const,
    },
    {
      title: t.skills.teamLeadership.title,
      description: t.skills.teamLeadership.description,
      icon: Users,
      tags: t.skills.teamLeadership.tags,
      glowColor: "cyan" as const,
      className: "md:col-span-2",
    },
  ]

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-purple-400">
            {t.skills.label}
          </p>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            {t.skills.title}
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <BentoCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection({ id }: { id?: string }) {
  const { t } = useLanguage()

  return (
    <section id={id} className="relative scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
            {t.projects.label}
          </p>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.projects.items.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Writing Section
function WritingSection({ id }: { id?: string }) {
  const { t, language } = useLanguage()

  return (
    <section id={id} className="relative scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-fuchsia-400">
            {t.writing.label}
          </p>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            {t.writing.title}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {t.writing.articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-fuchsia-500/30 hover:bg-zinc-900/70"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 font-mono text-xl font-semibold text-zinc-50 transition-colors group-hover:text-fuchsia-300">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString(
                        language === "de" ? "de-DE" : "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                    <div className="flex gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-700 bg-zinc-100/10 px-2 py-0.5 text-zinc-50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <ArrowRight className="hidden h-5 w-5 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-fuchsia-400 sm:block" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Philosophy Section
function PhilosophySection() {
  const { t } = useLanguage()

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-lime-400">
            {t.philosophy.label}
          </p>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            {t.philosophy.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed text-zinc-400"
        >
          {t.philosophy.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Button variant="ghost" size="lg" className="text-zinc-400 hover:text-zinc-50" asChild>
            <a href="#writing">
              <Sparkles className="h-4 w-4" />
              {t.philosophy.cta}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Section
function FooterSection() {
  const { t } = useLanguage()

  return (
    <footer className="relative px-6 py-12">
      <Separator className="mb-12" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} &mdash; {t.footer.copyright}
        </p>

        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-zinc-50" asChild>
            <a href="https://github.com/MariusSuessmilch" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-zinc-50" asChild>
            <a href="https://www.linkedin.com/in/marius-suessmilch/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-zinc-50" asChild>
            <a href="mailto:marius.suessmilch@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

// Page Content
function PageContent() {
  return (
    <main className="relative min-h-screen bg-zinc-950">
      <GrainOverlay />
      <LanguageSwitcher />

      <HeroSection />

      <Separator />

      <SkillsSection />

      <Separator />

      <ProjectsSection id="projects" />

      <Separator />

      <WritingSection id="writing" />

      <Separator />

      <PhilosophySection />

      <FooterSection />
    </main>
  )
}

// Main Page with Provider
export default function Home() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  )
}
