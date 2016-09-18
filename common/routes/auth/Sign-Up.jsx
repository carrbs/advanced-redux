import React, { PropTypes } from 'react';

/*
const mapDispatchToProps = {
  signUp
};
*/

const propTypes = {
  signUp: PropTypes.func.isRequired
};

export default class SignUp extends React.Component {
  render() {
    return (
      <div className='auth-signup'>
        <form name='signup'>
          <label>
            <input
              name='username'
              placeholder='Name'
              type='text'
            />
          </label>
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
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

SignUp.displayName = 'SignUp';
SignUp.propTypes = propTypes;
