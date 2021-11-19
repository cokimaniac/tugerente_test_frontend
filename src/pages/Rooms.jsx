import { useEffect, useState } from "react"
// services
import { getRooms } from "../services/rooms"
//components
import RoomResult from "../components/RoomResult"

function Rooms() {
    let [rooms, setRooms] = useState([])
    let [errors, setErrrors] = useState(undefined)
    let [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        getRooms()
        .then(res => {
            setRooms(res)
            setIsLoad(true)
        })
        .catch(err => {
            setErrrors(err)
        })
    },[])

    return (
        <div className="container">
            <div className="row">
                {isLoad && rooms.map(item => <div key={ item.id } className="col-lg-4"><RoomResult room={ item } /></div>)}
            </div>
        </div>
    )
}

export default Rooms