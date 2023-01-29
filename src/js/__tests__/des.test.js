import getArray from '../des';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

const testResult = [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'];

test('get array', () => {
  expect(getArray(character, 8)).toEqual(testResult);
});

test('get default description', () => {
  const result = getArray(character, 9);
  expect(result[3]).toBe('Описание недоступно');
});

test('get true', () => {
  const result = getArray(character, 6);
  expect(result).toBe(true);
});
