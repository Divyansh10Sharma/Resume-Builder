import React from 'react';
import { FileText, Sliders, Search, Award, Palette, Layout } from 'lucide-react';

const features = [
  {
    icon: <FileText className="h-6 w-6 text-purple-600" />,
    title: 'ATS-Friendly Designs',
    description: 'All our templates are optimized to pass through Applicant Tracking Systems and reach human recruiters.'
  },
  {
    icon: <Sliders className="h-6 w-6 text-purple-600" />,
    title: 'Easy Customization',
    description: 'Personalize every aspect of your resume with our intuitive editor. No design skills required.'
  },
  {
    icon: <Search className="h-6 w-6 text-purple-600" />,
    title: 'Keyword Optimization',
    description: 'Our smart analyzer helps you include relevant keywords to match job descriptions.'
  },
  {
    icon: <Award className="h-6 w-6 text-purple-600" />,
    title: 'Expert-Approved',
    description: 'Templates designed in collaboration with hiring managers and recruitment professionals.'
  },
  {
    icon: <Palette className="h-6 w-6 text-purple-600" />,
    title: 'Multiple Color Schemes',
    description: 'Choose from various color schemes to match your personal brand and industry standards.'
  },
  {
    icon: <Layout className="h-6 w-6 text-purple-600" />,
    title: 'Responsive Layouts',
    description: 'Your resume will look great whether viewed on screen or printed on paper.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-purple-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose <span className="text-purple-600">ResumeCraft</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our templates are designed to help you stand out while meeting industry standards for professionalism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;