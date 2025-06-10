'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { complianceBadges, clinicalStats, platformCapabilities, humanExpertise, aiEnhancement } from '@/data/healthcare-credentials';

export default function DrAlexAIHero() {
  return (
    <section id="platform" className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Domain Highlight */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
            <div className="bg-primary-100 text-primary-700 px-6 py-2 rounded-full font-semibold">
              www.dralexai.com
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {complianceBadges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="compliance-badge"
                >
                  <span className="mr-1">{badge.icon}</span>
                  {badge.name}
                </motion.div>
              ))}
            </div>
          </div>

          <h1 className="section-title mb-6 text-gray-900">
            Dr. Alex AI: The Future of Clinical Intelligence
          </h1>
          <p className="subtitle text-gray-600 max-w-3xl mx-auto">
            Pioneering Human-Claude Collaboration in Healthcare
          </p>
        </motion.div>

        {/* Human-AI Collaboration Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🧠</span>
              <h3 className="text-2xl font-bold text-gray-900">Human Expertise</h3>
            </div>
            <ul className="space-y-4">
              {humanExpertise.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-gray-700"
                >
                  <span className="text-primary-500 mr-3">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-primary-100"
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🤖</span>
              <h3 className="text-2xl font-bold text-gray-900">AI Enhancement</h3>
            </div>
            <ul className="space-y-4">
              {aiEnhancement.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-gray-700"
                >
                  <span className="text-purple-500 mr-3">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Platform Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🏥 Platform Capabilities
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformCapabilities.map((capability, index) => (
              <motion.div
                key={capability.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
              >
                <div className="text-3xl mb-3">{capability.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{capability.name}</h4>
                <p className="text-sm text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clinical Excellence Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">📊 Clinical Excellence</h3>
            <p className="text-xl text-white/90">Proven results that matter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-white/80">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="cta-primary text-xl px-12 py-4">
            Explore Dr. Alex AI Platform
          </button>
        </motion.div>
      </div>
    </section>
  );
}
