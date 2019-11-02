module.exports = {
  preset: 'jest-preset-gatsby/typescript',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./setupEnzyme.js'],
};
