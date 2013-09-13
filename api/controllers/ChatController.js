/**
 * ChatController
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
  say: function(req, res) {
    Chat.publishCreate({chatterId:req.param('chatterId'),message:req.param('message')});
  }

};
