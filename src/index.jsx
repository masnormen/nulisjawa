import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import './styles/base.css';
import './styles/style.css';

import { Home } from './views';

const App = () => (
  <Router>
    <Switch>
      <ScrollToTop>
        <Route exact path="/" component={Home} />
      </ScrollToTop>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
