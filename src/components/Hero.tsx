
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = event;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const logoElement = document.querySelector('.logo-3d') as HTMLElement;
      if (logoElement) {
        logoElement.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleConsultClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-24 pb-10 relative bg-primary"
      ref={heroRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#000e1a] z-0"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 px-6">
        <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            NEXORA
            <span className="block text-secondary">INNOVATING THE NEXT ERA OF TECH</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-roboto mb-8 text-gray-200">
            MVP • Web & Mobile Apps • AI/ML • Analytics • Video & Content
          </h2>
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-primary btn-hover-effect text-lg py-6 px-8 flex items-center"
            size="lg"
            onClick={handleConsultClick}
          >
            Get a Free Consult
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="logo-3d transition-all duration-300 w-64 h-64 relative">
            <img 
              src="/nexora-logo.png" 
              alt="Nexora Logo" 
              className="w-48 h-48 object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-45">
              <div className="w-40 h-2 bg-accent rounded-full animate-float"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-45">
              <div className="w-40 h-2 bg-secondary rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
