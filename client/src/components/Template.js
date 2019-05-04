import Header from './Header';
import Foot from './Foot';
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React, {Component} from 'react';

class Template extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={{padding: '100px', marginBottom: "60px"}}>
          {this.props.children}
        </div>
        <Foot/>
      </div>
    );
  }

}

export default Template;
