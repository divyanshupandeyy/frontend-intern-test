export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <a href="#home" className="text-xl sm:text-2xl font-extrabold text-brand-600">EZ Labs</a>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a className="hover:text-brand-600" href="#home">Home</a>
          <a className="hover:text-brand-600" href="#features">Features</a>
          <a className="hover:text-brand-600" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn btn-primary hidden sm:inline-flex">Get in touch</a>
        <button className="md:hidden px-3 py-2 border rounded-xl" aria-label="Open Menu">Menu</button>
      </div>
    </header>
  )
}
