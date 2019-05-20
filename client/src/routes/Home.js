import React, { useContext } from 'react';
import useInput from '../components/hooks/useInput';
import '../css/Home.css';
import { UserContext } from '../components/contexts/UserContext';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: {email: $email, password: $password}) {
      user {
        id
        username
      }
    }
  }
  `;

const Home = () => {

  const { setUser } = useContext(UserContext);
  const [email, updateEmail] = useInput('');
  const [password, updatePassword] = useInput('');

  const saveData = async data => {
    const { user } = data;
    setUser(user);
  }

  return (
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
          <Mutation
            mutation={LOGIN}
            variables={{ email, password }}
            onCompleted={data => saveData(data.login)}
          >
            {mutation => (

              <button
                className="button is-primary"
                onClick={mutation}
              >
                Login
          </button>
            )}
          </Mutation>
        </p>
      </div>
    </div>
  )
};

export default Home;

