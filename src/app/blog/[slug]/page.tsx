import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Badge } from '@/components/ui/Badge'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const processedContent = await remark().use(remarkHtml).process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <div className="pt-16">
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    <Tag size={10} className="mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-code:text-primary-600 dark:prose-code:text-primary-400"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors">
              <ArrowLeft size={16} />
              More Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
