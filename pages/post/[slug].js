import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

import Layout from "../../components/Layout";

export default function PostPage({ posts, slug, frontmatter, content }) {
    return (
        <Layout posts={posts} slug={slug}>
            <div className="prose mx-auto text-zinc-900">
                <h1>{frontmatter.title}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: md().render(content) }}
                />
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync("posts");
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const files = fs.readdirSync("posts");
    const posts = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter,
        };
    });

    const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);

    return {
        props: {
            posts,
            slug,
            frontmatter,
            content,
        },
    };
}
