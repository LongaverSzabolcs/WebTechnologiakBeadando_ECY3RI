import "../styles/main.css";
import Link from 'next/link';

export const metadata = {
  title: "SaintPeterWare",
  description: "Manage the recently deceased from the comfort of your home!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <div className="container">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div>
                <h1 style={{ margin: 0 }}>SaintPeterWare 1.0</h1>
                <p className="lead" style={{ margin: 0 }}>A simple app for managing the recently perished</p>
              </div>

              <nav style={{ display: 'flex', gap: 8 }}>
                <Link href="/">Dashboard</Link>
                <Link href="/add">Add new entry</Link>
                <Link href="/list">List all entries</Link>
              </nav>
            </header>

            <main>{children}</main>

            <footer style={{ marginTop: 20, color: 'var(--muted)', fontSize: 12 }}>
              Longaver Szabolcs (ECY3RI) - 2025 - Minden jog blablabla nem érdekel
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
