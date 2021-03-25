import { Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard';
import HeroesPage from '../pages/Heroes';
import HeroPage from '../pages/Hero';
import Navbar from '../components/Navbar';
const AppRouter = () => {
    return (
        <div>
        <Navbar />

        <Switch>
      <Route path='/' exact component={DashboardPage} />
      <Route path='/heroes' component={HeroesPage}/>
      <Route path='/hero' component={HeroPage} />
    </Switch> 
    </div>
    );
};

export default AppRouter;