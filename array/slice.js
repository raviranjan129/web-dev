 //  The slice() method of Array returns a copy of a portion of an array into a new array ;
 // Return  a copy of a section of an array;
 // slice method does not change the original array;

 let arr = [10,20,30,40,50];
  console.log(arr.slice(0,3)); // it returns a copy of array but exlude the last index; i.e [0,3);

  console.log(arr.slice(-3,-1));  // it also return the negative index;

  console.log(arr.slice(-2,-5));  //  it do not trace the index in reverse order that's why it returns empty array; i.e [];

console.log(arr);