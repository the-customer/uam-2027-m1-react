import { labs } from "../labs/catalogue";
import Header from "./Header";

const sessions = [
  ["Démarrer avec React", 0, 4],
  ["Transmettre des données et réagir aux événements", 4, 7],
  ["Afficher et mettre à jour une interface", 7, 10],
  ["Construire un formulaire", 10, 11],
  ["Partager l’état et utiliser les effets", 11, 14],
  ["Mémoriser et accéder au DOM", 14, 17],
  ["Réutiliser et organiser l’état", 17, 20],
  ["Observer les rendus et charger des données", 20, 22],
  ["Composer les pages et organiser la navigation", 22, 25],
  ["Assembler une mini-caisse", 25, 26],
];
export default function Catalog({ staticPreview = false }) {
  return (
    <>
      <Header home={staticPreview ? "/" : "#/"} />
      <main className="mx-auto max-w-4xl px-5 pb-16 pt-9 sm:pt-14">
        <div className="max-w-2xl border-b border-stone-300 pb-6">
          <h1 className="page-title">React Concept Lab</h1>
          <p className="byline">Conçu par Aly Tall Niang</p>
          <p className="mt-4 max-w-prose text-stone-700">
            26 ateliers en JavaScript et Tailwind CSS, répartis sur 10 séances.
          </p>
        </div>
        <div className="mt-8 grid gap-8">
          {sessions.map(([title, start, end], index) => (
            <section key={title}>
              <h2 className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-sm font-semibold text-red-900">
                  Séance {index + 1}
                </span>
                <span className="font-serif text-xl font-bold"> {title} </span>
              </h2>
              <ol className="border-y border-stone-200" start={start + 1}>
                {labs.slice(start, end).map((lab) => (
                  <li key={lab.slug} className="border-b border-stone-200 last:border-0">
                    <a
                      className="lesson-link"
                      href={
                        staticPreview
                        ? `/lab/${lab.slug}`
                        : `#/lab/${lab.slug}`
                      }
                    >
                      <span className="text-sm tabular-nums text-red-900">
                        { lab.number }
                      </span>
                      <span className="lesson-name">{ lab.title }</span>
                      <span className="lesson-concept">{ lab.concept }</span>
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
