import { Button } from "@/components/ui/Button";
import IframeVideScreen from "@/components/ui/IframeVideoScreen";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="dark text-foreground bg-background/25 relative flex min-h-[80vh] items-center py-24"
    >
      <IframeVideScreen
        src="https://www.youtube.com/embed/ldnEy7tj8Ho?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=ldnEy7tj8Ho&modestbranding=1&enablejsapi=1"
        className="absolute inset-0 -z-10"
      />
      <div className="container">
        <div className="max-w-2xl space-y-6 lg:space-y-8">
          <h1 className="text-5xl lg:text-7xl">
            Welcome to <br /> CyberDoc
          </h1>
          <div>
            <Button size="lg">
              <span>LEARN MORE</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
