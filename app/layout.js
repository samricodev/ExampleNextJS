import Navigation from '../components/Navigation'
import { Space_Grotesk as SpaceGrotesk } from '@next/font/google'
import '../styles/globals.css'

const font = SpaceGrotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Next App</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
