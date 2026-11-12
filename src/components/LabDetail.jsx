import React from 'react'
import { labs } from '../labs/catalogue'
import Header from './Header';

export default function LabDetail({ lab, staticPreview = false }) {
    const index = labs.indexOf(lab);
    const home = staticPreview ? '/' : "#/";
    const previous = labs[index - 1];
    const next = labs[index + 1];
    const {Demo} = lab;
  return (
    <>
    <Header home={home} />
    <main class="mx-auto max-w-4xl px-5 pb-14 pt-6 sm:pt-9">
      <nav class="mb-7 text-sm print:hidden" aria-label="Retour au sommaire">
        <a class="text-link" href={ home }>← Tous les ateliers</a>
      </nav>
      <section class="max-w-2xl print:hidden">
        <p class="badge">{ lab.number } · { lab.concept }</p>
        <h1 class="page-title mt-2">{ lab.title }</h1>
        <p class="byline">Conçu par Aly Tall Niang</p>
        <p class="mt-4 max-w-prose leading-relaxed text-stone-700">
          { lab.description }
        </p>
      </section>
      <section class="demo-sheet mt-7 print:mt-0" aria-label="Démonstration">
        <Demo staticPreview = {staticPreview}/>
      </section>
      <nav
        class="mt-8 flex flex-wrap justify-between gap-4 border-t border-stone-300 pt-4 text-sm print:hidden"
        aria-label="Navigation des ateliers"
      >
        <a class="text-link" href="../04-jsx/index.html"
          >← 04 · Les bases de JSX</a
        ><a
          class="text-link ml-auto"
          href="../06-attributs-dynamiques/index.html"
          >06 · Attributs dynamiques →</a
        >
      </nav>
      </main>
    </>
  )
}
