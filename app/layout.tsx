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
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {/* Sidebar Navigation */}
          <nav style={{ 
            width: 220, 
            backgroundColor: '#f5f5f5', 
            padding: '20px', 
            borderRight: '1px solid #ddd',
            boxSizing: 'border-box'
          }}>
            <h1 style={{ marginTop: 0, marginBottom: 20, fontSize: 18, fontWeight: 700 }}>
              Velvet Echo HITL
            </h1>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 16 }}>
                <Link href="/" style={{ textDecoration: 'none', color: '#0066cc', fontSize: 14 }}>
                  Dashboard
                </Link>
              </li>
              <li style={{ marginBottom: 16 }}>
                <Link href="/drafts" style={{ textDecoration: 'none', color: '#0066cc', fontSize: 14 }}>
                  Drafts
                </Link>
              </li>
              <li style={{ marginBottom: 16 }}>
                <Link href="/approvals" style={{ textDecoration: 'none', color: '#0066cc', fontSize: 14 }}>
                  Approvals
                </Link>
              </li>
              <li style={{ marginBottom: 16 }}>
                <Link href="/settings" style={{ textDecoration: 'none', color: '#0066cc', fontSize: 14 }}>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
          {/* Main Content */}
          <main style={{ 
            flex: 1, 
            backgroundColor: '#fff',
            overflow: 'auto'
          }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
