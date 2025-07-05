import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-white/90 dark:bg-neutral-800/90 rounded-xl shadow p-6 sm:p-8"
        >
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight text-neutral-900 dark:text-neutral-100">
                About This Blog
            </h1>
            <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200">
                This is a demo blog platform built with React, Vite, and Tailwind CSS v4. It supports Markdown posts with syntax-highlighted code blocks, likes, bookmarks, and more — inspired by dev.to.
            </p>
            <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                Source code and instructions are available for learning purposes.
            </p>
        </motion.section>
    )
}
