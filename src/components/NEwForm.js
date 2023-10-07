import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './NEwForm.css'
function NEwForm({newEvent}) {
    const [title, setTitle] = useState("");
    const [data, setDate] = useState("");
    const [locations, setLocations] = useState('fargana');
    function nono() {
        setTitle("");
        setDate("");
    }
    const addElement = (e) => {
        e.preventDefault();
        const elemet = {
            title: title,
            date: data,
            id: uuidv4(),
            locations: locations
        };
        newEvent(elemet);     
        nono();
    };
    return (
        <form onSubmit={addElement}>
            <label>
                <span>Enter your informations</span>
                <br />
                <br />
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br />
                <br />
                <input
                    type="date"
                    className="dateImput"
                    onChange={(e) => setDate(e.target.value)}
                    value={data}
                />
            </label>
            <br />
            <br />
            <button className="saccses">Submit</button>

            <label>
                <span>Select change: </span>
                <select onChange={(e)=>setLocations(e.target.value)}>
                    <option value="fargana">Farg'ona</option>
                    <option value="namangan">Namangan</option>
                    <option value="london">London</option>
                    <option value="navoiy">Navoiy</option>
                    <option value="newYour">New Your</option>
                    <option value="use">USA</option>
                    <option value="andijon">Andijon</option>
                </select>
            </label>
        </form>
    );
}

export default NEwForm;
