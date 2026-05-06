import { Metadata } from 'next'
import { Mail, Code, Tv, MessageSquare } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Math with Meditation for collaborations, questions, or just to connect.',
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For research collaborations, speaking inquiries, or general questions.',
    value: 'hello@mathwithmeditation.com',
    href: 'mailto:hello@mathwithmeditation.com',
    color: 'text-primary-500',
    bg: 'bg-primary-50 dark:bg-primary-950',
  },
  {
    icon: Code,
    title: 'GitHub',
    description: 'Explore code, contribute to projects, or open an issue.',
    value: 'github.com/sanjaykshetri',
    href: 'https://github.com/sanjaykshetri',
    color: 'text-gray-700 dark:text-gray-300',
    bg: 'bg-gray-100 dark:bg-gray-800',
  },
  {
    icon: Tv,
    title: 'YouTube',
    description: 'Subscribe for videos on mathematics, AI, and contemplative learning.',
    value: '@mathwithmeditation',
    href: 'https://youtube.com/@mathwithmeditation',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950',
  },
]

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="section-container">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-xl flex items-center justify-center">
              <MessageSquare size={24} className="text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">Contact</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-1">
                Get in Touch
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            I welcome conversations about research collaborations, teaching partnerships, speaking engagements, or simply connecting with others interested in mathematics and contemplative practice.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <a key={method.title} href={method.href} target={method.href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer">
                <Card className="p-6 h-full group cursor-pointer">
                  <div className={`w-12 h-12 ${method.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon size={24} className={method.color} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{method.description}</p>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{method.value}</p>
                </Card>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mt-12">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
