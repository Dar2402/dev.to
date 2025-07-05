export const initialState = {
    posts: [],
    likes: {},       // { [slug]: number }
    bookmarks: {},   // { [slug]: boolean }
}

export default function blogReducer(state, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return { ...state, posts: action.payload }
        case 'LIKE_POST': {
            const slug = action.payload
            return {
                ...state,
                likes: {
                    ...state.likes,
                    [slug]: (state.likes[slug] || 0) + 1,
                },
            }
        }
        case 'BOOKMARK_POST': {
            const slug = action.payload
            return {
                ...state,
                bookmarks: {
                    ...state.bookmarks,
                    [slug]: !state.bookmarks[slug],
                },
            }
        }
        default:
            return state
    }
}
