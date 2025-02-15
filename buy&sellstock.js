/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, curr_min=prices[0];
    for(let i=0;i<prices.length;i++){
        //will try to sell stock when we get higher value when we have purchased
        if(prices[i]>curr_min){
            //set which has the max prev and the ongoing
            profit=Math.max(profit,prices[i]-curr_min)
        }
        //if we get lower value that we have purchased then we try to set the buy to that that to increase profit
        if(prices[i]<curr_min){
            curr_min=prices[i]
        }
    }
    return profit;
};

maxProfit([7,1,5,,3,6,4])