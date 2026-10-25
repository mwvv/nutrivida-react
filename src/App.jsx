import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/estilos.css'
import Navbar from './components/organisms/Navbar'
import { itemsMenu } from './data/itemsMenu'
import Footer from './components/organisms/Footer'
import Index from './pages/Index'


function App() {
  return (
    <>
      <Navbar itemsMenu={itemsMenu} />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App