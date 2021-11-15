const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
const secondUnencoded = readFileSync('./content/second.txt')

writeFileSync('./content/result-sync.txt', `These are the texts: ${first}, ${second}`, {flag:'a'})

console.log('done with task')
console.log('starting the next one')