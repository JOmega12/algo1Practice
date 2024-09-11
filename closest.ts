export function closest(nums: number[], target: number): number {
   // Implement me

   let closestNumber = nums[0] + nums[1] + nums[2];

   for(let i = 0; i< nums.length - 2 ; i++){
      for(let j = i + 1; j<nums.length - 1; j++){
         for(let k = j + 1; k< nums.length; k++){
            let newSum = nums[i] + nums[j] + nums[k];

            if(Math.abs(newSum - target) < Math.abs(closestNumber -target)){
               closestNumber = newSum
            }
         }
      }
   }
   return closestNumber
   // return 0;
}

module.exports = { closest }
