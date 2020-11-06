module.exports = {
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup.js',
    '<rootDir>/__tests__/__mocks__/.*',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    '^config$': '<rootDir>/__tests__/__mocks__/configMock.js',
    '^lib(.*)$': '<rootDir>/lib$1',
    '^src(.*)$': '<rootDir>/src$1',
    '^common(.*)$': '<rootDir>/src/common$1',
    '^error-404(.*)$': '<rootDir>/src/error-404$1',
    '^list(.*)$': '<rootDir>/src/list$1',
    '^new(.*)$': '<rootDir>/src/new$1',
    '^mocks(.*)$': '<rootDir>/__tests__/__mocks__$1',
  },
};
