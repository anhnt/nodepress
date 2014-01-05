/**
 * Term_taxonomy
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	term_id: {
  		type: 'int',
  		required: true
  	},
  	taxonomy: 'string',
  	description: 'text',
  	parent: 'int'

  }

};
