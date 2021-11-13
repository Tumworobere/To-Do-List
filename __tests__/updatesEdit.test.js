const {
    editItem, clearAll, indexUpdate,
  } = require('../src/__mocks__/updatesEdit.js');
  
  const taskList = [
    {
      description: 'Task 1',
      completed: true,
      index: 0,
    },
    {
      description: 'Task 2',
      completed: true,
      index: 1,
    },
  ];
  
  class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
      return this.store;
    }
  
    getItem(key) {
      if (this.store[key] === null) {
        return [];
      }
      return this.store[key];
    }
  
    setItem(key, value) {
      this.store[key] = value;
      return this.store[key];
    }
  }
  
  const localStorage = new LocalStorageMock();
  
  describe('Tests for editing, updating complete, clear all', () => {
    test('Editing', () => {
        editItem('Changed Description', 0, taskList);
      expect(taskList[0].description).toBe('Changed Description');
      localStorage.setItem('taskList', editItem('Changed Description', 0, taskList));
      expect(localStorage.getItem('taskList')[0].description).toBe('Changed Description');
    });
    test('Update Checkbox', () => {
      localStorage.setItem('taskList', indexUpdate(taskList));
      expect(localStorage.getItem('taskList')[1].completed).toBe(true);
    });
    test('Clear All', () => {
      localStorage.setItem('taskList', clearAll(taskList));
      clearAll(taskList);
      expect(localStorage.getItem('taskList').length+1).toBe(1);
    });
  });