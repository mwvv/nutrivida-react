import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/estilos.css'
import Navbar from './components/organisms/Navbar'
import { itemsMenu } from './data/itemsMenu'
import Footer from './components/organisms/Footer'
import Index from './pages/Index'
import Productos from './pages/Productos'
import { productos as productosIniciales } from './data/productos'


function App() {
  const [productos] = useState(productosIniciales)

  return (
    <>
      <Navbar itemsMenu={itemsMenu} />
      <Routes>
        <Route path="/" element={<Index productos={productos} />} />
        <Route path="/productos" element={<Productos productos={productos} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
