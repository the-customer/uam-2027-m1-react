import React from 'react'

export default function Header({ home }) {
  return (
    <header className="border-b border-stone-300 print:hidden">
        <div className="mx-auto flex max-w-4xl flex-wrap items-baseline justify-between gap-x-5 gap-y-1 px-5 py-4">
          <a className="font-semibold hover:underline" href={ home }>
            React Concept Lab
          </a>
          <span className="muted">Cours React · M1</span>
        </div>
      </header>
  )
}

