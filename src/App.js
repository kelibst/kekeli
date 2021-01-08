import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import SideBar from "./components/layouts/SideBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <BrowserRouter>
        <SideBar />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route  path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
