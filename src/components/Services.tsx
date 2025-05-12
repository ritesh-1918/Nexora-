
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Brain, ChartBar, Github, Linkedin } from 'lucide-react';

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const servicesList: Service[] = [
  {
    icon: <div className="service-icon text-3xl rotate">🚀</div>,
    title: "MVP Development",
    description: "Quickly transform your ideas into viable products with our agile MVP development approach."
  },
  {
    icon: <div className="service-icon text-3xl">💻</div>,
    title: "Custom Web & Mobile Apps",
    description: "Beautiful, responsive applications built with cutting-edge technologies for all platforms."
  },
  {
    icon: <Brain className="service-icon text-4xl text-accent animate-float" />,
    title: "AI/ML Solutions",
    description: "Leverage the power of artificial intelligence and machine learning to drive innovation."
  },
  {
    icon: <ChartBar className="service-icon text-4xl text-secondary animate-float" />,
    title: "Dashboard Analytics",
    description: "Comprehensive data visualization and analytics solutions for informed decision-making."
  },
  {
    icon: <div className="service-icon text-3xl">🎬</div>,
    title: "Content & Video Production",
    description: "Engaging visual content that tells your story and captivates your audience."
  },
  {
    icon: <div className="service-icon text-3xl"><Github className="inline" /> <Linkedin className="inline" /></div>,
    title: "Full-Stack Development",
    description: "End-to-end development services covering front-end, back-end, and DevOps requirements."
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">OUR SERVICES</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and drive growth in the digital era.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Card 
              key={index}
              className={`service-card p-8 border border-gray-200 rounded-lg ${
                hoveredIndex === index ? 'shadow-lg scale-105' : ''
              } transition-all duration-300`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-5xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
