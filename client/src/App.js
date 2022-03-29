import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import UserCreation from './pages/UserCreation'
import WorkoutCreation from './pages/WorkoutCreation'
import WorkoutList from './pages/WorkoutList'
import AboutMe from './pages/AboutMe'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/userCreation' element={<UserCreation />} />
        <Route path='/workoutCreation' element={<WorkoutCreation />} />
        <Route path='/workoutList' element={<WorkoutList />} />
        <Route path='/aboutMe' element={<AboutMe />} />
      </Routes>

    </div>
  );
}

export default App;
