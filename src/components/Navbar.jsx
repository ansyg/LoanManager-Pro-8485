import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiMenu } from 'react-icons/fi';

const MegaMenu = ({ items, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl"
          onMouseLeave={onClose}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 p-8">
            {items.map((column, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">{column.title}</h3>
                <div className="space-y-4">
                  {column.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="group flex items-start"
                      onClick={onClose}
                    >
                      <div className="flex-1">
                        <p className="text-base font-medium text-gray-900 group-hover:text-primary-600">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const megaMenus = {
    'Personal Loans': [
      {
        title: "Loan Types",
        items: [
          {
            name: "Home Loans",
            path: "/home-loans",
            description: "Get your dream home with competitive rates"
          },
          {
            name: "Car Loans",
            path: "/car-loans",
            description: "Finance your vehicle purchase easily"
          },
          {
            name: "Education Loans",
            path: "/education-loans",
            description: "Invest in your future with education financing"
          }
        ]
      },
      {
        title: "Special Programs",
        items: [
          {
            name: "First-Time Buyers",
            path: "/first-time-buyers",
            description: "Special rates for first-time home buyers"
          },
          {
            name: "Refinancing",
            path: "/refinancing",
            description: "Optimize your existing loans"
          }
        ]
      },
      {
        title: "Resources",
        items: [
          {
            name: "Loan Calculator",
            path: "/loan-calculator",
            description: "Calculate your monthly payments"
          },
          {
            name: "Application Guide",
            path: "/application-guide",
            description: "Step-by-step application process"
          }
        ]
      }
    ],
    'Business Loans': [
      {
        title: "Business Solutions",
        items: [
          {
            name: "Startup Loans",
            path: "/startup-loans",
            description: "Fund your new business venture"
          },
          {
            name: "SME Loans",
            path: "/sme-loans",
            description: "Growth capital for small businesses"
          }
        ]
      },
      {
        title: "Enterprise Finance",
        items: [
          {
            name: "Corporate Loans",
            path: "/corporate-loans",
            description: "Large-scale business financing"
          },
          {
            name: "Equipment Financing",
            path: "/equipment-financing",
            description: "Fund your business equipment"
          }
        ]
      },
      {
        title: "Support",
        items: [
          {
            name: "Business Advisory",
            path: "/business-advisory",
            description: "Expert guidance for your business"
          },
          {
            name: "Documentation",
            path: "/documentation",
            description: "Required documents and process"
          }
        ]
      }
    ]
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              LoanPro
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {Object.keys(megaMenus).map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setActiveMenu(item)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600">
                  <span>{item}</span>
                  <FiChevronDown className={`transform transition-transform ${
                    activeMenu === item ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>
            ))}
            <Link to="/about" className="text-gray-700 hover:text-primary-600">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        {Object.entries(megaMenus).map(([key, items]) => (
          <MegaMenu
            key={key}
            items={items}
            isVisible={activeMenu === key}
            onClose={() => setActiveMenu(null)}
          />
        ))}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {Object.entries(megaMenus).map(([key, sections]) => (
                <div key={key} className="py-2">
                  <button
                    onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                    className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-primary-600"
                  >
                    <span>{key}</span>
                    <FiChevronDown className={`transform transition-transform ${
                      activeMenu === key ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <AnimatePresence>
                    {activeMenu === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2"
                      >
                        {sections.map((section) => (
                          <div key={section.title} className="py-2">
                            <h4 className="font-medium text-gray-900 px-3">
                              {section.title}
                            </h4>
                            <div className="mt-1 space-y-1">
                              {section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                                  onClick={() => {
                                    setActiveMenu(null);
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;