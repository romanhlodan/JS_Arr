// let a = null;
// let b = a || a+2;
// console.log(b);

// let c =0;
// while (c <5){
//     console.log(arr[4]);
//     c++;
// }
//
// let e = 0;
// do {
//     console.log('Hello')
// }while (false);


// let arr = [2,17,13,6,22,31,45,66,100,-18];
// console.log(arr);
// ----1
// let i =0;
// while (i< arr.length){
//     console.log(arr[i]);
//     i++;
// }

// -----2
// for (let i =0; i<arr.length;i++){
//     console.log(arr[i])
// }

// ------3
// let i = 0;
// while (i<arr.length){
//     if (i%2==1){
//         console.log(arr[i]);
//     }
//     i++;
// }

// -------4
// for (let i=0;i<arr.length;i++){
//     if (i%2==1){
//         console.log(arr[i]);
//     }
// }

// --------5
// let i=0;
// while (i<arr.length){
//     if (arr[i]%2==0){
//         console.log(arr[i])
//     }
//     i++;
// }

// ---------6
// for (let i=0;i<arr.length;i++){
//     if (arr[i]%2==0){
//             }
//     console.log(arr[i])
// }

// ----------7
// let r='Roman';
// for (let i=0;i<arr.length;i++){
//     if (arr[i]%3==0){
//         arr[i]=r;
//     }
//     console.log(arr[i])
// }

// -----------8
// for (let i = arr.length - 1; i >= 0; i--) {
//     let arrElement = arr[i];
//     console.log(arr[i])
// }


// let arr=[];


//--------------9
// for (let i = 0; i < 50; i++) {
//     arr[i] = Math.round(Math.random() * 1000);
//     if (arr[i]%2==0) {
//         console.log(arr[i]);
//     }
// }

//----------------10
// for (let i = 0; i < 50; i++) {
//     arr[i] = Math.round(Math.random()*1000);
//     if (arr[i]%2==1){
//         console.log(arr[i]);
//     }
// }


//------------------------------xxx
// let arr = [1,2,[1,'2!',3],4,5,6];
// for (let i=0;i<arr.length;i++){
//     for (let j=0;j<arr[i].length;j++){
//         console.log(arr[i][1]);
//     }
// }

// let arr = [123,21,123,[123,43], [123,4,4,4,'6!'] ,true];
// for (let i=0;i<arr.length;i++){
//     for (let j=0;j<arr[i].length;j++){
//                 console.log(arr[4][4])
//     }
// }


// let arr =  [['hello','oktenweb'],'asd','qwe', ['hello','oktenweb!']];
// for (let i=0;i<arr.length;i++){
//     for (let j=0;j<arr[i].length;j++){
//         console.log(arr[3][1]);
//     }
// }

let arr = [5,4,6,1,8,3,7,2];
console.log(arr);
for (let number of arr) {
    let i;
    for (let number1 of number) {
        if (number>number1){
            i=number;
            number=number1;
            number1=i;
        }
    }
}
console.log(arr);