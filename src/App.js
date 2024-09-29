import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator, View, Flex, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => (
            <View>
              <Flex direction="column" alignItems="center" justifyContent="center">
                <Heading level={2}>Welcome, {user.username}</Heading>
                <Button onClick={signOut}>Sign out</Button>
                <h2> My App Content</h2>
              </Flex>
            </View>
          )}
        </Authenticator>
      </header>
    </div>
  );
}

export default App;
