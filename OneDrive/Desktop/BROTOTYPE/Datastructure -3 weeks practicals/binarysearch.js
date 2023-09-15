// const data = [5, 9, 13, 17,56,87,90];
// let find = 56;

// let start = 0;
// let end = data.length - 1;

// let position;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);
//   if (data[mid] === find) {
//     position = mid;
//     break;
//   } else if (data[mid] < find) {
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }
// console.log(position);











const arr=[10,20,30,40,50,60,70]


let find=70
let start=0
let end=arr.length-1

let position

while(start<=end){

    let mid=Math.floor((start+end)/2)

    if(arr[mid]===find){
        position=mid
    }else if(arr[mid]<find){
        start=mid+1
    }else{
        end=mid-1
    }



}
console.log(position);









