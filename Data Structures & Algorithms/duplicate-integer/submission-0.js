class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let st = new Set()
        for(let i=0;i<nums.length;i++){
            if(st.has(nums[i])){
                return true
            }else{
                st.add(nums[i])
            }
        }
        return false
    }
}
