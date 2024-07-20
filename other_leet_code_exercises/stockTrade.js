function getPageData(dayTrade, pageSize, pageNumber) {
    // Your code goes here
    dayTradeArr = JSON.parse(dayTrade);
    const groupedByNames = dayTradeArr.reduce((acc, current) => {
      const { user, countOfStocks } = current;
      acc[user] = (acc[user] || 0) + countOfStocks;
      return acc;
    }, {});
  
    const groupedByNamesArray = Object.entries(groupedByNames).map(([user, countOfStocks]) => ({
      user,
      countOfStocks,
    }));
  
    groupedByNamesArray.sort((a,b) => {
      if(a.countOfStocks < b.countOfStocks) {
          return 1
      } else if (a.countOfStocks > b.countOfStocks) {
          return -1
      }
      return 0
    })
  
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, groupedByNamesArray.length);
    const paginatedArray =  groupedByNamesArray.slice(startIndex, endIndex);
  
  
    const result = []
  
    paginatedArray.forEach((item) => {
      result.push(({'user': item.user, 'totalStocks': item.countOfStocks}))
    })
  
    return JSON.stringify(result)
  }
  
  var dayTrade = `[
      {"user": "Rob", "company": "Google", "countOfStocks": 5},
      {"user": "Bill", "company": "Goldman", "countOfStocks": 18},
      {"user": "Rob", "company": "JPMorgan", "countOfStocks": 10},
      {"user": "Dave", "company": "Boeing", "countOfStocks": 10},
      {"user": "Miley", "company": "Microsoft", "countOfStocks": 12}
    ]`;
  
  console.log(getPageData(dayTrade, 3, 2)); // page size = 3, page number = 2
  