import React from 'react';
import { Check } from 'lucide-react';



const plans = [
  {
    id: 'basic',
    title: 'Basic',
    price: '$9.99',
    period: 'month',
    description: 'Everything you need to create a professional resume',
    buttonText: 'Get Started',
    popular: false,
    features: [
      { name: '5 Resume Templates', included: true },
      { name: 'PDF Download', included: true },
      { name: 'Basic ATS Optimization', included: true },
      { name: 'Cover Letter Builder', included: false },
      { name: 'Custom Sections', included: false },
      { name: 'LinkedIn Profile Integration', included: false },
      { name: 'Job Match Assistant', included: false },
      { name: 'Interview Preparation', included: false }
    ]
  },
  {
    id: 'pro',
    title: 'Professional',
    price: '$19.99',
    period: 'month',
    description: 'Advanced features to stand out from the competition',
    buttonText: 'Get Professional',
    popular: true,
    features: [
      { name: '20+ Premium Templates', included: true },
      { name: 'Multiple Download Formats', included: true },
      { name: 'Advanced ATS Optimization', included: true },
      { name: 'Cover Letter Builder', included: true },
      { name: 'Custom Sections', included: true },
      { name: 'LinkedIn Profile Integration', included: true },
      { name: 'Job Match Assistant', included: false },
      { name: 'Interview Preparation', included: false }
    ]
  },
  {
    id: 'premium',
    title: 'Enterprise',
    price: '$29.99',
    period: 'month',
    description: 'Complete career toolkit for job seekers',
    buttonText: 'Get Enterprise',
    popular: false,
    features: [
      { name: 'All Premium Templates', included: true },
      { name: 'All Download Formats', included: true },
      { name: 'Expert ATS Optimization', included: true },
      { name: 'Advanced Cover Letter Builder', included: true },
      { name: 'Unlimited Custom Sections', included: true },
      { name: 'LinkedIn Profile Integration', included: true },
      { name: 'AI Job Match Assistant', included: true },
      { name: 'Interview Preparation Tools', included: true }
    ]
  }
];

function Plan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-blue-900">Perfect Plan</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 md:mb-12">
            Select the plan that fits your career goals. Upgrade or downgrade anytime.
          </p>
          
          <div className="inline-flex items-center rounded-full p-1 bg-gray-100 mb-8">
            <button className="py-2 px-4 rounded-full bg-blue-900 text-white focus:outline-none">
              Monthly
            </button>
            <button className="py-2 px-4 rounded-full text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none">
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`${plan.popular ? 'transform md:-translate-y-4' : ''}`}
            >
              <div 
                className={`flex flex-col p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 h-full 
                ${plan.popular ? 'border-2 border-teal-600 scale-105 bg-white z-10' : 'bg-white hover:scale-102 border border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="py-1 px-4 bg-teal-600 text-white text-sm font-medium rounded-full inline-block self-start mb-4">
                    Recommended
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">/{plan.period}</span>
                </div>
                
                <p className="mt-3 text-gray-600">{plan.description}</p>
                
                <div className="mt-6 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`flex-shrink-0 ${feature.included ? 'text-teal-500' : 'text-gray-400'}`}>
                          <Check size={18} className={feature.included ? 'text-teal-500' : 'text-gray-300'} />
                        </div>
                        <span className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className={`mt-8 w-full py-3 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300
                  ${plan.popular 
                    ? 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500' 
                    : 'bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-700'}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm">30-day money back guarantee</div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm">Free customer support</div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm">Cancel anytime</div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm">Secure payment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;