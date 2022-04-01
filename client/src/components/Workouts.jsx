const Workouts = (props) => {

        return (
            <div className="userContainer">
                <section className="invoice">
                    <table>
                        <thead>
                            <tr>
                                <th>Exercise</th>
                                <th>Weight</th>
                                <th>Sets</th>
                                <th>Reps</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.exercise}</td>
                                <td>{props.weight}</td>
                                <td>{props.sets}</td>
                                <td>{props.reps}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        )
}

export default Workouts