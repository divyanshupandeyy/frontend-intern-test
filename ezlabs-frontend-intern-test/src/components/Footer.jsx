export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-6 text-sm text-gray-500 flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between sm:items-center">
        <p>© {new Date().getFullYear()} EZ Labs. All rights reserved.</p>
        <a className="hover:text-brand-600" href="#contact">Contact</a>
      </div>
    </footer>
  )
}
