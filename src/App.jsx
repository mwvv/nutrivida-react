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
import { productos as productosIniciales } from './data/productos'
import Scrollpaginas from './utils/Scrollpaginas'


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

  return (
    <>
      <Navbar itemsMenu={sesion ? itemsMenuSesion : itemsMenu} sesion={sesion} onCerrarSesion={cerrarSesion} />
      <Routes>
        <Route path="/" element={<Index productos={productos} />} />
        <Route path="/productos" element={<Productos productos={productos} />} />
        <Route
          path="/producto"
          element={<Producto productos={productos} carrito={carrito} agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/login" element={<Login onLogin={iniciarSesion} />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      <Footer />
      <Scrollpaginas />
    </>
  )
}

export default App
