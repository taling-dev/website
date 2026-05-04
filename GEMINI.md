# Taling Project Conventions

## Iconography
- **Library**: [Lucide](https://lucide.dev/)
- **Packages**: 
  - `@lucide/astro` for Astro components.
  - `lucide-svelte` for Svelte components.
- **Usage**: Always prefer Lucide components over inline SVGs to maintain consistency and ease of development.

## Layout & Responsiveness
- **Max Width**: The main content area is capped at `1728px`.
- **Navbar**: The navbar spans the full width of the viewport, with its content centered within the `1728px` max-width container.
- **Breakpoints**: 
  - Use `lg` (1024px) for switching between desktop and mobile navigation.
  - Bento grids should adapt to 2 columns on `md` or `lg` depending on content density.
