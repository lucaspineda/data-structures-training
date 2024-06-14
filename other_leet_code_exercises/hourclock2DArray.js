function calculateHourglss(arr) {

    let max = -9999
    
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
            let sum = 0
            sum += arr[i][j]
            sum += arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1]
            sum += arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]
            if(sum > max) max = sum
        }
    }
    return max
}

function calculateHourglss2(arr) {

    let max = -9999
    
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            console.log('foi')
            let sum = 0
            sum += arr[i][j] + arr[i][j+1] + arr[i][j+2]
            sum += arr[i+1][j+1]
            sum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            if(sum > max) max = sum
        }
    }
    console.log(max)
    return max
}

calculateHourglss2([
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]);
