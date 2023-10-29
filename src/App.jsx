import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/components/Home/Home'
import About from '../src/components/About/About'
import Services from '../src/components/Services/Services'
import Contact from '../src/components/Contact/Contact'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Portfolio from '../src/components/Portfolio/Portfolio'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
