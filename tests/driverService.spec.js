const driveService = require('../src/driveService');
const TestCase = require('../src/TestCase');

test('test example matrix', () => {
  const testCase = new TestCase();
  testCase.setMatrix([
    [-1, 1, 1, 2],
    [1, 1, 1, 1],
    [2, -1, -1, 1],
    [1, 1, 1, 1]
  ]);
  testCase.setStart([0, 2]);
  testCase.setEnd([3, 2]);
  expect(driveService.findBestPath(testCase)).toBe(7);
});

test('test custom matrix', () => {
  const testCase = new TestCase();
  testCase.setMatrix([
    [1, 1, 10, 2, 2],
    [30, 3, -1, 1, 1],
    [1, 1, 1, -1, 50],
    [1, 5, 2, 3, -1],
    [10, -1, 1, 1, 1]
  ]);
  testCase.setStart([0, 1]);
  testCase.setEnd([4, 4]);
  expect(driveService.findBestPath(testCase)).toBe(17);
});

test('test custom matrix that broke a previous Dijkstra attempt', () => {
  const testCase = new TestCase();
  testCase.setMatrix([
    [-1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 3, 1],
    [2, -1, -1, 1, 7, 1],
    [1, 1, 1, 15, 1, 1]
  ]);
  testCase.setStart([0, 2]);
  testCase.setEnd([3, 5]);
  expect(driveService.findBestPath(testCase)).toBe(22);
});

test('test Impossible case matrix', () => {
  const testCase = new TestCase();
  testCase.setMatrix([[1, 1, 2, -1, 1], [1, 1, 1, -1, 1]]);
  testCase.setStart([0, 4]);
  testCase.setEnd([1, 0]);
  expect(driveService.findBestPath(testCase)).toBe('Mission Impossible.');
});
