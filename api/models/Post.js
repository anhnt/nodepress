/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    title:{
    	type: 'string',
    	required: true
    },
    author_id: {
    	type: 'int',
    	required: true
    },
    content: {
    	type: 'text',
    	required: true
    },
    status: {
    	type: 'string',
    	required: true,
    }
  }

};
