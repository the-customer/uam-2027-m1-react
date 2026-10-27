import React from 'react'
import ProductCard from './ProductCard';

export default function PropsDemo() {
    const products = [
        { id: 1, name: "Stylo", price: 100 },
        { id: 2, name: "Cahier", price: 500 },
        { id: 3, name: "Classeur", price: 1500 },
        { id: 4, name: "Gomme", price: 50 },
    ];



    return (
        <section>
            <h2>02 - Props</h2>
            <p>Le parent passe des donnees a l'enfant via les <code>PROPS</code></p>

            <div style={grid}>
                {products.map((p) => (
                    <ProductCard product={p} key={p.id} />
                ))}
            </div>
        </section>
    )
}

const grid = { display: "grid", gap: 12, gridTemplateColumns: "repeat(3,minmax(0,1fr))", margin: 12 }
