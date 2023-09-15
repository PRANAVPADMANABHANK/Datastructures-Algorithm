// function apple(x){
//     console.log(x);

//         if(x<100){
//             apple(x+1)
//         }    

// }
// let data=1
// apple(data)


// function fact(x){
//     if(x==0){
//         return 1
//     }else{
//         return x*fact(x-1)
//     }


// }

// let data=5
// console.log(fact(data))


// function rev(x){

//     console.log(x)

//     if(x<=10&&x!=0){
//         rev(x-1)
        
//     }

// }

// let data=10
// rev(data)



// function factorial(x){

//     if(x==0){
//         return 1
//     }else{

//         return x*factorial(x-1)
//     }

// }


// let data=5

// result=factorial(data)
// console.log(result);





// let n=10
// let sum=0
// for(i=1;i<=n;i++){
//     sum=sum+i
// }
// console.log(sum);



function sum(x){

if(x==0){
    return 0
}else{

    return x+sum(x-1)
}


}


let data=10

let result=sum(data)
console.log(result);




