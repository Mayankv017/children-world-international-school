import TopHeader from "../components/topheader";
import Navbar from "../components/navbar";
import Applicationform from "../components/Applicationform";

import FooterSec from "../components/Footersec";

function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Applicationform />

      <div id="contact">
        <FooterSec />
      </div>
    </>
  );
}

export default Home;
