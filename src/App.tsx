import { ToastContainer } from 'react-toastify';
import ExploreSection from './components/ExploreSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExploreSection />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
