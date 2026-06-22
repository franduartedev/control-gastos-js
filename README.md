# Control de Gastos JS

Aplicación web simple para registrar gastos, calcular el total, eliminar gastos y guardar la información en el navegador usando `localStorage`.

Este proyecto fue creado para practicar fundamentos de JavaScript, manipulación del DOM, eventos, arrays de objetos y control de versiones con Git/GitHub.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- localStorage
- Git y GitHub

## Funcionalidades

- Agregar un gasto con nombre, monto, categoría y fecha.
- Validar que los campos estén completos.
- Mostrar mensajes de error en pantalla.
- Renderizar los gastos como cards.
- Calcular el total gastado.
- Eliminar gastos individualmente.
- Guardar los datos en `localStorage`.
- Mantener los gastos al recargar la página.

## Conceptos practicados

- `getElementById`
- `addEventListener`
- `preventDefault`
- Arrays de objetos
- Funciones
- `for`
- `filter`
- `Date.now`
- `JSON.stringify`
- `JSON.parse`
- `localStorage.setItem`
- `localStorage.getItem`
- Renderizado dinámico en el DOM

## Cómo funciona

Los gastos se guardan en un array llamado `gastos`.

Cada vez que se agrega o elimina un gasto:

1. Se actualiza el array.
2. Se guarda el array en `localStorage`.
3. Se vuelve a renderizar la lista de gastos.
4. Se recalcula el total.

Al iniciar la aplicación, se cargan los datos guardados en `localStorage`, se renderizan en pantalla y se calcula el total.

## Estado del proyecto

Proyecto en desarrollo como parte de mi formación en frontend.

Próximas mejoras posibles:

- Formatear montos como moneda.
- Agregar botón para borrar todos los gastos.
- Agregar filtros por categoría.
- Agregar edición de gastos.
- Mejorar el diseño responsive.
