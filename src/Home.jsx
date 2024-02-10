import Form from "./Form"
import { Link } from "react-router-dom"


export default function Home() {

    return (
        <main className='flex items-center justify-center h-screen bg-[#2b2d42]'>
            <div className="border-8 border-[#ef233c] w-[30%] h-[55%] bg-[#edf2f4] flex flex-col rounded">
                <h1 className="flex justify-center text-3xl font-extrabold text-[#2b2d42] mb-14 mt-16">
                    Anon Letters
                </h1>
                <Form />
                <Link className="ml-2 mt-auto w-24 mb-1 cursor-pointer hover:text-[#ef233c] hover:text-opacity-70" to="/create">Create Letter</Link>
            </div>
        </main>
    )
}