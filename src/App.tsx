import {BrowserRouter,Routes,Route } from "react-router-dom"
import { lazy, Suspense } from "react"


const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Register = lazy(() => import('./pages/Register'))
const Profile = lazy(() => import('./pages/Profile'))
const Users = lazy(() => import('./pages/Users'))

const Footer = lazy(() => import('./components/footer'))
const Header = lazy(() => import('./components/header'))


function App() {



  return (
    <>
      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Suspense fallback={<div className="bg-gray-500">Loading...</div>}>
          <Header />
        </Suspense>
        <main className="flex-grow">
        <Suspense fallback={<div className="bg-gray-900">Loading...</div>}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path='/perfil/:username' element={<Profile />} />
          </Routes>
          </Suspense>
        </main>
        <Suspense fallback={<div className="bg-gray-900">Loading...</div>}>
      <Footer />
      </Suspense>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
