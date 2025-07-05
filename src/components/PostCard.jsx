import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BlogContext } from '../context/BlogContext'
import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function PostCard({ post }) {
    const { state, dispatch } = useContext(BlogContext)
    const likes = state.likes[post.slug] || 0
    const bookmarked = !!state.bookmarks[post.slug]
    const tags = Array.isArray(post.tags)
        ? post.tags
        : typeof post.tags === 'string'
            ? post.tags.split(',')
            : []

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col gap-3 px-5 py-6 sm:px-8 sm:py-7 mb-7"
        >
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <span>{post.author}</span>
                <span aria-hidden="true">·</span>
                <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <Link
                to={`/post/${post.slug}`}
                className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 rounded"
            >
                <h2 className="text-lg sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                </h2>
                <p className="mt-1 text-neutral-700 dark:text-neutral-300 text-base line-clamp-2 group-hover:underline group-hover:underline-offset-2">
                    {post.excerpt}
                </p>
            </Link>
            <div className="flex flex-wrap gap-2 mt-1">
                {tags.map(tag => (
                    <span
                        key={tag}
                        className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 dark:from-blue-900 dark:via-blue-950 dark:to-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
            {tag.trim()}
          </span>
                ))}
            </div>
            <div className="flex items-center gap-4 mt-2">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-1 text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-400 rounded"
                    onClick={() => dispatch({ type: 'LIKE_POST', payload: post.slug })}
                    aria-label="Like"
                >
                    {likes > 0 ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                    <span className="text-sm">{likes}</span>
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-1 text-neutral-600 dark:text-neutral-300 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded"
                    onClick={() => dispatch({ type: 'BOOKMARK_POST', payload: post.slug })}
                    aria-label="Bookmark"
                >
                    {bookmarked ? <FaBookmark className="text-blue-700 dark:text-blue-300" /> : <FaRegBookmark />}
                </motion.button>
            </div>
        </motion.article>
    )
}
