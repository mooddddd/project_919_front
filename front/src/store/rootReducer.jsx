import { combineReducers } from 'redux'
import { userReducer } from './user'
import { searchReducer } from './search/'

export const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
})

export default rootReducer
