import config from '../config.json';

export interface ThemeConfig {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  success: string;
  warning: string;
  info: string;
  background: string;
  surface: string;
  text: string;
  gradient: string;
}

export interface AppConfig {
  appName: string;
  theme: string;
  currency: string;
  headOffice: string;
  corporateOffice: string;
  supportEmail: string;
  supportPhone: string;
  themes: Record<string, ThemeConfig>;
}

export const appConfig: AppConfig = config;
