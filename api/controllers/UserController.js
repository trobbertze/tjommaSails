/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  user: function(req, res) {
    var query;
    if (req.params.userId) {
      query = {id: req.params.userId};
    }
    User.find(query)
    .exec(function(err, result) {
      res.send(result);
    });
  },

  tournament: function(req, res) {
    User.GetTournaments(
      req.params.userId,
      function(err, tournaments) {
        return res.send(tournaments);
      }
    );
  },

  addTournament: function(req, res) {
    User.addTournament(
      req.params.userId,
      req.body,
      function(err, user) {
        return res.send(user);
      }
    );
  },

  deleteTournament: function(req, res) {
    User.deleteTournament(
      req.params.userId,
      {
        tournamentId: req.params.tournamentId
      },
      function(err, user) {
        return res.send(user);
      }
    );
  },

  match: function(req, res) {
    User.GetMatches(
      req.params.userId,
      function(err, matches) {
        return res.send(matches);
      }
    );
  }
};
