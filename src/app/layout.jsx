import Provider from "./Provider";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDbClone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          <SearchBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
