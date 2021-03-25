import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import HeroesPage from './pages/Heroes';
import HeroPage from './pages/Hero';


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

    { <Switch>
      <Route path='/' exact component={DashboardPage} />
      <Route path='/heroes' component={HeroesPage}/>
      <Route path='/hero' component={HeroPage} />
    </Switch> }
    
    </div>
    </Router>
  );
};

export default App;
