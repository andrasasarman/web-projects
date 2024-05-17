import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header className=" py-8 border-b-[1px] border-gray-400">
                <Link className=" font-marcellus text-3xl font-bold" to="/">galleria.</Link>
        </header>
    )
 }