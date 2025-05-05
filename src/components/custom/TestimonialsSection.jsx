import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "ResumeCraft helped me land my dream job! The templates are not only beautiful but also ATS-friendly. I got more interviews in one month than I did in six months with my old resume.",
    name: "Alexandra Chen",
    title: "Marketing Director",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 2,
    quote: "As someone who's not design-savvy, I was worried about creating a professional resume. ResumeCraft made it incredibly simple, and I received compliments on my resume design during interviews.",
    name: "Marcus Johnson",
    title: "Software Engineer",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 3,
    quote: "The templates are sleek, modern, and versatile. I've recommended ResumeCraft to all my graduating classmates. Worth every penny for the premium templates!",
    name: "Sophia Rodriguez",
    title: "Recent Graduate",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our <span className="text-purple-600">Users Say</span>
            </h2>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-purple-50 dark:bg-gray-800 p-8 md:p-12">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-purple-100 to-transparent dark:from-purple-900/30 dark:to-transparent"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {Array.from({ length: testimonials.length }).map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                        index === activeIndex
                          ? 'bg-purple-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-600">
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < testimonials[activeIndex].rating ? "currentColor" : "none"}
                        className={
                          i < testimonials[activeIndex].rating
                            ? "text-yellow-500"
                            : "text-gray-300 dark:text-gray-600"
                        }
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[activeIndex].title}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-700 shadow-lg rounded-full p-2 text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors md:flex hidden"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-700 shadow-lg rounded-full p-2 text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors md:flex hidden"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
