import TopHeader from '../components/topheader'
import Navbar from '../components/navbar'
import HeroSec from '../components/Herosec'
import Maincont from '../components/Maincont'
import FooterSec from '../components/Footersec'

function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <HeroSec />
      <div id="about">
        <Maincont />
      </div>
      <div id="contact">
        <FooterSec />
      </div>
      
    </>
  )
}

export default Home