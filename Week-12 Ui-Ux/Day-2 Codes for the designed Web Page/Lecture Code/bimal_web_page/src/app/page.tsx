import Navbar from "../app//component/Navbar";
import Hero from "../app/component/Hero";
import Content from "../app/component/Content"; 
import Footer from "../app/component/Footer"; 

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}