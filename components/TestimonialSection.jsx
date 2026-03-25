"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Smoother Transition Variants
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

// Adjusted threshold for easier swipes
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function TestimonialSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "Palash Malik, Founder & CEO of FinAsk Value, has been extremely proactive in addressing queries related to portfolio management, PMS services, insurance products, and broader financial discussions. His personalized approach, combined with a clear focus on long-term value creation, is truly commendable.",
      author: "Atul Bhola",
      location: "Client",
      image: "/testimonial-michael.webp",
    },
    {
      id: 2,
      quote: "I am very thankful for the work you have done for me over the past years. Your knowledge and a genuine interest in achieving the best for clients is what makes a truly professional Financial Adviser. I would highly recommend FinAsk Value to anyone wanting to achieve better financial outcomes.",
      author: "Amit Yadav",
      location: "Client",
      image: "/testimonial-andrew.webp",
    },
    {
      id: 3,
      quote: "Super professionalism! Great Knowledge on Financial Products. Amazing Customer services. I have never seen financial advisor like Palash and FinAsk. They explained every detail clearly and helped me make confident financial decisions. ",
      author: "Yogendra Malik",
      location: "Client",
      image: "/testimonial-michael.webp",
    },
    {
      id: 4,
      quote: "Worked with Palash and FinAsk Team in the past. Their professionalism, depth of financial knowledge, and genuine commitment to helping clients succeed really sets them apart in the industry.",
      author: "Rohit Bhardwaj",
      location: "Client",
      image: "/testimonial-andrew.webp",
    },
    {
      id: 5,
      quote: "We truly value the partnership and appreciate the consistent support from your team. The professionalism, timely assistance, and customer-centric approach have made our experience very positive.",
      author: "Divya Sawhney",
      location: "Client",
      image: "/testimonial-sarah.webp",
    },
  ];

  const testimonialIndex = Math.abs(page % testimonials.length);
  const currentTestimonial = testimonials[testimonialIndex];

  // Manual pagination with direction
  const paginate = useCallback((newDirection) => {
    setPage((prev) => [prev[0] + newDirection, newDirection]);
  }, []);

  // Auto-slide effect with cleaner reset logic
  useEffect(() => {
    // If user is hovering or dragging, don't auto-slide
    if (isHovered) return;

    const interval = setInterval(() => {
        paginate(1);
    }, 5000); 

    return () => clearInterval(interval);
  }, [paginate, isHovered, page]); // Dependency on 'page' ensures timer resets on manual change

  return (
    <section className="pb-14 relative overflow-hidden bg-[#FDF9FB]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[500px] flex items-center">
        
        {/* RIGHT: Dark Background Block */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-[#001F2B] z-0 "></div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          
          {/* LEFT: White Testimonial Card (Overlapping) */}
          <div 
            className="w-full lg:w-[85%] bg-white shadow-2xl p-8 md:p-12 lg:p-8 relative lg:ml-24 xl:ml-32 overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // Touch events for mobile to prevent conflicting scroll if needed, though drag usually handles it
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "tween", ease: "easeInOut", duration: 0.4 }, // Smoother glide than spring
                        opacity: { duration: 0.3 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1} 
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="w-full h-full"
                >
                    
                    {/* User Info */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100 pointer-events-none">
                            <Image
                                src={currentTestimonial.image}
                                alt={currentTestimonial.author}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-serif text-lg font-bold text-[#001F2B]">
                                {currentTestimonial.author}
                            </h4>
                            <p className="text-[#DAA434] text-sm font-medium">
                                {currentTestimonial.location}
                            </p>
                        </div>
                    </div>

                    {/* Quote Text */}
                    <div className="min-h-[120px]">
                        <p className="text-gray-600 leading-relaxed text-sm select-none">
                            {currentTestimonial.quote}
                        </p>
                    </div>

                </motion.div>
            </AnimatePresence>
            
            {/* Progress/Indicators */}
             <div className="flex gap-2 mt-4 justify-center md:justify-start">
                     {testimonials.map((_, idx) => (
                         <div 
                            key={idx} 
                            onClick={() => {
                                // Calculate direction based on index difference for smooth transition
                                const newDirection = idx > testimonialIndex ? 1 : -1;
                                // We can just jump directly by setting absolute page, but to keep 'paginate' logic simple:
                                // A simplified jump:
                                if (idx !== testimonialIndex) {
                                    setPage([idx, newDirection]);
                                }
                            }}
                            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${idx === testimonialIndex ? 'w-8 bg-[#DAA434]' : 'w-2 bg-gray-200'}`}
                         />
                     ))}
            </div>

          </div>

          {/* RIGHT: Content Title Block (Inside Dark Area) */}
          <div className="pl-0 lg:pl-[30%] pt-10 lg:pt-0 relative z-10 text-center lg:text-left">
            <span className="text-[#DAA434] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-6 font-serif">
              What Our Clients Says
            </h2>
            <div className="w-40 h-1 bg-[#DAA434] mb-6 mx-auto lg:mx-0" />

            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 leading-[1.4] mb-0 text-md">
              Discover how FinAsk has empowered individuals and businesses to
              achieve their financial dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
