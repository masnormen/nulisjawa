import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import './styles/base.css';
import './styles/style.css';

import { Home } from './views';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ScrollToTop><Home/></ScrollToTop>} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
