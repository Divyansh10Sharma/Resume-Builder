import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';




const TemplateModal = ({ template, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!template) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className="bg-white dark-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark-gray-800">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark-white">{template.name}</h3>
            <p className="text-sm text-gray-500 dark-gray-400">{template.category}</p>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover-gray-100 dark-gray-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md-cols-2 gap-6 p-6">
          <div className="aspect-[3/4] bg-gray-100 dark-gray-800 rounded-lg overflow-hidden">
            <img 
              src={template.image} 
              alt={template.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark-white mb-2">Description</h4>
              <p className="text-gray-600 dark-gray-300">{template.description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark-white mb-2">Features</h4>
              <ul className="space-y-2 text-gray-600 dark-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                  ATS-friendly format
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                  Customizable sections
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                  Multiple color schemes
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                  Professional typography
                </li>
              </ul>
            </div>
            
            <div className="mt-auto">
              <button className="w-full py-3 bg-purple-600 hover-purple-700 text-white rounded-lg flex items-center justify-center transition-colors">
                <Download size={18} className="mr-2" />
                Use This Template
              </button>
              
              <p className="text-xs text-center text-gray-500 dark-gray-400 mt-2">
                Free for personal use. See our <a href="#" className="underline text-purple-500">terms</a> for commercial licensing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateModal;