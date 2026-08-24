class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = new Map()

        for(let i=0;i<nums.length;i++){
            let diff = target-nums[i]
            if(mp.get(diff) == undefined){
                mp.set(nums[i], i)
            }else{
                return [mp.get(diff), i]
            }
        }
    }
}
