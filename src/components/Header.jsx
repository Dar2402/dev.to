import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import { FaMoon, FaSun } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className="bg-white/80 dark:bg-neutral-950/90 shadow-sm sticky top-0 z-30 backdrop-blur">
            <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
                <Link
                    to="/"
                    className="text-lg sm:text-2xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 rounded transition-colors"
                >
                    dev.to Clone
                </Link>
                <div className="flex items-center gap-2 sm:gap-6">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `px-3 py-1 rounded transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 ${
                                isActive
                                    ? 'text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900'
                                    : 'text-neutral-700 dark:text-neutral-200 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `px-3 py-1 rounded transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 ${
                                isActive
                                    ? 'text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900'
                                    : 'text-neutral-700 dark:text-neutral-200 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900'
                            }`
                        }
                    >
                        About
                    </NavLink>
                    {/*<button*/}
                    {/*    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}*/}
                    {/*    onClick={toggleTheme}*/}
                    {/*    className="ml-2 sm:ml-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow transition hover:bg-blue-100 dark:hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"*/}
                    {/*>*/}
                    {/*    <AnimatePresence mode="wait" initial={false}>*/}
                    {/*        {theme === 'dark' ? (*/}
                    {/*            <motion.span*/}
                    {/*                key="sun"*/}
                    {/*                initial={{ rotate: -90, opacity: 0 }}*/}
                    {/*                animate={{ rotate: 0, opacity: 1 }}*/}
                    {/*                exit={{ rotate: 90, opacity: 0 }}*/}
                    {/*                transition={{ duration: 0.3 }}*/}
                    {/*                className="block"*/}
                    {/*            >*/}
                    {/*                <FaSun className="text-yellow-400" size={18} />*/}
                    {/*            </motion.span>*/}
                    {/*        ) : (*/}
                    {/*            <motion.span*/}
                    {/*                key="moon"*/}
                    {/*                initial={{ rotate: 90, opacity: 0 }}*/}
                    {/*                animate={{ rotate: 0, opacity: 1 }}*/}
                    {/*                exit={{ rotate: -90, opacity: 0 }}*/}
                    {/*                transition={{ duration: 0.3 }}*/}
                    {/*                className="block"*/}
                    {/*            >*/}
                    {/*                <FaMoon className="text-blue-700" size={18} />*/}
                    {/*            </motion.span>*/}
                    {/*        )}*/}
                    {/*    </AnimatePresence>*/}
                    {/*</button>*/}
                </div>
            </nav>
        </header>
    )
}
