import React from 'react';
import { Container } from "@/components/Container";

interface Post {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

const posts = [
    {
        title: 'Understanding React Context',
        excerpt: 'Learn how to manage global state effectively using React Context.',
        date: '2024-12-22',
        slug: '/blog/react-context',
    },
    {
        title: 'Tailwind CSS Tips & Tricks',
        excerpt: 'Enhance your Tailwind CSS workflow with these essential tips.',
        date: '2024-12-20',
        slug: '/blog/tailwind-tips',
    },
    {
        title: 'Getting Started with Neovim',
        excerpt: 'A beginner-friendly guide to using Neovim as your IDE.',
        date: '2024-12-18',
        slug: '/blog/neovim-guide',
    },
];

export default function BlogPage() {
    return (
        <Container>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                                <a
                                    href={post.slug}
                                    className="inline-block text-indigo-600 hover:underline font-medium"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
