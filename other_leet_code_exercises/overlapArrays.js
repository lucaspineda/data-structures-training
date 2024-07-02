

function mergeCollections(collections) {
    const unsortedResult = []
    const mapOccurence = new Map()

    for (let i = 0; i < collections.length; i++) {
        if (mapOccurence.has(i)) {
            continue
        }
        currentItem = collections[i]
        console.log(currentItem, 'currentItem')
        let itemMerged = false
        for (let j = i + 1; j < collections.length; j++) {
            const firstItemOverlaps = (collections[i][0] >= collections[j][0] && collections[i][0] <= collections[j][1])
            const secondItemOverlaps = (collections[i][1] >= collections[j][0] && collections[i][1] <= collections[j][1])
            if(firstItemOverlaps || secondItemOverlaps) {
                console.log(currentItem, 'here ')

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
    return unsortedResult
}



console.log(mergeCollections([[1,4],[5,7],[2,4],[6,11],[12,14]]))