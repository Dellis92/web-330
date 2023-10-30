const now = new Date();
const currentDateTime = now.toLocaleString();
document.querySelector('#getTodaysDate').textContent = currentDateTime;
setInterval(updateDateTime, 1000);

function getLength(){
    String.length;
}

function reverse(){
    return.str.split("").reverse().join("");
}

function isPalindrome(str){
    var reg = /[\W_]/g;

    var smallStr = str.toLowerCase().replace(reg, "");

    var reversed = smallStr.split("").reverse().join("");
    if (reversed === smallStr) return true;

    return false;
}