// 多次查找一个数组下标区间的累加和
function findArrayRangeSum(lIndex, rIndex) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(i === 0) {
            newArray[i] = array[i]
        } else {
            newArray[i] = array[i] + newArray[i - 1]
        }
       
    }
    console.log(newArray )
    if(lIndex === 0) {
        return newArray[rIndex]
    } else {
        return newArray[rIndex] - newArray[lIndex - 1]
    }
   
}
console.log(findArrayRangeSum(1, 7))