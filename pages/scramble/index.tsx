/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

import type { NextPage } from 'next'

// Components
import Navbar from '../../components/Navbar'

// MUI
import { Box, Container, CssBaseline, Stack, Typography } from '@mui/material/'

const font = {
	fontFamily: 'Fira Sans, sans-serif',
}

const link = {
	fontWeight: 500,
	color: 'black',
	textDecoration: 'none',
	position: 'relative',
	'&:before': {
		content: "''",
		position: 'absolute',
		width: '100%',
		height: '3px',
		bottom: '-6px',
		backgroundColor: '#DA667B',
		transition: 'all 0.3s ease-in-out',
	},
	'&:hover:before': {
		width: 0,
	},
}

const Scramble: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hamaad Chughtai | Scramble</title>
				<meta name='theme-color' content='#25ffdf' />
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
			<Box
				component={motion.main}
				sx={{
					height: { sm: '100vh' },
					paddingBottom: { sm: 0, xs: 5 },
				}}
				initial={{ width: 0 }}
				animate={{
					width: '100vw',
					backgroundColor: '#25ffdf',
					transition: {
						ease: [0.43, 0.13, 0.23, 0.96],
						duration: 0.75,
					},
				}}
				exit={{
					width: '0vw',
					transition: {
						ease: [0.43, 0.13, 0.23, 0.96],
						duration: 0.75,
						delay: 0.6,
					},
				}}
			>
				<Box
					component={motion.div}
					initial={{ opacity: 0, y: 10 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							ease: [0.43, 0.13, 0.23, 0.96],
							duration: 0.75,
							delay: 0.6,
						},
					}}
					exit={{
						y: 10,
						opacity: 0,
						transition: {
							ease: [0.43, 0.13, 0.23, 0.96],
							duration: 0.75,
						},
					}}
					pt={2}
				>
					<CssBaseline />
					<Navbar />
					<Container>
						<Stack
							direction={{ sm: 'row', xs: 'column' }}
							justifyContent='center'
							alignItems={{ sm: 'start', xs: 'center' }}
							spacing={{ sm: 8 }}
							mt={{ sm: 14 }}
						>
							<Image
								src='/scramblelogo.svg'
								alt='Scramble Logo'
								height={300}
								width={350}
							/>
							<Stack
								direction='column'
								sx={{ width: { sm: '30rem' } }}
								spacing={2}
							>
								<Typography sx={{ ...font }}>
									The world was taken by storm earlier this year. We all found
									ourselves starting our day trying to figure out what the word
									of the day was. Just as quickly as we were captivated by this
									phenomenon we quickly fell out of it. The idea is great but it
									could use a little more.
								</Typography>
								<Typography sx={{ ...font }}>
									<Box sx={{ fontWeight: 700 }} component='span'>
										Scramble
									</Box>{' '}
									is meant to be{' '}
									<Box
										sx={{
											textDecoration: 'underline',
											textUnderlineOffset: '0.2rem',
										}}
										component='span'
									>
										more
									</Box>
									.
								</Typography>
								<Typography sx={{ ...font }}>
									Built using{' '}
									<Box sx={{ fontWeight: 700 }} component='span'>
										Next.JS
									</Box>{' '}
									and{' '}
									<Box sx={{ fontWeight: 700 }} component='span'>
										Socket.IO
									</Box>
									. Scramble is a multiplayer take on Wordle.
								</Typography>
								<Typography sx={{ ...font }}>
									Face off against one another as you try to guess a word in as
									few guesses as possible.
								</Typography>
								<Typography sx={{ ...font }}>
									The fewer number of guesses the more points you earn.
								</Typography>
								<Typography sx={{ ...font }}>
									You're also not limited to one word; the lobby host can decide
									how long the game is and how many words players have to figure
									out.
								</Typography>
								<Stack
									direction='row'
									spacing={2}
									justifyContent={{ sm: 'start', xs: 'center' }}
								>
									<Typography sx={{ ...font }}>
										<Box
											component='a'
											sx={{ ...link }}
											href='https://moonlit-pothos-4e915b.netlify.app/'
										>
											Try it out here!
										</Box>
									</Typography>
									<Typography sx={{ ...font }}>
										<Box
											component='a'
											sx={{ ...link }}
											href='https://github.com/Hamaad102/scramble'
										>
											Github Repo
										</Box>
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Container>
				</Box>
			</Box>
		</div>
	)
}

export default Scramble
