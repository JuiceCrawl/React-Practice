import constants from '../constants/constants'

var initialState = {
  startups: []
}

export default function(state = initialState, action){ 

  switch (action.type){
    case constants.STARTUPS_RECEIVED:
      //do stuff
      console.log('STARTUPS_RECEIVED:', JSON.stringify(action.startups))
      
      var newState = Object.assign({}, state) //copy state
      newState['startups'] = action.startups //modify state

      return newState //reassign 

    default: 
        return state
  }

}