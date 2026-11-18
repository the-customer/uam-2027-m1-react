import { useState } from "react";

export default function Forms() {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        track: "data"
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("")
    // const [track, setTrack] = useState("")

    function change(event){
        const {name,value} = event.target;
        setFields((previous)=> ({ ...previous, [name]: value})
        )
    }

    function submit(event){
        event.preventDefault();
        if(
            !fields.name.trim() || 
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())){
                setMessage("");
                setError("Saisissez un nom et une adresse e-mail valide.");
            // setError((previous)=> "Saisissey un nom valide.");
            return;
        }
        setError("");
        setMessage(`Inscription de ${fields.name} au parcours ${fields.track}.`)
    }
  return (
    <form onSubmit={submit} className="demo-sheet mt-7 print:mt-0" aria-label="Démonstration">

        <div className="border-b border-stone-200 pb-3">
          <h2 className="text-lg font-semibold">
            Inscription aux ateliers du samedi
          </h2>
          <p className="muted">Une inscription par participant.</p>
        </div>
        <label className="label">
          Nom complet
          <input 
            className="field" 
            required="" 
            name="name" 
            onChange={ change }
            value={ fields.name } /> 
            {/* <input 
            className="field" 
            required="" 
            name="name" 
            onChange={ (e) => { setName(e.target.value) } }
            value={ name } />  */}
        </label>
        <label className="label">
          E-mail
          <input 
            className="field" 
            type="text" 
            required="" 
            name="email" 
            onChange={ change }
            value={ fields.email } />
       </label>
        <label className="label">
          Parcours
          <select className="field" name="track" value={fields.track} onChange={change}>
            <option value="web">Web</option>
            <option value="data">Data</option>
            <option value="design">Design</option>
          </select>
        </label>
        <div>
          <button className="action">
            S’inscrire
          </button>
        </div>
        {
            error && <p className="error" role="alert">{error}</p>
        }
        {
            message && <p className="tile" role="status">{message}</p>
        }
    </form>
  );
}
