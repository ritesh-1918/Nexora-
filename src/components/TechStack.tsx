
import { useEffect, useRef } from 'react';

const technologies = [
  { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "TensorFlow", icon: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" },
  { name: "AWS", icon: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
  { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
  { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const items = document.querySelectorAll('.tech-item');
    items.forEach((item) => observer.observe(item));
    
    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">OUR TECH STACK</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and efficient solutions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto" ref={containerRef}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="tech-item flex flex-col items-center opacity-0 transform translate-y-4 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center mb-4">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-primary font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">Why Our Tech Stack Matters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Scalability</h4>
                <p className="text-muted">Our solutions are designed to grow with your business, handling increased loads without performance issues.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary text-primary flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Performance</h4>
                <p className="text-muted">We optimize every aspect of our code to ensure maximum speed and efficiency in all our applications.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-primary flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Innovation</h4>
                <p className="text-muted">We stay ahead with the latest technologies, bringing innovative solutions to solve complex business problems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
