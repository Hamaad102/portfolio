import './globals.css'
import type { Metadata, Viewport } from 'next'

import { GeistSans } from 'geist/font/sans'

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
		<html lang='en' className={GeistSans.variable}>
			<body>{children}</body>
		</html>
	)
}
