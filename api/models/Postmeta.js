/**
 * Postmeta
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	post_id: {
  		type: 'int',
  		required: true
  	},
  	key: 'string',
  	value: 'text'
    
  }

};
