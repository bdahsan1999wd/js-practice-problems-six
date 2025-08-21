function count_zero(binStr) {
    let count = 0;

    for (let i = 0; i < binStr.length; i++) {
        if (binStr[i] === '0') {
            count++;
        }
    }
    return count;
}

const binaryString = "010100101010110";
console.log(count_zero(binaryString));