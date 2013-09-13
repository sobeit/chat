/**
 * RoomController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  talkingspot: function(req, res) {
    res.view({id:req.param('id')});
  },

  checkin: function(req, res) {
    User.subscribe(req.socket);
    Chat.subscribe(req.socket);
    User.publishCreate({id:req.param('userID')});
  }

};
