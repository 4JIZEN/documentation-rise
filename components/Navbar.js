import { FaBars } from "react-icons/fa";

export default function Navbar({ onToggleSidebar }) {
    return (
        <nav
            className={`bg-zinc-900 h-[60px] text-white border-b-4 border-yellow-500 flex justify-between items-center`}
        >
            <button
                onClick={onToggleSidebar}
                className="text-yellow-500 focus:outline-none ml-4"
            >
                <FaBars />
            </button>
        </nav>
    );
}
