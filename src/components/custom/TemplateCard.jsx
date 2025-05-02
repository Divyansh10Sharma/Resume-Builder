import React from 'react';
import { Eye, Download } from 'lucide-react';




const TemplateCard = ({ template, onClick }) => {
  return (
    <div 
      className="group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img 
          src={template.image} 
          alt={template.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-xl mb-1">{template.name}</h3>
        <p className="text-gray-200 text-sm mb-3">{template.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs px-3 py-1 bg-purple-500 text-white rounded-full">
            {template.category}
          </span>
          
          <div className="flex space-x-2">
            <button 
              className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-200"
              aria-label="Preview template"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <Eye size={16} />
            </button>
            
            <button 
              className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-200"
              aria-label="Use template"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Download size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {template.featured && (
        <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-md">
          Featured
        </div>
      )}
    </div>
  );
};

export default TemplateCard;