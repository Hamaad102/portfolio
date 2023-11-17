import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
	title: 'Hamaad Chughtai | Full Stack Developer',
	description: "Hamaad Chughtai's Developer Portfolio"
}

export const viewport: Viewport = {
  themeColor: '#191a1a',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}