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

// better
export function findMiddleIndexBetter(nums: number[]): number {
  const total = nums.reduce((acc, cur) => acc + cur, 0)
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (sum * 2 + nums[i] === total) {
      return i
    }
    sum += nums[i]
  }
  return -1
}
