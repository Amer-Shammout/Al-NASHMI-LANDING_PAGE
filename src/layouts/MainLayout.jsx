import Header from "../components/header";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24  xl:pt-32 ">
        {children}  {/* هنا توضع الأقسام مثل HeroSection, AboutSection ... */}
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}
