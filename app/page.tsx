import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { Achievements } from "@/components/home/achievements";
import ExperiencePage from "./(routes)/experience/page";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ExperiencePage />
      <FeaturedProjects />
      <SkillsShowcase />
      <Achievements />
    </div>
  );
}
