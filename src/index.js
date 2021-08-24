import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import middlewares from './middlewares';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore(rootReducer, middlewares);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
