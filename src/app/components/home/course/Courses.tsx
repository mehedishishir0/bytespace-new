import { Share2 } from "lucide-react";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  creator: string;
  rating: number;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  price: string;
  image: string;
}

const categories: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

const courses: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    creator: "panepixel studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25/lifetime",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    creator: "panepixel studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25/lifetime",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    creator: "panepixel studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25/lifetime",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    creator: "panepixel studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25/lifetime",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    creator: "panepixel studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25/lifetime",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    creator: "panepixel studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25/lifetime",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
];

const CoursesSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl  mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Categories / Tags Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((category, index) => {
            const isFeatured = category === "Featured";
            return (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isFeatured
                    ? "bg-[#d4fd36] text-gray-900 shadow-sm font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Course Image & Overlay Badges */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  {/* Floating Badges inside Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between ">
                    <span className="backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-white font-medium">{course.lessons}</span>
                    <span className="backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-white font-medium">{course.duration}</span>
                    <span className="backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-white font-medium">{course.comments}</span>
                  </div>
                </div>

                {/* Title & Rating */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-gray-900 text-base line-clamp-1">
                    {course.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-800 flex items-center gap-0.5 whitespace-nowrap">
                    {course.rating} <span className="text-yellow-400">★</span>
                  </span>
                </div>

                {/* Creator info */}
                <p className="text-xs text-gray-500 mb-4">
                  by <span className="text-gray-700 font-medium">{course.creator}</span>
                </p>
              </div>

              <div>
                {/* Level and Students Avatars */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Share2 className="w-3 h-3"/>
                    {course.level}
                  </span>

                  {/* Stacked Avatars Mock */}
                  <div className="flex items-center">
                    <div className="flex -space-x-2 overflow-hidden">
                      <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-red-400"></div>
                      <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-blue-400"></div>
                      <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-green-400"></div>
                    </div>
                    <span className="ml-2 text-[10px] font-bold bg-[#d4fd36] text-gray-900 px-1.5 py-0.5 rounded-full">
                      26+
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center">
                  <span className="text-[#003BE2] font-bold text-base">
                    {course.price.split("/")[0]}
                  </span>
                  <span className="text-gray-400 text-xs ml-0.5">
                    /{course.price.split("/")[1]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;