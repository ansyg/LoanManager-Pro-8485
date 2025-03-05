import { motion } from 'framer-motion';
import { FiCheck, FiDollarSign, FiHome, FiClock } from 'react-icons/fi';

const HomeLoans = () => {
  const features = [
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: "Competitive Interest Rates",
      description: "Starting from 6.70% p.a. with flexible tenure options"
    },
    {
      icon: <FiHome className="w-6 h-6" />,
      title: "High Loan Value",
      description: "Up to 85% of property value with maximum tenure of 30 years"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Quick Processing",
      description: "Get approval within 48 hours with minimal documentation"
    }
  ];

  const requirements = [
    "Age: 21-65 years",
    "Employment: Salaried or Self-employed",
    "Income: Minimum ₹25,000 per month",
    "Credit Score: 700+ preferred",
    "Property Papers",
    "Income Documents"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16 min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Home Loans
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-90"
          >
            Make your dream home a reality with our affordable home loan solutions
          </motion.p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Eligibility & Requirements</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <FiCheck className="text-green-500 w-5 h-5" />
                  <span>{requirement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors">
            Apply Now
          </button>
          <p className="mt-4 text-gray-600">
            Get instant approval and dedicated support throughout the process
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeLoans;