import * as React from 'react';

import { hot } from 'react-hot-loader';

/**
 * Normalize css with side effect
 */
import './theme/css-baseline';

import LoginFormContainer from './containers/LoginFormContainer';
import Typography from './components/Typography';

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography style={{ position: 'absolute', left: '1em', top: '1em' }} variant="headline2">
          gojob
        </Typography>
        <LoginFormContainer />
        <Typography color="primary" variant="main-title" align="center">
          Happy coding! ♥️
        </Typography>
      </div>
    );
  }
}

export default hot(module)(App);
