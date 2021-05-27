import './index.scss';
import './main.scss';
import Header from './Header';
import Search from './Search';
import Home from './Home';
import Country from './Country';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <Search/>
          <Home/>
      </Route>
      <Route  path="/country">
          <Country/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
