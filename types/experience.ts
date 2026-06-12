export type ExperienceMode = "construct" | "red-pill" | "blue-pill"
export type PillMode = Exclude<ExperienceMode, "construct">
