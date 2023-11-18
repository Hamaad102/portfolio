import Image from 'next/image'

import './index.css'
import logo from '@/public/logo.svg'

export default function Profile() {
	return (
		<div className='flex h-full flex-col items-center justify-center'>
			<h2 className='font-extralight max-md:hidden' id='profile'>
				i&apos;m <span className='font-semibold'>Hamaad Chughtai</span>
				<br />a{' '}
				<span className='font-semibold' id='title'>
					{process.env.USER_TITLE}
				</span>
				<br />
				at <span className='font-semibold'>{process.env.USER_COMPANY}</span>
			</h2>
			<Image src={logo} alt='HC' height={100} className='md:hidden' />
			<h6
				id='social'
				className='absolute bottom-3 top-auto font-extralight max-md:left-1 max-md:self-start md:right-8 md:self-end'
			>
				find me on
				<br className='hidden max-md:block' />{' '}
				<a href='https://twitter.com/HamaadDEV' className='font-semibold'>
					Twitter
				</a>
				,{' '}
				<a href='https://github.com/Hamaad102' className='font-semibold'>
					Github
				</a>{' '}
				and{' '}
				<a href='https://medium.com/@hamaadchughtai' className='font-semibold'>
					Medium
				</a>
			</h6>
		</div>
	)
}
