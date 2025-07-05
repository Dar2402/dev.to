import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-16"
        >
            <h1 className="text-5xl font-extrabold mb-4 text-blue-700 dark:text-blue-400">404</h1>
            <p className="mb-4 text-lg text-neutral-700 dark:text-neutral-200">Page not found.</p>
            <Link to="/" className="text-blue-700 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300 transition">
                Go to Home
            </Link>
        </motion.section>
    )
}
