import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react'; // Import Authenticator for authentication
import { Amplify } from 'aws-amplify'; // Correct import from aws-amplify
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css'; // Correct path for Amplify UI styles

// Configure Amplify
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => (
            <div>
              <h1>Hello, {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Authenticator>
      </header>
    </div>
  );
}

export default App;
