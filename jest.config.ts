import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Can change to 'jsdom' for browser testing
  testMatch: ['**/tests/**/*.ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
  testTimeout: 30000,  // Timeout for each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'] // Add this if you want to add custom setup
};

export default config;
