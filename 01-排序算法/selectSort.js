// 选择排序，从0位置开始，依次从剩余的数中找到最小值
function selectSort(array) {
    const length = array.length;
    for(let i = 0; i < length - 1; i++) {
        for(let j = i + 1; j < length; j++) {
            if(array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    return array;
}
const newArray = selectSort([1, 3, 5, 23, 0, 89, 4, 0, 67, 23, 1, 0])
console.log(newArray)