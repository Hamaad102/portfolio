import Head from 'next/head'
import { motion } from 'framer-motion'

import type { NextPage } from 'next'

// Components
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Biography from '../components/Biography'

// MUI
import { Box, CssBaseline, Stack } from '@mui/material/'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hamaad Chughtai | Full Stack Developer</title>
				<meta
					name='description'
					content="Hamaad Chughtai's Developer Portfolio"
				/>
				<meta name='theme-color' content='#191a1a' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</Head>

			<main>
				<CssBaseline />
				<Box
					component={motion.div}
					initial={{ opacity: 0, y: 10 }}
					animate={{
						opacity: 1,
						y: 0,
					}}
					exit={{ y: 10, opacity: 0 }}
					transition={{
						ease: [0.43, 0.13, 0.23, 0.96],
						duration: 0.75,
					}}
					mt={2}
				>
					<Navbar />
					<Stack
						direction='column'
						alignItems='center'
						spacing={{ sm: 8, xs: 5 }}
						pb={{ sm: 0, xs: 4 }}
						mt={2}
					>
						<Biography />
						<Projects />
					</Stack>
				</Box>
			</main>
		</div>
	)
}

export default Home
