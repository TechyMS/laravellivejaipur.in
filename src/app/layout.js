import './globals.css'
import './media.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={'container bg-color-primary tracking-wider text-white min-h-screen'}>
				<Header />
				<main className=''>{children}</main>
			</body>
		</html>
	)
}
