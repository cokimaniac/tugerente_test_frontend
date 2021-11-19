const baseUrl = "http://localhost:8000/rooms"
const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", `Token ${localStorage.getItem("tgbooking")}`);
const options = {
    method: "GET",
    headers,
}

async function getRooms() {
    let url = baseUrl + "/"
    let response = await fetch(url, options)
    return response.json()
}

async function getRoom(roomId) {
    let url = baseUrl + `/${roomId}`
    let response = await fetch(url, options);
    return response.json()
}

module.exports = {
    getRooms,
    getRoom,
}