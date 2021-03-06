/**
 * Напишите функцию getUnique(input), возвращающую новый массив,
 * состоящий из уникальных значений массива input. Результирующий
 * массив должен быть отсортирован по возрастанию.
 *
 * Не использовать Set().
 *
 * Пример:
 * getUnique([1, 1, 2, 6, 3, 6, 2]); // [1, 2, 3, 6]
 *
 * @param  {number[]} input исходный массив
 * @return {string[]} массив уникальных значений, отсортированный по возрастанию
 */
export function getUnique(input) {
  let number;
  const customSet = {};

  for (let i = 0; i !== input.length; ++i) {
    number = input[i];
    customSet[number] = 1;
  }
  return Object.keys(customSet).map(Number);
}
