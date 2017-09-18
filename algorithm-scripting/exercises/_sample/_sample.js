/**
 * binarySearch - Performs a binary search on the array.
 *
 * @param {Array<Number>} array
 * @param {Number} value
 * @return {*}
 */
export function binarySearch(array, value) {
    let guess,
        min = 0,
        max = array.length - 1;

    while(min <= max) {
        guess = Math.floor((min + max) /2);

        if(array[guess] === value) {
            return guess;
        } else if(array[guess] < value) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }

    return -1;
}