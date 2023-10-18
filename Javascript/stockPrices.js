/**
 * A Function that returns the max profit possible given an array of stock prices in order of how they happened throughout
 * the day.
 */

const best = (arr) => {
    let maxProfit = 0;
    for(buyPrice=0; buyPrice<arr.length-1; buyPrice++) {
        for(sellPrice=buyPrice+1; sellPrice<arr.length; sellPrice++) {
            let profit = arr[sellPrice] - arr[buyPrice];
            if(profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    console.log(maxProfit);

}
//best([1, 2, 3, 4, 5]);
best([15, 10, 20, 22, 1, 9]);