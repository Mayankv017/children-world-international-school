import Navbar from '../components/navbar'
import Login from '../components/loginreg'


import FooterSec from '../components/Footersec'

function Home() {
  return (
    <>

      <Navbar />
        <Login />


      <div id="contact">
        <FooterSec />
      </div>
      
    </>
  )
}

export default Home