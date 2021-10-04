import './App.css';
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bootstrap from './Components/Bootstrap/Bootstrap'
import Categories from './Components/Categories/Categories';
import ToDos from './Components/ToDos/ToDos';
import NotFound from './Components/NotFound';
import '../src/App.css'
import Footer from './Components/Footer';
import { AuthProvider } from "./contexts/AuthContext";
import Login from './Components/Auth/Login'
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">   
    <AuthProvider>   
      <Navigation />
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={ToDos} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/categories" component={Categories} />
          <Route path="/bootstrap" component={Bootstrap} />
          
          <Route component={NotFound} />
        </Switch>
      </Router>
      </AuthProvider>
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
