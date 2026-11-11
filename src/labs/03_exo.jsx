import { useState } from "react"

export default function Exo03() {
    
    const [status,setStatus] = useState("success")
    const badgeStyle = { padding: "6px 10px", borderRadius: 999, border: "1px solid #ddd", fontWeight: 700, display: "inline-block" }

    function changeStatus(newStatus){
        setStatus(newStatus)
    }
    return (
        <section>
            <h2>03 - Exo</h2>
            <div>
                <span style={badgeStyle}>{status}</span>
                <select value={status} onChange={ (e) =>  changeStatus(e.target.value)  }>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="danger">Danger</option>
                </select>
            </div>

            <div></div>
        </section>
    )
}
