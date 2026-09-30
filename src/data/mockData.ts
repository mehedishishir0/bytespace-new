export interface Course {
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

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const categories: string[] = [
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

export const courses: Course[] = [
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

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
  {
    id: 4,
    name: "Emily R.",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    quote:
      '"The community engagement on ByteSpace is exceptional. I love how easy it is to interact with instructors and peers. The content here is just top-notch and constantly updated."',
  },
  {
    id: 5,
    name: "Michael T.",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=300&q=80",
    quote:
      '"Learning on ByteSpace has given me the practical skills I needed to advance my career. The project-based approach makes complex concepts easier to understand and apply."',
  }
];

export interface BrandType {
  id: number;
  name: string;
  src: string;
}

export const brands: BrandType[] = [
  { id: 1, name: "Logotipsum", src: "/images/brand/logoipsum.png" },
  { id: 2, name: "Logotipsum", src: "/images/brand/logoipsum1.png" },
  { id: 3, name: "Logotipsum", src: "/images/brand/logoipsum2.png" },
  { id: 4, name: "Logotipsum", src: "/images/brand/logoipsum3.png" },
  { id: 5, name: "Logotipsum", src: "/images/brand/logoipsum4.png" },
];
