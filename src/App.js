import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { CircularProgress, Center } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    isLoading ? (
        <Center h={'100vh'}>
          <CircularProgress isIndeterminate color="green.300" />
        </Center>
      )
    : (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      )
  );
}

export default App;
