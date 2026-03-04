'use client'
import { useState, useEffect } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'motion/react'

interface ClickPosition {
	x: number
	y: number
}

interface TransitionState {
	active: boolean
	destination: string
	clickPosition: ClickPosition
}

const socialLinks = [
	{ label: 'VeroFi', href: 'https://www.verofi.app/' },
	{ label: 'Github', href: 'https://github.com/Hamaad102' },
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/hamaadchughtai/'
	},
	{ label: 'Twitter', href: 'https://x.com/HamaadDEV' },
	{ label: 'YouTube', href: 'https://www.youtube.com/@Hamaad' }
] as const

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
						background: 'white'
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

/* ease-out-quint — fast start, smooth settle. Best for entrance animations. */
const easeOutQuint = [0.23, 1, 0.32, 1] as const

export default function DesignThree() {
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
		return () => window.removeEventListener('pageshow', handlePageShow)
	}, [])

	return (
		<LazyMotion features={domAnimation}>
			<div
				className='h-dvh w-screen overflow-hidden'
				style={{ background: '#10100E' }}
			>
				<CircleTransition
					isActive={transition.active}
					destination={transition.destination}
					clickPosition={transition.clickPosition}
				/>
				<AnimatePresence>
					{shouldAnimate && (
						<m.div
							key='main-content'
							initial={{ opacity: 0, filter: 'blur(4px)' }}
							animate={{ opacity: 1, filter: 'blur(0px)' }}
							transition={{
								duration: 1,
								ease: [0.41, 0.03, 0.12, 0.93]
							}}
							className='flex h-dvh flex-col items-center justify-center px-6 pb-[3vh] md:px-8 md:pb-[5vh]'
							style={{
								willChange: 'opacity, filter',
								backfaceVisibility: 'hidden',
								WebkitBackfaceVisibility: 'hidden'
							}}
						>
							<div>
								{/* Name */}
								<h1
									className='text-[2.75rem] font-semibold md:text-[clamp(2rem,5vw,3.5rem)]'
									style={{
										letterSpacing: '-0.04em',
										color: '#FFFFE3'
									}}
								>
									Hamaad Chughtai
								</h1>
								<p
									className='mt-2 text-[1.125rem] font-extralight md:text-[clamp(1rem,2vw,1.25rem)]'
									style={{
										color: '#939393',
										letterSpacing: '-0.01em'
									}}
								>
									Product Engineer at EQ Works
								</p>

								{/* Links */}
								<div className='mt-8 flex flex-col items-start gap-1 md:mt-10 md:gap-3'>
									{socialLinks.map((link, i) => (
										<m.a
											key={link.label}
											href={link.href}
											target='_blank'
											rel='noopener noreferrer'
											initial={{ opacity: 0, y: 6 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.25,
												ease: easeOutQuint,
												delay: 0.5 + i * 0.08
											}}
											className='social-link text-[1.2rem] md:text-[clamp(1.1rem,1.8vw,1.35rem)]'
											style={{
												color: '#A2A2A2',
												fontWeight: 300,
												letterSpacing: '-0.02em'
											}}
										>
											{link.label}
										</m.a>
									))}
								</div>
							</div>
						</m.div>
					)}
				</AnimatePresence>
			</div>
		</LazyMotion>
	)
}
