import { components } from '../src/view/index.js';

describe('main', () => {
  it('debería ser una función', () => {
    expect(typeof components.login).toBe('function');
  });
});
