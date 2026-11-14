# Taller 4 — Astro (SSG) y Angular (SPA)

[![CI/CD](https://github.com/INGDavidMora2005/Taller-4-Astro-Angular-SSG-SPA/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/INGDavidMora2005/Taller-4-Astro-Angular-SSG-SPA/actions/workflows/deploy.yml)

Taller de Arquitectura de Software (UCEVA) en el que se comparan dos formas de construir un frontend con datos locales:

- **Astro-SSG**: un sitio generado estáticamente (SSG).
- **Client-Angular**: una aplicación de una sola página (SPA) con Angular.

Ambas aplicaciones se publican juntas en un único sitio de GitHub Pages mediante un pipeline de GitHub Actions.

## Sitio desplegado

| Aplicación | URL |
| --- | --- |
| SPA Angular (raíz del sitio) | https://ingdavidmora2005.github.io/Taller-4-Astro-Angular-SSG-SPA/ |
| SSG Astro (subdirectorio `/astro/`) | https://ingdavidmora2005.github.io/Taller-4-Astro-Angular-SSG-SPA/astro/ |

La portada de Astro redirige a su página de usuarios (`/astro/users/`), igual que hace la SPA con las rutas no reconocidas.

> Las URLs anteriores corresponden al despliegue configurado en el workflow. Si el sitio todavía no se ha publicado, hay que ejecutar el pipeline al menos una vez (ver [Despliegue](#despliegue)).

## SSG y SPA: la diferencia

**SSG (Static Site Generation)** significa que las páginas se generan como archivos HTML completos durante el build. En este proyecto, `npm run build` dentro de `Astro-SSG` produce un `index.html` por cada página (`users`, `products`, `categories`, `customers`, `orders`, `current-date`). El servidor solo entrega esos archivos; no hay un proceso de renderizado por cada visita. Por eso un sitio SSG funciona bien en GitHub Pages, que únicamente sirve archivos estáticos.

**SPA (Single Page Application)** significa que el navegador carga un único `index.html` y el enrutador de Angular cambia la vista sin pedir otra página al servidor. En este proyecto, `Client-Angular` define las rutas en `src/app/app.routes.ts` y usa el `RouterOutlet` para mostrar la página correspondiente. Como todas las rutas terminan en el mismo HTML, un servidor estático debe devolver ese HTML también para URLs profundas; de ahí el `404.html`.

## Estructura del repositorio

```text
Taller-4-Astro-Angular-SSG-SPA/
├── Astro-SSG/                 # Sitio SSG (Astro + Bootstrap)
│   ├── src/pages/             # Una página por archivo .astro
│   ├── src/components/        # Navbar, iconos y badges compartidos
│   ├── src/data/              # Datos locales de usuarios, productos, etc.
│   └── astro.config.mjs       # site y base del despliegue
├── Client-Angular/            # SPA (Angular standalone + Jest)
│   ├── src/app/pages/         # Páginas de usuarios, productos, etc.
│   ├── src/app/services/      # Servicios que devuelven datos locales con RxJS
│   └── angular.json           # Build y presupuestos de Angular
└── .github/workflows/deploy.yml  # Build, ensamblado, despliegue y verificación
```

Cada aplicación tiene su propio `package.json` y su propio `package-lock.json`; no hay un `package.json` en la raíz.

El README original de la plantilla de Astro se conserva en [`Astro-SSG/README.md`](Astro-SSG/README.md).

## Tecnologías y versiones

Versiones leídas de cada `package.json`:

### Client-Angular

| Paquete | Versión |
| --- | --- |
| `@angular/core` (y paquetes de Angular) | 20.3.14 |
| `@angular/cli` | 20.3.12 |
| `@angular/build` | 20.3.12 |
| `typescript` | 5.9.2 |
| `jest` | 30.2.0 |
| `jest-preset-angular` | 15.0.3 |
| `bootstrap` | 5.3.8 |
| `bootstrap-icons` | 1.13.1 |
| `@brejcha13320/design-system-bootstrap` | 1.0.2 |
| `rxjs` | 7.8.0 |
| `zone.js` | 0.15.0 |

### Astro-SSG

| Paquete | Versión |
| --- | --- |
| `astro` | 5.16.9 |
| `bootstrap` | 5.3.8 |
| `bootstrap-icons` | 1.13.1 |

### Node.js

El workflow usa **Node.js 24** porque es la versión que satisface a la vez los `engines` instalados:

- Angular CLI 20.3.12 exige `^20.19.0 || ^22.12.0 || >=24.0.0`.
- Astro 5.16.9 exige `18.20.8 || ^20.3.0 || >=22.0.0`.

La intersección práctica es Node 24, que es la versión configurada en `.github/workflows/deploy.yml`.

## Scripts reales

### Client-Angular

| Script | Comando | Para qué sirve |
| --- | --- | --- |
| `npm start` | `ng serve` | Servidor de desarrollo en `http://localhost:4200/` |
| `npm run build` | `ng build` | Build de producción en `dist/Angular-Standalone-Template/browser/` |
| `npm test` | `jest` | Pruebas unitarias una sola vez (no usa watch) |
| `npm run test:watch` | `jest --watch` | Pruebas en modo watch |
| `npm run test:coverage` | `jest --coverage` | Pruebas con cobertura |
| `npm run compodoc` | `compodoc` | Documentación del código |

Para el despliegue, el build se ejecuta con la base del repositorio:

```sh
npm run build -- --base-href /Taller-4-Astro-Angular-SSG-SPA/
```

### Astro-SSG

| Script | Comando | Para qué sirve |
| --- | --- | --- |
| `npm run dev` | `astro dev` | Servidor de desarrollo; la URL incluye la base configurada |
| `npm run build` | `astro build` | Genera el sitio estático en `dist/` |
| `npm run preview` | `astro preview` | Sirve localmente el resultado del build |
| `npm run astro` | `astro` | Acceso a la CLI de Astro |

## Enrutamiento

### SPA Angular

`Client-Angular` usa la estrategia de rutas limpias (`PathLocationStrategy`, la predeterminada de Angular; no se configura `useHash`). Las rutas reales son:

- `/users`
- `/products`
- `/categories`
- `/customers`
- `/date`
- `/orders`

La ruta comodín `**` redirige a `/users`.

En GitHub Pages no existe un servidor que reescriba las URLs profundas hacia `index.html`. Por eso el pipeline copia `_site/index.html` a `_site/404.html`: cuando se abre una ruta como `/Taller-4-Astro-Angular-SSG-SPA/orders`, Pages responde con estado HTTP **404** pero entrega el HTML de Angular, que arranca y muestra la ruta solicitada.

**Limitación:** la respuesta HTTP de una ruta profunda sigue siendo 404 aunque la aplicación se vea correctamente. Es el comportamiento esperado del truco de `404.html`, no un fallo del enrutador. Además, GitHub Pages solo admite un `404.html` por sitio; por eso la SPA ocupa la raíz y el SSG vive en `/astro/`, donde cada página es un archivo HTML real.

### SSG Astro

Astro genera una carpeta por página (`dist/users/index.html`, `dist/products/index.html`, etc.). La configuración de `Astro-SSG/astro.config.mjs` fija:

- `site: 'https://ingdavidmora2005.github.io'`
- `base: '/Taller-4-Astro-Angular-SSG-SPA/astro'`

Los enlaces internos y el favicon se construyen con `import.meta.env.BASE_URL`, de modo que apuntan a `/Taller-4-Astro-Angular-SSG-SPA/astro/...` tanto en desarrollo como en el build. La portada `index.astro` redirige a `users`.

## Ejecutar en local

### Client-Angular

```sh
cd Client-Angular
npm ci
npm start
```

Abrir `http://localhost:4200/`. Los datos son locales (los servicios devuelven mocks con `of(...)`); no se necesita backend.

Para reproducir el build de Pages:

```sh
npm run build -- --base-href /Taller-4-Astro-Angular-SSG-SPA/
```

### Astro-SSG

```sh
cd Astro-SSG
npm ci
npm run dev
```

Astro imprime la URL local, que incluye la base configurada (`/Taller-4-Astro-Angular-SSG-SPA/astro`). Para probar el build:

```sh
npm run build
npm run preview
```

## Pruebas

- **Client-Angular:** 73 pruebas en 19 suites, ejecutadas con Jest 30.2.0 (`npm test`). Todas pasan en local.
- **Astro-SSG:** no tiene pruebas unitarias ni script de test. Su validación es el build de Astro (`npm run build`), que genera las 7 páginas.

Comando usado en el pipeline para la SPA:

```sh
npm test -- --no-watch
```

## Pipeline (CI/CD)

El workflow se llama **CI/CD** y está en `.github/workflows/deploy.yml`. Se ejecuta con `push` y `pull_request` sobre la rama por defecto (`master`) y también con `workflow_dispatch`.

Tiene tres jobs:

1. **Build y pruebas**
   - Checkout y `setup-node` con Node 24 y caché de npm para los dos `package-lock.json`.
   - `npm ci` en `Client-Angular` y en `Astro-SSG`.
   - Pruebas de la SPA con Jest.
   - Build de la SPA con `--base-href /Taller-4-Astro-Angular-SSG-SPA/`.
   - Build del SSG con la base configurada en `astro.config.mjs`.
   - Ensamblado del sitio en `_site` (solo en el runner, no se versiona):

     ```text
     _site/
     ├── index.html          # SPA Angular en la raíz
     ├── 404.html            # copia del index de la SPA
     ├── main-*.js, styles-*.css, ...
     └── astro/              # SSG Astro
         ├── index.html
         ├── users/index.html
         ├── _astro/...
         └── ...
     ```

   - Validación de que existen `_site/index.html`, `_site/404.html` y `_site/astro/index.html`, de que la SPA tiene el `base href` correcto y de que la portada de Astro redirige bajo `/astro/`.
   - En `push` o `workflow_dispatch` sobre `master`, configura Pages y sube `_site` como artefacto. En `pull_request` solo se valida el build.

2. **Desplegar en GitHub Pages**
   - Depende del build y solo corre en `push`/`workflow_dispatch` sobre `master`.
   - Usa el environment `github-pages`, permisos `pages: write` e `id-token: write` y el grupo de concurrencia `pages`.
   - Despliega con `actions/deploy-pages`.

3. **Verificar despliegue**
   - Depende del deploy.
   - Consulta la URL base **con barra final** (Pages responde 301 sin ella) y exige HTTP 200 y el marcador `<app-root`.
   - Comprueba que el bundle principal `main-*.js` responde 200.
   - Abre la ruta profunda real `/orders` y exige que el cuerpo contenga `<app-root`, aunque el estado sea 404.
   - Comprueba que `/astro/` responde 200 con el marcador de redirección, que `/astro/users/` responde 200 con el título `Astro Basics` y que un CSS real bajo `/astro/_astro/` responde 200.
   - Escribe el resultado en el resumen del job (`$GITHUB_STEP_SUMMARY`).

Las versiones de las actions son las últimas mayores verificadas en sus releases oficiales al momento de escribir el workflow: `checkout@v7`, `setup-node@v7`, `configure-pages@v6`, `upload-pages-artifact@v5` y `deploy-pages@v5`.

## Despliegue

El despliegue se hace una sola vez de forma manual en la configuración del repositorio:

1. Ir a **Settings → Pages**.
2. En **Source**, elegir **GitHub Actions**.
3. Hacer `push` a `master` (o ejecutar el workflow manualmente desde la pestaña **Actions**).

A partir de ahí, cada `push` a `master` que pase el build publica las dos aplicaciones en el mismo sitio.

## Advertencia conocida del build

El build de producción de Angular termina correctamente, pero muestra esta advertencia de presupuesto:

```text
WARNING bundle initial exceeded maximum budget.
Budget 500.00 kB was not met by 194.98 kB with a total of 694.98 kB.
```

Es una advertencia, no un error: el presupuesto de error es 1 MB y no se ha modificado. Si en el futuro se quiere eliminar la advertencia, hay que reducir el tamaño inicial (por ejemplo, revisando las dependencias de Bootstrap y del design system) en lugar de relajar el presupuesto.

## Autoría

Este taller es un trabajo en equipo basado en el repositorio [Brejcha13320/Uceva-Astro-Angular-SSG-SPA](https://github.com/Brejcha13320/Uceva-Astro-Angular-SSG-SPA), del que este proyecto es un fork. El historial de commits registra aportes de:

- Juan Diego Rodriguez
- David Mora Duque
- Juan Pablo Devia
- Jesus David Mejia Vergara

Los alias `David Mora` y `juanpablo-devia` corresponden a integrantes del mismo equipo. El repositorio no atribuye todo el trabajo a una sola persona: las páginas, componentes, datos y pruebas fueron construidos de forma colaborativa.

Este fork es mantenido por David Mora Duque ([INGDavidMora2005](https://github.com/INGDavidMora2005)) para la entrega del taller.
