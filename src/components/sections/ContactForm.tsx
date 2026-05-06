'use client'

import { Card } from '@/components/ui/Card'

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Form submission to be implemented (e.g., via API route or third-party service)
  }

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Send a Message</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
            <input
              id="contact-name"
              type="text"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
            <input
              id="contact-email"
              type="email"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
          <input
            id="contact-subject"
            type="text"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
            placeholder="What's this about?"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
          <textarea
            id="contact-message"
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
  )
}
