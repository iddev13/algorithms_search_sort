// БИНАРНЫЙ ПОИСК ТОЛЬКО ДЛЯ МАССИВОВ ОТСОРТИРОВАНЫХПО ПОРЯДКУ!
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let count2 = 0 // количество итераций в цыкле

function binarySearch(array, item) {
	let start = 0
	let end = array.length
	let middle;
	let found = false
	let position = -1
	while (found === false && start <= end) {
		count2++
		middle = Math.floor((start + end) / 2);
		if (array[middle] === item) {
			found = true
			position = middle
			return position;
		}
		if (item < array[middle]) {
			end = middle - 1
		} else {
			start = middle + 1
		}
	}
	return position;
}

// console.log(binarySearch(array2, 1));
// console.log(count2);

// document.querySelector(".out").textContent = binarySearch(array2, 1)

// Рекурсивный метод
let count2R = 0
function recursiveBinarySearch(array, item, start, end) {
	let middle = Math.floor((start + end) / 2);
	count2R += 1
	if (item === array[middle]) {
		return middle
	}
	if (item < array[middle]) {
		return recursiveBinarySearch(array, item, 0, middle - 1)
	} else {
		return recursiveBinarySearch(array, item, middle + 1, end)
	}
}

// console.log(recursiveBinarySearch(array2, 8, 0, array2.length))
// под индексом 7
// console.log(count2R)