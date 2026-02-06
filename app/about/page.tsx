import fs from "fs"
import path from "path"
import { marked } from "marked"
export default function About() {
  const filePath = path.join(process.cwd(), "content", "about.md")
  const markdown = fs.readFileSync(filePath, "utf-8")
  const html = marked(markdown)

  return (
    <main className="container">
      <div className="content about-content">
        <article
            className="about-article"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  )
}
