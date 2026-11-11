export default function Installation() {
  return (
  <section style={ card }>
        <h2>01 - Installation</h2>
        <p>Projet cree avec Vite + React</p>
        <pre style={code}>
{`npm create vite@latest nom-projet -- --template react
cd nom-projet
npm install
npm run dev`}
        </pre>

        <p style={{ color:"#555" }}>
            Objectif du cours : isoler chaque concept React dans un dossier et le tester dans App
        </p>
    </section>
    )
}

const card = {padding: 16, border: "1px solid #eee", borderRadius: 12};
const code = { padding:12, borderRadius: 10, background: "#f7f7f7", overflow: "auto" }