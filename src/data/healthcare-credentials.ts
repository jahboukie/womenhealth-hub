export interface ComplianceBadge {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface ClinicalStat {
  value: string;
  label: string;
  description: string;
}

export interface PlatformCapability {
  name: string;
  description: string;
  icon: string;
}

export const complianceBadges: ComplianceBadge[] = [
  {
    name: 'HIPAA Compliant',
    description: 'Full compliance with Health Insurance Portability and Accountability Act',
    icon: '🔒',
    color: 'green'
  },
  {
    name: 'SOC 2 Type II',
    description: 'System and Organization Controls 2 Type II certified',
    icon: '🛡️',
    color: 'blue'
  },
  {
    name: 'FHIR R4',
    description: 'Fast Healthcare Interoperability Resources Release 4 compatible',
    icon: '🔗',
    color: 'purple'
  },
  {
    name: 'HL7 Compatible',
    description: 'Health Level Seven International standards compliant',
    icon: '📋',
    color: 'indigo'
  }
];

export const clinicalStats: ClinicalStat[] = [
  {
    value: '95%',
    label: 'Provider Satisfaction',
    description: 'Healthcare providers report high satisfaction with our platform'
  },
  {
    value: '40%',
    label: 'Improved Patient Outcomes',
    description: 'Measurable improvement in patient health outcomes'
  },
  {
    value: '60%',
    label: 'Reduced Administrative Time',
    description: 'Significant reduction in administrative burden for providers'
  }
];

export const platformCapabilities: PlatformCapability[] = [
  {
    name: 'HIPAA-Compliant EHR',
    description: 'Secure electronic health records system',
    icon: '📊'
  },
  {
    name: 'AI Clinical Decision Support',
    description: 'AI-powered clinical decision making assistance',
    icon: '🤖'
  },
  {
    name: 'Telemedicine Platform',
    description: 'Integrated telehealth consultation system',
    icon: '💻'
  },
  {
    name: 'Population Health Analytics',
    description: 'Advanced population health insights and analytics',
    icon: '📈'
  },
  {
    name: 'FHIR R4 Interoperability',
    description: 'Seamless integration with existing healthcare systems',
    icon: '🔄'
  },
  {
    name: 'Menopause Specialty Care',
    description: 'Specialized menopause care and management',
    icon: '🌸'
  },
  {
    name: 'Real-time Monitoring',
    description: '24/7 patient monitoring and alert system',
    icon: '⏰'
  },
  {
    name: 'Integrated Ecosystem Apps',
    description: 'Comprehensive suite of healthcare applications',
    icon: '🔗'
  }
];

export const humanExpertise = [
  'Clinical experience & empathy',
  'Complex decision making',
  'Patient relationship building',
  'Ethical healthcare judgment'
];

export const aiEnhancement = [
  'Pattern recognition & analysis',
  '24/7 availability & consistency',
  'Continuous learning & improvement',
  'Data-driven insights'
];
