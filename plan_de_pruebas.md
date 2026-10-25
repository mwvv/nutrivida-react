# Plan de pruebas unitarias — NutriVida React

## 1. Introducción

Este documento describe las pruebas unitarias de la versión en React de NutriVida. El objetivo es
comprobar que las funciones de lógica (validaciones, carrito, cantidades y formato de precios) y los
componentes principales de la interfaz se comporten como se espera, sin depender de un servidor.

Cada prueba sigue el patrón **AAA** (Arrange, Act, Assert), marcado en el código con los comentarios
`// ARRANGE`, `// ACT` y `// ASSERT`. Las pruebas que usan `localStorage` lo limpian antes de cada caso
para que ninguna dependa del resultado de otra.

### Funcionalidades críticas evaluadas

- **Validaciones de formularios:** correo con dominios permitidos, largo de la contraseña, RUN con
  dígito verificador (módulo 11) y precio de producto del Panel de Control.
- **Sesión y ruta protegida:** inicio de sesión con usuarios estáticos, guardado de la sesión en
  `localStorage` sin la contraseña, redirección a `/login` sin sesión y menú según el estado de sesión.
- **Carrito y cantidades:** total del carrito, conteo de unidades y límites de cantidad (1 a 20).
- **Catálogo:** tarjeta de producto con nombre, precio en pesos chilenos y enlace al detalle.

## 2. Herramientas

| Herramienta | Uso |
|---|---|
| [Vitest](https://vitest.dev/) | Ejecuta las pruebas (`describe`, `test`, `expect`, `vi.fn`). Se configura en `vite.config.js`. |
| [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Renderiza componentes y los consulta como lo haría un usuario (`getByRole`, `getByLabelText`, `fireEvent`). |
| [jest-dom](https://github.com/testing-library/jest-dom) | Agrega comparadores como `toBeInTheDocument` y `toHaveAttribute`. Se carga en `src/setupTests.js`. |
| [jsdom](https://github.com/jsdom/jsdom) | Simula el navegador (DOM y `localStorage`) dentro de Node. |
| `MemoryRouter` (react-router-dom) | Envuelve los componentes que usan `Link` o rutas para probarlos sin navegador. |

## 3. Cómo ejecutar las pruebas

```bash
npm install          # solo la primera vez
npm test             # modo observador: vuelve a correr al guardar cambios
npm test -- --run    # una sola ejecución (la que se usa para entregar resultados)
```

Los archivos de prueba están junto al código que prueban y terminan en `.test.js` o `.test.jsx`.

## 4. Casos de prueba

| ID | Funcionalidad o componente | Escenario | Resultado esperado | Archivo de prueba |
|---|---|---|---|---|
| PU-001 | `validarCorreo` | Correo `alumno@duoc.cl` | Devuelve `''` (válido) | `src/utils/validaciones.test.js` |
| PU-002 | `validarCorreo` | Correo `persona@hotmail.com` | Mensaje "Usa un correo terminado en @duoc.cl, @profesor.duoc.cl o @gmail.com." | `src/utils/validaciones.test.js` |
| PU-003 | `validarContrasena` | Contraseña de 3 caracteres | Mensaje "La contraseña debe tener entre 4 y 10 caracteres." | `src/utils/validaciones.test.js` |
| PU-004 | `validarContrasena` | Contraseña de 11 caracteres | Mensaje "La contraseña debe tener entre 4 y 10 caracteres." | `src/utils/validaciones.test.js` |
| PU-005 | `validarRun` | RUN `19000001K` | Devuelve `''` (dígito verificador correcto) | `src/utils/validaciones.test.js` |
| PU-006 | `validarRun` | RUN `190000015` (verificador incorrecto) | Mensaje "El RUN no es válido: revisa el dígito verificador." | `src/utils/validaciones.test.js` |
| PU-007 | `validarPrecioProducto` | Precio `"abc"` | Mensaje de número entero sin puntos, comas ni letras | `src/utils/validaciones.test.js` |
| PU-008 | `validarPrecioProducto` | Precio `"12.5"` (decimal) | Mensaje de número entero sin puntos, comas ni letras | `src/utils/validaciones.test.js` |
| PU-009 | `validarPrecioProducto` | Precio `"0"` | Mensaje "El precio debe estar entre 1 y 9.999.999." | `src/utils/validaciones.test.js` |
| PU-010 | `validarPrecioProducto` | Precio `"9999999"` (máximo) | Devuelve `''` (válido) | `src/utils/validaciones.test.js` |
| PU-011 | `normalizarCantidad` | Cantidad 0 con mínimo 1 y máximo 20 | `{ cantidad: 1, mensaje: 'La cantidad mínima es 1.' }` | `src/utils/cantidad.test.js` |
| PU-012 | `normalizarCantidad` | Cantidad 50 con mínimo 1 y máximo 20 | `{ cantidad: 20, mensaje: 'Por compra en línea el máximo es 20 unidades.' }` | `src/utils/cantidad.test.js` |
| PU-013 | `calcularTotal` | Carrito con 2 proteínas ($18.990) y 3 packs ($12.500) | Total 75.480 | `src/utils/carrito.test.js` |
| PU-014 | `calcularTotal` | Carrito con una línea de un producto que ya no está en el catálogo | Esa línea no suma; total 75.480 | `src/utils/carrito.test.js` |
| PU-015 | `contarUnidades` | Mismo carrito de ejemplo | 5 unidades | `src/utils/carrito.test.js` |
| PU-016 | `formatearPesos` | Valor 18990 | Texto `"$18.990"` | `src/utils/formato.test.js` |
| PU-017 | `Boton` (átomo) | Botón con texto y `onClick`; el usuario hace clic | Se muestra el texto y `onClick` se llama una vez | `src/components/atoms/Boton.test.jsx` |
| PU-018 | `TarjetaProducto` (molécula) | Tarjeta de "Proteína vegetal 1 kg" dentro de `MemoryRouter` | Muestra el nombre, "$18.990" y el enlace "Ver detalle" a `/producto?id=proteina-vegetal` | `src/components/molecules/TarjetaProducto.test.jsx` |
| PU-019 | `FormularioLogin` (organismo) | Enviar con los campos vacíos | Muestra los errores de correo y contraseña; no llama a `onLogin` ni guarda sesión | `src/components/organisms/FormularioLogin.test.jsx` |
| PU-020 | `FormularioLogin` (organismo) | Enviar con `cliente@gmail.com` / `cliente123` | Guarda `sesion` en `localStorage` sin la contraseña y llama a `onLogin` con esos datos | `src/components/organisms/FormularioLogin.test.jsx` |
| PU-021 | `FormularioLogin` (organismo) | Enviar con una contraseña incorrecta | Muestra "Correo o contraseña incorrectos."; no guarda sesión | `src/components/organisms/FormularioLogin.test.jsx` |
| PU-022 | `RutaProtegida` | Entrar a `/perfil` sin sesión | Redirige a `/login`; el contenido privado no se muestra | `src/utils/RutaProtegida.test.jsx` |
| PU-023 | `RutaProtegida` | Entrar a `/perfil` con sesión | Muestra el contenido protegido | `src/utils/RutaProtegida.test.jsx` |
| PU-024 | `Navbar` (organismo) | Sin sesión | Muestra el enlace "Iniciar sesión" a `/login` y no el botón "Cerrar sesión" | `src/components/organisms/Navbar.test.jsx` |
| PU-025 | `Navbar` (organismo) | Con sesión | Muestra el botón "Cerrar sesión" y no el enlace "Iniciar sesión" | `src/components/organisms/Navbar.test.jsx` |

## 5. Resultados

Última ejecución con `npm test -- --run`: **9 archivos, 25 pruebas, 25 aprobadas, 0 fallidas.**
