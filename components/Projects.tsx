import Link from 'next/link'
import Image from 'next/image'

// MUI
import { Stack, Typography } from '@mui/material/'
import CasinoIcon from '@mui/icons-material/Casino'

const boxDesign = {
	width: { md: '16rem', sm: '14rem', xs: '20rem' },
	height: { md: '28rem', sm: '24rem', xs: '12rem' },
	'&:hover': { cursor: 'pointer' },
}

const fontStyle = {
	fontWeight: 200,
	fontSize: '1.875rem',
	fontFamily: 'Fira Sans, sans-serif',
	display: { sm: 'block', xs: 'none' },
}

const Projects = () => {
	return (
		<Stack direction={{ sm: 'row', xs: 'column' }} spacing={2}>
			<Link href='/scramble' passHref>
				<Stack
					sx={{
						...boxDesign,
						backgroundColor: '#25ffdf',
					}}
					alignItems='center'
					justifyContent='space-evenly'
				>
					<CasinoIcon sx={{ width: 100, height: 100 }} />
					<Typography sx={{ ...fontStyle }}>scramble</Typography>
				</Stack>
			</Link>
			<Link href='/calendapp' passHref>
				<Stack
					sx={{ ...boxDesign, backgroundColor: '#ff7000' }}
					alignItems='center'
					justifyContent='space-evenly'
				>
					<Image src='/calendar.svg' alt='Calendapp' height={100} width={100} />
					<Typography sx={{ ...fontStyle }}>calendapp</Typography>
				</Stack>
			</Link>
			<Link href='/manageme' passHref>
				<Stack
					sx={{ ...boxDesign, backgroundColor: '#f7bd02' }}
					alignItems='center'
					justifyContent='space-evenly'
				>
					<Image src='/manageme.svg' alt='Manage-Me' height={100} width={100} />
					<Typography sx={{ ...fontStyle }}>manageme</Typography>
				</Stack>
			</Link>
		</Stack>
	)
}

export default Projects
