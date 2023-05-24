import { uid } from './uid';

test('addition', () => {
  const id = uid('TEST', '-', 10);
  expect(id.length).toBe(15);
  expect(id.startsWith('TEST')).toBe(true);
});
