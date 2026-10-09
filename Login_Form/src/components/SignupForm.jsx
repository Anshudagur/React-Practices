import { useState } from "react"
import { Eye,EyeOff } from 'lucide-react';
import "./SignupForm.css"

const SignupForm = ({ students, setStudents, setOption }) => { 
    const [showPasswd, setShowPasswd] = useState(false);

    function unhidePasswd() { 
        if (showPasswd === false)
            setShowPasswd(true);
        else
            setShowPasswd(false);
    } 

    function handelStudentDetails(event) { 
        event.preventDefault();
        signupNewStudent();
    }
    
    function signupNewStudent() {
        const name = document.querySelector("#studentName").value.toString();
        const emailId = document.querySelector("#studentEmail").value.toString();
        const passwd = document.querySelector("#password").value.toString();
        const conformPasswd = document.querySelector("#conformPassword").value.toString();

        const lastStudId = students.length > 0 ? students[students.length - 1].id : 0;
        const newId = lastStudId + 1;

        if (passwd === conformPasswd) {
            setStudents([...students, { id: newId, name, emailId, passwd }]);
            setOption(true);
        }
    }

    return (
        <div className="Form">
            <form className="SignupForm" onSubmit={handelStudentDetails}>
                <div className="credentials">
                    <h3>New to this page</h3>
                    <div className="nameField">
                        <label htmlFor="studentName">Name </label>
                        <input type="text" id="studentName" name="studentName" placeholder="Enter your Full Name" required></input>
                    </div>
                    <div className="emailField">
                        <label htmlFor="studentEmail">Email </label>
                        <input type="text" id="studentEmail" name="studentEmail" placeholder="Enter your Email Id" required></input>
                    </div>
                    <div className="passwdField">
                        <label htmlFor="password">Password </label>
                        <div className="lineBox">
                            <input type={showPasswd ? "text" : "password"} id="password" name="password" placeholder="Enter your Password" required></input>
                            <div>
                                <button onClick={ unhidePasswd } title={showPasswd ? "Hide Password" : "Show Password"}>
                                    {showPasswd ? <EyeOff size={ 28 } /> : <Eye size={ 28 } />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="conformPasswdField">
                        <label htmlFor="conformPassword">Conform Password </label>
                        <input type={showPasswd ? "text" : "password"} id="conformPassword" name="conformPassword" placeholder="Enter your Conform Password" required></input>
                    </div>
                </div>
                <div className="controls">
                    <button type="submit">Submit</button>
                    <button type="reset" >Clear</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm;