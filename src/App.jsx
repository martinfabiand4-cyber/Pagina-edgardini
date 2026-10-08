import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import QuickLinks from './components/QuickLinks.jsx'
import News from './components/News.jsx'
import Specialty from './components/Specialty.jsx'
import Resources from './components/Resources.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main>
        <Hero />
        <QuickLinks />
        <News />
        <Specialty />
        <Resources />
      </main>
      <Footer />
    </div>
  )
}
