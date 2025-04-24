import { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Suspense } from 'react'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Pluse.kz — финансовые сервисы для бизнеса',
  description: 'BNPL, интернет-магазин и онлайн-бухгалтерия для вашего бизнеса',
}

export const viewport: Viewport = {
  themeColor: '#7F56D9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

function Loading() {
  return <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
  </div>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="h-full scroll-smooth bg-white">
      <body className={`${inter.className} min-h-full bg-white text-[#171717] antialiased selection:bg-primary/20 selection:text-primary`}>
        <Suspense fallback={<Loading />}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
