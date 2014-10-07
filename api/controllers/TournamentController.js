/**
 * TournamentController
 *
 * @description :: Server-side logic for managing tournaments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  find: function(req, res) {
    sails.models.tournament.find()
      .exec(function(err, tournaments) {
        return res.send(tournaments);
      });
  },

  user: function(req, res) {
    sails.models.match.find({tournament: req.params.id}).exec(function(err, matches) {
      var userIds = {};
      _.each(matches, function(match) {
        userIds[match.user1] = true;
        userIds[match.user2] = true;
      });
      var query = [];
      _.each(userIds, function(value, key) {
        query.push({id: key});
      });
      sails.models.user.find({
        where: {or: query}
      }).exec(function(err, users) {
        return res.send(users);
      });
    });
  },

  match:  function(req, res) {
    sails.models.match
      .find({tournament: req.params.id})
      .populate('user1')
      .populate('user2')
      .populate('result')
      .exec(function(err, matches) {
        return res.send(matches);
      });
  }
};
