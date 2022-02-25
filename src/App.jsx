import React,{useContext} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Switch, Route,Redirect} from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import  Nav from "./components/Nav/Nav";
import {UserContext}  from "./components/Login/Login";

function App() {
  const user = useContext(UserContext);
  return (
     
      <div className="App">
             <Nav />
        <div className="outer">
          <div className="inner">
            <Switch>
            
              <Route exact path="/" component={Login}/>
              <Route  exact path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route exact path="/dashboard">
               {console.log(user.Isuser)} 
               {user.Isuser ? <Redirect to="/sign-in"/>: <Dashboard/> }
               </Route>
              <Route path="/preferences" component={Preferences} />
            </Switch>
          </div>
        </div>
      </div>
      
  );
}

export default App;
