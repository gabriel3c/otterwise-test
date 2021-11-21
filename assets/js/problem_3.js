const formatName = name => {
	const stringsName = name.trim().split(' ')

	const formattedName = stringsName
		.map(item => {
			const string = item[0].toUpperCase() + item.slice(1)
			return string
		})
		.join(' ')

	return formattedName
}

const formatCpf = cpf => {
	const newCpf = cpf.replace(
		/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/,
		'$1.$2.$3-$4'
	)
	return newCpf
}

const formatPhone = phone => {
	const newPhone = phone.replace(/([0-9]{2})([0-9]{4})([0-9]{4})/, '($1) $2-$3')
	return newPhone
}

const formatterArray = array => {
	const newArray = array.map(({ nome, cpf, telefone }) => {
		nome = formatName(nome)
		cpf = formatCpf(cpf)
		telefone = formatPhone(telefone)

		return { nome, cpf, telefone }
	})
	console.log('Dados Formatados:\n', newArray)
}

export default formatterArray
