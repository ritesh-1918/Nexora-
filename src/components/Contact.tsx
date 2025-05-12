
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would submit the form data to your backend here
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">GET IN TOUCH</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Ready to start your next project? Contact us for a free consultation.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary input-glow"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary input-glow"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary input-glow"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 bg-secondary hover:bg-secondary/90 text-primary font-medium btn-hover-effect"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-primary">Email</p>
                  <a href="mailto:nexora.solutions2@gmail.com" className="text-secondary hover:underline">
                    nexora.solutions2@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="font-medium text-primary">WhatsApp</p>
                  <a href="tel:+919948534707" className="text-secondary hover:underline">
                    +91 99485 34707
                  </a>
                </div>
                
                <div>
                  <p className="font-medium text-primary">Location</p>
                  <p className="text-muted">Bengaluru, India</p>
                </div>
              </div>
              
              <div className="mt-8 h-64 w-full rounded-lg overflow-hidden">
                <iframe
                  title="Map"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9974197253!2d77.35072931249921!3d12.95384772518818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1695032224581!5m2!1sen!2sus"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
