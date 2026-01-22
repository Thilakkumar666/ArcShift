import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "hackathon" | "workshop" | "talk" | "competition";
  capacity?: number;
  isUpcoming: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: "Google Solution Challenge 2024",
    description: "Build solutions using Google technologies to address the UN's Sustainable Development Goals. Join us for a 48-hour hackathon experience.",
    date: "February 15-17, 2024",
    time: "9:00 AM - 9:00 AM",
    location: "Tech Lab, Building A",
    type: "hackathon",
    capacity: 100,
    isUpcoming: true,
  },
  {
    id: 2,
    title: "Web3 Development Workshop",
    description: "Learn the fundamentals of blockchain development, smart contracts, and decentralized applications in this hands-on workshop.",
    date: "January 28, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Room 302, Tech Building",
    type: "workshop",
    capacity: 40,
    isUpcoming: true,
  },
  {
    id: 3,
    title: "AI/ML Bootcamp: From Zero to Hero",
    description: "A comprehensive 3-day bootcamp covering machine learning fundamentals, deep learning, and practical AI applications.",
    date: "January 20-22, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "Auditorium",
    type: "workshop",
    capacity: 80,
    isUpcoming: true,
  },
  {
    id: 4,
    title: "Industry Expert Talk: Building at Scale",
    description: "Learn from a senior engineer at Microsoft about building scalable systems and career tips for aspiring developers.",
    date: "January 15, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Virtual (Zoom)",
    type: "talk",
    isUpcoming: true,
  },
  {
    id: 5,
    title: "Microsoft Imagine Cup Prep",
    description: "Participated in Microsoft's global student technology competition with innovative solutions.",
    date: "December 10, 2023",
    time: "Full Day",
    location: "Innovation Hub",
    type: "hackathon",
    isUpcoming: false,
  },
  {
    id: 6,
    title: "Flutter App Development Workshop",
    description: "Built cross-platform mobile applications with Flutter and Firebase integration.",
    date: "November 25, 2023",
    time: "2:00 PM - 7:00 PM",
    location: "Lab 205",
    type: "workshop",
    isUpcoming: false,
  },
  {
    id: 7,
    title: "Competitive Programming Contest",
    description: "Internal coding competition to prepare members for ACM-ICPC and other competitive programming events.",
    date: "November 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Lab",
    type: "competition",
    isUpcoming: false,
  },
];

const typeColors = {
  hackathon: "bg-primary/20 text-primary border-primary/30",
  workshop: "bg-accent/20 text-accent border-accent/30",
  talk: "bg-secondary/20 text-secondary border-secondary/30",
  competition: "bg-neon-pink/20 text-neon-pink border-neon-pink/30",
};

const upcomingEvents = events.filter((e) => e.isUpcoming);
const pastEvents = events.filter((e) => !e.isUpcoming);

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events & <span className="gradient-text">Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our workshops, hackathons, and tech talks to level up your skills 
              and connect with like-minded innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-muted-foreground">
              Don't miss these exciting opportunities to learn and grow
            </p>
          </motion.div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 md:p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize border ${typeColors[event.type]}`}>
                        {event.type}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-primary">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      {event.capacity && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.capacity} spots
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:flex-shrink-0">
                    <Button variant="glow" className="w-full lg:w-auto">
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Past <span className="gradient-text-accent">Events</span>
            </h2>
            <p className="text-muted-foreground">
              A look back at our successful events and workshops
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl card-gradient border border-border/50"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">{event.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {event.description}
                </p>
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize border ${typeColors[event.type]}`}>
                  {event.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-muted-foreground mb-8">
              Have an idea for a workshop or want to collaborate on an event? 
              We're always open to new ideas and partnerships.
            </p>
            <Button variant="neon" size="lg">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
