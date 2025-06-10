'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import MainHero from '@/components/sections/MainHero';
import DrAlexAIHero from '@/components/sections/DrAlexAIHero';
import AppShowcase from '@/components/sections/AppShowcase';

export default function HomePage() {
  return (
    <Layout>
      {/* Main Hero Section - Healthcare Paradigm Shift */}
      <MainHero />
      
      {/* Dr. Alex AI Platform Hero */}
      <DrAlexAIHero />
      
      {/* Ecosystem Apps Showcase */}
      <AppShowcase />
      
      {/* Additional sections can be added here */}
    </Layout>
  );
}
