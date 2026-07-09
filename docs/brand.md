# Brand Kit — Sebastián Ramírez

> Concepto de marca para desarrollador fullstack posicionado en Talca / Región del Maule, con capacidad B2B.

---

## 1. Arquetipo: El Cuidador

**Declaración:** "El desarrollador de confianza que está para lo que necesites."

El Cuidador no intimida. No dice "soy un hacker". Dice "te entiendo, lo resolvemos juntos".
Es cercano, accesible, pero con músculo técnico real (por eso el verde Matrix suavizado:
mantiene la señal de "sé de tecnología" sin el tono intimidante del terminal puro).

**Atributos:**
- Cercanía geográfica (Talca / Maule)
- Confianza ganada, no impuesta
- Resolución sobre espectáculo
- Acompañamiento durante todo el proyecto, no solo el código

**No es:** el experto distante, el innovador que usa lo último por moda, el freelancer que desaparece tras entregar.

---

## 2. Posicionamiento

**Eje mixto:** Talca (base geográfica) + B2B (capacidad de escalar fuera).

> "Desarrollador fullstack en Talca. Hago software a medida y WordPress personalizado
> para empresas del Maule que necesitan resolver algo real — y si creces, crecemos juntos."

**Diferenciador técnico verificable:** plugin custom en WordPress sin WooCommerce,
stack Django + React, Astro + Three.js para experiencias. Documentado en el portafolio.

---

## 3. Paleta — Verde Matrix Suavizado

Fondo cálido claro + tinta neutra + acento verde Matrix (tu señal técnica, domesticada).

| Token | Hex / OKLCH | Uso |
|---|---|---|
| `--bg-warm` | `#FBF9F4` (oklch 97% 0.01 150) | Fondo principal cálido, nunca blanco puro |
| `--surface` | `#F2EFE8` | Superficies elevadas (tarjetas, secciones) |
| `--ink` | `#1D1D1F` (oklch 20% 0.01 160) | Texto principal |
| `--muted` | `#6B6B66` | Texto secundario |
| `--border` | `#E2DDD2` | Bordes suaves, sin contraste duro |
| `--matrix` | `#2FA46A` (oklch 65% 0.15 150) | **Acento** — tu verde Matrix suavizado |
| `--matrix-soft` | `#E4F0E8` | Tintes de acento (fondos de chip, hover) |
| `--matrix-ink` | `#13502F` | Texto sobre acento verde |
| `--on-accent` | `#FBF9F4` | Texto sobre botones verdes |

**Regla:** el verde Matrix solo como acento (botones, links, chips, énfasis).
Nunca como fondo principal. El fondo es siempre cálido para proyectar calidez (Cuidador).

---

## 4. Tipografía

**Display + Body:** Geist (ya en el portafolio) o Instrument Sans — peso **400-500** máximo.
El Cuidador no usa bold agresivo. El peso ligero proyecta calma, no autoridad fría.

**Mono:** Geist Mono — para datos técnicos, precios, especificaciones.
Señal de "esto es serio y preciso" sin perder humanidad.

**Jerarquía:**
- H1: 400, `clamp(2rem, 5vw, 3.5rem)`, letter-spacing -0.02em
- H2: 500, `clamp(1.5rem, 3vw, 2.25rem)`
- Body: 400, 1.0625rem, line-height 1.6
- Mono: 0.875rem para datos

---

## 5. Tono de voz

| Situación | Decir | No decir |
|---|---|---|
| Presentación | "Hago software que resuelve tu problema" | "Soy un arquitecto de soluciones cloud-native" |
| Presupuesto | "Esto cuesta X porque incluye Y" | "Inversión estratégica de 4 dígitos" |
| Error/Demo | "Lo arreglamos juntos" | "El bug es del cliente" |
| Cierre | "Quedo atento a tus dudas" | "Espero su retroalimentación" |

**Principios:**
1. **Directo pero cálido.** "Te ayudo con eso" > "Implementaré una solución escalable".
2. **Primera persona.** "Yo hago", no "la empresa hace".
3. **Sin jerga innecesaria.** Explica lo técnico solo si el cliente lo pidió.
4. **Local sí, provinciano no.** "Desde Talca para todo Chile" > "el mejor de la región".

---

## 6. Aplicaciones de marca

### 6.1 Portafolio (modo "Píldora Azul")
Usa esta paleta cálida. El verde Matrix como acento en CTAs y links.
El modo "Píldora Roja" (Matrix inmersivo) se mantiene como experiencia alternativa.

### 6.2 Presupuesto / Cotización
Documento con header cálido, acento verde en totales y CTA.
Tipografía Geist + Geist Mono para números. Ver `presupuesto-template.md`.

### 6.3 Redes / LinkedIn
Foto cálida, no estudio. Bio: "Desarrollador fullstack en Talca. Software a medida y WordPress para PyMEs del Maule."

### 6.4 Firma de email
```
Sebastián Ramírez
Desarrollador Fullstack · Talca, Chile
[link portafolio] · [WhatsApp]
```

---

## 7. No-negociables de marca

1. **El verde Matrix es acento, no fondo.** Nunca inviertas a fondo verde oscuro para clientes B2B.
2. **Cercanía sobre autoridad.** Si suenas como una agencia de Santiago, perdiste el diferenciador Talca.
3. **Precisión técnica visible.** Tus case studies (plugin custom, RLS, FIFO) son tu prueba social. Siempre presentes.
4. **Una idea por viewport/sección.** Coherente con tu brief Cinematic.

---

## 8. Checklist de consistencia

- [ ] Portafolio azul usa `--bg-warm` + `--matrix` como acento
- [ ] Template de presupuesto usa los mismos tokens
- [ ] LinkedIn bio menciona Talca + Maule
- [ ] Firma de email con WhatsApp
- [ ] Sin jerga fría en propuestas
