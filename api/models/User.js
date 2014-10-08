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
      collection: 'tournament',
      via: 'users'
    },
    matches: {
      collection: 'match'
    }
  },

  GetTournaments: function(id, cb) {
    User.findOne({id: id})
      .populate('tournaments')
      .exec(function(err, user) {
        if (err) return cb(err);
        if (!user) return cb('User not found');
        cb(undefined, user.tournaments);
    });
  },

  addTournament: function(id, opts, cb) {
    Tournament.findOne({id: opts.tournamentId}).exec(function(err, tournament) {
      if (err) return cb(err);
      if (!tournament) return cb('Tournament not found');

      User.findOne({id: id}).exec(function(err, user) {
        if (err) return cb(err);
        if (!user) return cb('User not found');
        user.tournaments.add(tournament);
        user.save(cb);
      });
    });

  },

  deleteTournament: function(id, opts, cb) {
    Tournament.findOne({id: opts.tournamentId}).exec(function(err, tournament) {
      if (err) return cb(err);
      if (!tournament) return cb('Tournament not found');

      User.findOne({id: id}).exec(function(err, user) {
        if (err) return cb(err);
        if (!user) return cb('User not found');
        user.tournaments.remove(tournament);
        user.save(cb);
      });
    });
  },

  GetMatches: function(id, cb) {
    User.findOne({id: id})
      .populate('matches')
      .exec(function(err, user) {
        if (err) return cb(err);
        if (!user) return cb('User not found');
        cb(undefined, user.matches);
    });
  },
};
