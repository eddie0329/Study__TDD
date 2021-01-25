module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['./setupTests.js'],
  watchPathIgnorePatterns: ['node_modules'],
};
