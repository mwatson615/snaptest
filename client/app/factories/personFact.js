app.factory('personFactory', ($http, $q, $route, $location) => {

	return {

		createPerson : (newPerson) => {
			return $http.post('http://localhost:3000/api/v1/person/new', JSON.stringify(newPerson))
			.then((data) => {
				return data.data
			})
			.catch((err) => {
				let errorCode = err.code;
				let errorMessage = err.message;
				alert(errorCode + " : " + errorMessage)
			})
		},
		getPersonById : (personId) => {
			return $http.get(`http://localhost:3000/api/v1/person/${personId}`)
			.then((data) => {
				// console.log(data)
				return data.data
			})
			.catch((err) => {
				let errorCode = err.code;
				let errorMessage = err.message;
				alert(errorCode + " : " + errorMessage)
			})
		},
		getPersonByHousehold : (householdId) => {
			return $http.get(`http://localhost:3000/api/v1/person/hh/${householdId}`)
			.then((data) => {
				return data.data
			})
			.catch((err) => {
				let errorCode = err.code;
				let errorMessage = err.message;
				alert(errorCode + " : " + errorMessage)
			})
		}
	}
})
