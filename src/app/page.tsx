import Brand from "@/components/home/brand/Brand";
import CommunitySayingSection from "@/components/home/community/CommunitySayingSection";
import CoursesSection from "@/components/home/course/Courses";
import ExplorePathsSection from "@/components/home/explore-paths/ExplorePathsSection";
import Footer from "@/components/home/footer/Footer";
import Hero from "@/components/home/hero/Hero";
import CreatorManagementSection from "@/components/home/professional-growth/CreatorManagementSection";
import StudentGrowthSection from "@/components/home/professional-growth/StudentGrowthSection";
import UnlockSection from "@/components/home/unlock/UnlockSection";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function Home() {
  return (
    <div className="overflow-hidden space-y-16">
      <div>
        <Hero />
        <ScrollReveal>
          <Brand />
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1}>
        <CoursesSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <ExplorePathsSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <StudentGrowthSection />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <CreatorManagementSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <UnlockSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <CommunitySayingSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
