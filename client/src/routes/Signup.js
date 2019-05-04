import React from 'react';
import useInput from '../components/hooks/useInput';
import '../css/Signup.css';

export default function Signup() {

  const [email, updateEmail, resetEmail] = useInput('');
  const [password, updatePassword, resetPassword] = useInput('');
  const [confirmPassword, updateConfirmPassword, resetConfirmPassword] = useInput('');
  const [username, updateUsername, resetUsername] = useInput('');

  return (
    <div className={"SignUp"} style={{width: "500px", margin: "0 auto"}}>
      <div className="field" style={{paddingTop: "70px", width: "300px", margin: "0 auto"}}>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" value={email} onChange={updateEmail}/>
          <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
              </span>
        </p>
      </div>
      <div className="field" style={{paddingTop: "30px", width: "300px", margin: "0 auto"}}>
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Username" value={username} onChange={updateUsername}/>
          <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
        </p>
      </div>
      <div className="field" style={{paddingTop: "30px", width: "300px", margin: "0 auto"}}>
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" value={password} onChange={updatePassword}/>
          <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
        </p>
      </div>
      <div className="field" style={{paddingTop: "30px", width: "300px", margin: "0 auto"}}>
        <p className="control has-icons-left">
          <input className={confirmPassword === password ? "input is-success" : "input is-danger"} type="password"
                 placeholder="Confirm Password"
                 value={confirmPassword}
                 onChange={updateConfirmPassword}/>
          <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
        </p>
      </div>
      <div className="field">
        <p className="control" style={{paddingTop: "30px", textAlign: "center"}}>
          <button className="button is-primary">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
