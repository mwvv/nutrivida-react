import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/estilos.css'
import Navbar from './components/organisms/Navbar'
import { itemsMenu, itemsMenuSesion } from './data/itemsMenu'
import Footer from './components/organisms/Footer'
import Index from './pages/Index'
import Productos from './pages/Productos'
import Producto from './pages/Producto'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Carrito from './pages/Carrito'
import NoEncontrada from './pages/NoEncontrada'
import { productos as productosIniciales } from './data/productos'
import Scrollpaginas from './utils/Scrollpaginas'
import { normalizarCantidad } from './utils/cantidad'
import { CANTIDAD_MINIMA, CANTIDAD_MAXIMA, contarUnidades } from './utils/carrito'


function App() {
  const [productos] = useState(productosIniciales)
  const [carrito, setCarrito] = useState([])
  const [sesion, setSesion] = useState(() => JSON.parse(localStorage.getItem('sesion')))
  const navigate = useNavigate()

  const iniciarSesion = (datos) => {
    setSesion(datos)
    navigate('/')
  }

  const cerrarSesion = () => {
    localStorage.removeItem('sesion')
    setSesion(null)
  }

  const agregarAlCarrito = (id, cantidad) => {
    setCarrito((actual) => {
      const existe = actual.some((item) => item.id === id)
      if (existe) {
        return actual.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + cantidad } : item))
      }
      return [...actual, { id, cantidad }]
    })
  }

  // Devuelve el mensaje de normalizarCantidad para que la fila del carrito pueda mostrarlo.
  const cambiarCantidad = (id, cantidad) => {
    const resultado = normalizarCantidad(cantidad, CANTIDAD_MINIMA, CANTIDAD_MAXIMA)
    setCarrito((actual) => actual.map((item) => (item.id === id ? { ...item, cantidad: resultado.cantidad } : item)))
    return resultado.mensaje
  }

  const quitarDelCarrito = (id) => {
    setCarrito((actual) => actual.filter((item) => item.id !== id))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <>
      <Navbar
        itemsMenu={sesion ? itemsMenuSesion : itemsMenu}
        sesion={sesion}
        onCerrarSesion={cerrarSesion}
        unidadesCarrito={contarUnidades(carrito)}
      />
      <Routes>
        <Route path="/" element={<Index productos={productos} />} />
        <Route path="/productos" element={<Productos productos={productos} />} />
        <Route
          path="/producto"
          element={<Producto productos={productos} carrito={carrito} agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/login" element={<Login onLogin={iniciarSesion} />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              productos={productos}
              sesion={sesion}
              cambiarCantidad={cambiarCantidad}
              quitarDelCarrito={quitarDelCarrito}
              vaciarCarrito={vaciarCarrito}
            />
          }
        />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
      <Footer />
      <Scrollpaginas />
    </>
  )
}

export default App
