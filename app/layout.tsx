import type { Metadata } from "next"
import Link from "next/link"
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
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <nav style={{ width: 200, backgroundColor: '#f5f5f5', padding: 20, borderRight: '1px solid #ddd' }}>
            <h1 style={{ marginTop: 0, fontSize: 16, fontWeight: 700 }}>Velvet Echo HITL</h1>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 12 }}>
                <Link href="/" style={{ textDecoration: 'none', color: '#0066cc' }}>Dashboard</Link>
              </li>
              <li style={{ marginBottom: 12 }}>
                <Link href="/drafts" style={{ textDecoration: 'none', color: '#0066cc' }}>Drafts</Link>
              </li>
              <li style={{ marginBottom: 12 }}>
                <Link href="/approvals" style={{ textDecoration: 'none', color: '#0066cc' }}>Approvals</Link>
              </li>
              <li style={{ marginBottom: 12 }}>
                <Link href="/settings" style={{ textDecoration: 'none', color: '#0066cc' }}>Settings</Link>
              </li>
            </ul>
          </nav>
          <main style={{ flex: 1, backgroundColor: '#fff' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
