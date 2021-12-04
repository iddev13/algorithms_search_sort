// Сортировка выбором
const arr3 = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [0,1,1,2,3.......]
let count3 = 0

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let indexMin = i
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[indexMin]) {
				indexMin = j
			}
			count3 += 1
		}
		let tmp = array[i]
		array[i] = array[indexMin]
		array[indexMin] = tmp
	}
	return array
}

// console.log(selectionSort(arr3))
// [-5, -1, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 6, 7, 8, 9, 9, 23, 32, 35]
// console.log('count = ', count3)
// document.querySelector('.out').textContent = selectionSort(arr3).join(' ')