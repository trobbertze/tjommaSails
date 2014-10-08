/**
* Match.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    tournament: {
      model: 'Tournament',
      required: true
    },
    user1: {
      model: 'User',
      required: true
    },
    user2: {
      model: 'User',
      required: true
    },
    result: {
      model: 'User',
      required: true
    }
  },

  afterCreate: function(record, cb) {
    Tournament.findOne({id: record.tournament}).exec(function(err, tournament) {
      if (err) return cb(err);
      if (!tournament) return cb('Tournament not found');
      User.find({
        or:[
          {
            id: record.user1
          },
          {
            id: record.user2
          }
        ]}).exec(function(err, users) {
          if (err) return cb(err);
          _.each(users, function(user) {
            user.tournaments.add(tournament);
            user.matches.add(record);
            user.save();
          });
          cb();
      });
    });
  }

};
