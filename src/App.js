import { useEffect, useState } from "react";
import Icofont from "react-icofont";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import SideBar from "./components/layouts/SideBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

const App = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(show);
  });
  return (
    <div className="wrapper">
      <div className="container">
        <BrowserRouter>
          <SideBar show={show} />
          <button
            type="button"
            className="btn btn-menu"
            onClick={() => setShow(!show)}
          >
            <Icofont
              icon={
                show ? "rounded-left icofont-2x" : "rounded-right icofont-2x"
              }
            />
          </button>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
