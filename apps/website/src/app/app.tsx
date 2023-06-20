import {Route, Routes } from 'react-router-dom'
// import { Components } from '@grace-website/components';
// import { Popover } from '@grace-website/components';

import HomePage from './HomePage'
import ResumePage from './ResumePage'
import NavBar from './NavBar'
import Contact from './ContactPage'
import BlogPage from './BlogPage'
import YouTubePage from './YouTubePage'
import DancerPage from './DancerPage'
import Projects from './Projects'

export function App() {
  return (
    <div>
      <NavBar />
      {/* <Components />
      <Popover /> */}
      <Routes>
        <Route path="/" element={<HomePage title="home" />}></Route>
        <Route path="/resume" element={<ResumePage title="resume" />}></Route>
        <Route path="/contact" element={<Contact title="contact" />}></Route>
        <Route path="/blog" element={<BlogPage title="blog" />}></Route>
        <Route path="/youtube" element={<YouTubePage title="youtube" />}></Route>
        <Route path="/dancer" element={<DancerPage title="dancer" />}></Route>
        <Route path="/projects" element={<Projects title="projects" />}></Route>
      </Routes>
    </div>
  );
};

export default App;
