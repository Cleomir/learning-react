// import ClassComponent from "./components/Class";
// import Stateful from "./components/Stateful";
// import Events from "./components/Events";
// import StateManipulation from "./components/StateManipulation";
// import FormHanding from "./components/FormHandling";
// import Nested from "./components/Nested";
// import List from './components/List';

//export default ClassComponent;
// export default Stateful;
// export default FormHanding;
// export default Nested;

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import HocTest from "./components/HocTest";
import Axios from "./components/Axios";
// import RouteParameters from "./components/RouteParameters";
import Picture from "./components/Picture";
import ReduxState from "./components/ReduxState";
import ReduxRouteParameters from "./components/ReduxRouteParameters";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/hoc" component={HocTest} />
          <Route path="/axios" component={Axios} />
          <Route path="/picture" component={Picture} />
          <Route path="/redux" component={ReduxState} />
          {/* <Route path="/:id" component={RouteParameters} /> */}
          <Route path="/:id" component={ReduxRouteParameters} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
