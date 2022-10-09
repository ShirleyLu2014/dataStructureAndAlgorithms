// 插入排序 
function insertSort(array) {
    const length = array.length;
    for(let i = 1; i < length; i ++) {
        let newEnd = i
        while(newEnd - 1 >= 0 && array[newEnd - 1] > array[newEnd]) {
            [array[newEnd - 1], array[newEnd]] = [array[newEnd], array[newEnd - 1]]
            newEnd--;
        }   
    }
    return array
}
function insertSort2(array) {
    const length = array.length;
    for(let i = 1; i < length; i++) {
        for(let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
    }
    return array
}
const newArray = insertSort2([1, 3, 5, 23, 0, 89, 4, 0, 67, 23, 1, 0])
console.log(newArray)