
function indexOf(arr, val) {
    if (arr == undefined) {
		return -1;
    }
        
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == val) {
            return i;
        }
    }
    return -1;
}

module.exports = {
    indexOf,
}