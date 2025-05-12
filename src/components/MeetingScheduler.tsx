
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const MeetingScheduler = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [meetingDetails, setMeetingDetails] = useState({
    name: '',
    email: '',
    topic: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMeetingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime || !meetingDetails.name || !meetingDetails.email) {
      toast({
        title: "Missing Information",
        description: "Please select a date, time and provide your name and email.",
        variant: "destructive"
      });
      return;
    }

    // Format date for display
    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // In a production app, you would send this data to your backend
    console.log('Meeting scheduled:', {
      date: formattedDate,
      time: selectedTime,
      ...meetingDetails
    });

    toast({
      title: "Meeting Scheduled!",
      description: `Your meeting is set for ${formattedDate} at ${selectedTime}.`,
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime(null);
    setMeetingDetails({
      name: '',
      email: '',
      topic: '',
      notes: ''
    });
  };

  // Function to disable past dates
  const disablePastDates = (date: Date) => {
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  return (
    <section id="scheduler" className="py-20 bg-primary bg-opacity-5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">SCHEDULE A MEETING</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Book a time that works for you to discuss your project with our team.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-primary mb-6">Pick a Date & Time</h3>
            
            <div className="mb-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={disablePastDates}
                className="rounded-md border"
              />
            </div>
            
            {selectedDate && (
              <div>
                <h4 className="text-lg font-medium text-primary mb-3">Available time slots</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "secondary" : "outline"}
                      size="sm"
                      className={`text-sm ${selectedTime === time ? 'text-primary font-medium' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-primary mb-6">Meeting Details</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={meetingDetails.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-secondary focus:border-secondary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={meetingDetails.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-secondary focus:border-secondary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-primary mb-1">
                  Meeting Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={meetingDetails.topic}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-secondary focus:border-secondary"
                >
                  <option value="">Select a topic</option>
                  <option value="project-discussion">Project Discussion</option>
                  <option value="initial-consultation">Initial Consultation</option>
                  <option value="product-demo">Product Demo</option>
                  <option value="quote-discussion">Quote Discussion</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-primary mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={meetingDetails.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Please share any specific topics you'd like to discuss..."
                />
              </div>
              
              <div className="pt-4">
                <Button
                  onClick={handleSchedule}
                  className="w-full py-6 bg-secondary hover:bg-secondary/90 text-primary font-medium btn-hover-effect"
                  disabled={!selectedDate || !selectedTime}
                >
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <Card className="border-secondary border-opacity-20">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-primary mb-4">What to Expect</h4>
              <p className="text-muted">
                After scheduling, you'll receive a confirmation email with a Google Meet or Zoom link for your meeting. 
                Our team is looking forward to discussing your project needs and how we can best serve you.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MeetingScheduler;
