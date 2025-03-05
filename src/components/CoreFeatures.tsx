import { FC } from 'react';
import { FiUser, FiDollarSign, FiDatabase, FiSmartphone, FiShield, FiPieChart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CoreFeatures: FC = () => {
  const features = [
    {
      icon: <FiUser className="w-8 h-8" />,
      title: "Know Your Customer",
      description: "Streamline customer onboarding and ensure seamless KYC compliance."
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "Loans Management",
      description: "Mobile and web-based systems enable efficient credit checks, scoring, and quick turnarounds."
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Deposits",
      description: "Configurable solutions to offer attractive deposit products to the market."
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Digital Banking",
      description: "Deliver a complete digital service experience with innovative technology."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Statutory Compliance",
      description: "Accurately predict, measure, and manage risk while ensuring full compliance with regulations."
    },
    {
      icon: <FiPieChart className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Leverage BI to boost operational efficiency and profitability."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Banking Software Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            TrustBankCBS offers a robust, secure, and integrated core banking solution with a modular design. It provides a single, unified platform for both core and add-on modules, featuring a consistent, browser-based, user-friendly interface.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto"
          >
            <div className="w-[300px] h-[600px] bg-gray-900 rounded-[60px] p-4 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl"></div>
              <div className="w-full h-full bg-primary-600 rounded-[48px] p-8 flex flex-col justify-center text-white">
                <h3 className="text-2xl font-bold mb-4">Interested In TrustBankCBS?</h3>
                <p className="text-sm mb-6">Comprehensive Solutions with Unmatched Business Functionality</p>
                <button className="bg-yellow-400 text-primary-900 px-6 py-2 rounded-full text-sm font-semibold w-fit">
                  All Solutions
                </button>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;