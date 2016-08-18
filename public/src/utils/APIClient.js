import superagent from 'superagent'

export default {

  get: (endpoint, params, callback) =>{
    superagent
    .get(endpoint)
    .query(params)
    .set('Accept', 'text/json')
    .end((err, response) => {
      
      if(err){
        callback(err,null)
        return
      }

      const confirmation = response.body.confirmation

      if(confirmation != 'success'){
        callback({message: response.body.message}, null)
        return
      }

      callback(null, response.body)
    })
  }

}