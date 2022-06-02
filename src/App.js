// import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./Navbar";
import Admin from "./Admin";
import Images from "./Images";
import About from "./sites/About";
import Map from "./sites/Map";
import Tournament from "./sites/Tournament";
import Statistics from "./sites/Statistics";
import Champions from "./sites/Champions";
import Sponsors from "./sites/Sponsors";
import Teams from "./sites/Teams";




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar1 />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/images">
              <Images />
            </Route>
            
            <Route exact path="/teams">
              <Teams />
            </Route>

            <Route path="/map">
              <Map />
            </Route>
            <Route path="/tournament">
              <Tournament />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/champions">
              <Champions />
            </Route>
            <Route path="/sponsors">
              <Sponsors />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;