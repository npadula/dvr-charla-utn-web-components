# demo-charla-web-components



## Descripcion

Demo para la charla realizada en la UTN-FRSF "Actualización de Sistemas Legacy Web". Ejemplifica un sistema legacy modernizado usando Web Components desarrollados con Stencil.js.

El repositorio contiene 3 directorios:
- legacy
- legacy-with-wc
- web-components

El directorio `legacy` representa el sistema legacy original desarrollado con jQuery, no hay dependencias para ejecutarlo.

El directorio `legacy-with-wc` representa el sistema legacy "modernizado" usando Web Components. Para usarlo, primero deben seguirse los pasos especificados en la sección de **Ejecución**.

El directorio `web-components` contiene el proyecto de Stencil la librería de componentes desarrollada para la modernización del sistema legacy. Ver instrucciones de uso en **Ejecución**.

## Requerimientos
- NodeJS
- Püerto 3333 disponible localmente (para la ejecución del servidor de desarrollo de Stencil.js)

## Ejecución
1. En el directorio `web-components`, instalar dependencias con `npm i --save-dev`
2. En el directorio `web-components` correr `npm run start`

Para usar el sistema "legacy" abrir `/legacy/index.html` en el navegador.

Para ver el sistema "modernizado" abrir `/legacy-with-wc/index.html` en el navegador.