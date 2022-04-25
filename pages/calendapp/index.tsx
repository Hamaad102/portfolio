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
		backgroundColor: '#7DCFB6',
		transition: 'all 0.3s ease-in-out',
	},
	'&:hover:before': {
		width: 0,
	},
}

const Calendapp: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hamaad Chughtai | Calendapp</title>
				<meta name='theme-color' content='#ff7000' />
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
					backgroundColor: '#ff7000',
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
							alignItems={{ sm: 'center', xs: 'center' }}
							spacing={{ sm: 8, xs: 5 }}
							mt={{ sm: 14, xs: 4 }}
						>
							<Image
								src='/calendar.svg'
								alt='Calendapp'
								height={180}
								width={300}
							/>
							<Stack
								direction='column'
								sx={{ width: { sm: '30rem' } }}
								spacing={2}
							>
								<Typography sx={{ ...font }}>
									It's been said that the Gregorian calendar was originally made
									to help ensure we didn't miss garbage night. Whether or not
									that's true, who can say. What we do know is society is busier
									than ever and anything we can do to stay organized is key. To
									help in that task some people have assistants. The rest of us,
									however, are left to fend for ourselves. That is until now.
								</Typography>
								<Typography sx={{ ...font }}>
									<Box sx={{ fontWeight: 700 }} component='span'>
										Calendapp
									</Box>{' '}
									is the ultimate organization tool.
								</Typography>
								<Typography sx={{ ...font }}>
									Built using{' '}
									<Box sx={{ fontWeight: 700 }} component='span'>
										React
									</Box>
									,{' '}
									<Box sx={{ fontWeight: 700 }} component='span'>
										Express
									</Box>
									,{' '}
									<Box sx={{ fontWeight: 700 }} component='span'>
										MongoDB
									</Box>
									,{' '}
									<Box sx={{ fontWeight: 700 }} component='span'>
										Stripe
									</Box>{' '}
									and the{' '}
									<Box sx={{ fontWeight: 700 }} component='span'>
										Google API
									</Box>
									. Calendapp is the most accessible personal assistant.
								</Typography>
								<Typography sx={{ ...font }}>
									Connect your Google Calendar, set your availability and that's
									it. You now have a way for clients to easily book and cancel
									meetings with you.
								</Typography>
								<Typography sx={{ ...font }}>
									You're allocated three event types and more can be purchased
									with a lifetime premium membership. Join today!
								</Typography>
								<Typography
									sx={{ ...font, fontWeight: 700, fontSize: '0.8rem' }}
								>
									*Please use demo account. Google account is limited to
									authorized emails
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
											href='https://gregarious-buttercream-627e73.netlify.app/'
										>
											Try it out here!
										</Box>
									</Typography>
									<Typography sx={{ ...font }}>
										<Box
											component='a'
											sx={{ ...link }}
											href='https://github.com/Hamaad102/calendapp'
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

export default Calendapp
