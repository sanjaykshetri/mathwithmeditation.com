import Link from 'next/link'
import { ArrowRight, Brain, BookOpen, BarChart3, Sparkles, Code, Tv } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const highlights = [
  {
    icon: BarChart3,
    title: 'Data Science Portfolio',
    description: 'NLP research, misinformation detection, ML case studies, and embedded interactive dashboards.',
    href: '/portfolio',
    color: 'text-primary-500',
    bg: 'bg-primary-50 dark:bg-primary-950',
  },
  {
    icon: BookOpen,
    title: 'Teaching Resources',
    description: 'Downloadable worksheets, lesson plans, PDFs, and interactive math visualizations.',
    href: '/teaching',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-950',
  },
  {
    icon: Brain,
    title: 'Math with Meditation',
    description: 'A contemplative approach to mathematical thinking — where rigor meets inner stillness.',
    href: '/philosophy',
    color: 'text-meditation-500',
    bg: 'bg-meditation-50 dark:bg-meditation-950',
  },
  {
    icon: Sparkles,
    title: 'Blog & Articles',
    description: 'Reflections on mathematics, AI, learning science, and the intersection of data and wisdom.',
    href: '/blog',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950',
  },
]

const featuredProjects = [
  {
    title: 'Misinformation Detection with NLP',
    description: 'Deep learning pipeline for detecting fake news using transformer models and graph neural networks.',
    tags: ['NLP', 'PyTorch', 'Transformers'],
    href: '/portfolio#misinformation',
  },
  {
    title: 'Math Anxiety & Mindfulness Study',
    description: 'Data-driven analysis of how contemplative practices affect mathematical performance in students.',
    tags: ['Data Science', 'Statistics', 'Education'],
    href: '/portfolio#mindfulness',
  },
  {
    title: 'Interactive Calculus Visualizer',
    description: 'Real-time visual explorations of limits, derivatives, and integrals for intuitive learning.',
    tags: ['JavaScript', 'Education', 'Visualization'],
    href: '/teaching#visualizations',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-meditation-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-meditation-200 dark:bg-meditation-900/20 rounded-full blur-3xl opacity-30" />

        <div className="relative section-container text-center py-24 pt-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 mb-8 shadow-sm">
            <Sparkles size={14} className="text-meditation-500" />
            Mathematics · Data Science · Contemplative Practice
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Math with{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-meditation-600 dark:from-primary-400 dark:via-primary-300 dark:to-meditation-400 bg-clip-text text-transparent">
              Meditation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Where mathematical rigor meets inner clarity. Explore data science, AI education,
            teaching resources, and a contemplative approach to learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/portfolio" className="btn-primary text-base px-8 py-4">
              View Portfolio
              <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="btn-secondary text-base px-8 py-4">
              Learn More
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-400 dark:text-gray-500">
            <a href="https://github.com/sanjaykshetri" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <Code size={16} />
              GitHub
            </a>
            <span className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
            <a href="https://youtube.com/@mathwithmeditation" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <Tv size={16} />
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Explore"
            title="A Platform for Deep Learning"
            description="Combining technical expertise with contemplative wisdom — for those who seek both analytical precision and holistic understanding."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="p-6 h-full group cursor-pointer">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <item.icon size={24} className={item.color} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeader
            label="Featured Work"
            title="Selected Projects"
            description="Highlights from the intersection of mathematics, machine learning, and education."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.href} href={project.href}>
                <Card className="p-6 h-full group cursor-pointer">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="primary">{tag}</Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-primary">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-meditation-600 dark:from-primary-800 dark:to-meditation-800 text-white">
        <div className="section-container text-center">
          <p className="text-primary-200 text-sm font-semibold uppercase tracking-wider mb-4">The Core Philosophy</p>
          <blockquote className="text-2xl md:text-4xl font-serif font-light italic max-w-4xl mx-auto leading-relaxed mb-8">
            &ldquo;Mathematics is not just computation — it is a form of clear seeing. Meditation is not just relaxation — it is disciplined attention. Together, they cultivate the most powerful learning state.&rdquo;
          </blockquote>
          <Link href="/philosophy" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg font-medium transition-colors">
            Explore the Philosophy
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
