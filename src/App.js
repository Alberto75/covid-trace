import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import Home from './components/home'

function App() {
  return (
    <React.Fragment>
      <HttpsRedirect>
          <Home/>
      </HttpsRedirect>
  </React.Fragment>
  );
}

export default App;
