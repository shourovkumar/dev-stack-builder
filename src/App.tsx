import { ToastContainer } from 'react-toastify';
import ExploreSection from './components/ExploreSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExploreSection />
      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;
