module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/config/jest-setup.js'],
  testEnvironment: 'jsdom',
  transform: { '.+\\.(js|jsx)$': 'babel-jest' },
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy'
  }
}
