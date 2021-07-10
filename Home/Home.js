import './home.css';
import ImageSlider from './SlideShow';
import { SliderData } from './SliderData';
import About from './About';
//import Movetxt from './Movetxt';
//import ScrollText from 'react-scroll-text';
function HomeApp() {
  return( 
    <div>
      {/* <div>
<ScrollText>WELCOME TO THE COLLEGE PORTAL SYSTEM</ScrollText></div> */}
{/* <Movetxt/> */}
  <ImageSlider slides={SliderData} />
  <About/>
  </div>
    );
}

export default HomeApp;