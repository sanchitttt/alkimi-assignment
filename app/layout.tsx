import Header from '../components/Header'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat(
  { weight: ['700', '400', '600', '500'], subsets: ['latin'] })

export const metadata = {
  title: 'Alkimi Assignment',
  description: 'NextJS,Tailwind CSS,ESlint and Typescript Assignment for Alkimi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
