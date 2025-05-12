
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Select } from '@/components/ui/select';

const Contact = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic info
    name: '',
    email: '',
    phone: '',
    company: '',
    // Project details
    projectType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    // Additional info
    referralSource: '',
    additionalInfo: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (formStep === 1 && (!formData.name || !formData.email)) {
      toast({
        title: "Required Fields",
        description: "Please fill in your name and email",
        variant: "destructive"
      });
      return;
    }
    setFormStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setFormStep(prev => prev - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
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
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      projectDescription: '',
      timeline: '',
      budget: '',
      referralSource: '',
      additionalInfo: ''
    });
    setFormStep(1);
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
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              {formStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Basic Information</h3>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border-gray-300 focus:ring-secondary focus:border-secondary input-glow"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full border-gray-300 focus:ring-secondary focus:border-secondary input-glow"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                      Phone Number
                    </label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full border-gray-300 focus:ring-secondary focus:border-secondary input-glow"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary mb-1">
                      Company Name
                    </label>
                    <Input 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full border-gray-300 focus:ring-secondary focus:border-secondary input-glow"
                    />
                  </div>
                  
                  <Button 
                    type="button" 
                    className="w-full py-6 bg-secondary hover:bg-secondary/90 text-primary font-medium btn-hover-effect"
                    onClick={handleNextStep}
                  >
                    Next: Project Details
                  </Button>
                </div>
              )}
              
              {formStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Project Details</h3>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-primary mb-1">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-secondary focus:border-secondary input-glow"
                    >
                      <option value="">Select project type</option>
                      <option value="website">Website</option>
                      <option value="mobileApp">Mobile App</option>
                      <option value="webApp">Web Application</option>
                      <option value="aiml">AI/ML Solution</option>
                      <option value="mvp">MVP Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-primary mb-1">
                      Project Description
                    </label>
                    <Textarea 
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full border-gray-300 focus:ring-secondary focus:border-secondary input-glow"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-primary mb-1">
                      Expected Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-secondary focus:border-secondary input-glow"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgently">Urgently (less than 1 month)</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6+months">6+ months</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-primary mb-1">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-secondary focus:border-secondary input-glow"
                    >
                      <option value="">Select budget range</option>
                      <option value="under5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      className="w-1/2 py-6 border-secondary text-secondary hover:bg-secondary/10 font-medium"
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                    
                    <Button 
                      type="button" 
                      className="w-1/2 py-6 bg-secondary hover:bg-secondary/90 text-primary font-medium btn-hover-effect"
                      onClick={handleNextStep}
                    >
                      Next: Final Step
                    </Button>
                  </div>
                </div>
              )}
              
              {formStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Additional Information</h3>
                  
                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-medium text-primary mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-secondary focus:border-secondary input-glow"
                    >
                      <option value="">Select option</option>
                      <option value="search">Search Engine</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-primary mb-1">
                      Anything else you'd like to share?
                    </label>
                    <Textarea 
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Additional information..."
                      rows={4}
                      className="w-full border-gray-300 focus:ring-secondary focus:border-secondary input-glow"
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      className="w-1/2 py-6 border-secondary text-secondary hover:bg-secondary/10 font-medium"
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                    
                    <Button 
                      type="submit" 
                      className="w-1/2 py-6 bg-secondary hover:bg-secondary/90 text-primary font-medium btn-hover-effect"
                    >
                      Submit Request
                    </Button>
                  </div>
                </div>
              )}
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
                  <p className="text-muted">Hyderabad, Telangana, India</p>
                </div>
              </div>
              
              <div className="mt-8 h-64 w-full rounded-lg overflow-hidden">
                <iframe
                  title="Map"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203577887!2d78.24323993745055!3d17.41227238722702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1695032224581!5m2!1sen!2sus"
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
