import { combineReducers } from 'redux'
import { userReducer } from './user'
import { recruitReducer } from './recruit'

export const rootReducer = combineReducers({
  user: userReducer,
  recruit: recruitReducer,
})

export default rootReducer
