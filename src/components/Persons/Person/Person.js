import React, { Component }from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../components/hoc/Aux';
import withClass from '../../../components/hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
      super(props);
      this.inputElementRef = React.createRef();
    }

    componentDidMount() {
      //this.inputElement.focus();
      this.inputElementRef.current.focus();
    }

    render () {
      console.log('[Person.js] rendering...');
      return (
        <Aux>
          <AuthContext.Consumer>
            {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
          </AuthContext.Consumer>
          <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
            //ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}
          />
        </Aux>
      )
    }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);