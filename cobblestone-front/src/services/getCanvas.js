import axios from 'axios'

const baseURL = "https://cobblestonealg.herokuapp.com/api"

const getDefaultData = () =>{
	const exp =  Math.ceil(Math.random() * 6)
	const rand =  2 ** exp
	console.log(rand)
	const promise = axios(`${baseURL}/${rand}`, {
		method: 'GET',
	})

	return promise
}

const getSize = (num) =>{
	const promise = axios(`${baseURL}/${num}`, {
		method: 'GET',
	})

	return promise
}

export {getDefaultData, getSize}
