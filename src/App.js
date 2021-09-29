import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bootstrap from './Components/Bootstrap/Bootstrap';
import Login from './Components/Login/Login';
import Categories from './Components/Categories/Categories';
import ToDos from './Components/ToDos/ToDos';
import NotFound from './Components/NotFound';
import '../src/App.css'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">      
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/ToDos" component={ToDos} />
          <Route path="/Categories" component={Categories} />
          <Route path="/Bootstrap" component={Bootstrap} />
          
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
