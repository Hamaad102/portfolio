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
		backgroundColor: '#990033',
		transition: 'all 0.3s ease-in-out',
	},
	'&:hover:before': {
		width: 0,
	},
}

const Manageme: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hamaad Chughtai | ManageMe</title>
				<meta name='theme-color' content='#f7bd02' />
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
					backgroundColor: '#f7bd02',
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
								src='/manageme.svg'
								alt='Manage-Me'
								height={180}
								width={300}
							/>
							<Stack
								direction='column'
								sx={{ width: { sm: '30rem' } }}
								spacing={2}
							>
								<Typography sx={{ ...font }}>
									At the start of the pandemic we all realized something
									together. Buying stuff online is really easy and it's made
									easier when your business is built around the idea of being
									online first. Unfortunately, not everyone planned on the
									Internet sticking around or even a global pandemic for that
									matter.
								</Typography>
								<Typography sx={{ ...font }}>
									<Box sx={{ fontWeight: 700 }} component='span'>
										ManageMe
									</Box>{' '}
									is the perfect tool to bridge traditional brick and mortar
									with eCommerce.
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
										Socket.IO
									</Box>{' '}
									and{' '}
									<Box sx={{ fontWeight: 700 }} component='span'>
										MongoDB
									</Box>
									. ManageMe allows businesses to easily keep track of inventory
									and update it in real time.
								</Typography>
								<Typography sx={{ ...font }}>
									Process real world transactions while also being able to keep
									track and fulfill digital ones. ManageMe gives traditional mom
									and pops the ability to stay on top of shifting inventory.
								</Typography>
								<Typography sx={{ ...font }}>
									Sign up today and join the 21st century!
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
											href='https://elastic-albattani-69ef0f.netlify.app/'
										>
											Try it out here!
										</Box>
									</Typography>
									<Typography sx={{ ...font }}>
										<Box
											component='a'
											sx={{ ...link }}
											href='https://github.com/Hamaad102/manage-me'
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

export default Manageme
