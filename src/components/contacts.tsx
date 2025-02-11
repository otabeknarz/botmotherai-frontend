'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactMethods = [
  {
    icon: (
      <motion.svg 
        className="w-10 h-10 text-primary"
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </motion.svg>
    ),
    title: "Give us a call",
    content: "+998 (88) 088 59 98",
    description: "Available Everyday, 3PM-10PM Tashkent"
  },
  {
    icon: (
      <motion.svg
        className="w-10 h-10 text-primary"
        animate={{ 
          y: [0, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </motion.svg>
    ),
    title: "Send us an email",
    content: "otabeknarz@gmail.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: (
      <motion.svg
        className="w-10 h-10 text-primary"
        animate={{ 
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </motion.svg>
    ),
    title: "Chat on Telegram",
    content: "@otabek_narz",
    description: "Instant support via Telegram"
  }
];

export default function Contacts({ className }: { className?: string }) {
  return (
    <div id="contacts" className={`container mx-auto flex flex-col gap-12 py-20 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center"
      >
        Let's Build Something Amazing Together
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-muted-foreground text-center max-w-3xl mx-auto"
      >
        Have questions or ready to transform your Telegram presence? 
        Our team of experts is here to help you every step of the way.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-8 border rounded-xl bg-card hover:bg-accent/10 transition-colors text-center"
          >
            <div className="flex justify-center mb-4">
              {method.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
            <p className="text-lg font-medium text-primary mb-2">{method.content}</p>
            <p className="text-sm text-muted-foreground">{method.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl mx-auto w-full bg-card border rounded-xl p-8 mt-8"
      >
        <h3 className="text-2xl font-semibold text-center mb-6">Start Your Journey</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea 
              placeholder="Tell us about your project or ask us anything..."
              className="min-h-[120px]"
            />
          </div>
          <Button className="w-full" size="lg">
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  );
}


