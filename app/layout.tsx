import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'UZ-GROW - O\'zbekistonda zamonaviy issiqxona qurish va agro-injiniring xizmatlari',
  description: 'UZ-GROW — O\'zbekistonda zamonaviy, energiya tejamkor va yuqori hosildorlikka mo\'ljallangan issiqxonalarni loyihalash va qurish bo\'yicha professional agro-injiniring kompaniya.',
  keywords: ['issiqxona', 'greenhouse', 'agro-injiniring', 'O\'zbekiston', 'qishloq xo\'jaligi'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
