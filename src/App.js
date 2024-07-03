
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

// server
import {datails} from './server/nav.js'
import {banners} from './server/banner.js'
import {skil} from './server/skills.js'
import {details as detail} from './server/companies.js'
import {plan} from './server/planes.js'
import {achieving} from './server/acheivement.js'
import {trends} from './server/trends.js'
import {treanding} from './server/trending.js'
import {story} from './server/story.js'
import {footer} from './server/footer.js'
import {learning} from './server/learning.js'
import {goles} from './server/goles.js'

function App() {
  return (
    <div className="App">
      <Navbar datails={datails} />
      <Banner banners={banners}/>
      <Skils skil={skil}/>
      <Companies detail={detail} /> 
     
     
      <Goles goles={goles} />
      <Plans plan={plan}/>
      <Achieving achieving={achieving} />
      <Trends trends={trends}/>
      <Trending treanding={treanding}/>
      <Learning learning={learning}/>
      <Story story={story}/>
      <Footer footer={footer}/>
     
    </div>
  );
}

export default App;
