import { main } from '../src/main.js';

describe('main', () => {
  it('debería ser una función', () => {
    expect(typeof main).toBe('function');
  });
});
