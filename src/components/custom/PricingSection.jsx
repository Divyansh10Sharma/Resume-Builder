import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '89/-',
    period: 'forever',
    description: 'Perfect for trying out our basic templates',
    features: [
      { text: 'Access to 3 basic templates', included: true },
      { text: 'Export as PDF', included: true },
      { text: 'Basic customization options', included: true },
      { text: 'Premium templates', included: false },
      { text: 'Cover letter templates', included: false },
      { text: 'Resume analytics', included: false }
    ],
    buttonText: 'Start Free',
    highlight: false
  },
  {
    name: 'Pro',
    price: '129/-',
    period: 'per month',
    description: 'Best for professionals seeking their next career move',
    features: [
      { text: 'Access to all templates', included: true },
      { text: 'Export as PDF, Word, & TXT', included: true },
      { text: 'Advanced customization options', included: true },
      { text: 'Cover letter templates', included: true },
      { text: 'Resume analytics', included: true },
      { text: 'Priority support', included: false }
    ],
    buttonText: 'Get Started',
    highlight: true
  },
  {
    name: 'Teams',
    price: '189/-',
    period: 'per month',
    description: 'For career coaches and small teams',
    features: [
      { text: 'Everything in Pro plan', included: true },
      { text: 'Team collaboration features', included: true },
      { text: 'Client management tools', included: true },
      { text: 'Custom branding options', included: true },
      { text: 'Resume analytics', included: true },
      { text: 'Priority support', included: true }
    ],
    buttonText: 'Contact Sales',
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-purple-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Simple, <span className="text-purple-600">Transparent</span> Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for your needs. All plans include regular updates with new templates and features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-white dark:bg-gray-900 shadow-xl transform md:-translate-y-4' 
                  : 'bg-white/80 dark:bg-gray-900/80 shadow-lg'
              }`}
            >
              {plan.highlight && (
                <div className="bg-purple-600 text-white text-center py-2 font-medium text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg transition-colors font-medium ${
                    plan.highlight 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
