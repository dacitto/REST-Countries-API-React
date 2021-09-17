import './index.scss';
import './main.scss';
import Header from './Header';
import Search from './Search';
import Home from './Home';
import Country from './Country';
import {useState} from "react"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  const [search,setSearch]=useState('');
  const [select,setSelect]=useState('');
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <Search setSearch={setSearch}  setSelect={setSelect}/>
          <Home filter={search} region={select}/>
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
