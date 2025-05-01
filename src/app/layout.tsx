import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Afsal Kalladi Portfolio",
  description: "B.Tech EEE @ CUSAT · VLSI & FPGA Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-500 text-white transition-colors duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
