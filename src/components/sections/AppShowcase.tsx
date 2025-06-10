'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ecosystemApps } from '@/data/apps';

interface AppShowcaseProps {
  app: typeof ecosystemApps[0];
  index: number;
}

function AppCard({ app, index }: AppShowcaseProps) {
  const isEven = index % 2 === 0;
  
  return (
    <section className="section-spacing" data-app={app.id}>
      <div className="section-container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
          {/* App Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={isEven ? 'lg:order-1' : 'lg:order-2'}
          >
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{app.icon}</div>
              <div className="flex items-center space-x-3">
                <h2 className="section-title text-gray-900">{app.title}</h2>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  app.status === 'active' 
                    ? 'bg-success-100 text-success-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {app.status === 'active' ? '✅ Active' : '🔄 Building'}
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {app.description}
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🚀</span>
                Key Features
              </h3>
              <ul className="space-y-3">
                {app.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Integration Description */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">🔗</span>
                Ecosystem Integration
              </h4>
              <p className="text-gray-600">{app.integrationDescription}</p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button 
                className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  app.status === 'active'
                    ? 'cta-primary'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {app.cta}
              </button>
            </motion.div>
          </motion.div>

          {/* App Preview/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={isEven ? 'lg:order-2' : 'lg:order-1'}
          >
            <div className={`relative rounded-2xl p-8 shadow-2xl bg-gradient-to-br ${app.gradient} overflow-hidden`}>
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
              
              {/* App Icon Large */}
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 filter drop-shadow-lg">
                  {app.icon}
                </div>
                <div className="text-white text-2xl font-bold">
                  {app.name}
                </div>
              </div>

              {/* Mock Interface Elements */}
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/40 rounded w-3/4"></div>
                    <div className="h-2 bg-white/40 rounded w-1/2"></div>
                    <div className="h-2 bg-white/40 rounded w-2/3"></div>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-3 bg-white/40 rounded w-1/3"></div>
                    <div className="h-3 bg-white/60 rounded w-1/4"></div>
                  </div>
                  <div className="h-2 bg-white/40 rounded w-full"></div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute top-6 left-6">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  app.status === 'active' 
                    ? 'bg-green-500/20 text-white border border-green-300/30' 
                    : 'bg-yellow-500/20 text-white border border-yellow-300/30'
                }`}>
                  {app.status === 'active' ? 'Live' : 'Coming Soon'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function AppShowcase() {
  return (
    <div id="apps" className="bg-white">
      {/* Section Header */}
      <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6 text-gray-900">
              Complete Healthcare Ecosystem
            </h2>
            <p className="subtitle text-gray-600 max-w-3xl mx-auto mb-12">
              Eight specialized applications working together to provide comprehensive women's healthcare support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Individual App Sections */}
      {ecosystemApps.map((app, index) => (
        <AppCard key={app.id} app={app} index={index} />
      ))}
    </div>
  );
}
