'use client';

import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="section-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold healthcare-gradient bg-clip-text text-transparent">
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
              <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                Contact
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="cta-secondary text-sm px-6 py-2">
                Book Demo
              </button>
              <button className="cta-primary text-sm px-6 py-2">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {children}
      </main>

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
