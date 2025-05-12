
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">WHAT WE CAN DO FOR YOU</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            While we're building our portfolio, here's a glimpse of what we can create for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Custom Web Applications</h3>
                <p className="text-muted mb-4">
                  Tailored web solutions designed to solve your specific business challenges, from simple websites to complex web applications.
                </p>
                <ul className="list-disc pl-5 text-muted">
                  <li className="mb-2">Responsive designs that work on all devices</li>
                  <li className="mb-2">User-friendly interfaces with modern aesthetics</li>
                  <li>Fast, secure, and scalable architecture</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Mobile Applications</h3>
                <p className="text-muted mb-4">
                  Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android.
                </p>
                <ul className="list-disc pl-5 text-muted">
                  <li className="mb-2">Intuitive interfaces with smooth animations</li>
                  <li className="mb-2">Offline capabilities and efficient data handling</li>
                  <li>Integration with device features (camera, GPS, etc.)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">AI/ML Integration</h3>
                <p className="text-muted mb-4">
                  Harness the power of artificial intelligence and machine learning to drive innovation in your business processes.
                </p>
                <ul className="list-disc pl-5 text-muted">
                  <li className="mb-2">Data analysis and predictive modeling</li>
                  <li className="mb-2">Natural language processing solutions</li>
                  <li>Computer vision and image recognition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">MVP Development</h3>
                <p className="text-muted mb-4">
                  Rapidly bring your ideas to market with our streamlined MVP development approach.
                </p>
                <ul className="list-disc pl-5 text-muted">
                  <li className="mb-2">Focus on core features for quick launch</li>
                  <li className="mb-2">Iterative development based on user feedback</li>
                  <li>Scalable architecture ready for growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
