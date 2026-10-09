import { useState } from "react"
import "./LoginForm.css"

const LoginForm = ({ studentDetails ,setStudents,setOption}) => { 
    const [user, setUserDetails] = useState({
        email: null,
        password: null,
        isLoggedIn: false
    });

    let [showPassword, setShowPassword] = useState(false);

    const handleLogin = (event) => { 
        event.preventDefault();
        const emailInput = event.target.studentEmail.value;
        const passwordInput = event.target.password.value;
         
            for (let i = 0; i < studentDetails.length; i++) {
                if (studentDetails[i].email === emailInput && studentDetails[i].password === passwordInput) {
                    setUserDetails({
                        email: emailInput,
                        password: passwordInput,
                        isLoggedIn: true
                    });
                    console.log("You'r successfuly loggedin..");
                    break;
                }
                else { 
                    console.log("fail to log in...");
                }
            }
    }

    return (
        <>
            <div className="wrapper">
                <h3>Welcome back to Our College</h3>
                <form onSubmit={handleLogin}>
                    <div className="email">
                        <label htmlFor="studentEmail">Student Email :</label>
                        <div>
                            <input type="text" id="studentEmail" name="studentEmail" required></input>
                        </div>
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password :</label>
                        <div className="cradentials">
                            <input id="password" type={showPassword ? "text" : "password"} name="password" required></input>
                            <button type="button" onClick={() => setShowPassword((prev) => !prev)} title={showPassword ? "Hide Password" : "Show Password"}>
                                <img src={ showPassword ? "../assets/show.jpeg" : "../assets/hide.jpeg" } className="showIcon" alt="Show"/>
                            </button>
                        </div>

                        <div className="options">
                            <div className="forgetpasswd">
                                <a href="#">Forget Password</a>
                            </div>
                            <div className="signup" onClick={() => setOption(prev => !prev)}>
                                Sign up
                            </div>
                        </div>
                    </div>
                    <div className="controls">
                        <button type="submit">Login</button>
                        <button type="reset" >Clear</button>
                    </div>
                </form>
                </div>
            </>
    )
}

export default LoginForm;