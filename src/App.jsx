import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Concepts from './pages/Concepts'
import Prices from './pages/Prices'
import Simulator from './pages/Simulator'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="flex-1 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/simulator" element={<Simulator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
