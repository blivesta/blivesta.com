module.exports = {
  preset: 'jest-preset-gatsby/typescript',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.js'],
};
