import { Metadata } from 'next'
import { Brain, Lightbulb, Heart, BookOpen } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Philosophy',
  description: 'The Math with Meditation philosophy: where mathematical rigor meets contemplative depth.',
}

const principles = [
  {
    icon: Brain,
    title: 'Clear Seeing',
    description: 'Mathematics is fundamentally about seeing clearly — recognizing patterns, relationships, and structure. Meditation cultivates the same clarity of attention. Together, they produce a mind capable of genuine insight.',
    color: 'text-primary-500',
    bg: 'bg-primary-50 dark:bg-primary-950',
  },
  {
    icon: BookOpen,
    title: 'Dwelling in Uncertainty',
    description: 'The most creative mathematical work happens in the space of not-knowing. Contemplative practice teaches us to inhabit uncertainty without anxiety — to stay present with an unsolved problem as long as necessary.',
    color: 'text-meditation-500',
    bg: 'bg-meditation-50 dark:bg-meditation-950',
  },
  {
    icon: Lightbulb,
    title: 'Embodied Understanding',
    description: 'Mathematical intuition is not purely abstract — it is grounded in embodied experience. Mindfulness, by deepening body awareness, can actually sharpen mathematical intuition and make abstractions more viscerally comprehensible.',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950',
  },
  {
    icon: Heart,
    title: 'Compassionate Rigor',
    description: 'Mathematical rigor need not be cold or intimidating. When combined with compassionate pedagogy and an understanding of the emotional dimensions of learning, rigor becomes liberating rather than constraining.',
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950',
  },
]

const quotes = [
  {
    text: "To do mathematics is to engage in an act of discovery and conjecture, intuition and inspiration.",
    author: "William Thurston",
  },
  {
    text: "Attention is the rarest and purest form of generosity.",
    author: "Simone Weil",
  },
  {
    text: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
    author: "Albert Einstein",
  },
]

export default function PhilosophyPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-meditation-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="section-container text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-meditation-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
            <Brain size={32} />
          </div>
          <p className="text-sm font-semibold text-meditation-600 dark:text-meditation-400 uppercase tracking-wider mb-3">Philosophy</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Math with Meditation
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A philosophy of learning that integrates the precision of mathematics with the clarity of contemplative practice. 
            Not as a novelty, but as a return to how the deepest thinking has always worked.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Core Principles"
            title="The Four Pillars"
            description="The philosophical foundations underlying the Math with Meditation approach."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((principle) => (
              <Card key={principle.title} className="p-6">
                <div className={`w-12 h-12 ${principle.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <principle.icon size={24} className={principle.color} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{principle.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Essay */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="Manifesto"
              title="Why This Matters"
              centered={false}
            />
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We are living through a crisis of attention. The information environment fragments our focus; 
                the educational system rewards performance over understanding; the technology industry profits 
                from distraction. Into this context, mathematics and meditation offer a counterpractice.
              </p>
              <p>
                Mathematics, studied honestly, demands we stay present with a problem until we genuinely understand it — 
                not just memorize a procedure. This is cognitively demanding, emotionally challenging, and 
                increasingly rare in a world optimized for speed and surface.
              </p>
              <p>
                Meditation, practiced seriously, trains exactly the quality mathematics requires: sustained, 
                non-judgmental attention to what is actually happening, rather than our story about what is happening. 
                A student who can watch their confusion without panic, who can return to a difficult proof 
                after distraction without self-recrimination — that student will learn mathematics more deeply 
                than any technique can teach.
              </p>
              <p>
                This platform exists to explore and share these connections — through research, teaching resources, 
                essays, and the ongoing practice of both disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Voices"
            title="Inspiring Perspectives"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quotes.map((quote) => (
              <Card key={quote.author} className="p-6">
                <blockquote className="text-gray-600 dark:text-gray-300 italic leading-relaxed mb-4 font-serif text-lg">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <cite className="text-sm font-medium text-gray-500 dark:text-gray-400 not-italic">
                  — {quote.author}
                </cite>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
