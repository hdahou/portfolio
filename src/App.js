import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Profile from './routes/profile/profile.component';
import Portfolio from './routes/portfolio/portfolio.component';
import Contact from './routes/contact/contact.component';
import CV from './routes/cv/cv.component';
import Blog from './routes/blog/blog.component';
import './App.css';

const App = () => {
  return (
    <div className="flex bg-slate-100">
      <div className="background-image">
        <Navigation />
      </div>
      <div className="w-screen max-w-screen-md min-h-[800px]">
        <Routes>
          <Route path='/' element={<Profile />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cv' element={<CV />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
