import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import Experience from './sections/Experience'
import Campus from './sections/Campus'
import Testimonials from './sections/Testimonials'
import Admissions from './sections/Admissions'
import ScrollProgress from './components/ScrollProgress'


function App() {
  return (
    <>
      <ScrollProgress/>
      <CustomCursor/>
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
      <Footer />
    </>
  )
}

export default App