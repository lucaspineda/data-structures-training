function shortestDistance(matrix) {
    const colLength = matrix.length
    const rowLength = matrix[0].length


    const parkedCarPositions = []
    for (let i = 0; i < colLength; i++) {
        for (let j = 0; j < rowLength; j++) {
            if (matrix[i][j] === '1') {
                parkedCarPositions.push([[i],[j]])
            }
            
        }
    }

    const returnMatrix = []

    for (let i = 0; i < colLength; i++) {
        returnMatrix.push([])
        for (let j = 0; j < rowLength; j++) {
            let minDistance = Number.MAX_SAFE_INTEGER
            const currentPosition = i+j
            for (parkedCarPosition of parkedCarPositions) {
                const colDistance = Math.abs(parkedCarPosition[0] - i)
                const rowDistance = Math.abs(parkedCarPosition[1] - j)
                const totalDistance = colDistance + rowDistance
                if (totalDistance < minDistance) {
                    minDistance = totalDistance
                }
            }
            returnMatrix[i].push(minDistance)
            
        }
    }
    console.log(returnMatrix, 'returnMatrix')

}

matrix = [
    ['1', '0', '0', '0'],
    ['0', '0', '0', '0'],
    ['0', '0', '1', '1'],
]

// console.log(shortestDistance[matrix])
shortestDistance(matrix)



// Get the shortest distance to a car between each car spot. Each element in matrix is a spot, if it's 1 means it has a car.
//Example: 

// input: matrix = [
//     ['1', '0', '0', '0'],
//     ['0', '0', '0', '0'],
//     ['0', '0', '1', '1'],
// ]

// output: [ [ 0, 1, 2, 2 ],
// [ 1, 2, 1, 1 ],
// [ 2, 1, 0, 0 ]
// ]