"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`)
      document.documentElement.style.setProperty("--y", `${e.clientY}px`)
      document.documentElement.style.setProperty("--opacity", "1")
    }

    const handleMouseLeave = () => {
      document.documentElement.style.setProperty("--opacity", "0")
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <main className="container">
      <div className="content">
        <h1 className="title">smilingneuron</h1>

        <p className="subtitle">
          A quiet corner for ideas, experiments, and small tools around AI,
          technology, and things that are still taking shape.
        </p>

        <div className="actions">
  <a
    href="https://www.linkedin.com/in/shresthshuklaji"
    target="_blank"
    rel="noopener noreferrer"
    className="link"
  >
    Connect on LinkedIn
  </a>

  <span className="dot">•</span>

  <a
    href="https://uselessai.in"
    target="_blank"
    rel="noopener noreferrer"
    className="link muted"
  >
    More soon
  </a>
</div>

      </div>
    </main>
  )
}
