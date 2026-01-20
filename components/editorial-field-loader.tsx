"use client"

import dynamic from "next/dynamic"

const CampoEditorial = dynamic(
    () => import("@/components/editorial-field").then((mod) => mod.CampoEditorial),
    { ssr: false }
)

export function CargadorCampoEditorial() {
    return <CampoEditorial />
}
