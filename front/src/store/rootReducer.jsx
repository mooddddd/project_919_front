import { combineReducers } from 'redux'
import { userReducer } from './user'
import { recruitReducer } from './recruit'
import { searchReducer } from './search/'

export const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  recruit: recruitReducer,
})

export default rootReducer
