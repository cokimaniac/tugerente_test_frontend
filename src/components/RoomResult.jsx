import { Link } from "react-router-dom"

function RoomResult(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">
                    Tipo: {props.room.type}
                    {props.room.availability ? <span className="badge" style={{background: "#fac31d"}}>Disponible</span> : <span className="badge" style={{background: "#ef4f2a"}}>No Disponible</span>}
                </h5>
                <p className="card-text">{props.room.details}</p>
                <p><b>Precio: </b>{ props.room.price } Bs.</p>
                <Link to={ "/rooms/" + props.room.id } className="btn btn-primary">Hacer Reserva</Link>
            </div>
        </div>
    )
}

export default RoomResult