// map method is used to make a new array and in 
// for each method same array is used 

const arr = [1,2,3]
let a = arr.map((value, index, array )=>{
    console.log(value, index, array)
    return value+1
})
// console.log(a)

// filter method
const arr1 = [10,6,8,1,2,3]
let b = arr1.filter((value)=>{
    // console.log(value)
    return value<7
})
console.log(b)

// reduce method
const arr3 = [10,6,8,1,2,3]
let d = arr3.reduce((v1, v2)=>{
    // console.log(value)
    return v1+v2
})
console.log(d)

// or

const arr2  = [1,2,3,4,5]
const reduce_func = (v1,v2) => {
    return v1+v2
}
let c = arr2.reduce(reduce_func)
console.log(c)


/* map method returns the array
filter method returns the array
reduce method returns a number */