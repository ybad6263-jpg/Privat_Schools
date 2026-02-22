import "./globals.css"; // Imports your Tailwind styles
import Navbar from "./components/Navbar"; // If @/ doesn't work, use the relative path

export const metadata = {
  title: "Private High School",
  description: "A premium education for the next generation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}