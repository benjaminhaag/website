"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { cn } from '@/lib/utils'

interface LinkType {
    id: string;
    text: string;
}

interface OnThisPageProps {
    htmlContent: string;
    className?: string;
    maxLength?: number;
}

export default function OnThisPage({ htmlContent, className, maxLength = 20 }: OnThisPageProps) {

    const [links, setLinks] = useState<LinkType[]>([]);

    useEffect(() => {
        const temp = document.createElement("div");
        temp.innerHTML = htmlContent;
        const headings = temp.querySelectorAll('h2'); // ToDo: create tree
        const generatedLinks: LinkType[] = [];
        headings.forEach((heading, index) => {
            const id = heading.id || `heading-${index}`;
            heading.id = id;
            generatedLinks.push({
                id,
                text: (heading as HTMLHeadingElement).innerText
            })
        });
        setLinks(generatedLinks);
    }, [htmlContent]);

    return (
        <div className={cn('hidden md:block', className)}>
            <div className="sticky top-20">
                <h2>On This Page</h2>
                <ul className="not-prose">
                    {links && links.map((link) => (
                        <li key={link.id} className='pt-1'>
                            <Link href={`#${link.id}`}>{link.text.slice(0, maxLength)}{link.text.length > maxLength ? '...' : ''}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
