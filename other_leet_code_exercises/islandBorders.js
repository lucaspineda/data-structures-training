/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const colLength = grid.length
    const rowLength = grid[0].length

    let perimeterCount = 0

    for( let i = 0; i < colLength; i++) {
        for (let j = 0; j < rowLength; j++) {
            // const leftBorder 
            if(grid[i][j] === 1) {
                if ((grid[i][j - 1] && grid[i][j - 1] === 0) || !grid[i][j - 1]) { //left border
                    perimeterCount++
                }
                if ((!grid[i+1]) ||( grid[i + 1][j] && grid[i + 1][j] === 0) || !grid[i + 1][j]) { //upper border
                    perimeterCount++
                }
                if ((grid[i][j + 1] && grid[i][j + 1] === 0) || !grid[i][j + 1]) { //right border
                    perimeterCount++
                }
                if ((!grid[i-1]) || (grid[i - 1][j] && grid[i - 1][j] === 0) || !grid[i - 1][j]) { //lower border
                    perimeterCount++
                }

            }
        }
    }

    return perimeterCount
};


console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))