import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/common/header/Header';
import Footer from './ui/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Creative',
	description: 'Image AI generator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
