import "@/app/globals.css";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-raleway",
});

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
    <html lang="en" className={`${raleway.variable} font-sans`}>
      <meta
        name="google-site-verification"
        content="ND-gFnMUkFIH0EA2uu0kLBot6oFFUMYexkJfYOiL2n0"
      />
      <body className="bg-background-500 text-white transition-colors duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
