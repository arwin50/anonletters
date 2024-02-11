import CreateLetterForm from "./CreateLetterForm";
import { Link } from "react-router-dom";


export default function CreateLetter() {
    return (
        <main className='flex items-center justify-center h-screen bg-[#2b2d42]'>
            <div className="border-8 border-[#ef233c] max-[640px]:w-[80%] sm:w-[50%] lg:w-[40%] sm:h-[70%]  min-h-[470px] bg-[#edf2f4] flex flex-col flex-shrink-0 rounded">
                <h1 className="flex justify-center text-3xl font-extrabold text-[#2b2d42] mb-4 mt-8">
                    Create Letter
                </h1>
                <CreateLetterForm />
                <Link className="ml-2 mt-auto w-28 mb-1 cursor-pointer hover:text-[#ef233c] hover:text-opacity-70" to="/">Back to Home</Link>
            </div>
        </main>
    )
}