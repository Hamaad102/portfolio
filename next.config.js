/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		USER_TITLE: process.env.USER_TITLE,
		USER_COMPANY: process.env.USER_COMPANY
	}
}

module.exports = nextConfig
