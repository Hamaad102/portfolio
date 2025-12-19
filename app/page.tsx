'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'motion/react'

import type { Variants } from 'motion/react'

import logo from '@/public/logo.svg'

interface ClickPosition {
	x: number
	y: number
}

interface TransitionState {
	active: boolean
	destination: string
	clickPosition: ClickPosition
}

const variants: Variants = {
	welcome_initial: {
		opacity: 0,
		y: 5,
		filter: 'blur(5px)'
	},
	welcome_animate: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		display: 'flex',
		transition: {
			duration: 1.2,
			ease: [0.41, 0.03, 0.12, 0.93] as const,
			filter: {
				duration: 1,
				ease: [0.41, 0.03, 0.12, 0.93] as const
			}
		}
	}
}

const CircleTransition = ({
	isActive,
	destination,
	clickPosition
}: {
	isActive: boolean
	destination: string
	clickPosition: ClickPosition
}) => {
	return (
		<AnimatePresence>
			{isActive && (
				<m.div
					initial={{
						clipPath: `circle(0px at ${clickPosition.x}px ${clickPosition.y}px)`,
						background: 'black'
					}}
					animate={{
						clipPath: `circle(150% at ${clickPosition.x}px ${clickPosition.y}px)`,
						transition: {
							duration: 1.4,
							ease: [0.41, 0.03, 0.12, 0.93]
						}
					}}
					className='fixed inset-0 z-50'
					style={{
						willChange: 'clip-path',
						backfaceVisibility: 'hidden',
						WebkitBackfaceVisibility: 'hidden'
					}}
					onAnimationComplete={() => {
						window.location.href = destination
					}}
				/>
			)}
		</AnimatePresence>
	)
}

export default function Home() {
	const [transition, setTransition] = useState<TransitionState>({
		active: false,
		destination: '',
		clickPosition: { x: 0, y: 0 }
	})

	const [shouldAnimate, setShouldAnimate] = useState(false)

	useEffect(() => {
		const handlePageShow = (event: PageTransitionEvent) => {
			if (event.persisted) {
				setTransition({
					active: false,
					destination: '',
					clickPosition: { x: 0, y: 0 }
				})

				setShouldAnimate(false)
				setTimeout(() => setShouldAnimate(true), 50)
			}
		}

		setTransition({
			active: false,
			destination: '',
			clickPosition: { x: 0, y: 0 }
		})

		setTimeout(() => setShouldAnimate(true), 50)

		window.addEventListener('pageshow', handlePageShow)

		return () => {
			window.removeEventListener('pageshow', handlePageShow)
		}
	}, [])

	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault()
		setTransition({
			active: true,
			destination: href,
			clickPosition: {
				x: e.clientX,
				y: e.clientY
			}
		})
	}

	return (
		<LazyMotion features={domAnimation}>
			<div className='h-screen w-screen overflow-hidden'>
				<CircleTransition
					isActive={transition.active}
					destination={transition.destination}
					clickPosition={transition.clickPosition}
				/>
				<AnimatePresence>
					{shouldAnimate && (
						<m.div
							key='welcome-animation'
							variants={variants}
							initial='welcome_initial'
							animate='welcome_animate'
							style={{
								willChange: 'transform, opacity, filter',
								backfaceVisibility: 'hidden',
								WebkitBackfaceVisibility: 'hidden'
							}}
							className='h-screen flex-col items-center justify-center overflow-hidden bg-white'
						>
							<h2 className='font-extralight max-md:hidden' id='profile'>
								I&apos;m <span className='font-semibold'>Hamaad Chughtai</span>
								<br />a{' '}
								<span className='font-semibold' id='title'>
									{process.env.TITLE}
								</span>
								<br />
								at{' '}
								<span className='font-semibold'>
									{process.env.COMPANY}
								</span>
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
									onClick={(e) =>
										handleLinkClick(
											e,
											'https://bsky.app/profile/hamaadchughtai.com'
										)
									}
								>
									Bluesky
								</a>
								,{' '}
								<a
									href='https://github.com/Hamaad102'
									className='font-semibold'
									onClick={(e) =>
										handleLinkClick(e, 'https://github.com/Hamaad102')
									}
								>
									Github
								</a>{' '}
								and{' '}
								<a
									href='https://medium.com/@hamaadchughtai'
									className='font-semibold'
									onClick={(e) =>
										handleLinkClick(e, 'https://medium.com/@hamaadchughtai')
									}
								>
									Medium
								</a>
							</h6>
						</m.div>
					)}
				</AnimatePresence>
			</div>
		</LazyMotion>
	)
}
