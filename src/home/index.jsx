import React, { useState } from 'react';
import Header from '@/components/custom/Header';
import Hero from '@/components/custom/Hero';
import FeaturesSection from '@/components/custom/FeaturesSection';
import TemplatesSection from '@/components/custom/TemplatesSection';
import PricingSection from '@/components/custom/PricingSection';
import Footer from '@/components/custom/Footer';
import { AtomIcon, Edit, Share2 } from 'lucide-react';

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />

        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="text-4xl font-extrabold text-purple-800 tracking-tight sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-2 text-lg text-gray-600 sm:text-xl">
            Launch your mock interview in just{' '}
            <span className="text-purple-700 font-semibold">3 simple steps</span>
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a className="block rounded-2xl border bg-white/90 backdrop-blur-lg border-purple-300 p-8 shadow-lg transition transform hover:scale-105 hover:border-purple-600 hover:shadow-purple-400/30" href="#">
              <AtomIcon className="h-8 w-8 text-purple-700" />
              <h2 className="mt-4 text-xl font-extrabold text-purple-800">Write prompt for your form</h2>
              <p className="mt-2 text-sm text-gray-700">
                AI applications have revolutionized various industries by enhancing productivity, efficiency, and innovation.
              </p>
            </a>
            <a className="block rounded-2xl border bg-white/90 backdrop-blur-lg border-purple-300 p-8 shadow-lg transition transform hover:scale-105 hover:border-purple-600 hover:shadow-purple-400/30" href="#">
              <Edit className="h-8 w-8 text-purple-700" />
              <h2 className="mt-4 text-xl font-extrabold text-purple-800">Edit your form</h2>
              <p className="mt-2 text-sm text-gray-700">
                In the business world, AI applications streamline operations, improve customer service, and enhance marketing strategies.
              </p>
            </a>
            <a className="block rounded-2xl border bg-white/90 backdrop-blur-lg border-purple-300 p-8 shadow-lg transition transform hover:scale-105 hover:border-purple-600 hover:shadow-purple-400/30" href="#">
              <Share2 className="h-8 w-8 text-purple-700" />
              <h2 className="mt-4 text-xl font-extrabold text-purple-800">Share & Start accepting Responses</h2>
              <p className="mt-2 text-sm text-gray-700">
                AI's influence extends to industries like transportation, manufacturing, and entertainment.
              </p>
            </a>
          </div>
          <div className="mt-12 text-center">
            <a href="/sign-in" className="inline-block rounded-2xl bg-purple-700 px-12 py-4 text-lg font-semibold text-white shadow-lg transition transform hover:bg-purple-800 hover:scale-105 hover:shadow-purple-400">
              Get Started Today
            </a>
          </div>
        </section>

        <FeaturesSection />
        <TemplatesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
