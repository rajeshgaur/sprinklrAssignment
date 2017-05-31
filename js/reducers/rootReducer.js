import { combineReducers } from 'redux'
import streamsReducer from './streamsReducer'
import tasksReducer from './tasksReducer'
import usersReducer from './usersReducer'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux' 

const rootReducer = combineReducers({
  streams: streamsReducer,
  tasks:tasksReducer,
  users:usersReducer,
  routing: routerReducer,
})

export default rootReducer
