import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/estilos.css'
import Navbar from './components/organisms/Navbar'
import { itemsMenu } from './data/itemsMenu'

function App() {
  return (
    <>
      <Navbar itemsMenu={itemsMenu} />
      <Routes>
        <Route path="/" element={<h1>NutriVida</h1>} />
      </Routes>
    </>
  )
}

export default App