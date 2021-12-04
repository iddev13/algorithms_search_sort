// Сортировка пузырьком или пузырьковаая сортировка. Самая не эффективная
const arr4 = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,]
let count4 = 0

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j + 1] < array[j]) {
				let tmp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = tmp
			}
			count4 += 1
		}
	}
	return array
}

// console.log(bubbleSort(arr4)) // O(n*n)
// console.log('count = ', count4)
// [-5, -5, -5, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 8, 9, 9, 9, 9, 9, 9, 23, 23, 23, 23, 32, 35]
// document.querySelector('.out').textContent = bubbleSort(arr4)