// src/app/layout.tsx
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Afsal Kalladi Portfolio",
  description:
    "Interactive web experiences with Next.js, Tailwind v4 & Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-500 text-white">
        {/* Navbar is here once for all pages */}
        <Navbar />

        {/* Page content (Hero, Carousel, Sections…) */}
        {children}
      </body>
    </html>
  );
}
