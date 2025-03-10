import './App.css'
import Collection from './components/Collection'
import ExploreOptions from './components/ExploreOptions'
import Footer from './components/Footer'
import GetAppSection from './components/GetAppSection'
import HeroSection from './components/HeroSection'
import Location from './components/Location'
import OrderSection from './components/OrderSection'

function App() {

  return (
    <>
      <HeroSection />
      <OrderSection />
      <Collection />
      <Location />
      <GetAppSection />
      <ExploreOptions />
      <Footer />
    </>
  )
}

export default App
