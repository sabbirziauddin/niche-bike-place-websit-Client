import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import AuthProvider from "./AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import About from "./Pages/Home/About/About";
import AllProducts from "./Pages/Home/AllProducts/AllProducts";
import Home from "./Pages/Home/Home/Home";
import Users from "./Pages/Home/Users/Users";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Newslater from "./Pages/Newslater/Newslater";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path='/allProducts'>
              <AllProducts></AllProducts>
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/newslatter'>
              <Newslater></Newslater>

            </Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
