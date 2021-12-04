// Быстрая сортировка самая эффективная (сортировка Хоара)
const arr5 = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,]
let count5 = 0

function quickSort(array) {
	if (array.length <= 1) {
		return array
	}
	let pivotIndex = Math.floor(array.length / 2); // Индекс опорного эллемента, в данном случае середина
	let pivot = array[pivotIndex] // Опорный элемент
	let less = [] // Массив с меньшими числами
	let greater = [] // Массив с большими числами
	for (let i = 0; i < array.length; i++) {
		count5++
		if (i === pivotIndex)
			continue
		if (array[i] < pivot) {
			less.push(array[i])
		} else {
			greater.push(array[i])
		}
	}
	return [...quickSort(less), pivot, ...quickSort(greater)]
}

// console.log(quickSort(arr5))
// [-5, -5, -5, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 8, 9, 9, 9, 9, 9, 9, 23, 23, 23, 23, 32, 35]
// console.log('count', count5)
// document.querySelector('.out').textContent = quickSort(arr5).join(' ')