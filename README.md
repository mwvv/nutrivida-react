# NutriVida (React)

Tienda en línea de suplementos, snacks saludables y servicios de nutrición. Este repositorio es la **migración a React** del sitio NutriVida (HTML + CSS + JavaScript) desarrollado para la primera evaluación, manteniendo el diseño original.

Proyecto académico de Duoc UC, asignatura DSY1104, segunda evaluación parcial (presentación + proyecto).

- **Repositorio:** https://github.com/mwvv/nutrivida-react
- **Planificación (Trello):** [completar enlace]
- **Integrantes:** [completar nombres]

## Tecnologías

- React + Vite (JavaScript)
- react-router-dom (enrutamiento y rutas protegidas)
- React Bootstrap + Bootstrap (solo en los formularios)
- CSS original del sitio (`src/styles/estilos.css`)
- Vitest + React Testing Library + jsdom (pruebas unitarias)
- ESLint

## Cómo ejecutarlo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

Otros comandos:

```bash
npm test -- --run   # ejecuta las pruebas unitarias una vez
npm run lint        # revisa el código con ESLint
npm run build       # genera la versión de producción en dist/
```

## Páginas

| Ruta | Página | Notas |
|---|---|---|
| `/` | Inicio | Presentación de la tienda, beneficios, video y productos destacados |
| `/productos` | Catálogo | Filtro por tipo (Producto / Servicio) |
| `/producto?id=...` | Detalle de producto | Galería, selector de cantidad con subtotal y botón de pedido |
| `/login` | Inicio de sesión | Valida credenciales estáticas |
| `/registro` | Registro | Validaciones y campos de contexto de nutrición |
| `/carrito` | Carrito / checkout | Cantidades, total y simulación de pago |
| `/admin` | Panel de Control | **Ruta privada.** CRUD de productos en memoria |
| `/perfil` | Mi perfil | **Ruta privada.** Datos del usuario con sesión |
| `*` | Error 404 | Página no encontrada |

## Credenciales de prueba

El inicio de sesión valida contra usuarios estáticos (`src/data/usuarios.js`):

| Correo | Contraseña |
|---|---|
| `admin@duoc.cl` | `admin123` |
| `cliente@gmail.com` | `cliente123` |

Cualquier usuario autenticado puede entrar al Panel de Control y a Mi perfil. Sin sesión, ambas rutas redirigen a `/login`.

## Funcionalidades con estado (`useState`)

1. **Filtro dinámico del catálogo** por tipo, usando la leyenda de la barra del catálogo.
2. **Galería de miniaturas** en el detalle: al elegir una miniatura cambia la imagen principal.
3. **Selector de cantidad con subtotal calculado** (mínimo 1, máximo 20, con avisos).
4. **Carrito de compras:** agregar, cambiar cantidad, quitar, vaciar y finalizar compra. El menú muestra las unidades.
5. **Sesión de usuario:** guardada en `localStorage`, cambia el menú y protege las rutas privadas.
6. **CRUD de productos en memoria** en el Panel de Control (crear, editar y eliminar). Los productos nuevos usan una imagen genérica y los cambios se pierden al recargar la página, tal como pide la evaluación.

## Validaciones de formularios

Las reglas viven como funciones puras en `src/utils/validaciones.js`:

- **Login:** correo con dominios permitidos (`@duoc.cl`, `@profesor.duoc.cl`, `@gmail.com`) y contraseña de 4 a 10 caracteres.
- **Registro:** nombre, apellidos, RUN con dígito verificador, correo, fecha de nacimiento (opcional), región y comuna dependientes, contraseña y confirmación, y aceptación de términos.
- **Campos de contexto de la temática (nutrición):** objetivo nutricional, tipo de alimentación y restricciones o alergias alimentarias (opcional, máximo 200 caracteres).
- **Panel de Control:** nombre, tipo, precio numérico (entero entre 1 y 9.999.999), unidad y resumen del producto.

## Arquitectura (Atomic Design)

```
src/
├── components/
│   ├── atoms/        # piezas mínimas: Boton, Insignia, Precio
│   ├── molecules/    # combinaciones: TarjetaProducto, SelectorCantidad, CampoFormulario...
│   └── organisms/    # bloques completos: Navbar, Footer, formularios, galerías, tablas...
├── pages/            # una por ruta: Index, Productos, Producto, Login, Registro, Carrito, Admin, Perfil, NoEncontrada
├── data/             # datos fijos: productos, menú, regiones y comunas, usuarios de prueba
├── utils/            # funciones puras (validaciones, cantidades, carrito, formato) y utilidades de rutas
└── styles/           # estilos.css, el CSS original del sitio
```

El estado compartido (productos, carrito y sesión) vive en `App.jsx` y se pasa a las páginas por props.

## Pruebas unitarias

Se implementaron **25 pruebas** con Vitest y React Testing Library, siguiendo el patrón AAA (Arrange, Act, Assert). Cubren las validaciones, el cálculo de cantidades y del carrito, el formato de precios, y los componentes críticos (botón, tarjeta de producto, formulario de login, ruta protegida y menú de navegación).

El detalle de los escenarios está en [`plan_de_pruebas.md`](./plan_de_pruebas.md).

```bash
npm test -- --run
```

## Autoría

Proyecto desarrollado por el equipo para la evaluación indicada. El diseño y los textos se mantienen fieles a la primera entrega (sitio en HTML, CSS y JavaScript).
