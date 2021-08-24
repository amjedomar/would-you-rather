import {applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import logger from './logger';

const middlewares = applyMiddleware(
  thunk,
  logger
);

export default middlewares;
