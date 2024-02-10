import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateLetterForm() {
    const navigate = useNavigate();
    const [receiver, setReceiver] = useState({ name: "", message: "" });

    const updateField = (evt) => {
        const field = evt.target.name;
        const text = evt.target.value;
        setReceiver(currData => {
            currData[field] = text;
            return { ...currData }
        })
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('http://localhost:5000/', {
                name: receiver.name,
                message: receiver.message,
            });

            setReceiver({ name: "", message: "" })
        } catch (error) {
            console.error('Error!:', error);
        }
        navigate('/')
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-1">
            <label htmlFor="name">Receiver</label>
            <input type="text"
                id="name"
                name="name"
                onChange={updateField}
                value={receiver.name}
                placeholder="Harry Potter"
                className=" w-[85%] h-11 text-center font-semibold text-slate-700 bg-stone-300 border-2 rounded border-[#2b2d42] border-opacity-50"
            />
            <label htmlFor="message">Message</label>
            <textarea type="text"
                id="message"
                name="message"
                onChange={updateField}
                value={receiver.message}
                placeholder="Harry Potter"
                className=" w-[85%] h-32 font-semibold pt-0 text-slate-700 bg-stone-300 border-2 rounded border-[#2b2d42] border-opacity-50"
            />
            <button className="mt-1  border-2 rounded border-[#2b2d42] border-opacity-50 p-1 w-28 text-base bg-stone-300">Send Letter</button>
        </form>
    )
}