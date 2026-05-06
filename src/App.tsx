import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/inicio/HomePage'
import SobreMiPage from './pages/inicio/SobreMiPage'
import ExperienciaPage from './pages/experiencia/ExperienciaPage'
import ProyectosPage from './pages/proyectos/ProyectosPage'
import ProyectoDetallePage from './pages/proyectos/ProyectoDetallePage'
import ContactPage from './pages/contact/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre-mi" element={<SobreMiPage />} />
        <Route path="experiencia" element={<ExperienciaPage />} />
        <Route path="proyectos" element={<ProyectosPage/>} />
        <Route path="proyectos/:slug" element={<ProyectoDetallePage />} />
        <Route path="contacto" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
