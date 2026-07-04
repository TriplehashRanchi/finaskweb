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
      quote:
        "We truly value the partnership and appreciate the consistent support from your team. The professionalism, timely assistance and customer-centric approach have made our experience very positive.",
      author: "Divya Sawhney",
       image: "/testimonial1.png",
    },
    {
      id: 2,
      quote:
        "Worked with Palash and FinAsk Value Team in the past. Their professionalism, depth of financial knowledge and genuine commitment to helping clients succeed really sets them apart in the industry.",
      author: "Rohit Bhardwaj",
       image: "/testimonial2.png",
    },
    {
      id: 3,
      quote:
        "Palash is great when it comes to investment. I know him for the past 3 years and all his investment advice has helped me very well — especially Mutual Funds. I highly recommend him.",
      author: "Amit Gupta",
       image: "/testimonial3.png",
    },
    {
      id: 4,
      quote:
        "Palash Malik, Founder and CEO of FinAsk Value, has been very active in providing solutions to any queries related to portfolio management, PMS services, insurance products and general financial advice. His personalized guidance with a long-term outlook is highly commendable. I recommend FinAsk Value as a service provider of choice for managing personal finances.",
      author: "Atul Bhola",
       image: "/testimonial4.png",
    },
    {
      id: 5,
      quote:
        "I have had a great customer experience with FinAsk Value. Whenever I called regarding any query or service, it was handled promptly and correctly. The founder maintains a great relationship with customers which inspires confidence. Their suggestions and recommendations have turned out to be excellent.",
      author: "Chetan Pendharkar",
       image: "/testimonial5.png",
    },
    {
      id: 6,
      quote:
        "Customer need-based solutions — under one roof you get all products and services without compromising on quality. I must say it is not only satisfaction, it is Customer Delight.",
      author: "Dr. Sunil Kadyan",
       image: "/testimonial6.png",
    },
    {
      id: 7,
      quote:
        "Super professionalism! Great knowledge on financial products. Amazing customer service. I have never seen a financial advisor like Palash and FinAsk Value.",
      author: "Yogendra Kumar Malik",
       image: "/testimonial7.png",
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
    <section className="py-14 lg:py-0 lg:pb-14 relative overflow-hidden bg-[#FDF9FB] mb-14 sm:mb-0 scroll-mt-[100px]" id="testimonials">
      {/* Mobile Dark Background Block (Covers entire background on mobile) */}
      <div className="lg:hidden absolute inset-0 bg-[#001F2B] z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[500px] flex items-center">
        
        {/* Desktop Dark Background Block (Restricted to container on desktop) */}
        <div className="hidden lg:block absolute top-0 right-20 w-full lg:w-[60%] h-full bg-[#001F2B] z-0"></div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          
          {/* LEFT: White Testimonial Card (Overlapping) */}
          <div 
            className="w-full lg:w-[85%] bg-white shadow-2xl p-6 sm:p-12 lg:p-8 relative lg:ml-24 xl:ml-12 overflow-hidden cursor-grab active:cursor-grabbing select-none"
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
                    <div className="flex items-center gap-2 mb-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 pointer-events-none">
                            <Image
                                src={currentTestimonial.image}
                                alt={currentTestimonial.author}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-bold text-[#001F2B]">
                                {currentTestimonial.author}
                            </h4>
                         
                        </div>
                    </div>

                    {/* Quote Text */}
                    <div className="min-h-[120px]">
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-md select-none">
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
          <div className="pl-0 lg:pl-[10%] pt-10 lg:pt-0 relative z-10 text-center lg:text-left">
            <span className="text-[#DAA434] font-bold tracking-[0.2em] text-base sm:text-lg uppercase mb-4 block">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-serif">
              From Advices To Outcomes
            </h2>
            <div className="w-40 h-1 bg-[#DAA434] mb-6 mx-auto lg:mx-0" />

            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 leading-[1.4] mb-0 text-sm sm:text-md">
              Discover how FinAsk Value has empowered individuals and businesses to
              achieve their financial dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
