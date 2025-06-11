'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Revolutionizing
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Women's Healthcare
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're building the future of healthcare through AI-powered solutions that empower women, 
                support healthcare providers, and transform the entire healthcare ecosystem.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to personalized, AI-powered healthcare solutions that understand 
                  and address the unique needs of women throughout their entire health journey.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We believe every woman deserves healthcare that's not just accessible, but truly 
                  personalized, empowering, and transformative. Our platform bridges the gap between 
                  cutting-edge AI technology and compassionate healthcare delivery.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">10M+</div>
                    <div className="text-sm text-gray-600">Women Empowered</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600">Healthcare Providers</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏥</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Healthcare Transformation</h3>
                    <p className="text-gray-600">AI-powered solutions for better outcomes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Born from the recognition that women's healthcare has been underserved and 
                under-researched for far too long.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Research-Driven</h3>
                <p className="text-gray-600">
                  Our solutions are built on extensive research into women's health patterns, 
                  hormonal cycles, and unique physiological needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered</h3>
                <p className="text-gray-600">
                  Advanced artificial intelligence provides personalized insights, 
                  predictive analytics, and intelligent health recommendations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compassionate Care</h3>
                <p className="text-gray-600">
                  Technology enhanced with human empathy, understanding the emotional 
                  and psychological aspects of women's health journeys.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do in transforming healthcare.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🔒',
                  title: 'Privacy First',
                  description: 'HIPAA-compliant, zero-knowledge encryption, and complete data sovereignty.'
                },
                {
                  icon: '🌍',
                  title: 'Accessibility',
                  description: 'Healthcare solutions available to women everywhere, regardless of location or background.'
                },
                {
                  icon: '🔬',
                  title: 'Evidence-Based',
                  description: 'Every feature backed by clinical research and real-world health outcomes.'
                },
                {
                  icon: '🤝',
                  title: 'Collaboration',
                  description: 'Working hand-in-hand with healthcare providers to enhance, not replace, human care.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Transforming healthcare outcomes through innovative AI solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '$847K', label: 'Average Annual Savings per Healthcare System' },
                { value: '312%', label: 'First Year ROI for Healthcare Providers' },
                { value: '40%', label: 'Reduction in Administrative Time' },
                { value: '23%', label: 'Decrease in Hospital Readmissions' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                >
                  <div className="text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join us in revolutionizing women's healthcare through AI-powered solutions 
                that make a real difference in millions of lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/demo-dralexai"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Experience Our Demo
                </motion.a>
                <motion.a
                  href="mailto:team@womenhealth.health"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-center"
                >
                  Contact Our Team
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
