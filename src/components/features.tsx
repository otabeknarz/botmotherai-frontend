'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Features({ className }: { className?: string }) {
  return (
    <div id="features" className={`container mx-auto flex flex-col gap-12 py-20 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center"
      >
        Why Choose BotMaker?
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-muted-foreground text-center max-w-3xl mx-auto"
      >
        Transform your Telegram presence with our AI-powered bot creation platform. 
        No coding required, just your imagination and our powerful tools.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="feature-item p-8 border rounded-xl bg-card hover:bg-accent/10 transition-colors"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="mb-6"
          >
            <Image src="/ai-3d-icon.png" alt="AI 3d Icon" width={150} height={150} className="mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-center">Intelligent Bot Creation</h3>
          <p className="text-lg text-muted-foreground mt-3 text-center">
            Let our AI handle the complexity. Create sophisticated bots without writing a single line of code.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="feature-item p-8 border rounded-xl bg-card hover:bg-accent/10 transition-colors"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="mb-6"
          >
            <Image src="/server-3d-icon.png" alt="Server 3d Icon" width={150} height={150} className="mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-center">Reliable Infrastructure</h3>
          <p className="text-lg text-muted-foreground mt-3 text-center">
            Forget about server management. Our robust infrastructure ensures your bots run 24/7 without interruption.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="feature-item p-8 border rounded-xl bg-card hover:bg-accent/10 transition-colors"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="mb-6"
          >
            <Image src="/24-7-3d-icon.png" alt="24/7 3d Icon" width={150} height={150} className="mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-center">Round-the-Clock Support</h3>
          <p className="text-lg text-muted-foreground mt-3 text-center">
            Our expert team is always here to help. Get instant support whenever you need it.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="feature-item p-8 border rounded-xl bg-card hover:bg-accent/10 transition-colors"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="mb-6"
          >
            <Image src="/cheap-3d-icon.png" alt="Cheap 3d Icon" width={150} height={150} className="mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-center">Cost-Effective Solution</h3>
          <p className="text-lg text-muted-foreground mt-3 text-center">
            Save thousands on development and infrastructure. Get enterprise-grade bots at a fraction of the cost.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 