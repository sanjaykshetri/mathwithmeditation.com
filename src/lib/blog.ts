import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readTime: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      const wordCount = content.split(/\s+/).length
      const readTime = `${Math.ceil(wordCount / 200)} min read`
      
      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        excerpt: data.excerpt || content.substring(0, 150) + '...',
        tags: data.tags || [],
        readTime,
        content,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  
  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const wordCount = content.split(/\s+/).length
    const readTime = `${Math.ceil(wordCount / 200)} min read`
    
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      tags: data.tags || [],
      readTime,
      content,
    }
  } catch {
    return null
  }
}
