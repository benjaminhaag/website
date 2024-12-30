import React from 'react';
import fs from 'fs'
import matter from 'gray-matter'
import { Container } from "@/components/Container";
import Link from 'next/link';
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import defaultImage from "../../../media/default.jpg"
import { Metadata } from 'next';

interface Post {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

const files = fs.readdirSync("content", "utf-8");

const posts: Post[] = files.map((filename) => {
    const fileContent  = fs.readFileSync(`content/${filename}`, "utf-8");
    const { data } = matter(fileContent);
    const post: Post = {
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        slug: filename.replace(/\.[^/.]+$/, "")
    };
    return post;
});

export const metadata: Metadata = {
  title: "Benjamin Haag - Blog",
  description: "Benjamin Haag's Blog about SaaS, Linux, Cloud, IT Security, and Web Development",
};

export default function BlogPage() {
    return (
        <Container>
                <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <Link key={index} href={`/blog/${post.slug}`}>
                            <div
                                className="p-[1px] rounded-lg bg-[#595959aa] hover:bg-gradient-to-br hover:from-primary hover:via-primary hover:to-secondary transition duration-300"
                            >
                                <div
                                    className="bg-background rounded-lg overflow-hidden" 
                                >
                                    <AspectRatio className="overflow-hidden" ratio={16 / 9}>
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
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
        </Container>
    );
}
