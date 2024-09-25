function mergeOverlappingIntervals(intervals) {
    //sort the intervals
    intervals.sort((a,b)=> {      //O(nlogn)
        if(a[0]==b[0]){
            return a[1]-b[1]
        }
        return a[0]-b[0]
    });
    // [
    //     [ 1, 3 ],   [ 2, 4 ],
    //     [ 2, 6 ],   [ 8, 9 ],
    //     [ 8, 10 ],  [ 9, 11 ],
    //     [ 15, 18 ], [ 16, 17 ]
    //   ]
    let noOverLap = []
    for(let i=0;i<intervals.length;i++){    //O(2n) using break and contine 
        //taking start end to check its overlap
       let start=intervals[i][0];
       let end=intervals[i][1];
       //if lets say the interval checking already reside inside the overlap added interval so move to next
       if(noOverLap.length && end <= noOverLap[noOverLap.length-1][1])
         continue;
       //if not reside will check the next intervals overlap or not
       for(let j=i+1;j<intervals.length;j++){
        //overlap, max added as (15,18) (16,17) we can't take 17 we have to take max (15,18)
        if(intervals[j][0]<=end){
            end= Math.max(end,intervals[j][1])
        }else{
            //as already sorted will not find any after that
            break;
        }
       }
       noOverLap.push([start,end]);
    }
    return noOverLap;
}
//Time Complexity- O(n^2)+O(2n)
//Space Complexity- O(n)

//Method 2
function mergeOverlappingIntervals(intervals) {
    //sort the intervals
    intervals.sort((a,b)=> {      //O(nlogn)
        if(a[0]==b[0]){
            return a[1]-b[1]
        }
        return a[0]-b[0]
    });
    // [
    //     [ 1, 3 ],   [ 2, 4 ],
    //     [ 2, 6 ],   [ 8, 9 ],
    //     [ 8, 10 ],  [ 9, 11 ],
    //     [ 15, 18 ], [ 16, 17 ]
    //   ]
    let noOverLap = []
    for(let i=0;i<intervals.length;i++){    //O(n)
        //checking the interval is larger then the overlap interval added 
        if(noOverLap.length==0 || noOverLap[noOverLap.length-1][1]<intervals[i][0]){
                    noOverLap.push(intervals[i])
        }else{
            //if not then its overlapping
           noOverLap[noOverLap.length-1][1]= Math.max(noOverLap[noOverLap.length-1][1],intervals[i][1])
        }
    }
    return noOverLap;
}
//Time Complexity- O(n^2)+O(n)
//Space Complexity- O(n)

console.log(mergeOverlappingIntervals([[1,3],[2,6],[8,9],[9,11],[8,10],[2,4],[15,18],[16,17]]))