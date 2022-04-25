import Link from 'next/link'
import Image from 'next/image'

// MUI
import { Box, Container } from '@mui/material/'

const Navbar = () => {
	return (
		<Container
			sx={{
				display: {
					sm: 'block',
					xs: 'none',
				},
			}}
		>
			<Box component={Link} href='/' passHref>
				<Box
					sx={{
						'.logo': { '&:hover': { cursor: 'pointer' } },
					}}
				>
					<Image
						className='logo'
						src='/logo.svg'
						alt='My Logo'
						height={52}
						width={43}
					/>
				</Box>
			</Box>
		</Container>
	)
}

export default Navbar
