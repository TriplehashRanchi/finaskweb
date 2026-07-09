"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Reusing existing image assets for demonstration. 
const goals = [
  { id: 1, title: "Will & Estate", image: "/goal2.webp", },
  { id: 2, title: "Health", image: "/goal3.webp",   },
  { id: 3, title: "Retirement", image: "/goal1.webp",  },
  { id: 4, title: "Dream Holiday", image: "/goal4.webp", },
  { id: 5, title: "Buying a Home", image: "/goal5.webp",  },
  { id: 6, title: "Child Education", image: "/goal6.webp",  },
  { id: 7, title: "Philanthropic Goals", image: "/goal7.png",   }
];

// Duplicate the array to create a seamless loop
const duplicatedGoals = [...goals, ...goals, ...goals];

export default function GoalSection() {
  return (
    <section className="py-0 px-0 relative overflow-hidden"> 
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Section Header */}
            <div className="text-center mb-10">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#00394E] font-serif tracking-tight">
                    Designed for <span className=" text-[#DAA434]">Life's Milestones</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                    Swipe to explore the goals that define your legacy.
                </p>
            </div>
        </div>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden flex">
            <motion.div 
                className="flex gap-4 pl-6"
                animate={{ x: "-33.333%" }}  
                transition={{ 
                    ease: "linear", 
                    duration: 40, 
                    repeat: Infinity 
                }}
            >
               
                 {duplicatedGoals.map((goal, index) => (
                    <motion.div 
                        key={`${goal.id}-${index}`} 
                        className="relative min-w-[260px] h-[340px] sm:min-w-[300px] sm:h-[380px] md:min-w-[350px] md:h-[400px]   overflow-hidden shadow-xl group flex-shrink-0"
                        whileHover={{ scale: 0.98 }}
                    >
                        {/* Background Image */}
                        <Image 
                            src={goal.image} 
                            alt={goal.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" 
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                            
                             <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 leading-tight">
                                {goal.title}
                             </h3>
                             <div className="h-0.5 w-20 bg-[#DAA434] group-hover:w-full transition-all duration-700 ease-out" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        
        {/* Correction applied below via inline style for the marquee logic because percentage x relies on component width */}
    </section>
  );
}
