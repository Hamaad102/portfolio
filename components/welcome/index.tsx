import './index.css'

export default function Welcome() {
	return (
		<div className='flex h-full flex-col items-center justify-center'>
			<h1 id='welcome-text'>
				Hi<span className='secondary-color'>.</span>
			</h1>
			<h6
				id='date'
				className='absolute bottom-3 right-8 top-auto self-end font-semibold'
			>
				Toronto <span className='secondary-color'>|</span> 17.11.23
			</h6>
		</div>
	)
}
