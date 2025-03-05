import { FC } from 'react';
import ContentLayout from '../components/ContentLayout';
import { FiCheck, FiAward, FiPercent, FiShield } from 'react-icons/fi';

const FirstTimeBuyers: FC = () => {
  const sections = [
    {
      id: 'what-is',
      title: 'What is a First-Time Buyer Program?',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            A first-time buyer program is a specialized loan package designed specifically for individuals purchasing their first home. These programs typically offer more favorable terms, lower down payments, and additional support throughout the home-buying process to help newcomers enter the property market.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our first-time buyer programs are structured to make homeownership more accessible and affordable, with features tailored to address the unique challenges that first-time buyers often face.
          </p>
        </div>
      )
    },
    {
      id: 'benefits',
      title: 'Special Benefits for First-Time Buyers',
      content: (
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FiAward className="w-6 h-6" />,
              title: "Lower Down Payment",
              description: "Minimum down payment as low as 3.5% of the property value"
            },
            {
              icon: <FiPercent className="w-6 h-6" />,
              title: "Competitive Rates",
              description: "Special interest rates starting from 5.99% p.a. for first-time buyers"
            },
            {
              icon: <FiShield className="w-6 h-6" />,
              title: "Added Protection",
              description: "Special mortgage insurance options and payment protection plans"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-primary-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'eligibility',
      title: 'Eligibility Criteria',
      content: (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Never owned a property before",
              "Minimum credit score of 620",
              "Steady employment history",
              "Debt-to-income ratio below 43%",
              "Completed homebuyer education course",
              "Income within program limits"
            ].map((requirement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FiCheck className="text-green-500 w-5 h-5" />
                <span className="text-gray-700">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'process',
      title: 'Application Process',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                step: "1. Initial Consultation",
                description: "Meet with our loan specialists to discuss your needs and options"
              },
              {
                step: "2. Documentation",
                description: "Submit required documents and proof of eligibility"
              },
              {
                step: "3. Pre-Approval",
                description: "Get pre-approved to understand your budget and buying power"
              },
              {
                step: "4. House Hunting",
                description: "Search for your dream home within your approved budget"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-primary-600 mb-2">{step.step}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'costs',
      title: 'Understanding the Costs',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Understanding the total cost of homeownership is crucial for first-time buyers. Here's a breakdown of what you can expect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Down payment (as low as 3.5%)</li>
            <li>Monthly mortgage payments</li>
            <li>Property taxes and insurance</li>
            <li>Closing costs (2-5% of loan amount)</li>
            <li>Maintenance and repairs</li>
          </ul>
          <div className="mt-6">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors">
              Calculate Your Costs
            </button>
          </div>
        </div>
      )
    }
  ];

  return <ContentLayout title="First-Time Home Buyer Program" sections={sections} />;
};

export default FirstTimeBuyers;