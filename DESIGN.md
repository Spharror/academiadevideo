# Design System Strategy: The Cinematic Lens

## 1. Overview & Creative North Star
**The Creative North Star: "The Obsidian Auteur"**
This design system moves away from the bright, cluttered aesthetics of typical e-learning platforms. Instead, it adopts the persona of a high-end film production studio. The goal is to create a "Cinematic Editorial" experience—where the interface feels like a premium video editing suite or a curated film gallery. 

We break the "template" look through **Tonal Depth** and **Intentional Asymmetry**. Rather than using traditional boxed layouts, we use massive, high-contrast typography juxtaposed with ultra-refined, low-profile interface elements. By leaning into dark charcoal surfaces and sharp electric accents, we provide a focused environment that allows the video content to be the hero.

---

## 2. Colors
The palette is built on deep obsidian tones with a high-voltage accent to mimic the "On Air" tally lights of a professional camera.

*   **Core Tones:**
    *   `background`: `#111416` (The base obsidian).
    *   `surface`: `#111416` (Deepest depth).
    *   `primary`: `#fbfffa` (Purest white for high-readability text).
    *   `surface_tint`: `#00e1ab` (Our signature Electric Mint accent).

*   **The "No-Line" Rule:**
    Prohibit 1px solid borders for sectioning. To separate the hero section from the "Productia video" section, do not draw a line. Instead, shift the background from `background` (#111416) to `surface_container_low` (#191c1e). Boundaries must feel like architectural changes in light, not drawn strokes.

*   **Surface Hierarchy & Nesting:**
    Treat the UI as stacked sheets of glass. 
    *   Base Page: `surface`
    *   Section Blocks: `surface_container_low`
    *   Interactive Cards: `surface_container_high`
    *   Floating Elements/Popovers: `surface_bright`

*   **The "Glass & Gradient" Rule:**
    For floating headers or navigational elements, use `surface_container` with a 70% opacity and a `20px` backdrop-blur. Use a subtle linear gradient from `primary_fixed` to `primary_fixed_dim` on high-priority CTAs to give them a metallic, professional sheen.

---

## 3. Typography
The typography system uses a "Tech-Editorial" pairing: **Space Grotesk** for structural authority and **Manrope** for technical clarity.

*   **Display & Headlines (Space Grotesk):** These are the "Title Cards" of your film. `display-lg` (3.5rem) should be used for the primary hook. The wide tracking and geometric nature of Space Grotesk convey a modern, cinematic feel.
*   **Body & Titles (Manrope):** Chosen for its high legibility in dark mode. `body-lg` (1rem) is the standard for course descriptions. 
*   **Hierarchy as Identity:** Use `label-md` in all-caps with 0.1rem letter spacing for category tags (e.g., "MODULE 01") to mimic technical camera metadata.

---

## 4. Elevation & Depth
In this design system, elevation is conveyed through **Tonal Layering**, not shadows that mimic sunlight.

*   **The Layering Principle:** Place a `surface_container_highest` (#323537) card on top of a `surface_container_low` (#191c1e) section. The contrast in grey values provides all the "lift" required.
*   **Ambient Shadows:** If a floating element (like a pricing modal) requires a shadow, use a large blur (30px-40px) with 6% opacity. The color should be `#000000`, creating a soft "glow of darkness" rather than a harsh drop shadow.
*   **The "Ghost Border" Fallback:** For input fields or cards that require a boundary on similar backgrounds, use `outline_variant` (#3a4a43) at 15% opacity. It should be felt, not seen.
*   **Glassmorphism:** Navigation bars must use a semi-transparent `surface` color with a heavy backdrop blur to allow the motion of the scroll to bleed through subtly.

---

## 5. Components

### Buttons
*   **Primary:** Background `primary_fixed` (#36ffc4), Text `on_primary_fixed` (#002116). Use `rounded-md` (0.375rem). No shadow. On hover, transition to `primary_fixed_dim`.
*   **Secondary:** Ghost style. `outline` color for text, no background. On hover, `surface_container_high` background.

### Cards (Course Modules)
*   **Rules:** Forbid divider lines. Use `spacing-8` (2.75rem) to separate internal card content.
*   **Style:** Use `surface_container_low` with a `rounded-lg` (0.5rem) corner. The image should be flush to the top with no padding.

### Input Fields
*   **Style:** `surface_container_highest` background. Bottom-only "Ghost Border" using `outline_variant` at 20% opacity. 
*   **States:** On focus, the border animates to 100% opacity of the `primary_fixed_dim` (Electric Mint).

### Chips (Category Tags)
*   **Style:** Small, `rounded-full`. Use `secondary_container` background with `on_secondary_container` text. Keep them low-contrast to ensure they don't compete with the CTA.

### Interactive Lists
*   Replace standard bullet points with the `primary_fixed_dim` (Electric Mint) accent in a small 4px square or a custom "Play" icon to reinforce the filming theme.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use extreme vertical white space (`spacing-24`) between major sections to create an editorial, high-end feel.
*   **DO** use "Electric Mint" (`primary_fixed`) sparingly—only for the primary action you want the user to take.
*   **DO** use `surface_bright` for hover states on dark cards to create a "light-up" effect.

### Don't:
*   **DON'T** use 100% black (#000000). Use `background` (#111416) to allow for depth and "on-surface" details to remain visible.
*   **DON'T** use 1px solid borders to separate the pricing tiers. Use `surface_container_low` vs `surface_container_high`.
*   **DON'T** use standard "drop shadows" on cards. Rely on color shifts.
*   **DON'T** use generic icons. Use thin-stroke, technical icons that look like camera interface symbols.