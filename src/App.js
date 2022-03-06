import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Line from "./components/Line";
import Features from "./pages/Features";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Testimonial from "./pages/Testimonial";
import MyBolg from "./pages/MyBolg";
import MyPricing from "./pages/MyPricing";
import Contact from "./pages/Contact.js";
import Footer from "./pages/Footer";
import Data from "./Data/data.json";
import Socialmedia from "./components/Socialmedia";
// import ResumeCard from "./components/ResumeCard";
import ResumeCompo from "./component/ResumeCompo";

// import Skill from "./component/Skill";
import SkillCompo from "./component/SkillCompo";

function App() {
  return (
    <>
      <Router>
        <Navigation />
<Home/>
        {/* <Switch>
          <Route path="/" component={Home} exact></Route>

          <Route path="/About" component={About} exact></Route>
        </Switch> */}
        <Line />
        <Features features={Data.Features} />
        <Line />
        <Portfolio myBolg={Data.Blog} />
        <Line />
        <Resume />
        <Switch>
          <Route path="/Home/Education" component={ResumeCompo} exact></Route>
          <Route path="/Skill" component={SkillCompo} exact></Route>
          <Route path="/Education" component={ResumeCompo} exact></Route>
          <Route path="/Skill" component={Socialmedia} exact></Route>
        </Switch>
        <Line />
        <Testimonial />
        <Line />
        <MyBolg myBolg={Data.Blog} />
        <Line />
        <MyPricing />
        <Switch>
          <Route path="/static" component={Home} exact></Route>
          <Route path="/standard" component={About} exact></Route>
          <Route path="/premium" component={About} exact></Route>
        </Switch>
        <Line />
        <Contact />
        <Line />
        <Footer />
      </Router>
    </>
  );
}

export default App;
