// combine individual reducers into a rootReducer to create a single object

import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';

export default combineReducers ({
  items,
  itemsHasErrored,
  itemsIsLoading
});
