'use client';

import Provider from './Provider';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDClone'
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <body className={inter.className}>
      <Provider>
          <Header/>
          <Navbar/>
          {children}
      </Provider>
        </body>
    </html>
  )
}
