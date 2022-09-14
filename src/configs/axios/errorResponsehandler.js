function errorResponsehandler(error) {
  if (error) {
    let message
    if (error.message) {
      if (error.response.status === 500) message = 'Something went wrong'
      else message = error.response.data.error || error.response.status

      console.log(message)

      return Promise.reject(error)
    }
  }
}

export default errorResponsehandler
