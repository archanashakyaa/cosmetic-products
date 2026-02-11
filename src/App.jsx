import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ritual from './components/Ritual';
import TrendingProducts from './components/TrendingProducts';
import Collections from './components/Collections';
import Stories from './components/Stories';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <TrendingProducts />
        <Ritual />
        <Collections />
        <About />
        <Stories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
