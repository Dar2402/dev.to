import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BlogContext } from '../context/BlogContext'
import MarkdownRenderer from '../components/MarkdownRenderer'
import { motion } from 'framer-motion'

export default function PostDetail() {
    const { slug } = useParams()
    const { state } = useContext(BlogContext)
    const post = state.posts.find(p => p.slug === slug)

    if (!post) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-16"
            >
                <h2 className="text-xl font-semibold mb-4">Post not found.</h2>
                <Link to="/" className="text-blue-700 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300 transition">
                    Back to Home
                </Link>
            </motion.div>
        )
    }

    const tags = Array.isArray(post.tags)
        ? post.tags
        : typeof post.tags === 'string'
            ? post.tags.split(',')
            : []

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight text-neutral-900 dark:text-neutral-100">
                {post.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                <span>{post.author}</span>
                <span aria-hidden="true">·</span>
                <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => (
                    <span
                        key={tag}
                        className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 dark:from-blue-900 dark:via-blue-950 dark:to-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
            {tag.trim()}
          </span>
                ))}
            </div>
            <MarkdownRenderer content={post.content} />
            <div className="mt-10">
                <Link
                    to="/"
                    className="inline-block text-blue-700 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300 transition"
                >
                    ← Back to Home
                </Link>
            </div>
        </motion.article>
    )
}
