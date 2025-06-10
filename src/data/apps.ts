export interface EcosystemApp {
  id: string;
  name: string;
  icon: string;
  status: 'active' | 'building';
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  integrationDescription: string;
  color: string;
  gradient: string;
}

export const ecosystemApps: EcosystemApp[] = [
  {
    id: 'menowellness',
    name: 'MenoWellness',
    icon: '🌸',
    status: 'active',
    title: 'MenoWellness',
    description: 'Comprehensive menopause management with AI-powered insights, symptom tracking, and personalized treatment plans.',
    features: [
      'Symptom Tracking & Pattern Recognition',
      'HRT Optimization & Monitoring',
      'Partner Integration & Communication',
      'AI Coaching & Personalized Insights',
      'Provider Integration & Data Sharing',
      'HIPAA-Compliant Health Records'
    ],
    cta: '🌸 Explore MenoWellness',
    ctaLink: '/apps/menowellness',
    integrationDescription: 'Seamlessly connects with Dr. Alex AI for comprehensive menopause care coordination',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'supportpartner',
    name: 'SupportPartner',
    icon: '🤝',
    status: 'active',
    title: 'SupportPartner',
    description: 'Partner education and support for menopause, addiction recovery, and relationship wellness.',
    features: [
      'Partner Education & Resources',
      'Communication Tools & Scripts',
      'Progress Tracking & Insights',
      'Crisis Support & Intervention',
      'Provider Coordination',
      'Real-time Health Updates'
    ],
    cta: '🤝 Explore SupportPartner',
    ctaLink: '/apps/supportpartner',
    integrationDescription: 'Integrates with all ecosystem apps to provide comprehensive partner support',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'soberpal',
    name: 'SoberPal',
    icon: '🏆',
    status: 'building',
    title: 'SoberPal',
    description: 'AI-powered addiction recovery support with crisis detection, progress tracking, and peer community.',
    features: [
      'Recovery Tracking & Milestones',
      'Crisis Detection & Intervention',
      'Peer Support Community',
      'Provider Integration & Monitoring',
      'Relapse Prevention Tools',
      '24/7 AI Support Companion'
    ],
    cta: '🏆 SoberPal Demo (Soon)',
    ctaLink: '/apps/soberpal',
    integrationDescription: 'Works with Dr. Alex AI for comprehensive addiction recovery support',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'myconfidant',
    name: 'MyConfidant',
    icon: '💬',
    status: 'building',
    title: 'MyConfidant',
    description: 'Relationship counseling and communication tools for couples dealing with health challenges.',
    features: [
      'Relationship Assessment Tools',
      'Communication Scripts & Guidance',
      'Progress Tracking & Analytics',
      'Professional Counselor Integration',
      'Crisis Intervention Support',
      'Couples Therapy Resources'
    ],
    cta: '💬 MyConfidant Demo (Soon)',
    ctaLink: '/apps/myconfidant',
    integrationDescription: 'Connects with all health apps to provide relationship support during health transitions',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    id: 'innerarchitect',
    name: 'Inner Architect',
    icon: '🧘‍♀️',
    status: 'building',
    title: 'Inner Architect',
    description: 'Mental wellness and self-development platform for building emotional resilience during health transitions.',
    features: [
      'Mindfulness & Meditation Tools',
      'Emotional Resilience Building',
      'Stress Management Techniques',
      'Personal Growth Tracking',
      'Mental Health Provider Integration',
      'AI-Guided Wellness Coaching'
    ],
    cta: '🧘‍♀️ Inner Architect Demo (Soon)',
    ctaLink: '/apps/innerarchitect',
    integrationDescription: 'Integrates with Dr. Alex AI for holistic mental wellness support',
    color: 'teal',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'fertilitytracker',
    name: 'FertilityTracker',
    icon: '🌱',
    status: 'building',
    title: 'FertilityTracker',
    description: 'Comprehensive fertility tracking with AI-powered ovulation prediction, cycle analysis, and conception optimization.',
    features: [
      'Ovulation Prediction & Tracking',
      'Cycle Analysis & Insights',
      'Partner Coordination Tools',
      'Conception Optimization',
      'Provider Integration',
      'Fertility Health Analytics'
    ],
    cta: '🌱 FertilityTracker Demo (Soon)',
    ctaLink: '/apps/fertilitytracker',
    integrationDescription: 'Works with Dr. Alex AI for comprehensive fertility care management',
    color: 'lime',
    gradient: 'from-lime-500 to-green-500'
  },
  {
    id: 'pregnancycompanion',
    name: 'PregnancyCompanion',
    icon: '🤰',
    status: 'building',
    title: 'PregnancyCompanion',
    description: 'Comprehensive pregnancy tracking with AI-powered health insights, symptom monitoring, and partner support tools.',
    features: [
      'Week-by-week pregnancy tracking',
      'Symptom monitoring & alerts',
      'Partner education & involvement',
      'Provider communication tools',
      'Birth plan preparation',
      'High-risk pregnancy support'
    ],
    cta: '🤰 PregnancyCompanion Demo (Soon)',
    ctaLink: '/apps/pregnancycompanion',
    integrationDescription: 'Seamlessly integrates with Dr. Alex AI for comprehensive prenatal care',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'postpartumsupport',
    name: 'PostpartumSupport',
    icon: '👶',
    status: 'building',
    title: 'PostpartumSupport',
    description: 'Postpartum mental health and recovery support with depression screening, partner guidance, and professional resources.',
    features: [
      'Postpartum depression screening',
      'Recovery milestone tracking',
      'Partner support education',
      'Mental health resources',
      'Professional intervention tools',
      'New parent community support'
    ],
    cta: '👶 PostpartumSupport Demo (Soon)',
    ctaLink: '/apps/postpartumsupport',
    integrationDescription: 'Connects with Dr. Alex AI for comprehensive postpartum care coordination',
    color: 'rose',
    gradient: 'from-rose-500 to-pink-500'
  }
];

export const getAppById = (id: string): EcosystemApp | undefined => {
  return ecosystemApps.find(app => app.id === id);
};

export const getActiveApps = (): EcosystemApp[] => {
  return ecosystemApps.filter(app => app.status === 'active');
};

export const getBuildingApps = (): EcosystemApp[] => {
  return ecosystemApps.filter(app => app.status === 'building');
};
