import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import HomeLoans from './pages/HomeLoans';
import FirstTimeBuyers from './pages/FirstTimeBuyers';
import NotFound from './pages/NotFound';

function App() {
  const HomePage = () => (
    <>
      <HeroSlider />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Loan Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personal Loans',
                description: 'Quick and hassle-free personal loans for your needs',
                image: 'https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Business Loans',
                description: 'Fuel your business growth with our flexible financing',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Home Loans',
                description: 'Make your dream home a reality with our mortgage solutions',
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-loans" element={<HomeLoans />} />
            <Route path="/first-time-buyers" element={<FirstTimeBuyers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;