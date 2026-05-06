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
    id: 'misinformation',
    title: 'Misinformation Detection with NLP',
    category: 'NLP Research',
    description: 'A comprehensive pipeline for detecting fake news and misinformation using transformer models, graph neural networks, and multi-modal features. Achieved state-of-the-art results on multiple benchmark datasets.',
    tags: ['NLP', 'PyTorch', 'Transformers', 'Graph Neural Networks', 'BERT'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Active Research',
    highlights: ['98.2% accuracy on FakeNewsNet', 'Cross-domain generalization', 'Explainable AI components'],
  },
  {
    id: 'mindfulness',
    title: 'Math Anxiety & Mindfulness Study',
    category: 'Educational Data Science',
    description: 'Statistical analysis of how contemplative practices (meditation, mindfulness, breathing exercises) affect mathematical performance, anxiety levels, and long-term retention in undergraduate students.',
    tags: ['R', 'Statistics', 'Education Research', 'Data Visualization'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Published',
    highlights: ['N=240 participants', 'Randomized controlled study', 'Bayesian analysis'],
  },
  {
    id: 'sentiment',
    title: 'Sentiment Analysis Pipeline',
    category: 'Machine Learning',
    description: 'End-to-end sentiment analysis system with fine-tuned language models, handling multilingual text, sarcasm detection, and aspect-based sentiment for educational content moderation.',
    tags: ['Python', 'NLP', 'FastAPI', 'Docker', 'Multilingual'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Deployed',
    highlights: ['Multilingual support (15+ languages)', 'Real-time inference API', 'Sarcasm detection'],
  },
  {
    id: 'dashboard',
    title: 'Student Learning Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Interactive dashboard for visualizing student learning patterns, identifying at-risk students early, and providing actionable insights for instructors and administrators.',
    tags: ['Python', 'Plotly', 'Dash', 'SQL', 'Machine Learning'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Production',
    highlights: ['Real-time data pipeline', 'ML-powered risk scoring', 'FERPA compliant'],
  },
  {
    id: 'knowledge-graph',
    title: 'Mathematical Knowledge Graph',
    category: 'NLP + Education',
    description: 'Automatically extract and link mathematical concepts from textbooks and research papers to build a navigable knowledge graph for personalized learning pathways.',
    tags: ['NLP', 'Knowledge Graphs', 'Neo4j', 'Python', 'SpaCy'],
    github: 'https://github.com/sanjaykshetri',
    status: 'In Progress',
    highlights: ['500K+ concept nodes', 'Auto-curriculum generation', 'Semantic search'],
  },
  {
    id: 'llm-tutor',
    title: 'AI Math Tutor (LLM-Powered)',
    category: 'AI/Education',
    description: 'Fine-tuned large language model for step-by-step mathematics tutoring, with Socratic dialogue, error detection, and personalized hint generation.',
    tags: ['LLMs', 'Fine-tuning', 'RAG', 'Education AI', 'OpenAI'],
    github: 'https://github.com/sanjaykshetri',
    status: 'Beta',
    highlights: ['Socratic method implementation', 'Common error detection', 'Adaptive difficulty'],
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
