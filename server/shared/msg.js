ERRORS = {
  /**
   * @apiDefine error400missingdata
   * @apiError MissingData <code>400</code> - Missing required field in request body.
   */
  MissingRequiredData: {    
    code: 400,
    name: 'MISSING_DATA',
    title: 'Missing Data',
    msg: 'Field is required as part of the request body.'
  },
  InternalServerError: {
    code: 500,
    name: 'INTERNAL_SERVER_ERROR',
    title: 'Internal Server Error',
    msg: 'Internal Server Error occured.'
  },
  InternalServerErrorUser: {
    code: 500,
    name: 'INTERNAL_SERVER_ERROR',
    title: 'User Not Exist',
    msg: 'User does not exist.'
  }    
}
module.exports = ERRORS;