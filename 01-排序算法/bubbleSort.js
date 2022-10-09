// 冒泡排序 相邻位置比较，交换位置，依次找到最大值
function bubbleSort(array) {
    let length = array.length;
    for(let i = length - 1; i >= 0; i --) {
        for(let j = 1; j <= i; j ++) {
            if(array[j - 1] > array[j]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]]
            }
        }
    }
    return array;
}
const newArray = bubbleSort([1, 3, 5, 23, 0, 89, 4, 0, 67, 23, 1, 0])
console.log(newArray)