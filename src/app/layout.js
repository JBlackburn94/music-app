import { Inter } from "next/font/google";
import "./globals.css";
import LibraryAside from "./components/library/LibraryAside";
import SideNav from "./components/navigation/nav-side/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JB Music",
  description: "Project built by Jason Blackburn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNav />
        <LibraryAside />
        {children}
      </body>
    </html>
  );
}
