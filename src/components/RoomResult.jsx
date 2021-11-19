function RoomResult(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Tipo: {props.room.type}</h5>
                <p className="card-text">{props.room.details}</p>
                <a href="/" className="btn btn-primary">Hacer Reserva</a>
            </div>
        </div>
    )
}

export default RoomResult