import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	env: {
		USER_TITLE: process.env.USER_TITLE,
		USER_COMPANY: process.env.USER_COMPANY
	},
	devIndicators: {
		appIsrStatus: false
	}
}

module.exports = nextConfig
