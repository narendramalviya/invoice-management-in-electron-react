const API = process.env.REACT_APP_API;

exports.signIn = async (user) => {
	try {
		let response = await fetch(`${API}/signin`, {
			method: "post",
			headers: {
				"Content-Type": "applicatoion/json",
			},
			body: JSON.stringify(user),
        });
        let result = await response.json()
        // TODO:store reccieved token in local storage for further
        return result;
	} catch (error) {
		return error
	}
};

exports.signup = async (user) => {
	try {
		let response = await fetch(`${API}/signin`, {
			method: "post",
			headers: {
				"Content-Type": "applicatoion/json",
			},
			body: JSON.stringify(user),
        });
        let result = await response.json()
        // TODO:
        return result;
	} catch (error) {
		return error
	}
};

exports.signOut = () =>{
// TODO: clear cookies and local storage data token
}

exports.isSignedIn = ()=>{
    // TODO:look into the local Storage and check token and user id
}

