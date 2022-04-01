import Navbar from '../components/Navbar'

const Landing = () => {

    return (
        <div className='landing'>
            <Navbar />
            <div className='video-container'>
            <video autoPlay loop muted>
                <source src="video.mp4" type="video/mp4"/>
            </video>
            <h1 className='title'>Welcome to Body Sculptors
            <p>Click the "Create a workout" link to get started</p>
            </h1>
            </div>
        </div>
    )

}

export default Landing