import './App.css';
import HomepageNav from './component/naviation';
import Profile from './component/profile';
import {BrowserRouter,Routes,Route }from "react-router-dom";
import Contacts from './component/contacts';
import ProjectList from './component/projectList';
import MyDetective from './projects/mydetective';
import CustomInventory from './projects/customInventory';
import HumanBlood from './projects/Human3d';
import VoiceScorer from './projects/voiceScorer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <HomepageNav/>
    <Routes>
    <Route exact path ="/" element =  {<Profile/>}> </Route>
    <Route path ="/projects" element =  {<ProjectList/>}> </Route>
    <Route path="/projects/1" element={<MyDetective/>}></Route>
    <Route path="/projects/2" element={<CustomInventory/>}></Route>
    <Route path="/projects/3" element={<VoiceScorer/>}></Route>
    <Route path="/projects/4" element={<HumanBlood/>}></Route>    
    <Route path ="/contacts" element = {<Contacts/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
