import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'
import PostCard from './PostCard'
import { motion, AnimatePresence } from 'framer-motion'

export default function PostList() {
    const { state } = useContext(BlogContext)
    if (!state.posts.length) {
        return (
            <div className="flex justify-center items-center py-16 text-neutral-400 text-lg font-medium animate-pulse">
                Loading posts…
            </div>
        )
    }
    return (
        <motion.div layout>
            <AnimatePresence>
                {state.posts.map(post => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </AnimatePresence>
        </motion.div>
    )
}
