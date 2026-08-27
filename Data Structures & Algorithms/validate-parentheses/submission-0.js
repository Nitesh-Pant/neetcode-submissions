class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length ==0){
        return false

    }
let mp = {
            "}": "{",
            "]": "[",
            ")": "("
        }
        let st = []
        for(let i=0;i<s.length;i++){
            if(s[i] == '{' || s[i] == '(' || s[i] == '['){
                st.push(s[i])
            }else{
                if(mp[s[i]] == st[st.length-1]){
                    st.pop()
                }else{
                    return false
                }
            }
        }
        if(st.length > 0){
            return false
        }else{
            return true
        }
    }
}
