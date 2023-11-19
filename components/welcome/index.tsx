import { motion } from 'framer-motion'

import './index.css'

export default function Welcome() {
	return (
		<div className='relative h-screen w-full bg-black'>
			<div className='flex h-screen flex-col items-center justify-center'>
				<h1 className='text-white' id='welcome-text'>
					Hi<span className='secondary-color'>.</span>
				</h1>
				<h6
					id='date'
					className='absolute bottom-3 self-end font-semibold text-white max-md:right-2 md:right-8'
				>
					Toronto <span className='secondary-color'>|</span> 17.11.23
				</h6>
			</div>
			<motion.div
				className='absolute left-0 top-0 z-10 h-full'
				initial={{ width: 0 }}
				animate={{
					width: '100vw',
					backgroundColor: 'white',
					transition: {
						delay: 0.75,
						ease: [0.42, 0, 0.58, 1],
						duration: 1.75
					}
				}}
				onAnimationComplete={() => {
					localStorage.setItem('display', 'hidden')
				}}
			/>
		</div>
	)
}
