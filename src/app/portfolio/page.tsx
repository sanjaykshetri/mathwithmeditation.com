import { Metadata } from 'next'
import { Code, BarChart3 } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Data science portfolio: NLP, misinformation detection, machine learning, and interactive dashboards.',
}

const projects = [
  {
    id: 'trustshield',
    title: 'TrustShield',
    category: 'Trust and Risk Analytics',
    description: 'An AI platform that unifies fraud detection, review integrity scoring, and misinformation analysis into a shared risk workflow with model explainability and monitoring.',
    tags: ['Machine Learning', 'Risk Analytics', 'Explainable AI', 'Monitoring'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Production Ready',
    highlights: ['Unified risk contract design', 'End-to-end fraud module', 'Dashboard and monitoring'],
  },
  {
    id: 'tentacles',
    title: 'Tentacles of Misinformation',
    category: 'NLP and Misinformation',
    description: 'A machine learning and NLP pipeline for identifying misinformation patterns across content and sources, designed with interpretable outputs for analysts.',
    tags: ['NLP', 'Misinformation Detection', 'Classification', 'Interpretability'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Research to Product',
    highlights: ['Text and source signals', 'Model explainability', 'Trust and safety focus'],
  },
  {
    id: 'teacher-assistant',
    title: 'Teacher Assistant Dashboard',
    category: 'Education Analytics',
    description: 'An analytics dashboard that surfaces learner performance trends and early-risk indicators to support faster instructional intervention and better outcomes.',
    tags: ['Analytics', 'Dashboards', 'Early Risk Detection', 'Education'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Deployed',
    highlights: ['At-risk student insights', 'Actionable instructor views', 'Data-informed intervention'],
  },
  {
    id: 'emotion-recommender',
    title: 'Emotion-Based Book Recommender',
    category: 'NLP Recommender Systems',
    description: 'A semantic-embedding recommendation engine that maps user emotion and intent to personalized reading suggestions.',
    tags: ['NLP', 'Semantic Embeddings', 'Recommendation Systems', 'Personalization'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Prototype',
    highlights: ['Emotion-aware ranking', 'Embedding similarity search', 'Human-centered recommendations'],
  },
  {
    id: 'published-research',
    title: 'Published Research',
    category: 'Behavioral Science',
    description: 'Published behavioral research exploring face masks, first impressions, race, and time-related social perception through quantitative analysis.',
    tags: ['Behavioral Science', 'Research Methods', 'Statistics', 'Publication'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Published',
    highlights: ['Peer-reviewed output', 'Experimental design rigor', 'Cross-domain relevance to AI ethics'],
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-xl flex items-center justify-center">
              <BarChart3 size={24} className="text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">Portfolio</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-1">
                Data Science Projects
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Research and engineering at the intersection of NLP, machine learning, and educational technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="p-6 flex flex-col" id={project.id}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <Badge variant={
                    project.status === 'Active Research' ? 'primary' :
                    project.status === 'Published' ? 'success' :
                    project.status === 'Deployed' || project.status === 'Production' ? 'success' :
                    'default'
                  }>
                    {project.status}
                  </Badge>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((h) => (
                      <li key={h} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-primary-500 rounded-full flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    <Code size={15} />
                    View Code
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
