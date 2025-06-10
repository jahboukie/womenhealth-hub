'use client';

import React from 'react';
import { BadgeProps } from '@/types';

export default function Badge({
  children,
  variant = 'info',
  className = '',
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border';
  
  const variantClasses = {
    success: 'bg-success-100 text-success-700 border-success-200',
    info: 'bg-primary-100 text-primary-700 border-primary-200',
    warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    error: 'bg-error-100 text-error-700 border-error-200',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
}
