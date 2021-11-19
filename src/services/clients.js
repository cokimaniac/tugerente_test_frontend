const baseUrl = "http://localhost:8000/clients"
const headers = new Headers();
headers.append("Content-Type", "application/json");
const options = {
    method: "POST",
    headers,
}

async function signup(data) {
    let url = baseUrl + "/signup"
    options.body = JSON.stringify(data)
    let response = await fetch(url, options)
    return response.json()
}

async function signin(data) {
    let url = baseUrl + "/signin"
    options.body = JSON.stringify(data)
    let response = await fetch(url, options);
    return response.json()
}

module.exports = {
    signup,
    signin
}