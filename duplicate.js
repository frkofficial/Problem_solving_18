
const numbers = [1, 2, 4, 2, 5, 7, 6, 5, 7,8, 9,10]

function  noDuplicate(array) {
//    console.log(array)

const unique = [];
for(const number of array){
    if(unique.includes(number) === false){
        unique.push(number)
    }
}
  return unique
}

const uniqueArray = noDuplicate(numbers)

console.log(uniqueArray)