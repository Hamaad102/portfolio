'use client'
import { useState, useEffect, Suspense } from 'react'
import { Welcome, Profile } from '@/components'

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
			{display === 'new' && <Welcome />}
			{display === 'return' && <Profile />}
		</div>
	)
}
