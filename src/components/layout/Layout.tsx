'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { useAuth } from '@/hooks/useAuth';
import AuthModal from '@/components/auth/AuthModal';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="section-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="text-lg sm:text-xl md:text-2xl font-bold healthcare-gradient bg-clip-text text-transparent">
                WomenHealth.Health
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-600 hover:text-primary-600 transition-colors">
                Platform
              </a>
              <a href="#apps" className="text-gray-600 hover:text-primary-600 transition-colors">
                Apps
              </a>
              <a href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                Contact
              </a>
              {user && (
                <a href="/dashboard" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Dashboard
                </a>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Mobile & Desktop Auth Buttons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {loading ? (
                <div className="text-sm text-gray-500">Loading...</div>
              ) : user ? (
                <>
                  <div className="hidden sm:block text-sm text-gray-700">
                    Welcome, {user.user_metadata?.full_name || user.email}
                  </div>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="cta-secondary text-xs sm:text-sm px-3 py-2 sm:px-6"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => handleAuthClick('signin')}
                    className="cta-secondary text-xs sm:text-sm px-3 py-2 sm:px-6 whitespace-nowrap"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAuthClick('signup')}
                    className="cta-primary text-xs sm:text-sm px-3 py-2 sm:px-6 whitespace-nowrap"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <a
                href="#platform"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Platform
              </a>
              <a
                href="#apps"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apps
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              {user && (
                <a
                  href="/dashboard"
                  className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </a>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {children}
      </main>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />

      <footer className="bg-gray-900 text-white py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                WomenHealth.Health
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Revolutionizing women's healthcare through Human-AI collaboration. 
                Where cutting-edge AI meets compassionate care.
              </p>
              <div className="flex space-x-4">
                <div className="compliance-badge bg-gray-800 border-gray-700">
                  🔒 HIPAA Compliant
                </div>
                <div className="compliance-badge bg-gray-800 border-gray-700">
                  🛡️ SOC 2 Type II
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Dr. Alex AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">EHR System</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telemedicine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Apps</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">MenoWellness</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SupportPartner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SoberPal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">View All Apps</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 WomenHealth.Health. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
