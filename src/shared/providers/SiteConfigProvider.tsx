'use client';

import { createContext, useContext, ReactNode } from 'react';
import { SITE_CONFIG } from '@/shared/config/site';

type SiteConfig = typeof SITE_CONFIG;

const SiteConfigContext = createContext<SiteConfig | null>(null);

interface SiteConfigProviderProps {
  children: ReactNode;
}

export function SiteConfigProvider({ children }: SiteConfigProviderProps) {
  return (
    <SiteConfigContext.Provider value={SITE_CONFIG}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error('useSiteConfig must be used within SiteConfigProvider');
  }
  return context;
}
