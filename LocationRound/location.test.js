const roundToN = require('./location')


const roundTo = roundToN(50, 30); 
const assert = require('../Assert/assert');


let Size20 = [-30, -10, 10, 30, 50, 70, 90, 110, 130, 150];

let Size30 = [-40, -10, 20, 50, 80, 110, 140, 170, 200];

let Size40 = [-70, -30, 10, 50, 90, 130, 170, 210, 250];

// fn(size) = 50 + n*size



assert(roundTo(57), 50);
assert(roundTo(65), 80);
assert(roundTo(64), 50);
assert(roundTo(72), 80);
assert(roundTo(86), 80);
assert(roundTo(105), 110);
assert(roundTo(-30), -40);
assert(roundTo(-22), -10);
assert(roundTo(-25), -10);
assert(roundTo(-26), -40);
assert(roundToN(50, 40)(-51), -70)


