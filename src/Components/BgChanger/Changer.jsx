import React, {useState} from 'react'
import "./Change.css";

function Changer() {
    const [value, setValue] = useState("lightseagreen");

    return (
        <div className='MainBgContainer'>
            <h1>Background Changer</h1>
            <div className='ChangeContainer' style={{ backgroundColor: value }}>
                <div className='ChangeBar'>
                    <button onClick={() => setValue("violet")}>Violet</button>
                    <button onClick={() => setValue("indigo")}>Indigo</button>
                    <button onClick={() => setValue("blue")}>Blue</button>
                    <button onClick={() => setValue("green")}>Green</button>
                    <button onClick={() => setValue("yellow")}>Yellow</button>
                    <button onClick={() => setValue("orange")}>Orange</button>
                    <button onClick={() => setValue("red")}>Red</button>
                </div>
            </div>
        </div>
    )
}

export default Changer