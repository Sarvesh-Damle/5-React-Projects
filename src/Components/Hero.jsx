import React, {useState} from "react";

function Hero() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [power, setPower] = useState('')

  const [display, setDisplay] = useState(false)

  return (
    <div className="App">
      <h1>Build a Hero</h1>
      <div>
        <label>Name : </label>
        <input type="text" style={{margin: 10}} onChange={e => setName(e.target.value)} />

        <label>Age : </label>
        <input type="number" style={{margin: 10}} onChange={e => setAge(e.target.value)} />

        <label>Height : </label>
        <input type="number" style={{margin: 10}} onChange={e => setHeight(e.target.value)} />

        <label>SuperPower : </label>
        <input type="text"style={{margin: 10}} onChange={e => setPower(e.target.value)} />
      </div>
      <button onClick={() => setDisplay((a) => !a)}>{display? "Hide Character" : "Display Character"}</button>
      <h2>Hero Info</h2>
      {display? (<ul>
          <li>Name : {name}</li>
          <li>Age : {age}</li>
          <li>Height : {height}</li>
          <li>SuperPower : {power}</li>
        </ul>) : null}
      {/* Alternate Method : */}
      {/* {display && (
        <ul>
          <li>{name}</li>
          <li>{age}</li>
          <li>{height}</li>
          <li>{power}</li>
        </ul>
      )}   */}
    </div>
  );
}

export default Hero;