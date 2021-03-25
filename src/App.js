import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.css';



const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
