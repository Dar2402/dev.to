import React from 'react'
import PostList from '../components/PostList'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <section>
            <motion.h1
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-2xl sm:text-3xl font-extrabold mb-8 tracking-tight text-neutral-900 dark:text-neutral-100"
            >
                Latest Posts
            </motion.h1>
            <PostList />
        </section>
    )
}
