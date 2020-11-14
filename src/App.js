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

import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import HocTest from "./components/HocTest";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/hoc" component={HocTest} />
      </div>
    </BrowserRouter>
  );
};

export default App;
