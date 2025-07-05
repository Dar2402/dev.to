import React, { createContext, useReducer, useEffect } from 'react'
import blogReducer, { initialState } from './blogReducer'
import { loadPosts } from '../utils/loadPosts'

export const BlogContext = createContext()

export function BlogProvider({ children }) {
    const [state, dispatch] = useReducer(blogReducer, initialState)

    useEffect(() => {
        // Dynamically import all .md files in /posts
        async function fetchPosts() {
            const posts = await loadPosts()
            dispatch({ type: 'SET_POSTS', payload: posts })
        }
        fetchPosts()
    }, [])

    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}
