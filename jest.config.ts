export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
    // process `*.tsx` files with `ts-jest`
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '^<rootDir>/src/.*\\.test\\.(js|jsx|ts|tsx)$',
    '^<rootDir>/src/.*\\.spec\\.(js|jsx|ts|tsx)$',
    '^<rootDir>/src/index\\.(js|jsx|ts|tsx)$',
    '^<rootDir>/src/setupTests\\.(js|ts)$',
    '^<rootDir>/src/.*\\.d\\.ts$',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
  },
};
