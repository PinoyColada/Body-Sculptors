
const Users = (props) => {

    return (
        <div className="workoutCard">
            <h1>{props.id}</h1>
            <h3>{props.username} <strong>{props.age}</strong></h3>
            <p>{props.bodyWeight}</p>
            
        </div>
    )
}

export default Users