import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PokeCart from './pages/PokeCart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/pokeCart">
            <PokeCart />
          </Route>
          <Route path="/:name">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
