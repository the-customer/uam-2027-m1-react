// todo :
// - state
// - events
// - dynamic attribut

import { useState } from "react";

// - dynamic attribut
export default function ReactSate() {
    const [cpt,setCpt] = useState(0);
    // const st = useState(0)
    // const cpt = st[0]
    // const setCpt = st[1]
    const [name,setName] = useState("Moussa");
    // const name = 'aly'

    function handleClick(){
        setCpt(cpt+1)
    }
  return (
    <>
        <div>03_dynamic_attribut</div>
        <h2>{ cpt }</h2>
        <h2>{ name }</h2>
        <h2>{ name }</h2>
        <div>
            <button style={btn} onClick={ handleClick } >Click</button>
        </div>
    </>

  )
}
const btn = { padding: "5px 14px", color: "white", backgroundColor: "red", border:"1px solid red" }