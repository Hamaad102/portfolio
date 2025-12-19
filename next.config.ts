import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	env: {
		TITLE: process.env.TITLE,
		COMPANY: process.env.COMPANY
	}
}

module.exports = nextConfig
