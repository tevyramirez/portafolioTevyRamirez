import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Stack } from "@/components/stack"
import { Contact } from "@/components/contact"
import { CargadorCampoEditorial } from "@/components/editorial-field-loader"

export default function Home() {
  return (
    <>
      {/* Sistema 3D - capa más profunda, no compite con contenido */}
      <CargadorCampoEditorial />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </>
  )
}
