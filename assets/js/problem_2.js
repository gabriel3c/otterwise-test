const operationsArray = array => {
	const cresSortedArray = array.sort((a, b) => a.idade - b.idade || a.id - b.id)

	console.log('Array ordenado por idade de forma crescente:\n', cresSortedArray)

	const decresSortedArray = array.sort(
		(a, b) => b.salario - a.salario || a.id - b.id
	)

	console.log(
		'Array ordenado por salário de forma decrescente:\n',
		decresSortedArray
	)

	const filtredArray = array.filter(item => item.senioridade === 'senior')
	console.log('Array filtrado por senioridade:\n', filtredArray)

	const totalSalary = array.reduce((acc, item) => (acc += item.salario), 0)

	console.log('Salário total dos funcionários: ', totalSalary)
}

export default operationsArray
