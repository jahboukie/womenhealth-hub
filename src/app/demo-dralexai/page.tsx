'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DrAlexDemoPage() {
  useEffect(() => {
    // Redirect to demo platform after a brief loading screen
    const timer = setTimeout(() => {
      const demoUrl = process.env.NEXT_PUBLIC_DRALEXAI_DEMO_URL || 'https://demo.womenhealth.health';
      window.location.href = demoUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <div className="text-center text-white">
        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-4 border-blue-400 border-t-transparent rounded-full"
            ></motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold mb-4"
          >
            🚀 Launching Dr. Alex AI Demo
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 mb-6"
          >
            Preparing your enterprise healthcare AI experience...
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-4 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              HIPAA Compliant
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Simulated Data
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              No Signup Required
            </div>
          </motion.div>
        </motion.div>

        {/* Demo Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-md mx-auto border border-white/20"
        >
          <h3 className="text-lg font-semibold mb-4">What You'll Experience:</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <span className="text-xl">🏥</span>
              <span className="text-sm">Provider Dashboard with AI Intelligence</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📊</span>
              <span className="text-sm">Real-time Analytics & ROI Metrics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🤖</span>
              <span className="text-sm">AI Assistant with Clinical Insights</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🌐</span>
              <span className="text-sm">Complete Healthcare Ecosystem</span>
            </div>
          </div>
        </motion.div>

        {/* Fallback Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8"
        >
          <p className="text-sm text-gray-400 mb-4">
            If you're not redirected automatically:
          </p>
          <a
            href={process.env.NEXT_PUBLIC_DRALEXAI_DEMO_URL || 'https://demo.womenhealth.health'}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <span className="text-lg">🚀</span>
            Launch Demo Manually
          </a>
        </motion.div>

        {/* Demo Warning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8 text-xs text-yellow-300"
        >
          🎭 Demo environment uses fictional patient data for demonstration purposes only
        </motion.div>
      </div>
    </div>
  );
}
