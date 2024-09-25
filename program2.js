/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   const romanValues = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
        let total = 0;
        for (let i = 0; i < s.length; i++) {
            let current = romanValues[s[i]];
            let next = romanValues[s[i + 1]];
            total += (next && current < next) ? -current : current;
        }
        
        return total;
    }
    let s = "III";
    console.log(romanToInt(s));   
};
module.exports={romanToInt}
