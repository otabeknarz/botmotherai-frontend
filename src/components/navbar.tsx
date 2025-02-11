"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const { user, loading, logout } = useAuth();

  return (
    <section className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <header className="flex justify-between items-center container mx-auto max-w-full px-6 py-4">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">BotMotherAI</h1>
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            <li>
              <Link href="/#home">Home</Link>
            </li>
            <li>
              <Link href="/#features">Features</Link>
            </li>
            <li>
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/#contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-8">
          {!loading && (
            user ? (
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <Button variant="default" asChild>
                    <Link href="/dashboard">
                      Dashboard
                    </Link>
                  </Button>
                  <Button variant="outline" onClick={logout}>
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <Button variant="default" asChild>
                <Link href="/login">
                  Get Started
                </Link>
              </Button>
            )
          )}
        </div>
      </header>
    </section>
  );
}
