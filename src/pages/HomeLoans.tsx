import { FC } from 'react';
import ContentLayout from '../components/ContentLayout';
import { FiCheck, FiDollarSign, FiHome, FiClock } from 'react-icons/fi';

const HomeLoans: FC = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="space-y-4">
          <p>
            Make your dream home a reality with our affordable home loan solutions. We offer competitive
            interest rates and flexible repayment options to suit your needs.
          </p>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Key Features',
      content: (
        <div className="grid md:grid-cols-3 gap-8">
          {[
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
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'eligibility',
      title: 'Eligibility & Requirements',
      content: (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Age: 21-65 years",
              "Employment: Salaried or Self-employed",
              "Income: Minimum ₹25,000 per month",
              "Credit Score: 700+ preferred",
              "Property Papers",
              "Income Documents"
            ].map((requirement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FiCheck className="text-green-500 w-5 h-5" />
                <span>{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'apply',
      title: 'How to Apply',
      content: (
        <div className="space-y-6">
          <p>
            Getting a home loan with us is simple and straightforward. Follow these steps to begin your
            journey to homeownership.
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors">
            Apply Now
          </button>
        </div>
      )
    }
  ];

  return <ContentLayout title="Home Loans" sections={sections} />;
};

export default HomeLoans;