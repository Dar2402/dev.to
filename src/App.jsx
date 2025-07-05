import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { BlogProvider } from './context/BlogContext'
import { ThemeProvider } from './context/ThemeContext'
import { AnimatePresence, motion } from 'framer-motion'

function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    )
}

function App() {
    const location = useLocation()
    return (
        <ThemeProvider>
            <BlogProvider>
                <div className="min-h-screen bg-gradient-to-b from-blue-50 via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
                    <Header />
                    <main className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-12">
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                                <Route path="/post/:slug" element={<PageTransition><PostDetail /></PageTransition>} />
                                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
                            </Routes>
                        </AnimatePresence>
                    </main>
                </div>
            </BlogProvider>
        </ThemeProvider>
    )
}

export default App
