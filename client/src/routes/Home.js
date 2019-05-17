import React, { useContext } from 'react';
import useInput from '../components/hooks/useInput';
import '../css/Home.css';
import { UserContext } from '../components/contexts/UserContext';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const LOGIN = gql`
  mutation {
    login(email: $email, password: $password) {
      token
    }
  }
  `;

const Home = () => {

  const { setToken } = useContext(UserContext);
  const [email, updateEmail] = useInput('');
  const [password, updatePassword] = useInput('');

  return (
    <Mutation mutation={LOGIN}>
      {(login, { data }) => (
        <div className={"Home container"}>
          <div className="field" style={{ paddingTop: "70px", width: "300px", margin: "0 auto" }}>
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" value={email} onChange={updateEmail} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field" style={{ paddingTop: "30px", width: "300px", margin: "0 auto" }}>
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" value={password} onChange={updatePassword} />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control" style={{ paddingTop: "30px", textAlign: "center" }}>
              <button
                className="button is-primary"
                onClick={() => {
                  login({ variables: { email, password } }).then(() => console.log(data)).catch(error => console.log(error));
                }}
              >
                Login
          </button>
            </p>
          </div>
        </div>
      )}
    </Mutation>
  );
};

export default Home;

