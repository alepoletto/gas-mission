const fileHandler = require('../src/fileHandler');

test('can laod the file', async () => {
  const testCase = await fileHandler.processFile('input-large.in');
  expect(fileHandler.tests.length).toBe(30);
});
