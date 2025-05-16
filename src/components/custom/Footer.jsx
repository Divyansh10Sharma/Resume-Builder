import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer  = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              ResumeAI
            </h3>
            <p className="text-gray-400 mb-4">
              Helping professionals land their dream jobs with beautifully designed, ATS-friendly resume templates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Templates</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Professional</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Creative</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Simple</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Modern</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Academic</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Resume Writing Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Cover Letter Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Interview Preparation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Career Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={16} className="mx-1 text-purple-500" /> by ResumeAI Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;