async function getResults() {
    // let url = "https://back.implementaconbubo.com/v1/sales/customer/?simple=true";
    let url = "http://localhost:8000/clients/signup"
    let headers = new Headers();
    headers.append("APIKEY", process.env.REACT_APP_APIKEY);

    let options = {
        headers,
        redirect: "follow",
        method: "GET"
    }

    let response = await fetch(url, options)
    return response.json();
}

module.exports = {
    getResults
}