import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Form() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const res = await axios.get('https://localhost:5000/username', { params: { name: username } });
            const userId = res.data._id
            navigate(`/${userId}/letters`)
        }
        catch (e) {
            console.log('Error', e)
        }


        setUsername("")
    }

    return (
        <div className="">
            <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <label htmlFor="name">Type the name/codename</label>
                <input type="text"
                    id="name"
                    name="name"
                    onChange={updateUsername}
                    value={username}
                    placeholder="Harry Potter"
                    className=" w-[85%] h-11 text-center font-semibold text-slate-700 bg-stone-300 border-2 rounded border-[#2b2d42] border-opacity-50"
                />

                <button type="submit" className="mt-2 border-2 rounded border-[#2b2d42] border-opacity-50 p-1 w-28 text-base bg-stone-300 hover:bg-[#ef233c] hover:bg-opacity-50 hover:font-semibold">Enter</button>
            </form>
        </div>
    )
}