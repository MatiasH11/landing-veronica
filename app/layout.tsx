import type React from "react"
import type { Metadata } from "next"
import { Hanken_Grotesk, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Movimiento } from "@/components/movimiento"
import "./globals.css"

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-source-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Verónica Mercado | Productora asesora de seguros",
  description:
    "Asesoramiento personal en seguros para personas, empresas y el campo. Comparo entre las mejores compañías y te acompaño antes, durante y después de un siniestro.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${hanken.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">
        <Movimiento>
          <Navbar />
          {children}
        </Movimiento>
        <Analytics />
      </body>
    </html>
  )
}
