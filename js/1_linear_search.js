const array1 = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
let count1 = 0
const linearSearch = (array, item) => {
	for (let i = 0; i < array.length; i++) {
		count1 += 1
		if (array[i] === item) {
			return i; // Возвращаем индекс элемента
		}
	}
	return null
}

// console.log(linearSearch(array1, 8))
// под индексом 3
// console.log('count = ', count1)

// document.querySelector('.out').textContent = linearSearch(array1, 8)
