'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

const plans = [
  {
    name: 'Free',
    emoji: '🚀',
    price: '$0',
    features: [
      'Up to 48 hours of bot uptime',
      '10 AI-powered customizations monthly',
      'Basic file handling capabilities',
      'Manage up to 100 active users',
      'Process 1,000 daily interactions'
    ]
  },
  {
    name: 'Pro',
    emoji: '⭐',
    price: '$49',
    period: 'per month',
    popular: true,
    features: [
      '24/7 Uninterrupted operation',
      '50 Advanced AI customizations monthly',
      'File handling up to 50MB',
      'Scale to 5,000 active users',
      'Handle 15,000 daily interactions'
    ]
  },
  {
    name: 'Business',
    emoji: '💎',
    price: '$99',
    period: 'per month',
    features: [
      'Enterprise-grade reliability',
      '150 Premium AI customizations monthly',
      'Enhanced file handling up to 100MB',
      'Expand to 50,000 active users',
      'Process 100,000 daily interactions'
    ]
  },
  {
    name: 'Enterprise',
    emoji: '🏢',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Tailored solutions for your needs',
      'Unlimited AI customizations',
      'Custom file handling limits',
      'Dedicated success manager',
      'Priority 24/7 support access'
    ]
  }
];

export default function Pricing({ className }: { className?: string }) {
  return (
    <div id="pricing" className={`container mx-auto flex flex-col gap-12 py-20 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center"
      >
        Power Up Your Telegram Presence
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-muted-foreground text-center max-w-3xl mx-auto"
      >
        From startups to enterprises, we've got the perfect plan to transform your Telegram automation. 
        Scale confidently with our transparent pricing.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative p-8 border rounded-xl bg-card hover:bg-accent/10 transition-colors ${
              plan.popular ? 'border-primary shadow-lg' : ''
            }`}
          >
            {plan.popular && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full"
              >
                Most Popular
              </motion.div>
            )}
            
            <div className="text-center mb-6">
              <motion.span
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-5xl inline-block mb-4"
              >
                {plan.emoji}
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-2xl font-bold"
              >
                {plan.name}
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="mt-2 mb-1"
              >
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">/{plan.period}</span>
                )}
              </motion.div>
            </div>
            
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <motion.div 
                  key={featureIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + featureIndex * 0.1 }}
                  className="flex items-center"
                >
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Button 
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

