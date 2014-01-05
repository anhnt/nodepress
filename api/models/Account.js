/**
 * Account
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	acct_id: {
			type: 'int',
			primaryKey: true
		},
		loginName: {
			type: 'string',
			required: true
		},
		email: {
			type:'string',
			required: true
		},
		phone: 'string',
		fullName: {
			type: 'string'
		},
		password: {
			type: 'string',
			required: true
		}
  }

};
