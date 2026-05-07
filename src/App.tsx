import Maincont from './components/Maincont'
import HeroSec from './components/Herosec'
import Navbar from './components/navbar'
import TopHeader from './components/topheader'
import FooterSec from './components/Footersec'

function App() {
  return (
    <>
      <TopHeader/>
      <Navbar />


      <HeroSec />
      <Maincont />
      <FooterSec />

    </>
  )
}

export default App