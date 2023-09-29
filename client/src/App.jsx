import './App.css';
import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
// Uncomment import statement below after building queries and mutations
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import LoginForm from './components/LoginForm';
import { Navbar } from 'react-bootstrap';
import SignupForm from './components/SignupForm';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="flex-column justify-center align-center min-100-vh bg-primary">
      <div>hello</div>
      <Outlet />
      <LoginForm />
      <Navbar />
      <SignupForm />
    </div>
    </ApolloProvider>
  );
}

export default App;
