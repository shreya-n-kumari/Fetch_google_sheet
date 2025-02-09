import './App.css';
import Navbar from './component/Navbar';
import AboutUs from './component/AboutUs';
import Services from './component/Services';
import Info from './component/Info';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import FetchData from './component/FetchData';
import Banner from './component/Banner';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FetchData />
      <AboutUs />
      <Services />
      <Info />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
