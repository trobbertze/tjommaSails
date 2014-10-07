/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  tournament: function(req, res) {
    return res.send('tournament');
  },

  addTournament: function(req, res) {
    User.addTournament(
      req.params.id,
      req.body,
      function(err) {
        return res.send('add tournament');
      }
    );
  },

  deleteTournament: function(req, res) {
    User.deleteTournament(
      req.params.id,
      req.body,
      function(err) {
        return res.send('delete tournament');
      }
    );
  },

  match: function(req, res) {
    return res.send('match');
  }
};
