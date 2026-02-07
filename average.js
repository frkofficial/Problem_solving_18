function oddAverage(numbers){
 
    // contains only odd numbers
    const odds = [];
   for(const number of numbers){
    if(number % 2 == 1){
        // console.log(number)
        odds.push(number)
    }
   }

//    console.log(odds)
  let sum =0;
   for(const number of odds){
   sum +=number;
   }
    const count = odds.length; 

    const average = sum/count;
   console.log(average)

   return average

}

const numbers = [40, 19, 30, 65, 87, 100, 7]

const avg = oddAverage(numbers);
console.log('Average of the odd numbers is : ', avg)