'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DrAlexDemo = () => {
  const handleDemoClick = () => {
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }

    // Open demo in new tab
    window.open('/demo-dralexai', '_blank');
  };

  const demoFeatures = [
    {
      icon: '🏥',
      title: 'Provider Dashboard',
      description: 'Clinical intelligence with AI-powered insights'
    },
    {
      icon: '🤖',
      title: 'AI Assistant',
      description: 'Real-time healthcare decision support'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Patient outcomes and ROI metrics'
    },
    {
      icon: '🔒',
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security and compliance'
    }
  ];

  const roiMetrics = [
    { value: '$847K', label: 'Annual Savings' },
    { value: '40%', label: 'Time Reduction' },
    { value: '23%', label: 'Readmission ↓' },
    { value: '312%', label: 'First Year ROI' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Demo Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 font-semibold mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
            🎭 LIVE DEMO AVAILABLE - Experience Dr. Alex AI Now
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Future of
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Healthcare AI
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Try our complete Dr. Alex AI platform with real clinical scenarios, 
            simulated patient data, and enterprise features. No signup required.
          </p>
        </motion.div>

        {/* ROI Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {roiMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-300 text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Demo Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {demoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to See Dr. Alex AI in Action?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience our complete healthcare AI ecosystem with simulated patient data, 
              real clinical scenarios, and enterprise features. Perfect for healthcare providers 
              and administrators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={handleDemoClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-base sm:text-lg min-h-[56px] touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <span className="text-xl">🚀</span>
                <span className="whitespace-nowrap">Launch Dr. Alex AI Demo</span>
                <span className="text-xs sm:text-sm bg-white/20 px-2 py-1 rounded-full">FREE</span>
              </motion.button>

              <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-2 text-center">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="whitespace-nowrap">No signup required • Simulated data only</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                SOC 2 Certified
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Zero-Knowledge Encryption
              </div>
            </div>
          </div>
        </motion.div>

        {/* Demo Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            🎭 Demo environment uses fictional patient data for demonstration purposes only
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DrAlexDemo;
