
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description: "Interactive data visualization platform with AI-powered insights.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "FinTech Mobile App",
    description: "Secure, intuitive banking application with real-time transaction processing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3, 
    title: "E-commerce Platform",
    description: "Scalable shopping solution with personalized recommendation engine.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description: "Comprehensive patient and resource management platform for hospitals.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc",
    quote: "Nexora transformed our outdated systems into a cutting-edge digital platform that has dramatically improved our operations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder",
    company: "InnoLabs",
    quote: "The team at Nexora delivered our MVP in record time, allowing us to secure funding and accelerate our growth.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  }
];

const Portfolio = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">OUR WORK</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Check out our recent projects and what our clients have to say.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
            <div key={project.id} className="card-3d">
              <Card className="overflow-hidden h-full border-0 shadow-md">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-muted">{project.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">CLIENT TESTIMONIALS</h3>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-0 z-10 text-primary hover:bg-secondary/20"
                onClick={prevTestimonial}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              
              <div className="bg-white rounded-xl shadow-lg p-8 mx-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-secondary"
                    />
                  </div>
                  <div>
                    <p className="italic text-lg mb-4">"{testimonials[activeTestimonial].quote}"</p>
                    <div>
                      <p className="font-bold text-primary">{testimonials[activeTestimonial].name}</p>
                      <p className="text-sm text-muted">
                        {testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 z-10 text-primary hover:bg-secondary/20"
                onClick={nextTestimonial}
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    activeTestimonial === index ? 'bg-secondary' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
