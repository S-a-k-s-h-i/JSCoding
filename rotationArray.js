const array =  [2,3,4,5,7];
const rotations = 3;

const rightRotateArray = (array,rotations) =>{
    while(rotations){
        /*
        const last = array[array.length - 1];
        for (let i =array.length-2 ;i>=0;i--){
            array[i+1]=array[i];
        }
        array[0]=last;
        */
        const last = array.pop();
        array.unshift(last);  //Add element to the beginning
        console.log(array);
        rotations--;
    }
    return array;
}
console.log(rightRotateArray(array,rotations));