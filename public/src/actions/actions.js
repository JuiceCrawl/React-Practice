import constants from '../constants/constants'

export default {

  startupsReceived: (startups) => { //data from API, payload
    return {
      type: constants.STARTUPS_RECEIVED, //mandatory key
      startups: startups // can have any others like startups
    } //action paylod will be sent to reducer

  }

}