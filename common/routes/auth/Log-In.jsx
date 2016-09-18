import React, { PropTypes } from 'react';


/*
const mapDispatchToProps = {
  logIn
};
*/

const propTypes = {
  logIn: PropTypes.func.isRequired
};

export default class LogIn extends React.Component {
  render() {
    return (
      <div className='auth-login'>
        <form name='login'>
          <label>
            <input
              name='email'
              placeholder='Email'
              type='email'
            />
          </label>
          <label>
            <input
              name='password'
              placeholder='Password'
              type='password'
            />
          </label>
          <button
            className='auth-signup-submit'
            type='submit'
            >
            Log In
          </button>
        </form>
      </div>
    );
  }
}

LogIn.displayName = 'LogIn';
LogIn.propTypes = propTypes;
