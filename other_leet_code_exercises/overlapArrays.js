

function mergeCollections(collections) {
    const unsortedResult = []
    const mapOccurence = new Map()

    for (let i = 0; i < collections.length; i++) {
        if (mapOccurence.has(i)) {
            continue
        }
        currentItem = collections[i]
        let itemMerged = false
        for (let j = i + 1; j < collections.length; j++) {
            const firstItemOverlaps = (collections[i][0] >= collections[j][0] && collections[i][0] <= collections[j][1])
            const secondItemOverlaps = (collections[i][1] >= collections[j][0] && collections[i][1] <= collections[j][1])
            if(firstItemOverlaps || secondItemOverlaps) {

                if(collections[i][0] < collections[j][0]) {
                    collections[j][0] = collections[i][0]
                }
                if(collections[i][1] > collections[j][1]) {
                    collections[j][0] = collections[i][0]
                }
                unsortedResult.push(collections[j])
                itemMerged = true
                mapOccurence.set(j, true)
                break
            }
        }
        if (!itemMerged) {
            unsortedResult.push(collections[i])
        }

    }
    const sorted = [...unsortedResult]
    sorted.sort((a, b) => a[0] - b[0])
    return sorted
}



// console.log(mergeCollections([[5,7],[1,4],[2,4],[6,11],[12,14]]))
// console.log(mergeCollections([[5,7],[1,4],[2,4],[2,2],[6,11],[12,14]]))





function mergeCollections2(collections) {
    const unsortedResult = []
    const mapOccurence = new Map()

    for (let i = 0; i < collections.length; i++) {
        if (mapOccurence.has(i)) {
            continue
        }
        currentItem = collections[i]
        let itemMerged = false
        for (let j = i + 1; j < collections.length; j++) {
            if (mapOccurence.has(j)) {
                continue
            }
            const itemOverlaps = (collections[i][1] >= collections[j][0] && collections[i][1] <= collections[j][1])
            const reversedItemOverlaps = (collections[j][1] >= collections[i][0] && collections[j][1] <= collections[i][1])
            if(reversedItemOverlaps || itemOverlaps) {


                if(collections[j][0] < collections[i][0]) {
                    collections[i][0] = collections[j][0]
                }
                if(collections[j][1] > collections[i][1]) {
                    collections[i][1] = collections[j][1]
                }
                itemMerged = true
                mapOccurence.set(j, true)
                j = i
                
            }
        }
        unsortedResult.push(collections[i])

    }
    const sorted = [...unsortedResult]
    sorted.sort((a, b) => a[0] - b[0])
    return sorted
}



console.log(mergeCollections2([[5,7],[1,4],[2,4],[6,11],[12,14]]))
console.log(mergeCollections2([[6,7],[1,4],[2,2],[2,4],[3,3],[1,5],[5,11],[12,14],[0,0]]))
console.log(mergeCollections2([[6,7],[1,4],[2,4],[1,5],[5,11]]))