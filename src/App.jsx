import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { AcademicCV } from './pages/AcademicCV'
import FunctionPage from './pages/FunctionPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='cv' element={<AcademicCV />} />
        <Route path='f' element={<FunctionPage />} />
      </Routes>
    </>
  )
}

export default App
