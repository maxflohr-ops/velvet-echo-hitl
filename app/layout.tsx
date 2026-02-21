import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Velvet Echo HITL",
  description: "Human-in-the-Loop AI Application",
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
