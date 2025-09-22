import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});




export default function LayoutPage02({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable}`}>
        <div className="w-full h-6 bg-linear-to-t from-sky-500 to-indigo-500 text-center">Second Layout YEAH!</div>
        {children}
      </body>
    </html>
  );
}
