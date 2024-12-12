import './globals.css'
import { Geist } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Hamaad Chughtai | Full Stack Developer',
	description: "Hamaad Chughtai's Developer Portfolio"
}

export const viewport: Viewport = {
	themeColor: '#ffffff'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={geistSans.variable}>
			<body>{children}</body>
		</html>
	)
}
