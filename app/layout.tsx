import type { Metadata } from 'next'
import { inter, vt323 } from '@/lib/fonts'
import './globals.css'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Your Name | Software Developer',
  description: 'Your personal portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable}`}>
      <body className="bg-background font-sans text-text-primary">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}