import Navbar from '../components/Navbar'

const Landing = () => {

    return (
        <div className='landing'>
            <Navbar />
            <div className='video-container'>
            <video autoPlay loop muted>
                <source src="video.mp4" type="video/mp4"/>
            </video>
            </div>
            <h1 className='title'>Welcome to Body Sculptors</h1>
        </div>
    )

}

export default Landing