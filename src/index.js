
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrN=[];
  if (!matrix){
    return arrN;
  }
  for(let i=0; i<matrix.length;i+=2){
     for(let f=0;f<matrix[i].length;f++){
       arrN.push(matrix[i][f]);
     }
     if(typeof matrix[i+1] == 'undefined' ){
       break;
     }
     for(let s=matrix[i+1].length-1;s>=0;s--){
       arrN.push(matrix[i+1][s]);
     }
  }
  return arrN;
}



let arr=[
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ];
 
 let arrN=[];
 //console.log(Math.floor(arr.length/2));
 for(let i=0; i<arr.length;i+=2){
   
    for(let f=0;f<arr[i].length;f++){
      arrN.push(arr[i][f]);
    }
    if(typeof arr[i+1] == 'undefined' ){
      break;
    }
    for(let s=arr[i+1].length-1;s>=0;s--){
      console.log(arr[i+1][s]);
      arrN.push(arr[i+1][s]);
    }
    
 }
 console.log(arrN);