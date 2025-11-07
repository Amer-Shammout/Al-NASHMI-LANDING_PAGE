// import '/App.css'
import "./styles/global.css";
import Logo from "./components/Logo";
import MainLayout from "./layouts/MainLayout";
import HeroSection from "./sections/HeroSection";
import OurCoffeeSection from "./sections/OurCoffeeSection";
import CoffeeTypesSection from "./sections/CoffeeTypesSection";

function App() {
  return <MainLayout >
    <HeroSection/>
    <OurCoffeeSection/>
    <CoffeeTypesSection/>
  </MainLayout>;
}

export default App;
