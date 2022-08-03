import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex items-center justify-between px-5 bg-gray-700 text-white">
            <span className="font-bold">React Edu App</span>
            <span>
                <Link className="hover:text-amber-100 mr-2" to="/">Products</Link>
                <Link className="hover:text-amber-100" to="/about">About</Link>
            </span>
        </nav>
    )
}