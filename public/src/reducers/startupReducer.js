import constants from '../constants/constants'

var initialState = {
  startups: []
}

export default function(state = initialState, action){ 

  switch (action.type){
    case constants.STARTUPS_RECEIVED:
      //do stuff
      console.log('STARTUPS_RECEIVED:', JSON.stringify(action.startups))

    default: 
        return state
  }

}