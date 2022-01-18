import {React, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About, Community, FAQs, Footer, Header, Home, Judges, Mentors, Prizes, Sponsors, Teams, Timeline } from './components'

function App() {
  const [scrolling, setscrolling] = useState(false);
    const func = () =>
    {
        setscrolling(true);
    }
  return (
    <div className='App' onScroll={func()}>
      <Router>
        <Route exact path="/">
          <Header scrolling={scrolling}/>
          <Home />
          <About />
          <Timeline />
          <Prizes />
          <Judges />
          <Mentors />
          <Teams />
          <Sponsors />
          <Community />
          <FAQs />
          <Footer/>
        </Route>
      </Router>
    </div>

  );
}

export default App;
