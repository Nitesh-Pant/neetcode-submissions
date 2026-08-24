class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mpS = new Map()
        let mpT = new Map()

        if(s.length != t.length){
            return false
        }
        for(let i=0;i<s.length;i++){
            if(mpS.has(s[i])){
                mpS.set(s[i], mpS.get(s[i])+1)
            }else{
                mpS.set(s[i],1)
            }
        }
        for(let i=0;i<t.length;i++){
            if(mpT.has(t[i])){
                mpT.set(t[i], mpT.get(t[i])+1)
            }else{
                mpT.set(t[i], 1)
            }
        }
        for(let [k,v] of mpS){
            if(!(mpT.get(k) && mpT.get(k) == v)){
                return false
            }
        }
        return true
    }
}
