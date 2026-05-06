import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Math with Meditation',
    template: '%s | Math with Meditation',
  },
  description: 'Combining mathematics education, data science, AI-powered tools, and contemplative practice. A platform for intellectual depth and inner clarity.',
  keywords: ['mathematics', 'meditation', 'data science', 'AI', 'education', 'NLP', 'machine learning'],
  authors: [{ name: 'Sanjay Kshetri' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mathwithmeditation.com',
    siteName: 'Math with Meditation',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
