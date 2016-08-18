import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Startups from './components/containers/Startups'
import Featured from './components/containers/Featured'
import store from './stores/store'
import { Provider } from 'react-redux'


// class App extends Component {
//   render(){
//     return (
//       <div>
//         This is the React App
//         <Startups />
//       </div>
//     )
//   }
// }

const app = (
  <Provider store={ store.configureStore() }>
    
    <div>
        This is the React App
        <Startups />
        <Featured />
    </div>

  </Provider>

)

ReactDOM.render(app, document.getElementById('app'))