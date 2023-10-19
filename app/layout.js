"use client";

import Navbar from '@components/navbar'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
    title: 'ACES',
    description: 'Generated by Rahul A B',
}

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    };
    
    return (
        <html lang="en">
            <body className={`main-layout ${darkMode ? 'dark-mode' : ''}`}>
                <section className="min-h-screen">
                    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <div className='px-7'>{children}</div>
                </section>
            </body>
        </html>
    )
}