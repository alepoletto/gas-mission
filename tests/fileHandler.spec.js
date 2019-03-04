const fileHandler = require('../src/fileHandler');

test('can load the file', async () => {
  const testCases = await fileHandler.processFile('input-large.in');
  expect(testCases.length).toBe(30);
});
