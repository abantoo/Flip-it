import config from '../config.json';

export interface AppConfig {
  appName: string;
  theme: string;
  currency: string;
  headOffice: string;
  corporateOffice: string;
  supportEmail: string;
}

export const appConfig: AppConfig = config;
