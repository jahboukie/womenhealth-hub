'use client';

import { useEffect } from 'react';

export default function InvestorPitchDeck() {
  useEffect(() => {
    // Automatically trigger download when page loads
    const link = document.createElement('a');
    link.href = '/Healthcare-AI-Revolution-Investor-Pitch-Deck.pdf';
    link.download = 'Healthcare-AI-Revolution-Investor-Pitch-Deck.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Healthcare AI Revolution
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Investor Pitch Deck
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Download Started Automatically
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">📊 What's Inside:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Revolutionary Human-AI Healthcare Collaboration</li>
              <li>• $847K Annual Savings Per Healthcare Provider</li>
              <li>• 40% Reduction in Administrative Time</li>
              <li>• 95% Provider Satisfaction Rate</li>
              <li>• Complete Healthcare Ecosystem Platform</li>
              <li>• HIPAA-Compliant Enterprise Solution</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">🚀 Platform Highlights:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Dr. Alex AI - Clinical Decision Support</li>
              <li>• 8 Specialized Healthcare Applications</li>
              <li>• Live Demo Platform Available</li>
              <li>• Enterprise-Grade Security & Compliance</li>
              <li>• Proven ROI: 312% First Year Return</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <a 
            href="/Healthcare-AI-Revolution-Investor-Pitch-Deck.pdf"
            download="Healthcare-AI-Revolution-Investor-Pitch-Deck.pdf"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Pitch Deck Again
          </a>

          <div className="text-center">
            <a 
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to WomenHealth.Health Platform
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            WomenHealth.Health - Revolutionizing Healthcare Through Human-AI Collaboration
          </p>
          <p className="text-xs text-gray-400 mt-1">
            For investor inquiries: team.mobileweb@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
