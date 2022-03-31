import Navbar from '../components/Navbar'
import WorkoutForm from '../components/WorkoutForm'

const WorkoutCreation = () => {

    return (
        <div className='workoutCreation'>
            <Navbar />
            <section>
                <WorkoutForm />
            </section>
        </div>
    )

}

export default WorkoutCreation
