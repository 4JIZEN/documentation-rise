import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ posts, slug = null, children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isSidebarOpen} posts={posts} slug={slug} />
            <div
                className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
                    isSidebarOpen ? "ml-64" : ""
                }`}
            >
                <Navbar onToggleSidebar={toggleSidebar} />
                <main className="flex-1 p-4 bg-zinc-100 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
