import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FaRegCopy, FaCheck } from 'react-icons/fa'

function CodeBlock({ node, inline, className, children, ...props }) {
    const [copied, setCopied] = useState(false)
    const match = /language-(\w+)/.exec(className || '')
    const language = match?.[1] || ''

    const handleCopy = () => {
        navigator.clipboard.writeText(String(children).replace(/\n$/, ''))
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    if (inline) {
        return <code className="bg-neutral-100 dark:bg-neutral-800 rounded px-1">{children}</code>
    }

    return (
        <div className="relative group my-6">
            <button
                className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-xs text-neutral-700 dark:text-neutral-200 hover:bg-green-100 dark:hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400 transition z-10"
                onClick={handleCopy}
                aria-label="Copy code"
                type="button"
            >
                {copied ? <FaCheck className="text-green-600 dark:text-green-400" /> : <FaRegCopy />}
                {copied ? 'Copied!' : 'Copy'}
            </button>
            <SyntaxHighlighter
                language={language}
                style={oneLight}
                customStyle={{
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    background: 'var(--tw-prose-pre-bg, #f8fafc)',
                    padding: '1.2em'
                }}
                showLineNumbers
                {...props}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        </div>
    )
}

export default function MarkdownRenderer({ content }) {
    return (
        <div className="prose prose-blue max-w-none dark:prose-invert prose-code:before:hidden prose-code:after:hidden prose-pre:rounded-xl prose-pre:shadow-md prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-800">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code: CodeBlock,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
