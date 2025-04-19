import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Pluse.kz — финансовые сервисы для бизнеса',
  description: 'BNPL, интернет-магазин и онлайн-бухгалтерия для вашего бизнеса',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#5D5FEF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="h-full">
      <body className={`${inter.className} h-full bg-white`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
