import config from '../config.json';

export interface AppConfig {
  appName: string;
  theme: string;
  currency: string;
}

export const appConfig: AppConfig = config;
