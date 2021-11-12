import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import About from "./Pages/Home/About/About";
import AllProducts from "./Pages/Home/AllProducts/AllProducts";
import Home from "./Pages/Home/Home/Home";
import Users from "./Pages/Home/Users/Users";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path='/allProducts'>
            <AllProducts></AllProducts>
          </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
