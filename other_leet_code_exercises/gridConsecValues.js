function changeConsecValues(matrix) {
    // loop trhoug cols and then rows
    // if it's 3 times equals store i and j index in a matrix

    // loop line array
        // aux hash with key / occurences 
    // loop hash and get the the values higher or equal than 3
    // loop line again and add to auxMatrix indexes of numbers that are in moreThan3 array

    // loop them aux matrix and change matrix to 0s accordingly to indexes

    const colsLength = matrix.length
    const rowsLength = matrix[0].length
    const indexesMatrix = []

    for(i = 0; i < colsLength; i++) {
        const auxHashMap = new Map()
        for(let j = 0; j < rowsLength; j++) {
            if(!auxHashMap.has(matrix[i][j])) {
                auxHashMap.set(matrix[i][j], 1)
            } else {
                auxHashMap.set(matrix[i][j], auxHashMap.get(matrix[i][j]) + 1)
            }
        }
        const higherThan3 = new Set()
        for(const [key, occurences] of auxHashMap.entries()) {
            if(occurences >= 3) {
                higherThan3.add(key)
            }
        }

        for(let j = 0; j < rowsLength; j++) {
            if(higherThan3.has(matrix[i][j])) {
                indexesMatrix.push([i,j])
            }

        }
    }

    for (let j = 0; j < rowsLength; j++) {
        const auxHashMap = new Map()

        for (let i = 0; i < colsLength; i++) {
            if(!auxHashMap.has(matrix[i][j])) {
                auxHashMap.set(matrix[i][j], 1)
            } else {
                auxHashMap.set(matrix[i][j], auxHashMap.get(matrix[i][j]) + 1)
            }
        }

        const higherThan3 = new Set()
        for(const [key, occurences] of auxHashMap.entries()) {
            if(occurences >= 3) {
                higherThan3.add(key)
            }
        }

        for(let i = 0; i < colsLength; i++) {
            if(higherThan3.has(matrix[i][j])) {
                indexesMatrix.push([i,j])
            }

        }
        
    }
    for (let i = 0; i < indexesMatrix.length; i++) {
        matrix[indexesMatrix[i][0]][indexesMatrix[i][1]] = 0
    }
    console.log(matrix, 'matrix')
}


console.log(changeConsecValues([
    [4,2,3,3,3],
    [4,2,1,1,5],
    [4,2,4,8,7],
    [5,2,4,8,7],
    [4,2,4,8,7],
    [4,2,4,8,7],
    [4,2,4,8,7],
]))