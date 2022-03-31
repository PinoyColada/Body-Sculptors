
const Users = (props) => {

    return (
        <div className="userContainer">
            <section class="invoice">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Weight</th>
                            <th>Workout</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.username}</td>
                            <td>{props.age}</td>
                            <td>{props.bodyWeight}</td>
                            <td><button>View Workout(s)</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Users