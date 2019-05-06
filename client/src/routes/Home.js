import React from 'react';
import useInput from '../components/hooks/useInput';
import '../css/Home.css';

const Home = () => {

  const [email, updateEmail] = useInput('');
  const [password, updatePassword] = useInput('');
  return (
    <div className={"Home"} style={{width: "500px", margin: "0 auto"}}>
      <div className="field" style={{paddingTop: "70px", width: "300px", margin: "0 auto"}}>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" value={email} onChange={updateEmail}/>
          <span className="icon is-small is-left">
      <i className="fas fa-envelope"/>
              </span>
          <span className="icon is-small is-right">
      <i className="fas fa-check"/>
    </span>
        </p>
      </div>
      <div className="field" style={{paddingTop: "30px", width: "300px", margin: "0 auto"}}>
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" value={password} onChange={updatePassword}/>
          <span className="icon is-small is-left">
      <i className="fas fa-lock"/>
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
};

export default Home;

