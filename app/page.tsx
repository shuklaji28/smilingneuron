"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [pos, setPos] = useState<null | { top: string; left: string }>(null)


  // Random emoji position on refresh
  useEffect(() => {
    const padding = 8 // percent

    const top = Math.random() * (100 - padding * 2) + padding
    const left = Math.random() * (100 - padding * 2) + padding

    setPos({
      top: `${top}%`,
      left: `${left}%`,
    })
  }, [])

  // Cursor tracking for torch
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`)
      document.documentElement.style.setProperty("--y", `${e.clientY}px`)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <main className="container">
      <div className="cursor-glow" />
      {/* Hidden clickable emoji */}
      {pos && (
        <Link
          href="/about"
          className="hidden-emoji"
          style={{ top: pos.top, left: pos.left }}
        >
        🙂
        </Link>
      )}

      {/* Main visible content */}
      <div className="content">
        <h1 className="title">smilingneuron</h1>

        <p className="subtitle">
          A quiet corner for ideas, experiments, and small tools around AI,
          technology, and things that are still taking shape. Move your cursor and find the hidden smiling emoji to know more about the project.
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
