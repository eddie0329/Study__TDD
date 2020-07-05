module.exports = {
  preset: ['@vue/cli-plugin-unit-jest', 'jest-puppeteer'],
  testRegex: './*\\.test\\.js$',
  setupFilesAfterEnv: ['./setupTests.js'],
};
