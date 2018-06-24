/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr, compare) {
    const cloneCompare = [...compare];

    if (arr.length !== compare.length) return false;

    for (let i = 0, len = arr.length; i < len; i++) {
        if (cloneCompare.includes(arr[i])) {
            let index = cloneCompare.indexOf(arr[i]);
            cloneCompare.splice(index, 1);
        }
    }
    return cloneCompare.length ? false : true;
}

export default haveSameItems;
