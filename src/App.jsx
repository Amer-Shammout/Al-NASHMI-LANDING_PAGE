// import '/App.css'
import "./styles/global.css";
import Logo from "./components/Logo";
import MainLayout from "./layouts/MainLayout";
import HeroSection from "./sections/HeroSection";

function App() {
  return <MainLayout >
    <HeroSection/>
  </MainLayout>;
}

export default App;
