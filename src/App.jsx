import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Home';
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        {/* other routes */}
      </Switch>
    </Router>
  );
}

export default App;
