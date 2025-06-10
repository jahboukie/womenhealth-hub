export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface SectionProps {
  className?: string;
  id?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  disabled?: boolean;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'info' | 'warning' | 'error';
  className?: string;
}

export interface AppStatus {
  active: 'Active';
  building: 'Building';
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}
