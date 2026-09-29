import Brand from "./components/home/brand/Brand";
import CoursesSection from "./components/home/course/Courses";
import ExplorePathsSection from "./components/home/ExplorePaths/ExplorePathsSection";
import Hero from "./components/home/hero/Hero";
import CreatorManagementSection from "./components/home/professional-growth/CreatorManagementSection";
import StudentGrowthSection from "./components/home/professional-growth/StudentGrowthSection";
import UnlockSection from "./components/home/unlock/UnlockSection";


export default function Home() {
  return (
    <div>
      <Hero />
      <Brand />
      <CoursesSection />
      <ExplorePathsSection />
      <StudentGrowthSection />
      <CreatorManagementSection />
      <UnlockSection/>
    </div>
  );
}
