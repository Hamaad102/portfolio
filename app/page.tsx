'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { motion } from 'motion/react'

import logo from '@/public/logo.svg'

const variants = {
	welcome_initial: { opacity: 0, y: -30 },
	welcome_animate: {
		y: 0,
		opacity: 1,
		display: 'flex',
		transition: {
			ease: [0.43, 0.13, 0.23, 0.96],
			duration: 1,
			delay: 0.35
		}
	}
}

export default function Home() {
	const [display, setDisplay] = useState<string>('fetching')

	useEffect(() => {
		if (!localStorage.getItem('display')) {
			const getDisplay = setInterval(() => {
				if (localStorage.getItem('display') === 'hidden') {
					setDisplay('return')
					clearInterval(getDisplay)
				} else {
					setDisplay('new')
				}
			}, 250)
			return () => clearInterval(getDisplay)
		} else {
			setDisplay('return')
		}
	}, [])

	return (
		<div className='h-screen w-screen'>
			<motion.div
				variants={variants}
				initial={'welcome_initial'}
				animate={'welcome_animate'}
				className='h-screen flex-col items-center justify-center overflow-hidden bg-white'
			>
				<h2 className='font-extralight max-md:hidden' id='profile'>
					I&apos;m <span className='font-semibold'>Hamaad Chughtai</span>
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
					className='absolute bottom-3 font-extralight max-md:left-1 max-md:self-start md:right-8 md:self-end'
				>
					find me on
					<br className='hidden max-md:block' />{' '}
					<a
						href='https://bsky.app/profile/hamaadchughtai.com'
						className='font-semibold'
					>
						Bluesky
					</a>
					,{' '}
					<a href='https://github.com/Hamaad102' className='font-semibold'>
						Github
					</a>{' '}
					and{' '}
					<a
						href='https://medium.com/@hamaadchughtai'
						className='font-semibold'
					>
						Medium
					</a>
				</h6>
			</motion.div>
		</div>
	)
}
