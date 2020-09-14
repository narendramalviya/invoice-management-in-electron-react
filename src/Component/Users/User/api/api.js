const API = process.env.REACT_APP_API;
// TODO: 
// get user
// get all users
// create user
// update user
// delete user
exports.getUserById = (id, userId, token) => {
	const bearer = `Bearer ${token}`;
	return fetch(`${API}/getUser/:${id}/:${userId}`, {
		method: "get",
		withCredentials: true,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
	})
		.then((response) => response.json())
		.then((result) => result)
		.catch((err) => console.log(err));
};

exports.getAllUser = (userId, token) => {
	const bearer = `Bearer ${token}`;
	return fetch(`${API}/getUser/:${userId}`, {
		method: "get",
		withCredentials: true,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
	})
		.then((response) => response.json())
		.then((result) => result)
		.catch((err) => console.log(err));
};

exports.createUser = (userId, user, token) => {
	const bearer = `Bearer ${token}`;
	return fetch(`${API}/createUser/:${userId}`, {
		method: "post",
		withCredentials: true,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.then((result) => result)
		.catch((err) => console.log(err));
};

exports.updateUser = (userId, user, token) => {
	const bearer = `Bearer ${token}`;
	return fetch(`${API}/updateUser/:${userId}`, {
		method: "put",
		withCredentials: true,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.then((result) => result)
		.catch((err) => console.log(err));
};
exports.deleteUser = (id, userId, token) => {
	const bearer = `Bearer ${token}`;
	return fetch(`${API}/getUser/:${id}/:${userId}`, {
		method: "delete",
		withCredentials: true,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
	})
		.then((response) => response.json())
		.then((result) => result)
		.catch((err) => console.log(err));
};
