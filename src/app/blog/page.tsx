import React from 'react';
import { Container } from "@/components/Container";
import Link from 'next/link';
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import defaultImage from "../../../content/default.jpg"

interface Post {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

const posts: Post[] = [
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
                <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <AspectRatio ratio={16 / 9}>
                                <Image
                                    src={defaultImage}
                                    alt={post.title}
                                />
                            </AspectRatio>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-sm mb-4">{post.date}</p>
                                <p className="mb-4">{post.excerpt}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-block text-indigo-600 hover:underline font-medium"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
        </Container>
    );
}
