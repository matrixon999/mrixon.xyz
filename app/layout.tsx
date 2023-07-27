import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mathew Rixon',
  description: 'Hire me so I can do fun stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
