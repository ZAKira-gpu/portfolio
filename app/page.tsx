import { Approach } from "@/components/approach";
import { Clients } from "@/components/clients";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ProfilePicture } from "@/components/ui/profile-picture";
import { RecentProjects } from "@/components/recent-projects";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10" suppressHydrationWarning>
      <ParticleBackground />
      <FloatingNav />
      <ProfilePicture />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
