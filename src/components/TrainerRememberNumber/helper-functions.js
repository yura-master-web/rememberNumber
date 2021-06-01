export function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}
export function preparedNumbers(number, displeasure) {
    const arrNums = new Array(displeasure - 1).fill(number)
    return Number(number + arrNums.join(''))
}
