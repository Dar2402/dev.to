import matter from 'gray-matter'

// Vite import.meta.glob for markdown files
export async function loadPosts() {
    // Import all .md files in /posts as raw text
    const files = import.meta.glob('../posts/*.md', { as: 'raw' })
    const posts = []

    for (const path in files) {
        const content = await files[path]()
        const { data, content: markdown } = matter(content)
        // Slug from filename
        const slug = path.split('/').pop().replace('.md', '')
        posts.push({
            ...data,
            content: markdown,
            slug,
        })
    }

    // Sort by date descending
    posts.sort((a, b) => new Date(b.date) - new Date(a.date))
    return posts
}
