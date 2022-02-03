/**
 * @param {number[]} nums
 * @return {number}
 */
export function findMiddleIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = 0; j < nums.length; j++) {
      if (j < i) {
        sum += nums[j]
      } else if (j > i) {
        sum -= nums[j]
      }
    }
    if (sum === 0) {
      return i
    }
  }
  return -1
}
