import { combineReducers } from 'redux'
import { objectItem } from './data/manageObject/objectData'
import { notifications } from './components/notifications/Notifications'


const appReducers = combineReducers({
  notifications,
  objectItem,
})

export default appReducers
