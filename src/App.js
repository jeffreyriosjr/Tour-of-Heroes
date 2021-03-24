import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className='container'>
    <div className='row text-center'>
      <div className='col'>
        <h1>Welcome to the Tour of Heroes!</h1>
      </div>
    </div>

    <nav>
      <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/heroes'>Heroes</Link>
        </li>
        <li>
          <Link to='/hero'>Hero</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route />
      <Route />
    </Switch>
    
    </div>
    </Router>
  );
}

export default App;
