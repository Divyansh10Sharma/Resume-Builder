import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import TemplateCard from './TemplateCard';
import TemplateModal from './TemplateModal';
import { categories, templates } from '@/data/templates';



const TemplatesSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState(templates);

  useEffect(() => {
    let result = templates;
    
    if (selectedCategory !== 'All') {
      result = result.filter(template => template.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(template => 
        template.name.toLowerCase().includes(query) || 
        template.description.toLowerCase().includes(query) ||
        template.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredTemplates(result);
  }, [selectedCategory, searchQuery]);

  const openTemplateModal = (template) => {
    setSelectedTemplate(template);
    document.body.style.overflow = 'hidden';
  };

  const closeTemplateModal = () => {
    setSelectedTemplate(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="templates" className="py-16 bg-white dark-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md-4xl font-bold mb-4 text-gray-900 dark-white">
            Browse Our <span className="text-purple-600">Resume Templates</span>
          </h2>
          <p className="text-gray-600 dark-gray-300 max-w-2xl mx-auto">
            Find the perfect template that matches your style and career goals. Each design is fully customizable and ATS-friendly.
          </p>
        </div>
        
        <div className="mb-8 flex flex-col md-row justify-between items-center space-y-4 md-y-0">
          <div className="relative w-full md-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 w-full md-64 rounded-lg border border-gray-300 dark-gray-700 bg-white dark-gray-800 text-gray-900 dark-gray-100 focus-2 focus-purple-500 focus-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setSearchQuery('')}
              >
                <X size={16} className="text-gray-400 hover-gray-600 dark-gray-200" />
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-2 w-full md-auto">
            <Filter size={18} className="text-gray-500 dark-gray-400" />
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategory === 'All'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark-gray-800 text-gray-700 dark-gray-300 hover-gray-200 dark-gray-700'
                }`}
                onClick={() => setSelectedCategory('All')}
              >
                All
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark-gray-800 text-gray-700 dark-gray-300 hover-gray-200 dark-gray-700'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 dark-gray-300 mb-2">No templates found</h3>
            <p className="text-gray-500 dark-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onClick={() => openTemplateModal(template)}
              />
            ))}
          </div>
        )}
      </div>
      
      {selectedTemplate && (
        <TemplateModal 
          template={selectedTemplate} 
          onClose={closeTemplateModal} 
        />
      )}
    </section>
  );
};

export default TemplatesSection;