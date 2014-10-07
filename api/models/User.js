/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    tournaments: {
      collection: 'tournament'
    }
  },

  addTournament: function(id, opts, cb) {
    console.log('Add tournament ' + opts.tournament);
  },

  deleteTournament: function(id, cb) {
    console.log('Delete tournament ' + opts.tournament);
  }
};
