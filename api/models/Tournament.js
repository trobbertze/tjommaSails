/**
* Tournament.js
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
    matches: {
      collection: 'match',
      via: 'tournament'
    },
    users: {
      collection: 'user',
      via: 'tournaments'
    }
  },
  
  GetUsers: function(id, cb) {
    Tournament.findOne({id: id})
      .populate('users')
      .exec(function(err, tournament) {
        if (err) return cb(err);
        if (!tournament) return cb('Tournament not found');
        cb(undefined, tournament.users);
    });
  },

  GetMatches: function(id, cb) {
    Tournament.findOne({id: id})
      .populate('matches')
      .exec(function(err, tournament) {
        if (err) return cb(err);
        if (!tournament) return cb('Tournament not found');
        cb(undefined, tournament.matches);
    });
  },

};
