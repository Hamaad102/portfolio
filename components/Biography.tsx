/* eslint-disable react/no-unescaped-entities */
import { Box, Stack, Typography } from '@mui/material/'
import Image from 'next/image'

const lightFont = {
	fontFamily: 'Fira Sans, sans-serif',
	fontWeight: 200,
}

const twitter = {
	fontWeight: 500,
	color: 'black',
	textDecoration: 'none',
	position: 'relative',

	'&:before': {
		content: "''",
		position: 'absolute',
		width: '100%',
		height: '3px',
		bottom: '-3px',
		backgroundColor: '#1DA1F2',
		transition: 'all 0.3s ease-in-out',
	},
	'&:hover:before': {
		width: 0,
	},
}

const medium = {
	fontWeight: 500,
	color: 'black',
	textDecoration: 'none',
	position: 'relative',

	'&:before': {
		content: "''",
		position: 'absolute',
		width: '100%',
		height: '3px',
		bottom: '-3px',
		backgroundColor: '#51a652',
		transition: 'all 0.3s ease-in-out',
	},
	'&:hover:before': {
		width: 0,
	},
}

const github = {
	fontWeight: 500,
	color: 'black',
	textDecoration: 'none',
	position: 'relative',

	'&:before': {
		content: "''",
		position: 'absolute',
		width: '100%',
		height: '3px',
		bottom: '-3px',
		backgroundColor: '#bd2c00',
		transition: 'all 0.3s ease-in-out',
	},
	'&:hover:before': {
		width: 0,
	},
}

const Biography = () => {
	return (
		<Stack
			direction={{ sm: 'row', xs: 'column' }}
			alignItems='center'
			spacing={4}
		>
			<Box
				sx={{
					width: {
						lg: '20.938rem',
						md: '16rem',
						sm: '20.938rem',
						xs: '14.813rem',
					},
					height: {
						lg: '20.938rem',
						md: '16rem',
						sm: '20.938rem',
						xs: '14.812rem',
					},
					backgroundColor: 'black',
					borderRadius: '50%',
				}}
			></Box>
			<Stack direction='column' spacing={{ md: 3, sm: 2, xs: 4 }}>
				<Stack direction='column' alignItems={{ sm: 'start', xs: 'center' }}>
					<Typography
						sx={{
							...lightFont,
							fontSize: {
								md: '3.375rem',
								xs: '2rem',
							},
						}}
					>
						I'm{' '}
						<Box component='span' sx={{ fontWeight: 400 }}>
							Hamaad Chughtai
						</Box>
					</Typography>
					<Typography
						sx={{
							...lightFont,
							fontSize: {
								md: '2.125rem',
								sm: '1.3rem',
								xs: '1.1rem',
							},
							lineHeight: {
								md: '2.5rem',
								sm: '1.6rem',
								xs: '1.2rem',
							},
							textAlign: { sm: 'start', xs: 'center' },
						}}
					>
						A{' '}
						<Box component='span' sx={{ fontWeight: 400 }}>
							Full Stack Developer
						</Box>{' '}
						based
						<br />
						out of{' '}
						<Box component='span' sx={{ fontWeight: 400 }}>
							Toronto, Ontario
						</Box>
					</Typography>
				</Stack>
				<Typography
					sx={{
						...lightFont,
						fontSize: '1.063rem',
						display: {
							sm: 'block',
							xs: 'none',
						},
					}}
				>
					You can find me on{' '}
					<Box
						component='a'
						sx={{ ...twitter }}
						href='https://twitter.com/HamaadDEV'
					>
						Twitter
					</Box>
					,{' '}
					<Box
						component='a'
						sx={{ ...github }}
						href='https://github.com/Hamaad102'
					>
						GitHub
					</Box>{' '}
					and{' '}
					<Box
						component='a'
						sx={{ ...medium }}
						href='https://medium.com/@hamaadchughtai'
					>
						Medium.
					</Box>
				</Typography>
				<Stack
					direction='row'
					spacing={2}
					justifyContent='center'
					sx={{
						display: {
							sm: 'none',
							xs: 'flex',
						},
					}}
				>
					<Box component='a' href='https://twitter.com/HamaadDEV'>
						<Image
							src='/twitter.svg'
							alt='Twitter Logo'
							height={32}
							width={32}
						/>
					</Box>
					<Box component='a' href='https://github.com/Hamaad102'>
						<Image src='/github.svg' alt='GitHub Logo' height={32} width={32} />
					</Box>
					<Box component='a' href='https://medium.com/@hamaadchughtai'>
						<Image src='/medium.svg' alt='Medium Logo' height={32} width={32} />
					</Box>
				</Stack>
			</Stack>
		</Stack>
	)
}

export default Biography
