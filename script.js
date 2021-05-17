function miniMaxSum(arr) {
    // Write your code here
    let minNum = arr[0];
    let maxNum = arr[0];
    let sumAll = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minNum){
            minNum = arr[i];
            sumAll += arr[i];
        } else if(arr[i] > maxNum){
            maxNum = arr[i];
            sumAll += arr[i];
        } else {
            sumAll +=arr[i];
        }
    }
    console.log(sumAll-maxNum, sumAll-minNum);
    return (sumAll-maxNum, sumAll-minNum)
}
