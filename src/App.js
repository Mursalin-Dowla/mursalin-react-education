import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Routes, Route } from'react-router-dom';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Course from './components/Course/Course';
import NotFound from './components/NotFound/NotFound';
import CourseDetails from './components/CourseDetails/CourseDetails';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/courses' element={<Course />}></Route>
        <Route path='/courses/:app' element={<CourseDetails />}></Route>
        <Route path='/courses/:web' element={<CourseDetails />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
