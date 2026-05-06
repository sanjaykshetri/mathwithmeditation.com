import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Tag, PenSquare } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on mathematics, data science, AI, mindfulness, and contemplative learning.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950 rounded-xl flex items-center justify-center">
              <PenSquare size={24} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Blog</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-1">
                Articles & Reflections
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Writing on mathematics, AI research, learning science, and the contemplative dimensions of intellectual life.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 dark:text-gray-500">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="p-6 group cursor-pointer">
                    <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="default">
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
