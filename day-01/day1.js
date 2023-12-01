import fs from 'fs';

// get first and last number in string
// return sum of array
const part1 = (path) => {

    const list = fs.readFileSync(path, 'utf8').split('\n');
    const numbers = list.map((item) => {
        const numbers = item.split("").filter((i) => !Number.isNaN(Number(i)));
        return numbers.at(0) + numbers.at(-1)
    })
    return numbers.reduce((a, b) => Number(a) + Number(b), 0)
}

// console.log(part1("./example1.txt"))
// console.log(part1("./input.txt"))

const spelledNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

const part2 = (path) => {

    const list = fs.readFileSync(path, 'utf8').split('\n');

    // split all numbers and numbers as words into array
    const numbers = list.map((item) => {
        const splitNumbers = item.split("").map((i, index) => {
            const isNumber = !Number.isNaN(Number(i));
            if (isNumber) return i;
            const number = spelledNumbers.find(j => item.substring(index, index + j.length) === j)
            return spelledNumbers.indexOf(number) + 1
        }).filter(Boolean)


        return "" + splitNumbers.at(0) + splitNumbers.at(-1)
    })

    return numbers.reduce((a, b) => Number(a) + Number(b), 0)
}

// console.log(part2("./example2.txt"))
console.log(part2("./input.txt"))
