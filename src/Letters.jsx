import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Letters() {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [letters, setLetters] = useState({ empty: true });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://localhost:5000/letters', { params: { id: userId } });
                const receivedLetters = res.data;
                setLetters(receivedLetters);
            }
            catch (e) {
                navigate("/404")
            }

        };
        fetchData();
    }, [userId]);


    return (
        <main className="flex justify-center items-center h-screen bg-[#2b2d42]">
            <section className="w-[80%] h-[80%] bg-[#edf2f4] rounded border-8 border-[#ef233c] flex flex-col overflow-y-scroll">
                <h1 className="flex justify-center text-3xl font-extrabold text-[#2b2d42] mt-2 max-sm:text-xl max-sm:text-center">
                    All Messages Received by {letters.name}
                </h1>
                {letters.message && letters.message.map((message, index) => (
                    <div key={index} >
                        <div className="mt-4 my-1 p-4 bg-white border rounded shadow-md max-sm:text-xs">
                            {message.text}
                        </div>
                        <p className="ml-4 text-xs">Date Sent: {message.date}</p>
                    </div>

                ))}
                <Link className="ml-auto mt-auto w-28 mb-1 cursor-pointer hover:text-[#ef233c] hover:text-opacity-70" to="/">Back to Home</Link>
            </section>
        </main>
    );
}