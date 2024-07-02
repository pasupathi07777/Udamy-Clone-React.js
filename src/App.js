
import './App.css';
import Achieving from './componenet/Achieving ';
import Banner from './componenet/Banner';
import Companies from './componenet/Companies';
import Footer from './componenet/Footer';
import Learning from './componenet/Learning';
import Navbar from './componenet/Navbar';
import Plans from './componenet/Plans';
import Skils from './componenet/Skils';
import Story from './componenet/Story';
import Trending from './componenet/Trending';
import Trends from './componenet/Trends';
import Goles from './componenet/goles';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skils/>
      <Companies/>
      <Goles/>
      <Plans/>
      <Achieving/>
      <Trends/>
      <Trending/>
      <Learning/>
      <Story/>
      <Footer/>
     
    </div>
  );
}

export default App;
