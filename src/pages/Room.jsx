import { useEffect, useState } from "react"
// services
import { getRoom } from "../services/rooms"
//components
import RoomResult from "../components/RoomResult"

function Rooms() {
    let [room, setRoom] = useState([])
    let [errors, setErrrors] = useState(undefined)
    let [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        getRoom()
        .then(res => {
            setRoom(res)
            setIsLoad(true)
        })
        .catch(err => {
            setErrrors(err)
        })
    },[])

    return (
        <div className="container">
            <div className="row">
                {isLoad && <div className="col-lg-4"><RoomResult room={ room } /></div>}
            </div>
        </div>
    )
}

export default Rooms