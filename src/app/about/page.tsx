import { Metadata } from 'next'
import { GraduationCap, Code, BookOpen, Heart } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Sanjay Kshetri — data scientist, mathematics educator, and contemplative practitioner.',
}

const skills = {
  'Data Science & ML': ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'NLP', 'Transformers', 'Graph Neural Networks'],
  'Mathematics': ['Statistics', 'Linear Algebra', 'Calculus', 'Probability Theory', 'Mathematical Modeling'],
  'Teaching': ['Curriculum Design', 'Active Learning', 'Math Visualization', 'Educational Technology'],
  'Tools': ['React', 'Next.js', 'TypeScript', 'SQL', 'R', 'Tableau', 'Git'],
}

const timeline = [
  {
    year: '2024',
    title: 'Research in Misinformation Detection',
    description: 'Leading NLP research on fake news detection using large language models.',
    icon: Code,
  },
  {
    year: '2022',
    title: 'Mathematics Educator',
    description: 'Began teaching mathematics with an emphasis on conceptual understanding and student wellbeing.',
    icon: GraduationCap,
  },
  {
    year: '2020',
    title: 'Started Contemplative Practice',
    description: 'Integrated meditation and mindfulness into daily learning and teaching routines.',
    icon: Heart,
  },
  {
    year: '2018',
    title: 'Data Science Journey Begins',
    description: 'Began exploring machine learning, statistics, and their applications in education.',
    icon: BookOpen,
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">About</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Sanjay Kshetri
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Data Scientist · Mathematics Educator · Contemplative Practitioner
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              I work at the intersection of mathematics, artificial intelligence, and contemplative practice. 
              My research focuses on NLP and misinformation detection, while my teaching philosophy integrates 
              mindfulness to cultivate deeper mathematical understanding. I believe that the clarity of mind 
              cultivated through meditation is the same clarity needed to truly understand mathematics.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Expertise"
            title="Skills & Knowledge"
            description="A blend of technical depth and pedagogical breadth."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="default">{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeader
            label="Journey"
            title="My Path"
            description="A timeline of learning, teaching, and discovery."
          />
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-950 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 mt-2" />
                  )}
                </div>
                <div className="pb-8 last:pb-0">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">{item.year}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mt-1 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
