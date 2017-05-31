import React from 'react'
import { render } from 'react-dom'
import configureStore from '../stores/store'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Streams from '../containers/streamsContainer'
import Tasks from '../containers/tasksContainer'



let initialState = {
  streams:{
    header:"Task Mangement",
    data:[{
      title:"Publishing",
      description:"Its a module which helps use to post in multiple channel at once",
      members:12,
      id:"t1"
    },{
      title:"Paid",
      description:"Its a module which helps use to post in multiple channel at once",
      members:12,
      id:"t2"
    },
    {
      title:"Core",
      description:"Its a module which helps use to post in multiple channel at once",
      members:12,
      id:"t3"
    },
    {
      title:"Engagement",
      description:"Its a module which helps use to post in multiple channel at once",
      members:12,
      id:"t4"
    }]
  },
  tasks:{
    t1:{
      header:"Publishing",
      data:[{
        name:'Abhinav Singi',
        id:'t1u1',
        
      },{
        name:'Surbhi Jain',
        id:'t2u2',
        
      },{
        name:'Partibha Joshi',
        id:'t3u3',
      }]
    },
    t2:{
      header:"Paid",
      data:[]
    },
    t3:{
       header:"Core",
      data:[]
    },
    t4:{
      header:"Engagement",
      data:[]
    }
  },
  users:{
    t1u1:{
      data:[{
        title:'Publishing View',
        status:"done",
        description:"Include all channels preview",
        id:'t1u1a1'
      }]
    },
    t2u2:{
      data:[{
        title:'Icon Creation',
        status:"done",
        description:"Include all channels preview",
        id:'t2u2a2'
      }]
    },
    t3u3:{
      data:[{
        title:'Icon Creation',
        status:"done",
        description:"Include all channels preview",
        id:'t3u3a3'
      }]
    }
  }
}

let store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

const App=({...props})=>(
    <div style={{height:'100%'}}>
      {props.children}
    </div>
  )

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={Streams}/>
        <Route path="task/:taskId" component={Tasks} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app') 
)




