import clearAll from '../clearAll.js';

jest.mock('../clearAll');

describe('Clear all completed function',() => {
  test('Remove all items that are completed from list',() => {
    expect(clearAll().length).toBe(1);
  });
});
