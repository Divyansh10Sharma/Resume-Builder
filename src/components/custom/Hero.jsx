import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-800 dark:text-white">Stand Out With Our </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                Premium Resume Templates
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              Craft the perfect resume that gets you noticed. Choose from our collection of professionally designed templates 
              and land your dream job.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#templates" 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Explore Templates
                <ArrowRight size={18} className="ml-2" />
              </a>
              
              <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
            
            <div className="mt-8 flex items-center text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-purple-${i * 100}`}></div>
                ))}
              </div>
              <span className="ml-3 text-sm">
                Join <span className="font-semibold">10,000+</span> professionals who found success
              </span>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur-md opacity-75 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8867429/pexels-photo-8867429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Resume template preview" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Most Popular</span>
                  <span className="font-medium text-gray-800 dark:text-white">Executive Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;