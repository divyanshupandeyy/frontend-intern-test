import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Features from './sections/Features.jsx'
import Contact from './sections/Contact.jsx'
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}
