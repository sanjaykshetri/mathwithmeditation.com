import { Metadata } from 'next'
import { Tv, Play, ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Media',
  description: 'YouTube videos, lectures, and media from Math with Meditation.',
}

const playlists = [
  {
    id: 'ml-fundamentals',
    title: 'Machine Learning Fundamentals',
    description: 'A complete series covering the mathematical foundations of machine learning — from linear algebra to neural networks.',
    videoCount: 24,
    thumbnail: null,
    tags: ['ML', 'Mathematics', 'Education'],
  },
  {
    id: 'mindful-math',
    title: 'Mindful Mathematics',
    description: 'Short practice-oriented videos combining mathematical problem-solving with mindfulness techniques.',
    videoCount: 12,
    thumbnail: null,
    tags: ['Meditation', 'Mathematics', 'Practice'],
  },
  {
    id: 'nlp-explained',
    title: 'NLP Explained',
    description: 'Making natural language processing accessible — conceptual explanations with minimal jargon.',
    videoCount: 18,
    thumbnail: null,
    tags: ['NLP', 'AI', 'Education'],
  },
]

const featuredVideos = [
  {
    id: 'v1',
    title: 'Why Mathematics and Meditation are the Same Practice',
    description: 'The surprising structural parallels between mathematical proof and contemplative attention.',
    duration: '18:32',
    youtubeId: null,
    tags: ['Philosophy', 'Mathematics'],
  },
  {
    id: 'v2',
    title: 'Introduction to Transformer Architecture',
    description: 'A clear, visual explanation of how attention mechanisms work in modern language models.',
    duration: '24:15',
    youtubeId: null,
    tags: ['NLP', 'Deep Learning'],
  },
  {
    id: 'v3',
    title: 'Detecting Fake News with Machine Learning',
    description: 'A technical walkthrough of our misinformation detection research methodology.',
    duration: '31:08',
    youtubeId: null,
    tags: ['Research', 'NLP'],
  },
]

export default function MediaPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-xl flex items-center justify-center">
              <Tv size={24} className="text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">Media</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-1">
                YouTube & Media
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Video lectures, tutorials, and explorations in mathematics, AI, and contemplative practice.
          </p>
          <a
            href="https://youtube.com/@mathwithmeditation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Tv size={16} />
            Subscribe on YouTube
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeader
            label="Featured"
            title="Recent Videos"
            description="Selected recent content from the channel."
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden group cursor-pointer">
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {video.tags.map((tag) => (
                      <Badge key={tag} variant="default">{tag}</Badge>
                    ))}
                    <span className="ml-auto text-xs text-gray-400">{video.duration}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{video.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeader
            label="Series"
            title="Video Playlists"
            description="Complete learning series organized by topic."
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {playlists.map((playlist) => (
              <Card key={playlist.id} className="p-6">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4">
                  <Tv size={20} className="text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{playlist.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{playlist.description}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">{playlist.videoCount} videos</p>
                <div className="flex flex-wrap gap-2">
                  {playlist.tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
