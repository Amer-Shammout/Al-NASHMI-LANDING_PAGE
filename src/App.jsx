import './styles/global.css';
import Logo from "./components/Logo";
import MainLayout from "./layouts/MainLayout";
import HeroSection from "./sections/HeroSection";
import OurCoffeeSection from "./sections/OurCoffeeSection";
import CoffeeTypesSection from "./sections/CoffeeTypesSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import { useEffect, useState } from "react";

// استيراد الصورة مباشرة
import bgImage from './assets/images/bg.png';

function App() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    console.log('🎯 بدء تحميل خلفية الموقع...');
    console.log('📁 مسار الصورة المستورد:', bgImage);

    const img = new Image();
    
    img.src = bgImage; // استخدام الصورة المستوردة مباشرة

    img.onload = () => {
      console.log('✅ تم تحميل الخلفية بنجاح');
      document.body.style.backgroundImage = `url(${bgImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
      setBgLoaded(true);
    };

    img.onerror = () => {
      console.log('❌ فشل تحميل الخلفية');
      setBgLoaded(true);
    };

    // Fallback بعد 3 ثواني
    const timeout = setTimeout(() => {
      if (!bgLoaded) {
        console.log('⚠️ استخدام اللون الأساسي كخلفية بديلة');
        setBgLoaded(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [bgLoaded]); // أضف bgImage إلى dependencies

  return (
    <MainLayout>
      <HeroSection/>
      <OurCoffeeSection/>
      <CoffeeTypesSection/>
      <AboutSection/>
      <ContactSection/>
    </MainLayout>
  );
}

export default App;