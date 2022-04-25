import { AnimatePresence } from 'framer-motion'
import { CacheProvider, EmotionCache } from '@emotion/react'

import type { AppProps } from 'next/app'

import createEmotionCache from '../utility/createEmotionCache'
interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
		router,
	} = props

	return (
		<CacheProvider value={emotionCache}>
			<AnimatePresence initial={false} exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</CacheProvider>
	)
}

export default MyApp
