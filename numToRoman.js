function convertToRoman(num){
    let strNum = num.toString(10); // 10 base num string.
    let numList = [];
    let romList = [];
    let bases = [
        {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700:"DCC", 800: "DCCC", 900: "CM",1000: "M"}
        ]; // limited up to 1000.
    let m = 1; // decimal multiplication factor.
    for(let i=strNum.length-1; i>=0; i--){
        if(m===1000){
            // processing multiples of 1000.
            numList.unshift(parseInt(strNum.slice(0, i+1))*m);
            romList.unshift(bases[0][m].repeat(numList[0]/m));
            break;
        } else{
            // processing multiples of 1, 10, 100.
            numList.unshift(parseInt(strNum[i])*m);
            romList.unshift(bases[0][numList[0]]);
        }
        if(m!==1000){
            m *= 10; // increasing 'm' up to 1000.
        }
    }
    return romList.join("");
}

console.log(convertToRoman(7989));
