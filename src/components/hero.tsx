'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";

export default function Hero({ className }: { className?: string }) {
  return (
    <div id="home" className={`container mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between py-20 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 lg:w-1/2"
      >
        <div className="space-y-2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-primary inline-block"
          >
            Welcome to BotMotherAI
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Create Your Own{" "}
            <span className="text-primary">Telegram Bot</span>{" "}
            with AI in Minutes
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-muted-foreground max-w-xl"
        >
          Transform your ideas into powerful Telegram bots without writing a single line of code. 
          Let AI handle the complexity while you focus on what matters most.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <Button size="lg" className="w-full sm:w-fit" onClick={() => redirect("/dashboard")}>
            Create My Bot Now
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-fit">
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-8 mt-4"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-muted-foreground">No coding required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-muted-foreground">24/7 Support</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:w-1/2 relative"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative z-10"
        >
          <Image
            src="/hero-section-robot.png"
            alt="AI Bot Maker"
            width={600}
            height={600}
            className="w-full max-w-[600px] mx-auto hidden lg:block"
            priority
          />
        </motion.div>

        {/* Background decorative elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="hidden lg:block absolute top-1/3 left-1/5 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-primary/5 -z-10 w-full"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="hidden lg:block absolute top-1/3 left-1/5 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/3 -z-10"
        />
      </motion.div>
    </div>
  );
}