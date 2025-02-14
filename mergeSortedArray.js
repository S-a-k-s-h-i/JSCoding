/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i=0,j=0,k=0;
    let sA=[];
    while(i<m && j<n){
        if(nums1[i]<=nums2[j]){
          sA[k]=nums1[i];
          i++;
          k++;
        }else{
          sA[k]=nums2[j];
          j++;
          k++;
        }
    }
    //if in nums1 array the elements left
    while(i<m){
        sA[k]=nums1[i];
        i++;
        k++;
    }
    //if in nums2 array the elements left
    while(j<n){
        sA[k]=nums2[j];
        j++;
        k++;
    }
    //As in the task we have to update the nums1 array only with the sorted array
    for(let i=0;i<sA.length;i++){
        nums1[i]=sA[i];
    }
};

merge([1,2,3],3,[2,5,6],3)