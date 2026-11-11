import { labs } from "../labs/catalogue";

export default function Catalog() {
    console.log(labs)
  return (
    <>
      <header className="border-b border-stone-300 print:hidden bg-slate-400">
        <div className="mx-auto flex max-w-4xl flex-wrap items-baseline justify-between gap-x-5 gap-y-1 px-5 py-4">
          <a className="font-semibold hover:underline" href="./index.html">
            React Concept Lab
          </a>
          <span className="muted">Cours React · M1</span>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-5 pb-16 pt-9 sm:pt-14">
        <div className="max-w-2xl border-b border-stone-300 pb-6">
          <h1 className="page-title">React Concept Lab</h1>
          <p className="byline">Conçu par Aly Tall Niang</p>
          <p className="mt-4 max-w-prose text-stone-700">
            26 ateliers en JavaScript et Tailwind CSS, répartis sur 10 séances.
          </p>
        </div>
        <div className="mt-8 grid gap-8">
          <section>
            <h2 className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-semibold text-red-900">Séance 1</span>
              <span className="font-serif text-xl font-bold">
                Démarrer avec React
              </span>
            </h2>
            <ol className="border-y border-stone-200" start="1">
              <li className="border-b border-stone-200 last:border-0">
                <a className="lesson-link" href="./01-installation/index.html">
                  <span className="text-sm tabular-nums text-red-900">01</span>
                  <span className="lesson-name">Démarrer avec Vite</span>
                  <span className="lesson-concept">Installation</span>
                </a>
              </li>
              <li className="border-b border-stone-200 last:border-0">
                <a className="lesson-link" href="./02-structure/index.html">
                  <span className="text-sm tabular-nums text-red-900">02</span>
                  <span className="lesson-name">La bibliothèque de classNamee</span>
                  <span className="lesson-concept">Structure des dossiers</span>
                </a>
              </li>
              <li className="border-b border-stone-200 last:border-0">
                <a className="lesson-link" href="./03-hello-world/index.html">
                  <span className="text-sm tabular-nums text-red-900">03</span>
                  <span className="lesson-name">Bienvenue à Dakar</span>
                  <span className="lesson-concept">Hello World</span>
                </a>
              </li>
              <li className="border-b border-stone-200 last:border-0">
                <a className="lesson-link" href="./04-jsx/index.html">
                  <span className="text-sm tabular-nums text-red-900">04</span>
                  <span className="lesson-name">Les places de l’atelier</span>
                  <span className="lesson-concept">Les bases de JSX</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}
