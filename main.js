import replaceWords from './assets/js/problem_1.js'
import operationsArray from './assets/js/problem_2.js'
import formatterArray from './assets/js/problem_3.js'
import fetchCep from './assets/js/problem_4.js'

import { words, funcionarios, peopleData, cep } from './assets/data/data.js'

console.log('Problema 1:\n')

replaceWords(words)

console.log('\nProblema 2:\n')

operationsArray(funcionarios)

console.log('\nProblema 3:\n')

formatterArray(peopleData)

console.log('\nProblema 4:\n')

fetchCep(cep)
