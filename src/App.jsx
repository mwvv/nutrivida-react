import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/estilos.css'
import Navbar from './components/organisms/Navbar'
import { itemsMenu } from './data/itemsMenu'
import Footer from './components/organisms/Footer'
import Index from './pages/Index'
import Productos from './pages/Productos'
import Producto from './pages/Producto'
import { productos as productosIniciales } from './data/productos'
import Scrollpaginas from './utils/Scrollpaginas'


function App() {
  const [productos] = useState(productosIniciales)
  const [carrito, setCarrito] = useState([])

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
      <Navbar itemsMenu={itemsMenu} />
      <Routes>
        <Route path="/" element={<Index productos={productos} />} />
        <Route path="/productos" element={<Productos productos={productos} />} />
        <Route
          path="/producto"
          element={<Producto productos={productos} carrito={carrito} agregarAlCarrito={agregarAlCarrito} />}
        />
      </Routes>
      <Footer />
      <Scrollpaginas />
    </>
  )
}

export default App
