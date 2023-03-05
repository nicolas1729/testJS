
function getMin(arr) {
    return arr.reduce((min, v) => min <= v ? min : v);
}

function getMax(arr) {
    return arr.reduce((max, v) => max >= v ? max : v, 0);
}

  