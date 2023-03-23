
function getMin(arr) {
    return arr.reduce((min, v) => min <= v ? min : v);
}

function getMax(arr) {
    return arr.reduce((max, v) => max >= v ? max : v, 0);
}

function getSum(arr) {
    return arr.reduce((a, v) => a + v, 0);
}

  