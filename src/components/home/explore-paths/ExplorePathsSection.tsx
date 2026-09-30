import React from "react";
import { 
  FiPenTool, 
  FiCode, 
  FiMonitor, 
  FiBriefcase, 
  FiTrendingUp, 
  FiCamera 
} from "react-icons/fi";

interface LearningPath {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const learningPaths: LearningPath[] = [
  {
    id: 1,
    title: "Design",
    icon: <FiPenTool className="w-6 h-6 text-gray-900" />,
  },
  {
    id: 2,
    title: "Development",
    icon: <FiCode className="w-6 h-6 text-gray-900" />,
  },
  {
    id: 3,
    title: "IT & Software",
    icon: <FiMonitor className="w-6 h-6 text-gray-900" />,
  },
  {
    id: 4,
    title: "Business",
    icon: <FiBriefcase className="w-6 h-6 text-gray-900" />,
  },
  {
    id: 5,
    title: "Marketing",
    icon: <FiTrendingUp className="w-6 h-6 text-gray-900" />,
  },
  {
    id: 6,
    title: "Photography",
    icon: <FiCamera className="w-6 h-6 text-gray-900" />,
  },
];

const ExplorePathsSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mx-auto mb-12">
          <h2 className="text-2xl font-poppins sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-3 text-xs  max-w-3xl mx-auto sm:text-sm text-gray-500 leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-44"
            >
              {/* Neon Lime Circle with Icon */}
              <div className="w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {path.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-900">
                {path.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExplorePathsSection;