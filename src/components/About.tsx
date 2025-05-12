
import { useEffect, useRef } from 'react';

const About = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    const particles = Array.from({ length: 50 }, (_, i) => {
      const particle = document.createElement('div');
      const size = Math.random() * 6 + 2;
      
      particle.className = 'absolute rounded-full bg-secondary bg-opacity-20';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      return particle;
    });
    
    particles.forEach(p => particlesRef.current?.appendChild(p));
    
    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-primary text-white relative overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
        {/* Particles will be added here dynamically */}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">ABOUT NEXORA</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto italic font-serif">
            "We believe in harnessing technology to create meaningful digital experiences that drive business growth."
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Ritesh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ritesh Kumar</h3>
              <h4 className="text-secondary mb-4">Founder & CEO</h4>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• 10+ years in tech leadership</li>
                <li>• Ex-Google, specialized in ML/AI</li>
                <li>• Stanford CS graduate</li>
                <li>• Speaker at TEDx Technology</li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Hema" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Hema Priya</h3>
              <h4 className="text-secondary mb-4">Co-Founder & CTO</h4>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• Full-stack development expert</li>
                <li>• Former AWS Solutions Architect</li>
                <li>• MIT Computer Science alumni</li>
                <li>• Open source contributor</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg max-w-4xl mx-auto">
              Founded in 2023, Nexora combines technical expertise with creative vision to deliver exceptional digital solutions. 
              Our team of passionate technologists and designers work collaboratively to tackle complex challenges and drive innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
