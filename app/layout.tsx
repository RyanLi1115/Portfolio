import type { Metadata } from 'next'
import { inter, vt323 } from '@/lib/fonts'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollController from '@/components/layout/ScrollController'

export const metadata: Metadata = {
  title: 'Ryan Yiran Li | Software Developer',
  description: 'A personal portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable}`}>
      <body className="bg-background font-sans text-text-primary">
        <ScrollController />
        <Navbar />
        <main className="relative z-20 bg-background mb-[320px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}