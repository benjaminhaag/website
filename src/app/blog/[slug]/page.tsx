import React from 'react'
import { Container } from '@/components/Container'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import matter from 'gray-matter'
import fs from 'fs'
import OnThisPage from '@/components/OnThisPage'

interface PostPageProps {
    params: Promise<{
        slug: string;
    }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
    const files = fs.readdirSync("content", "utf-8");

    return files.map((filename) => {
        return { slug: filename.replace(/\.[^/.]+$/, "")};
    });
}

export async function generateMetadata(props: PostPageProps) {
  const params = await props.params;
  const filePath = `content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const {data} = matter(fileContent)
  return {
      title: data.title,
      description: data.description
    }
}

const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, {
        allowDangerousHtml: true
    })
    .use(rehypeCodeTitles)
    .use(rehypePrettyCode, {
        theme: "github-dark",
        transformers: [
            transformerCopyButton({
                visibility: 'always',
                feedbackDuration: 3_000
            })
        ]
    })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings);

export default async function PostPage({ params }: PostPageProps) {

    const filePath = `content/${(await params).slug}.md`;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const htmlContent = (await processor.process(content)).toString();

    return (
        <Container className="prose dark:prose-invert">
            <div className="flex">
                <OnThisPage className="w-[20%]" htmlContent={htmlContent} />
                <div className='px-16 w-[80%]'>
                    <h1>{data.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                </div>
            </div>
        </Container>
    )
}
