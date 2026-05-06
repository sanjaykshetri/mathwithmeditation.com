import { Metadata } from 'next'
import { BookOpen, Download, Play, Calculator } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Teaching Resources',
  description: 'Free mathematics teaching resources: worksheets, lesson plans, visualizations, and PDFs.',
}

const resources = [
  {
    id: 'calculus-basics',
    title: 'Introduction to Limits',
    type: 'PDF Worksheet',
    subject: 'Calculus',
    level: 'Undergraduate',
    description: 'A step-by-step worksheet introducing the concept of limits with visual explanations and practice problems.',
    downloadUrl: '#',
    pages: 12,
  },
  {
    id: 'linear-algebra',
    title: 'Matrix Operations & Transformations',
    type: 'PDF Worksheet',
    subject: 'Linear Algebra',
    level: 'Undergraduate',
    description: 'Hands-on worksheet covering matrix multiplication, inverses, and geometric interpretations of linear transformations.',
    downloadUrl: '#',
    pages: 16,
  },
  {
    id: 'stats-intro',
    title: 'Probability & Statistics Starter Pack',
    type: 'Lesson Bundle',
    subject: 'Statistics',
    level: 'High School / Intro College',
    description: 'Complete lesson bundle with slides, worksheets, and activities for a 2-week introduction to probability and statistics.',
    downloadUrl: '#',
    pages: 45,
  },
  {
    id: 'meditation-math',
    title: 'Mindful Math: A Student Workbook',
    type: 'PDF Workbook',
    subject: 'Study Skills',
    level: 'All Levels',
    description: 'A unique workbook combining mathematical problem-solving strategies with mindfulness techniques for reducing math anxiety.',
    downloadUrl: '#',
    pages: 30,
  },
]

const visualizations = [
  {
    id: 'derivatives',
    title: 'Understanding Derivatives Visually',
    description: 'Interactive exploration of derivatives as slopes of tangent lines. Drag to explore different functions.',
    subject: 'Calculus',
    type: 'Interactive',
    href: '#',
  },
  {
    id: 'fourier',
    title: 'Fourier Series Decomposition',
    description: 'Visual and audible exploration of how complex waves decompose into simple sinusoids.',
    subject: 'Analysis',
    type: 'Interactive',
    href: '#',
  },
  {
    id: 'eigen',
    title: 'Eigenvalues & Eigenvectors',
    description: 'Geometric interpretation of eigendecomposition through animated linear transformations.',
    subject: 'Linear Algebra',
    type: 'Interactive',
    href: '#',
  },
]

export default function TeachingPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-xl flex items-center justify-center">
              <BookOpen size={24} className="text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">Teaching</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-1">
                Teaching Resources
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Free worksheets, lesson materials, visualizations, and resources for mathematics education.
          </p>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="section-padding bg-white dark:bg-gray-950" id="resources">
        <div className="section-container">
          <SectionHeader
            label="Materials"
            title="Downloadable Resources"
            description="Free, high-quality materials for students and educators."
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="success">{resource.type}</Badge>
                      <Badge variant="default">{resource.subject}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-2">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{resource.level} · {resource.pages} pages</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {resource.description}
                </p>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                >
                  <Download size={15} />
                  Download Free
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Visualizations */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900" id="visualizations">
        <div className="section-container">
          <SectionHeader
            label="Visualizations"
            title="Interactive Math Explorations"
            description="Visual, hands-on tools for building mathematical intuition."
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visualizations.map((viz) => (
              <Card key={viz.id} className="p-6 group cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <Badge variant="primary" className="mb-3">{viz.subject}</Badge>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{viz.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{viz.description}</p>
                <a href={viz.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors">
                  <Play size={14} />
                  Launch Visualization
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
