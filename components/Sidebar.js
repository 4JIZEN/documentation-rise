import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ posts, slug, isOpen }) {
    const [postList] = useState(
        posts.sort((a, b) => a.frontmatter.order - b.frontmatter.order)
    );
    const [current, setCurrent] = useState(!!slug ? slug : postList[0].slug);

    return (
        <>
            <div
                className={`bg-zinc-900 fixed top-0 left-0 h-screen w-64 p-4 drop-shadow-md transition-all duration-300 ease-in-out transform ${
                    isOpen ? `translate-x-0` : `-translate-x-full`
                }`}
            >
                <div
                    className={`bg-zinc-900 text-zinc-300 bottom-div absolute top-0 left-0 w-full p-4`}
                >
                    <h2 className="text-lg font-bold mb-4">
                        <span className="text-yellow-500">RISE</span>{" "}
                        DOCUMENTATION
                    </h2>

                    <ul className="flex-1">
                        {postList.map(({ slug, frontmatter }) => {
                            return (
                                <Link
                                    key={slug}
                                    href={`/post/${slug}`}
                                    onClick={() => setCurrent(slug)}
                                >
                                    <List currentPage={current === slug}>
                                        {frontmatter.title}
                                    </List>
                                </Link>
                            );
                        })}
                    </ul>
                </div>

                <div
                    className={`bg-zinc-900 text-zinc-300 bottom-div absolute bottom-0 left-0 w-full p-4`}
                >
                    <li
                        className={`flex flex-row justify-center items-center my-1 p-2 rounded-sm text-sm text-zinc-500`}
                    >
                        © 2023 Copyright RISE TH
                    </li>
                </div>
            </div>
        </>
    );
}

function List({ currentPage, children }) {
    return (
        <li
            className={`flex flex-row items-center my-1 p-2 rounded-sm hover:bg-zinc-700 ${
                currentPage && "text-yellow-500 bg-zinc-800"
            }`}
        >
            {children}
        </li>
    );
}
