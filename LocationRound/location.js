// fn(size) = 50 + multiplier*size
// Forward Leaning Calculation




const NEGATIVE = '-';
const POSITIVE = "+";

const roundToN = (offset = 0, size = 0) => number => {
    const {next, prev} = getRange(offset, size, number)
    const diff = number - prev;

    if (diff >= size / 2) {
        return next;
    } else {
        return prev;
    }
}

const getRange = (offset, size, number) => {
    let multiplier = 0;
    let next = 0;
    let prev = 0;

    const sign = number > offset ? POSITIVE : NEGATIVE;

    while (true) {
        next = gridSequence(offset, multiplier, size);
        prev = next - size;

        if (next >= number && prev <= number) {
            break;
        }
        multiplier += sign == POSITIVE ? 1 : -1;
    }
    return {next, prev};
}

const gridSequence = (offset, multiplier, size) => {
    return offset + size * multiplier;
}

const roundTo = roundToN(50, 30);

console.log(roundTo(57))



module.exports = roundToN;