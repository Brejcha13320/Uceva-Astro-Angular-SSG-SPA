# Métricas de Angular SPA

## Comando de Build
Se ejecutó el siguiente comando en el directorio `Client-Angular` para generar la compilación de producción:
```bash
npm run build
```
*(El cual ejecuta internamente `ng build`)*

## Resultados de Tamaño (Dist)
El build generó una carpeta de salida (`dist/Angular-Standalone-Template`). Los tamaños reportados por Angular CLI son los siguientes:

| Archivo | Raw Size | Estimated Transfer Size |
| :--- | :--- | :--- |
| `styles-*.css` | 315.93 kB | 33.03 kB |
| `main-*.js` | 259.80 kB | 71.20 kB |
| `scripts-*.js` | 80.45 kB | 21.60 kB |
| `polyfills-*.js` | 34.53 kB | 11.29 kB |
| **Total (Initial)** | **690.72 kB** | **137.13 kB** |

*(Nota: El bundle initial excedió el budget por defecto de 500 kB, alcanzando los 690.72 kB debido a las dependencias como Bootstrap incluidas en el proyecto).*

## Cantidad de Archivos Generados
- 1 archivo HTML principal (`index.html`)
- 3 archivos JavaScript base (`main`, `scripts`, `polyfills`)
- 1 archivo CSS principal (`styles.css`)
*(Adicionalmente, se generaron otros pequeños assets e íconos en el directorio).*

## Análisis SPA vs SSG
*(Este apartado queda pendiente por completar en conjunto con el compañero, una vez finalice la implementación en Astro SSG y se recopilen sus métricas correspondientes).*
