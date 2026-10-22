export default function JsxBasics() {
    const user = { fullName: "Aly Tall Niang", role: "Teacher" }
    const year = new Date().getFullYear()
    const showBadge = false;
    const amount = 32000;



    return (
    <section style={ card }>
            <h2>02 - Jsx Basics</h2>
            <ul>
                <li>Nom: <strong> { user.fullName } </strong></li>
                <li>Role: <strong> { user.role } </strong></li>
                <li>Annee: <strong>{ year }</strong></li>
                <li>Montant: <strong> { amount.toLocaleString() } FCFA</strong></li>
                <li className="kjfhsd">Expression: <strong> { 2 * 3 + 4 } </strong></li>
            </ul>
           

            { showBadge && <p style={badge}>Badge Conditionnel</p> }
            
        </section>
        )
}

const card = {padding: 16, border: "1px solid #eee", borderRadius: 12};
const badge = { display:"inline-block", padding: "6px 10px", borderRadius:999, background: "#fafafa", border: "1px solid #ddd" }