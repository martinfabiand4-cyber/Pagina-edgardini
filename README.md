# Liceo Politécnico Castro: landing page

Landing page del Liceo Politécnico Castro, con foco en la especialidad de Técnico en Informática.

## Stack

- React 18 + Vite
- Tailwind CSS v4
- lucide-react (iconografía)

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Estructura

- `src/components/Navbar.jsx`: navegación sticky con efecto glass y toggle de modo oscuro
- `src/components/Hero.jsx`: hero con badge "Admisión 2026 abierta" y fondo en malla (reemplazable por video)
- `src/components/QuickLinks.jsx`: grilla bento con accesos rápidos
- `src/components/Specialty.jsx`: sección Técnico en Informática
- `src/components/Footer.jsx`: contacto, navegación, redes y accesibilidad

## Pendientes antes de publicar

- Reemplazar el logo placeholder ("LP") por la marca institucional.
- Reemplazar los datos de contacto (teléfono, correo) y los enlaces de redes sociales en el footer.
- Sustituir el fondo del hero por un video o foto real del liceo.
