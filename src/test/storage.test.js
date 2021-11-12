import StorageMock from '../__mocks__/storage.js';

describe('Test Storage',() => {
  const storage = new StorageMock();
  storage.setItem('list', []);
  const data = [];

  test('Add one item into storage',() => {
    const task1 = { completed: false, description: 'Complete All milestones by 4pm', index: 1 };
    data.push(task1);
    storage.setItem('list', data);
    expect(storage.getItem('list').length).toBe(1);
  });

  test('Add second item into storage',() => {
    const task2 = { completed: false, description: 'Go for Jogging', index: 2 };
    data.push(task2);
    storage.setItem('list', data);
    expect(storage.getItem('list').length).toBe(2);
  });
});