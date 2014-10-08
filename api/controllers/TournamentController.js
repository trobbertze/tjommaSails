/**
 * TournamentController
 *
 * @description :: Server-side logic for managing tournaments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  tournament: function(req, res) {
    var query;
    if (req.params.tournamentId) {
      query = {id: req.params.tournamentId};
    }
    Tournament.find(query)
    .exec(function(err, result) {
      res.send(result);
    });
  },

  user: function(req, res) {
    Tournament.GetUsers(
      req.params.tournamentId,
      function(err, users) {
        return res.send(users);
      }
    );
  },

  match: function(req, res) {
    Tournament.GetMatches(
      req.params.tournamentId,
      function(err, matches) {
        return res.send(matches);
      }
    );
  }
};
