import { useEffect, useState } from "react"


export default function Timer() {

    const [seconds,setSeconds] = useState(0);
    const [running,setRunning] = useState(false);

    useEffect(()=>{
        if(!running) return;
        const interval = setInterval(
            () => setSeconds((previous) => previous + 1),
            1000
        );
        return () => clearInterval(interval);
    }, [running]);


  return (
    <section class="demo-sheet mt-7 print:mt-0" aria-label="Démonstration">
        <div class="stack">
          <div class="border-y border-stone-200 py-4">
            <p class="muted">Temps écoulé depuis le début de l’exercice</p>
            <p class="mt-2 font-mono text-4xl font-semibold tabular-nums">
              { seconds } s
            </p>
          </div>
          <div class="row">
            <button 
                type="button" 
                onClick={ ()=>setRunning((value)=>!value) }
                class="action">{ running ? 'Mettre en pause' : 'Démarrer' }</button>
            <button 
                type="button" 
                onClick={()=>{
                    setRunning(false);
                    setSeconds(0);
                }}
                class="secondary">Remettre à zéro</button>
          </div>
        </div>
      </section>
  )
}
