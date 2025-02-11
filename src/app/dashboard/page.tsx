'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border rounded-xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>

            {user && (
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-muted-foreground">Username</h2>
                    <p className="text-2xl font-medium">{user.username}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 mt-8 border-t"
                >
                  <Button className="w-full" size="lg">
                    Create New Bot
                  </Button>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </ProtectedRoute>
  );
} 