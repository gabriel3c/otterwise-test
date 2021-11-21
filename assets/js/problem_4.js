// Observações:
// A API não retorna um número, escolhi substituir pelo bairro
// O fetch não é nativo no node, usei a lib node-fetch, que é o mesmo fetch, porém permitindo o uso no terminal,

import fetch from 'node-fetch'

const printAddress = obj => {
	const { logradouro, bairro, localidade, uf } = obj
	console.log('Olá, tudo bem? Meu endereço:')
	console.log(`${logradouro}, ${bairro}, ${localidade}/${uf} `)
}

const fetchCep = async cep => {
	try {
		const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
		const data = await response.json()
		printAddress(data)
	} catch (error) {
		console.log(error.message)
	}
}

export default fetchCep
