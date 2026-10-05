import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import Experience from './sections/Experience'
import Campus from './sections/Campus'
import Testimonials from './sections/Testimonials'
import Admissions from './sections/Admissions'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About/>
        <Stats/>
        <Experience/>
        <Campus/>
        <Testimonials/>
        <Admissions/>
      </main>
    </>
  )
}

export default App