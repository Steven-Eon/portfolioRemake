import logo from './logo.svg';
import './App.css';
import Bar from './bar.js';
import Hero from './hero.js';
import Aboutme from './Aboutme.js';
import Timeline from './timeline.js';
import Portfolio from './Portfolio.js';
import Credentials from './credentials.js';
import Footer from './footer.js';

function App() {
  return (
    <div className='App'>
      <Bar></Bar>
      <Hero></Hero>
      <Aboutme></Aboutme>
      <Timeline></Timeline>
      <Portfolio></Portfolio>
      <Credentials></Credentials>
      <Footer></Footer>
    </div>
  );
}

export default App;
