import React from "react";
import { useHistory,NavLink} from "react-router-dom";

function SignUp(){
 
let history = useHistory();
function handleClick() {
history.push("/sign-in");
}



        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="form-control" id="btnr" onClick={handleClick}>Register</button>

                <p className="forgot-password text-right">
                   Already registered<NavLink style={{display:"inline"}}className="nav-link" to={"/sign-in"}>log in?</NavLink>
                </p>
                
            </form>
        );
    }

export default SignUp;