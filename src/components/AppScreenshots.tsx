import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import screenshot1 from "@/assets/1.png";
import screenshot2 from "@/assets/2.png";
import screenshot3 from "@/assets/3.png";
import screenshot4 from "@/assets/4.png";
import screenshot5 from "@/assets/5.png";
import screenshot6 from "@/assets/6.png";

const screenshots = [
  { image: screenshot2 },
  { image: screenshot3 },
  { image: screenshot4 },
  { image: screenshot5 },
  { image: screenshot6 },
  { image: screenshot1 },
];

export const AppScreenshots = () => {
  return (
    <section id="inside-the-game" className="hidden">
      <div className="container mx-auto px-6">
        {/* Mobile Carousel */}
        <div className="block md:hidden max-w-sm mx-auto px-4">
          <Carousel
            opts={{
              align: "center",
              loop: false,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index} className="pl-2 basis-full">
                  <div className="flex flex-col items-center">
                    {/* Screenshot Image */}
                    <div className="relative w-full max-w-[280px]">
                      <img 
                        src={screenshot.image} 
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Swipe Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Swipe to explore</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block max-w-6xl mx-auto px-12 md:px-0">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col items-center">
                    {/* Screenshot Image */}
                    <div className="relative w-full max-w-sm">
                      <img 
                        src={screenshot.image} 
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};