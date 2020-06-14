/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number): any => {
  let record: any = {};
  let dis;
  for(let i = 0; i < nums.length; i++){
      dis = target - nums[i];
      if(record[dis] !== undefined) {
          return [record[dis], i]
      }
      record[nums[i]] = i
  }
};
export default twoSum;