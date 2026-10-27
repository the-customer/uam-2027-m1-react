export default function ProductCard({ product }) {
    // console.log(p)
    // const product = p.product
    // const {product} = p
    return (
        <article style={card}>
            <h3 style={{ margin: 0, fontSize: 16 }}>{ product.name }</h3>
            <p style={{ margin: "6px 0 0", fontWeight: 700 }}>{ product.price } FCFA</p>
            <p style={{ margin: "6px 0 0", fontSiZe: 12, color: "#666" }}>ID : { product.id }</p>
        </article>
    )
}

const card = { padding: 14, border: "1px solid #eee", borderRadius: 12, background: "#fff" }