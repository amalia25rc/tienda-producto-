# Práctica: Presentación de un producto en Angular

Estudiant: Amalia Rocha Coria

## Respuestas

**1. ¿Qué función cumple @Component?**
Le dice a Angular que esa clase es un componente, o sea, una pieza de la página. También le indica cuál es su HTML y su CSS.

**2. ¿Para qué sirve la interfaz Producto?**
Sirve como un molde que define cómo debe ser un producto: qué datos tiene y de qué tipo son. Así evitamos errores, por ejemplo poner un texto donde va un número.

**3. ¿Qué hace {{ }}?**
Muestra en la página el valor de una propiedad que está en app.ts. Por ejemplo, `{{ nombreTienda }}` muestra el nombre de la tienda.

**4. ¿Qué diferencia existe entre @if y @for?**
`@if` muestra o esconde algo según una condición, por ejemplo "Tienda abierta" o "Tienda cerrada". `@for` repite algo por cada elemento de una lista, como las categorías.

**5. ¿Por qué tiendaAbierta utiliza el tipo boolean?**
Porque solo tiene dos posibles estados: abierta o cerrada. Boolean guarda justo eso, verdadero o falso.